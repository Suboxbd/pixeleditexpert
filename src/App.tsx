/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Camera, 
  ImageMinus, 
  Trophy, 
  Palette, 
  Globe, 
  Video, 
  CheckCircle2, 
  Zap, 
  TrendingUp, 
  Clock,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { motion } from 'motion/react';

const WHATSAPP_LINK = "https://wa.me/your-link-here";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center py-10 px-4 md:px-0">
      {/* Email Container */}
      <div className="w-full max-w-2xl bg-[#0A0A0A] border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
        
        {/* 1️⃣ Hero Section */}
        <section className="relative pt-16 pb-20 px-8 text-center overflow-hidden">
          {/* Background Accents */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500 rounded-full blur-[100px]" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Zap size={14} />
              Exclusive Growth Challenge
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Get 15 Days of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                FREE Branding & Marketing
              </span>
            </h1>
            
            <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto leading-relaxed">
              Join Our 30 Days Sports Clubs Online Growth Challenge and transform your digital presence.
            </p>

            <a 
              href={WHATSAPP_LINK}
              className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-2xl transition-all hover:scale-105 active:scale-95 neon-glow-green"
            >
              <MessageCircle size={20} />
              Join WhatsApp Group Now
            </a>
          </motion.div>
        </section>

        {/* 2️⃣ Services Highlight Section */}
        <section className="py-16 px-8 bg-white/5">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-2">Expert Creative Services</h2>
            <div className="h-1 w-12 bg-blue-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: Camera, label: "Photo Retouching" },
              { icon: ImageMinus, label: "Background Removal" },
              { icon: Trophy, label: "Sports Photo Editing" },
              { icon: Palette, label: "Branding & Logo" },
              { icon: Globe, label: "Website Design" },
              { icon: Video, label: "Short-Form Video" },
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center group transition-colors hover:bg-white/10"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <service.icon size={24} />
                </div>
                <span className="text-sm font-medium text-gray-300">{service.label}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3️⃣ Benefits Section */}
        <section className="py-16 px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold leading-tight">
                Why Join the <br />
                <span className="text-blue-400">Growth Challenge?</span>
              </h2>
              <p className="text-gray-400">
                We don't just edit photos; we build digital legacies for sports clubs and businesses.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { title: "Professional Support", desc: "Direct access to expert designers." },
                { title: "Fast Delivery", desc: "Quick turnaround for all your assets." },
                { title: "Real Growth Strategy", desc: "Data-driven marketing approach." },
                { title: "No Cost for 15 Days", desc: "Zero risk, 100% value upfront." },
              ].map((benefit, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                  <div className="mt-1">
                    <CheckCircle2 size={20} className="text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{benefit.title}</h4>
                    <p className="text-sm text-gray-500">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4️⃣ Trust Section */}
        <section className="py-16 px-8 bg-gradient-to-b from-transparent to-blue-900/10">
          <div className="glass-card p-8 rounded-3xl text-center">
            <div className="text-5xl font-black text-blue-500 mb-4">5+</div>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-widest">Years of Experience</h3>
            <p className="text-gray-400 max-w-lg mx-auto leading-relaxed">
              PixelEdit Expert Studio has been at the forefront of digital transformation, 
              helping brands grow visually and digitally with cutting-edge design and 
              strategic marketing solutions.
            </p>
          </div>
        </section>

        {/* 5️⃣ Offer Section */}
        <section className="py-16 px-8 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-400">
              <Clock size={32} />
            </div>
            <h2 className="text-2xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-400 mb-8">
              Get full branding and marketing support for <span className="text-white font-bold">15 days at zero cost</span>. 
              After the challenge, you can opt for our monthly paid support only if you're 
              completely satisfied with the results. <span className="italic">No pressure, no hidden fees.</span>
            </p>
          </div>
        </section>

        {/* 6️⃣ Final Strong CTA Section */}
        <section className="py-20 px-8 bg-blue-600 text-center">
          <motion.div
            whileInView={{ scale: [0.9, 1] }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-extrabold text-white mb-8">
              Ready to Grow Your Brand?
            </h2>
            <a 
              href={WHATSAPP_LINK}
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-600 font-black text-lg rounded-2xl transition-all hover:bg-gray-100 hover:scale-105 active:scale-95 shadow-xl"
            >
              <MessageCircle size={24} />
              Join the WhatsApp Growth Program
            </a>
            <p className="mt-6 text-blue-100 text-sm font-medium opacity-80">
              Limited spots available for this cohort.
            </p>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <div className="text-xl font-black tracking-tighter mb-2">
                PIXELEDIT<span className="text-blue-500">EXPERT</span>
              </div>
              <p className="text-xs text-gray-500">© 2024 PixelEdit Expert Studio. All rights reserved.</p>
            </div>
            
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Mail].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>

            <div className="flex flex-col items-center md:items-end gap-2">
              <a href="mailto:hello@pixeledit.studio" className="text-sm text-gray-400 hover:text-white flex items-center gap-2">
                <Mail size={14} /> hello@pixeledit.studio
              </a>
              <a href="https://pixeledit.studio" className="text-sm text-gray-400 hover:text-white flex items-center gap-2">
                <Globe size={14} /> www.pixeledit.studio
              </a>
            </div>
          </div>
        </footer>
      </div>

      {/* Preview Helper */}
      <div className="mt-8 text-gray-600 text-xs text-center max-w-xs">
        This is a web-based preview of your promotional email template. 
        Optimized for high-conversion and mobile responsiveness.
      </div>
    </div>
  );
}
