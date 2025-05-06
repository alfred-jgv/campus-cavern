import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart } from "lucide-react";
import HeroStats from "./HeroStats";
import ProductShowcase from "./ProductShowcase";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
    <section className="relative w-full min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 bg-[#F7F4F3] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <path
            d="M0,320 C240,280 480,360 720,320 C960,280 1200,360 1440,320 L1440,800 L0,800 Z"
            fill="#A3C9BC"
            fillOpacity="0.15"
          />
          <path
            d="M0,400 C240,360 480,440 720,400 C960,360 1200,440 1440,400 L1440,800 L0,800 Z"
            fill="#2D4A43"
            fillOpacity="0.05"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 h-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 h-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:w-1/2 text-center lg:text-left flex flex-col justify-center"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm mb-6 w-max mx-auto lg:mx-0">
              <span className="h-3 w-3 rounded-full bg-[#2D4A43] animate-pulse"></span>
              <span className="text-sm font-semibold uppercase tracking-wider text-[#2D4A43]">
                Student & Alumni Exclusive
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#363F46] leading-tight mb-6"
            >
              Discover <span className="text-[#2D4A43] relative inline-block">
                Authentic
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
                  <motion.path 
                    d="M0,4 C50,0 100,8 150,4 C175,2 200,4 200,4" 
                    stroke="#A3C9BC" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                  />
                </svg>
              </span> Student Organization Merch
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-[#363F46] mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Your premier hub for buying and selling exclusive merchandise from verified student organizations across campuses.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(45, 74, 67, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#2D4A43] to-[#3D5A53] text-white rounded-xl font-semibold transition-all overflow-hidden relative group"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#3D5A53] to-[#2D4A43] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <ShoppingCart className="relative z-10" size={20} />
                <span className="relative z-10">Shop Now</span>
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(163, 201, 188, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#363F46] border-2 border-[#A3C9BC] rounded-xl font-semibold transition-all overflow-hidden relative group"
              >
                <span className="absolute inset-0 w-full h-full bg-[#A3C9BC] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                <span className="relative z-10">Learn More</span>
                <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </motion.button>
            </motion.div>

            <HeroStats />
          </motion.div>

          <ProductShowcase />
        </div>
      </div>
    </section>
  );
};

export default Hero;