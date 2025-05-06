import { motion } from 'framer-motion';

// Dummy logos - replace these with actual logos
const dummyLogos = [
  '/aws.jpg',
  '/acss.jpg',
  '/sites.jpg',
  '/jbecp.jpg'
];

const organizations = [
  { name: 'AWS Cloud Club University of Cabuyao', logo: dummyLogos[0] },
  { name: 'Association of Computer Science Students', logo: dummyLogos[1] },
  { name: 'Society of Information Technology Students', logo: dummyLogos[2] },
  { name: 'Junior Blockchain Education Consortium', logo: dummyLogos[3] }
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
      delayChildren: 0.2
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

export default function Organizations() {
  return (
    <div className="relative bg-[#F7F4F3] flex flex-col items-center justify-center px-6 pt-16 pb-20 overflow-hidden">
      {/* Wave background positioned at the very top */}
      <div className="absolute top-0 left-0 w-full h-40 overflow-hidden z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,120 C240,80 480,120 720,100 C960,80 1200,120 1440,80 L1440,0 L0,0 Z"
            fill="#A3C9BC"
            fillOpacity="0.2"
          />
          <path
            d="M0,80 C240,40 480,80 720,60 C960,40 1200,80 1440,40 L1440,0 L0,0 Z"
            fill="#A3C9BC"
            fillOpacity="0.1"
          />
        </svg>
      </div>

      {/* Subtle background blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute left-1/4 -top-20 w-64 h-64 rounded-full bg-[#A3C9BC] opacity-5 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/3 w-96 h-96 rounded-full bg-[#A3C9BC] opacity-10 blur-3xl"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl mx-auto w-full relative z-10"
      >
        {/* Title section positioned right after the wave */}
        <motion.div variants={itemVariants} className="mb-12 text-center">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-[#2D4A43] mb-3"
          >
            Our <span className="relative inline-block text-[#3a7367]">University Clubs
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
                <motion.path 
                  d="M0,4 C50,0 100,8 150,4 C175,2 200,4 200,4" 
                  stroke="#A3C9BC" 
                  strokeWidth="4" 
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                />
              </svg>
            </span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-[#2D4A43]/90 max-w-3xl mx-auto"
          >
            Verified Student-led communities fostering innovation, collaboration, and leadership development.
          </motion.p>
        </motion.div>

        {/* Organization cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {organizations.map((org, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.1 }}
              variants={cardVariants}
              custom={idx}
            >
              <div className="relative h-40 bg-gradient-to-br from-[#A3C9BC]/90 to-[#7AB8A8] flex items-center justify-center p-6">
                <div className="absolute inset-0 bg-noise opacity-10"></div>
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <div className="bg-white/90 p-3 rounded-xl shadow-sm backdrop-blur-sm">
                    <div className="w-24 h-24 flex items-center justify-center">
                      {org.logo ? (
                        <img 
                          src={org.logo} 
                          alt={`${org.name} logo`} 
                          className="max-h-full max-w-full object-contain"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center text-xs text-gray-400">
                          Club Logo
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-[#2D4A43] mb-3 leading-tight">
                  {org.name}
                </h3>
                <button className="px-4 py-2 text-sm font-medium text-[#2D4A43] rounded-lg border border-[#A3C9BC] hover:bg-[#A3C9BC] hover:text-white transition-all duration-300 hover:shadow-md">
                  Explore Club Merch
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={itemVariants}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 5px 20px rgba(122, 184, 168, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-gradient-to-r from-[#A3C9BC] to-[#7AB8A8] text-white rounded-lg font-medium transition-all duration-300 hover:from-[#7AB8A8] hover:to-[#A3C9BC] flex items-center gap-2 mx-auto"
          >
            <span>View All Organizations</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
            </svg>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}