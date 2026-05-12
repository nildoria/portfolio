import axios from 'axios';
import { NextResponse } from 'next/server';

async function sendTelegramMessage(token, chat_id, message) {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  try {
    const res = await axios.post(url, {
      text: message,
      chat_id,
      parse_mode: 'HTML',
    });
    return res.data.ok;
  } catch (error) {
    console.error('Telegram error:', error.response?.data || error.message);
    return false;
  }
}

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'All fields are required.' },
        { status: 400 }
      );
    }

    const token    = process.env.TELEGRAM_BOT_TOKEN;
    const chat_id  = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chat_id) {
      return NextResponse.json(
        { success: false, message: 'Telegram is not configured.' },
        { status: 500 }
      );
    }

    const text = [
      `📬 <b>New Portfolio Message</b>`,
      ``,
      `👤 <b>Name:</b> ${name}`,
      `📧 <b>Email:</b> ${email}`,
      ``,
      `💬 <b>Message:</b>`,
      message,
    ].join('\n');

    const ok = await sendTelegramMessage(token, chat_id, text);

    if (ok) {
      return NextResponse.json(
        { success: true, message: 'Message sent successfully!' },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'Failed to send message via Telegram.' },
      { status: 500 }
    );
  } catch (error) {
    console.error('API Error:', error.message);
    return NextResponse.json(
      { success: false, message: 'Server error occurred.' },
      { status: 500 }
    );
  }
}