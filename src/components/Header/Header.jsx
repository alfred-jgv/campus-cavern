import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  User, 
  ChevronDown, 
  Search,
  Bell,
  Heart
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOrgSubmenuOpen, setIsOrgSubmenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Shop', icon: <ShoppingBag size={18} /> },
    { name: 'For Students', icon: <User size={18} /> },
    { 
      name: 'For Organizations', 
      icon: <User size={18} />,
      submenu: [
        { name: 'Get Verified', icon: <User size={16} /> },
        { name: 'Merch Portal', icon: <User size={16} /> }
      ]
    }
  ];

  const mobileMenuVariants = {
    open: { 
      opacity: 1,
      height: 'auto',
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    closed: { 
      opacity: 0,
      height: 0,
      transition: { 
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
  };
  
  const menuItemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-white/90 backdrop-blur-md py-4'
      }`}
    >
      <div className="w-full px-6 lg:px-12">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-2 z-10"
          >
            <div className="relative">
              <img 
                src="/cc-logo.png"  // Replace with your actual logo path
                alt="Campus Cavern Logo"
                className="h-8 w-auto"  // Adjust height as needed
              />
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: "reverse", 
                  duration: 2,
                  repeatDelay: 5
                }}
                className="absolute -top-1 -right-1 w-3 h-3 bg-[#A3C9BC] rounded-full"
              />
            </div>
            <span className="text-2xl font-bold text-[#2D4A43]">
              Campus Cavern
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
            <motion.div 
              animate={{ width: searchFocused ? 320 : 240 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`relative flex items-center ${
                searchFocused 
                  ? 'ring-2 ring-[#A3C9BC] shadow-md' 
                  : 'ring-1 ring-[#F7F4F3]'
              } rounded-full px-4 py-2 bg-white/80`}
            >
              <Search size={16} className="text-[#363F46] mr-2" />
              <input 
                type="text" 
                placeholder="Search for merch..." 
                className="bg-transparent text-sm border-none outline-none w-full placeholder-[#363F46]/70"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
              {searchFocused && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-[#363F46]/50"
                >
                  ⌘K
                </motion.div>
              )}
            </motion.div>
          </nav>
            
          {/* Right side navigation */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex gap-6">
              {navItems.map((item) => (
                <motion.li 
                  key={item.name}
                  whileHover={{ y: -2 }}
                  className="relative group"
                >
                  <div className="flex items-center gap-1 cursor-pointer px-2 py-3">
                    <span className="text-[#363F46] group-hover:text-[#2D4A43] transition-colors">
                      {item.icon}
                    </span>
                    <a 
                      href={`#${item.name.toLowerCase().replace(' ', '-')}`} 
                      className="font-medium text-[#363F46] group-hover:text-[#2D4A43] transition-colors text-sm"
                    >
                      {item.name}
                    </a>
                    {item.submenu && (
                      <ChevronDown 
                        size={16} 
                        className="text-[#363F46] group-hover:text-[#2D4A43] transition-colors" 
                      />
                    )}
                  </div>

                  {item.submenu && (
                    <div className="absolute left-0 mt-1 w-56 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible scale-95 group-hover:scale-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 transform origin-top-left z-10 border border-[#F7F4F3]">
                      {item.submenu.map((subItem) => (
                        <motion.a 
                          key={subItem.name}
                          whileHover={{ x: 5, backgroundColor: "#F7F4F3" }}
                          href={`#${subItem.name.toLowerCase().replace(' ', '-')}`}
                          className="flex items-center gap-2 px-4 py-3 text-sm text-[#363F46] hover:text-[#2D4A43] transition-colors"
                        >
                          <span className="text-[#2D4A43]">{subItem.icon}</span>
                          {subItem.name}
                        </motion.a>
                      ))}
                    </div>
                  )}
                </motion.li>
              ))}
            </ul>
            
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-2 rounded-full hover:bg-[#F7F4F3] transition-colors"
              >
                <Bell size={18} className="text-[#363F46]" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#2D4A43] rounded-full" />
              </motion.button>
              
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-2 rounded-full hover:bg-[#F7F4F3] transition-colors"
              >
                <Heart size={18} className="text-[#363F46]" />
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 4px 12px rgba(45, 74, 67, 0.2)"
                }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-2 bg-gradient-to-r from-[#2D4A43] to-[#3D5A53] text-white rounded-lg font-semibold flex items-center gap-2 shadow-sm text-sm"
              >
                <User size={16} />
                <span>Sign In</span>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="md:hidden relative z-20 p-2 rounded-full hover:bg-[#F7F4F3] transition-colors focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isMenuOpen ? { rotate: 45, y: 2 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="w-5 h-0.5 bg-[#363F46] mb-1"
            />
            <motion.div
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="w-5 h-0.5 bg-[#363F46] mb-1"
            />
            <motion.div
              animate={isMenuOpen ? { rotate: -45, y: -2 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="w-5 h-0.5 bg-[#363F46]"
            />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.nav
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        variants={mobileMenuVariants}
        className="md:hidden fixed top-[72px] left-0 w-full bg-white overflow-hidden shadow-lg z-10"
      >
        <div className="px-6 py-4 overflow-hidden">
          <motion.div variants={menuItemVariants} className="relative flex items-center mb-6">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#2D4A43]">
              <Search size={18} />
            </div>
            <input 
              type="text" 
              placeholder="Search for merch..." 
              className="w-full bg-[#F7F4F3] border-none rounded-lg py-3 pl-10 pr-4 text-[#363F46] focus:ring-2 focus:ring-[#2D4A43] outline-none"
            />
          </motion.div>
          
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <motion.li 
                key={item.name}
                variants={menuItemVariants}
              >
                <div 
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-[#F7F4F3] transition-colors cursor-pointer"
                  onClick={() => item.submenu && setIsOrgSubmenuOpen(!isOrgSubmenuOpen)}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[#2D4A43] bg-white/80 p-2 rounded-full">
                      {item.icon}
                    </span>
                    <span className="font-medium text-[#363F46]">
                      {item.name}
                    </span>
                  </div>
                  {item.submenu && (
                    <motion.div
                      animate={{ rotate: isOrgSubmenuOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={18} className="text-[#363F46]" />
                    </motion.div>
                  )}
                </div>

                {item.submenu && (
                  <motion.div 
                    variants={{
                      open: { 
                        height: 'auto',
                        opacity: 1,
                        transition: { duration: 0.3 }
                      },
                      closed: { 
                        height: 0,
                        opacity: 0,
                        transition: { duration: 0.3 }
                      }
                    }}
                    initial="closed"
                    animate={isOrgSubmenuOpen ? "open" : "closed"}
                    className="ml-12 overflow-hidden"
                  >
                    <div className="py-2 space-y-1">
                      {item.submenu.map((subItem) => (
                        <motion.a 
                          key={subItem.name}
                          whileHover={{ x: 5 }}
                          href={`#${subItem.name.toLowerCase().replace(' ', '-')}`}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F7F4F3] transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="text-[#2D4A43]">{subItem.icon}</span>
                          <span className="text-sm text-[#363F46]">
                            {subItem.name}
                          </span>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.li>
            ))}
          </ul>
          
          <motion.div variants={menuItemVariants} className="mt-6 flex gap-3">
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-[#2D4A43] text-white rounded-lg font-semibold flex items-center justify-center gap-2 shadow-sm"
            >
              <User size={18} />
              Sign In
            </motion.button>
          </motion.div>
        </div>
      </motion.nav>
      
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/20 z-0 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      
      {scrolled && (
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          style={{ background: 'linear-gradient(90deg, #2D4A43 0%, #A3C9BC 50%, #2D4A43 100%)' }}
          className="absolute bottom-0 left-0 h-1 w-full origin-left"
        />
      )}
    </motion.header>
  );
};

export default Header;