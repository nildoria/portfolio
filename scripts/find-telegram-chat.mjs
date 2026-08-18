// Lists every chat your Telegram bot can currently see, with its chat_id.
//
// Use it to find the id for TELEGRAM_CHAT_ID. Channel ids are negative and
// begin with -100; a positive id is a private chat (a DM), not a channel.
//
//   1. Add the bot to your channel as an ADMIN with "Post messages" allowed.
//      A bot cannot post to a channel it does not administer.
//   2. Post any message in the channel so it enters the bot's update queue.
//   3. node scripts/find-telegram-chat.mjs
//
// Reads TELEGRAM_BOT_TOKEN from .env.local. Nothing is sent; this only reads.

import { readFileSync } from 'node:fs';

function readEnv(key) {
  if (process.env[key]) return process.env[key];
  try {
    for (const line of readFileSync('.env.local', 'utf8').split('\n')) {
      const t = line.trim();
      if (!t || t.startsWith('#')) continue;
      const i = t.indexOf('=');
      if (i > 0 && t.slice(0, i).trim() === key) return t.slice(i + 1).trim();
    }
  } catch {}
  return null;
}

const token = readEnv('TELEGRAM_BOT_TOKEN');
if (!token) {
  console.error('TELEGRAM_BOT_TOKEN not found in the environment or .env.local');
  process.exit(1);
}

const api = (m, q = '') => `https://api.telegram.org/bot${token}/${m}${q}`;

const me = await fetch(api('getMe')).then((r) => r.json());
if (!me.ok) {
  console.error('getMe failed:', me.description);
  process.exit(1);
}
console.log(`Bot: @${me.result.username} (${me.result.first_name})\n`);

const hook = await fetch(api('getWebhookInfo')).then((r) => r.json());
if (hook.ok && hook.result.url) {
  console.error(`A webhook is set (${hook.result.url}), so getUpdates returns nothing.`);
  console.error('Remove it with deleteWebhook, or read the chat id from your webhook logs.');
  process.exit(1);
}

const updates = await fetch(api('getUpdates')).then((r) => r.json());
if (!updates.ok) {
  console.error('getUpdates failed:', updates.description);
  process.exit(1);
}

const seen = new Map();
for (const u of updates.result) {
  for (const key of ['message', 'channel_post', 'edited_channel_post', 'my_chat_member']) {
    const chat = u[key]?.chat;
    if (chat) seen.set(chat.id, chat);
  }
}

if (seen.size === 0) {
  console.log('No chats in the update queue.\n');
  console.log('If you are looking for a channel: add the bot as an admin, post a');
  console.log('message in the channel, then run this again. Telegram only queues');
  console.log('channel posts for bots that administer the channel.');
  process.exit(0);
}

console.log('Chats the bot can see:\n');
for (const [id, chat] of seen) {
  const name = chat.title || [chat.first_name, chat.last_name].filter(Boolean).join(' ');
  const note = chat.type === 'channel' ? '  <-- use this for a channel' : '';
  console.log(`  chat_id: ${id}`);
  console.log(`  type:    ${chat.type}${note}`);
  console.log(`  name:    ${name}${chat.username ? ` (@${chat.username})` : ''}\n`);
}
