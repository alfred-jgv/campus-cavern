import { motion } from 'framer-motion';

const organizations = [
  { name: 'AWS Cloud Club University of Cabuyao', logo: null },
  { name: 'Association of Computer Science Students', logo: null },
  { name: 'Society of Information Technology Students', logo: null },
  { name: 'Junior Blockchain Education Consortium of the Philippines Dangals', logo: null }
];

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.3, duration: 0.8 }
  }
};

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

export default function Organizations() {
  return (
    <div className="relative bg-[#F7F4F3] min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-64 overflow-hidden z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path
            d="M0,200 C240,160 480,240 720,200 C960,160 1200,240 1440,200 L1440,0 L0,0 Z"
            fill="#A3C9BC"
            fillOpacity="0.2"
          />
          <path
            d="M0,160 C240,120 480,200 720,160 C960,120 1200,200 1440,160 L1440,0 L0,0 Z"
            fill="#A3C9BC"
            fillOpacity="0.05"
          />
        </svg>
      </div>

      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-[#A3C9BC] opacity-10 blur-3xl"></div>
        <div className="absolute -right-20 bottom-1/3 w-96 h-96 rounded-full bg-[#A3C9BC] opacity-15 blur-3xl"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto w-full relative z-10 mt-16"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D4A43] mb-6 text-center"
        >
          Our <span className="relative inline-block">University Clubs
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
              <motion.path 
                d="M0,4 C50,0 100,8 150,4 C175,2 200,4 200,4" 
                stroke="#A3C9BC" 
                strokeWidth="4" 
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              />
            </svg>
          </span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-[#2D4A43] mb-12 max-w-3xl mx-auto text-center"
        >
          These student-led communities are dedicated to empowering future leaders through collaboration and innovation.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {organizations.map((org, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              custom={idx}
            >
              <div className="relative h-48 bg-gradient-to-br from-[#A3C9BC] to-[#7AB8A8] flex items-center justify-center">
                <div className="absolute inset-0 bg-noise opacity-10"></div>
                <div className="w-24 h-24 rounded-full bg-white shadow-md flex items-center justify-center relative z-10">
                  <span className="text-2xl font-bold text-[#2D4A43] text-center leading-tight">
                    {org.name.split(' ').map(word => word[0]).join('')}
                  </span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-[#2D4A43] leading-snug">
                  {org.name}
                </h3>
                <button className="mt-4 px-4 py-2 text-sm font-medium text-[#2D4A43] rounded-lg border border-[#A3C9BC] hover:bg-[#A3C9BC] hover:text-white transition-colors duration-300">
                  View Merch
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(163, 201, 188, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#A3C9BC] to-[#7AB8A8] text-white rounded-xl font-semibold transition-all overflow-hidden relative group mx-auto"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#7AB8A8] to-[#A3C9BC] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10">View All Organizations</span>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}