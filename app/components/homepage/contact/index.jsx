// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './contact-form';

function ContactSection() {
  return (
    <div id="contact" className="relative mt-24 w-full text-white">

      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,45,120,0.07) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%)' }} />

      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] my-12 lg:my-24">

        {/* Section heading */}
        <div className="flex flex-col items-center mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#ff2d78]"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#ff2d78]">Get In Touch</span>
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#ff2d78]"></span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
            Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2d78] via-[#8b2cff] to-[#00e5ff]">Work Together</span>
          </h2>
          <p className="text-[#a1a1aa] text-sm lg:text-base max-w-xl text-center">
            Have a project in mind? Whether it&apos;s a WordPress site, WooCommerce store, or a custom web app — I&apos;d love to hear about it.
          </p>
          <div className="mt-6 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-[#ff2d78] to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Contact form */}
          <ContactForm />

          {/* Contact info */}
          <div className="flex flex-col gap-8">

            {/* Info card */}
            <div className="rounded-xl border border-[#1a1a3e] overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #0a0a18 0%, #0e0e1f 100%)' }}>
              {/* Top gradient line */}
              <div className="flex flex-row">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#ff2d78] to-[#8b2cff]"></div>
                <div className="h-[1px] w-full bg-gradient-to-r from-[#8b2cff] to-[#00e5ff]"></div>
              </div>

              <div className="p-6 flex flex-col gap-5">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl border border-[#1a1a3e] bg-[#1e1e3a] flex-shrink-0">
                    <MdAlternateEmail className="text-[#ff2d78]" size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#a1a1aa] font-mono uppercase tracking-wider mb-0.5">Email</p>
                    <p className="text-sm text-white">{personalData.email}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl border border-[#1a1a3e] bg-[#1e1e3a] flex-shrink-0">
                    <IoMdCall className="text-[#8b2cff]" size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#a1a1aa] font-mono uppercase tracking-wider mb-0.5">Phone</p>
                    <p className="text-sm text-white">{personalData.phone}</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl border border-[#1a1a3e] bg-[#1e1e3a] flex-shrink-0">
                    <CiLocationOn className="text-[#00e5ff]" size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#a1a1aa] font-mono uppercase tracking-wider mb-0.5">Location</p>
                    <p className="text-sm text-white">{personalData.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-[#a1a1aa] mb-4">Find me on</p>
              <div className="flex items-center gap-3 flex-wrap">
                {[
                  { href: personalData.github, icon: <IoLogoGithub size={20} />, label: 'GitHub' },
                  { href: personalData.linkedIn, icon: <BiLogoLinkedin size={20} />, label: 'LinkedIn' },
                  { href: personalData.twitter, icon: <FaXTwitter size={18} />, label: 'Twitter' },
                  { href: personalData.facebook, icon: <FaFacebook size={18} />, label: 'Facebook' },
                ].map(({ href, icon, label }) => (
                  <Link key={label} target="_blank" href={href} aria-label={label}
                    className="hero-social-icon flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300">
                    {icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Availability indicator */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-full border border-[#1a1a3e] bg-[#0e0e1f]/60 backdrop-blur-sm w-fit">
              <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse"></span>
              <span className="text-xs text-[#a1a1aa] font-medium">Currently available for freelance &amp; remote work</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;