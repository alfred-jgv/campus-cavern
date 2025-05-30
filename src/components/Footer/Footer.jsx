import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Mail, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import logo from '/cc-logo.png';
import TermsModal from '../modals/TermsModal';
import PrivacyModal from '../modals/PrivacyModal';
import CookiesModal from '../modals/CookiesModal';
import AboutModal from '../modals/AboutModal';
import MissionModal from '../modals/MissionModal';
import CareersModal from '../modals/CareersModal';
import PressModal from '../modals/PressModal';

const Footer = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [email, setEmail] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5
      }
    }
  };

  const openModal = (modalName) => setActiveModal(modalName);
  const closeModal = () => setActiveModal(null);

  return (
    <>
      <footer className="relative bg-[#2D4A43] text-[#F7F4F3] pt-24 pb-16 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-full h-32 overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
              <path
                d="M0,60 C240,20 480,100 720,60 C960,20 1200,100 1440,60 L1440,0 L0,0 Z"
                fill="#F7F4F3"
                fillOpacity="0.1"
              />
            </svg>
          </div>
          <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-[#A3C9BC] opacity-10 blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#5B2333] opacity-10 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16"
          >
            {/* Brand section */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-10 h-10">
                  <img
                    src={logo}
                    alt="Campus Cavern Logo"
                    className="w-10 h-10 object-contain rounded-full"
                  />
                </div>
                <span className="text-2xl font-bold text-[#F7F4F3]">Campus Cavern</span>
              </div>
              <p className="text-[#F7F4F3]/80 mb-6 max-w-md">
                Connecting students with authentic organization merchandise from verified university clubs worldwide.
              </p>

              {/* Social links */}
              <motion.div 
                variants={itemVariants}
                className="flex gap-4 mb-8"
              >
                {[
                  { icon: <Instagram className="h-5 w-5" />, name: 'Instagram' },
                  { icon: <Facebook className="h-5 w-5" />, name: 'Facebook' },
                  { icon: <Twitter className="h-5 w-5" />, name: 'Twitter' },
                  { icon: <Mail className="h-5 w-5" />, name: 'Email' }
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    whileHover={{ y: -3 }}
                    href="#"
                    className="p-2 rounded-full bg-[#F7F4F3]/10 hover:bg-[#A3C9BC]/20 transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Links sections */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-lg font-semibold text-[#A3C9BC]">Explore</h3>
              <ul className="space-y-3">
                {['Featured', 'New Arrivals', 'Trending', 'Collections'].map((item) => (
                  <li key={item}>
                    <motion.a 
                      whileHover={{ x: 5 }}
                      href="#" 
                      className="flex items-center gap-0 text-[#F7F4F3]/80 hover:text-[#A3C9BC] transition-colors"
                    >
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company section with modal triggers */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-lg font-semibold text-[#A3C9BC]">Company</h3>
              <ul className="space-y-3">
                <li>
                  <motion.button 
                    whileHover={{ x: 5 }}
                    onClick={() => openModal('about')}
                    className="flex items-center gap-0 text-[#F7F4F3]/80 hover:text-[#A3C9BC] transition-colors w-full text-left"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    About Us
                  </motion.button>
                </li>
                <li>
                  <motion.button 
                    whileHover={{ x: 5 }}
                    onClick={() => openModal('mission')}
                    className="flex items-center gap-0 text-[#F7F4F3]/80 hover:text-[#A3C9BC] transition-colors w-full text-left"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Our Mission
                  </motion.button>
                </li>
                <li>
                  <motion.button 
                    whileHover={{ x: 5 }}
                    onClick={() => openModal('careers')}
                    className="flex items-center gap-0 text-[#F7F4F3]/80 hover:text-[#A3C9BC] transition-colors w-full text-left"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Careers
                  </motion.button>
                </li>
                <li>
                  <motion.button 
                    whileHover={{ x: 5 }}
                    onClick={() => openModal('press')}
                    className="flex items-center gap-0 text-[#F7F4F3]/80 hover:text-[#A3C9BC] transition-colors w-full text-left"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Press
                  </motion.button>
                </li>
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-lg font-semibold text-[#A3C9BC]">Stay Updated</h3>
              <p className="text-[#F7F4F3]/80 mb-4">
                Get the latest drops and exclusive offers straight to your inbox.
              </p>
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg bg-[#F7F4F3]/10 border border-[#A3C9BC]/30 text-[#F7F4F3] placeholder-[#F7F4F3]/60 focus:outline-none focus:ring-2 focus:ring-[#A3C9BC]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-[#A3C9BC] text-[#2D4A43] text-sm font-medium rounded-md hover:bg-[#7AB8A8] transition-colors"
                  >
                    Join
                  </motion.button>
                </div>
                <p className="text-xs text-[#F7F4F3]/50">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom section */}
          <motion.div 
            variants={itemVariants}
            className="border-t border-[#A3C9BC]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="text-sm text-[#F7F4F3]/60">
              © {new Date().getFullYear()} Campus Cavern. All rights reserved.
            </p>
            <div className="flex gap-6">
              <button 
                onClick={() => openModal('terms')}
                className="text-sm text-[#F7F4F3]/60 hover:text-[#A3C9BC] transition-colors"
              >
                Terms
              </button>
              <button 
                onClick={() => openModal('privacy')}
                className="text-sm text-[#F7F4F3]/60 hover:text-[#A3C9BC] transition-colors"
              >
                Privacy
              </button>
              <button 
                onClick={() => openModal('cookies')}
                className="text-sm text-[#F7F4F3]/60 hover:text-[#A3C9BC] transition-colors"
              >
                Cookies
              </button>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Render all modals */}
      <TermsModal isOpen={activeModal === 'terms'} onClose={closeModal} />
      <PrivacyModal isOpen={activeModal === 'privacy'} onClose={closeModal} />
      <CookiesModal isOpen={activeModal === 'cookies'} onClose={closeModal} />
      <AboutModal isOpen={activeModal === 'about'} onClose={closeModal} />
      <MissionModal isOpen={activeModal === 'mission'} onClose={closeModal} />
      <CareersModal isOpen={activeModal === 'careers'} onClose={closeModal} />
      <PressModal isOpen={activeModal === 'press'} onClose={closeModal} />
    </>
  );
};

export default Footer;