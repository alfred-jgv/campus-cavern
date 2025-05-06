import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
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
        damping: 10
      }
    }
  };

  return (
    <footer className="relative bg-[#2D4A43] text-[#F7F4F3] pt-20 pb-12 overflow-hidden">
      {/* Wave divider at top */}
      <div className="absolute top-0 left-0 w-full h-24 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path
            d="M0,0 C240,40 480,0 720,40 C960,80 1200,0 1440,40 L1440,100 L0,100 Z"
            fill="#F7F4F3"
          />
        </svg>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-[#A3C9BC] opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#2D4A43] opacity-10 blur-3xl"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* About Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-[#A3C9BC]">Campus Cavern</h3>
            <p className="text-[#F7F4F3]/80">
              Your premier platform for authentic student organization merchandise from verified university clubs.
            </p>
            <div className="flex space-x-4 pt-2">
              {['instagram', 'facebook', 'twitter', 'mail'].map((platform) => (
                <a 
                  key={platform}
                  href="#"
                  className="text-[#F7F4F3]/70 hover:text-[#A3C9BC] transition-colors"
                >
                  {platform === 'instagram' && <Instagram className="h-5 w-5" />}
                  {platform === 'facebook' && <Facebook className="h-5 w-5" />}
                  {platform === 'twitter' && <Twitter className="h-5 w-5" />}
                  {platform === 'mail' && <Mail className="h-5 w-5" />}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-[#A3C9BC]">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Shop', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#F7F4F3]/80 hover:text-[#A3C9BC] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Clubs */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-[#A3C9BC]">Featured Clubs</h3>
            <ul className="space-y-3">
              {[
                { name: 'AWSCC-UC', full: 'AWS Cloud Club UC' },
                { name: 'ACSS', full: 'Association of CS Students' },
                { name: 'SITES', full: 'Society of IT Students' },
                { name: 'JBECP', full: 'Junior Blockchain Consortium' }
              ].map((club) => (
                <li key={club.name}>
                  <a href="#" className="text-[#F7F4F3]/80 hover:text-[#A3C9BC] transition-colors">
                    <span className="font-medium">{club.name}</span> - {club.full}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-[#A3C9BC]">Stay Updated</h3>
            <p className="text-[#F7F4F3]/80">
              Subscribe to our newsletter for the latest merch drops and club updates.
            </p>
            <div className="flex mt-4">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l-lg bg-[#F7F4F3]/10 border border-[#A3C9BC]/30 text-[#F7F4F3] focus:outline-none focus:ring-2 focus:ring-[#A3C9BC]"
              />
              <button className="px-4 py-2 bg-[#A3C9BC] text-[#2D4A43] font-medium rounded-r-lg hover:bg-[#7AB8A8] transition-colors">
                Join
              </button>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-[#A3C9BC]/20 pt-8 text-center text-[#F7F4F3]/60">
          <p>© {new Date().getFullYear()} Campus Cavern. All rights reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;