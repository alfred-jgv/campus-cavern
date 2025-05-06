import { motion } from "framer-motion";
import { ShoppingBag, Award, Globe, HeartHandshake } from "lucide-react";
import { useState, useEffect } from "react";

const products = [
  { 
    name: "Campus Hoodie", 
    price: "₱399.99", 
    color: "#A3C9BC", 
    image: "hoodie",
    description: "Cozy and stylish for those chilly campus days"
  },
  { 
    name: "Student Tote", 
    price: "₱249.99", 
    color: "#5B2333", 
    image: "tote",
    description: "Practical and eco-friendly for all your essentials"
  },
  { 
    name: "Org T-Shirt", 
    price: "₱199.99", 
    color: "#363F46", 
    image: "tshirt",
    description: "Show your organization pride with this premium tee"
  }
];

const renderProductIcon = (product) => {
  const styles = {
    hoodie: {
      bg: "linear-gradient(135deg, rgba(163, 201, 188, 0.2) 0%, rgba(163, 201, 188, 0.6) 100%)",
      icon: <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 8.5V20H4V8.5L8 3H16L20 8.5Z" stroke={product.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3C16 4.65685 14.6569 6 13 6H11C9.34315 6 8 4.65685 8 3" stroke={product.color} strokeWidth="2"/>
        <path d="M8 11H16" stroke={product.color} strokeWidth="2" strokeLinecap="round"/>
      </svg>
    },
    tote: {
      bg: "linear-gradient(135deg, rgba(91, 35, 51, 0.2) 0%, rgba(91, 35, 51, 0.6) 100%)",
      icon: <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 10V4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V10" stroke={product.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 10H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V10Z" stroke={product.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 14H16" stroke={product.color} strokeWidth="2" strokeLinecap="round"/>
      </svg>
    },
    tshirt: {
      bg: "linear-gradient(135deg, rgba(54, 63, 70, 0.2) 0%, rgba(54, 63, 70, 0.6) 100%)",
      icon: <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 8L16 4H8L4 8L6 12V20H18V12L20 8Z" stroke={product.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 4V10" stroke={product.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 4C8 4 8 2 12 2C16 2 16 4 16 4" stroke={product.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 rounded-xl" style={{ background: styles[product.image].bg }}></div>
      <motion.div 
        animate={{ 
          y: [0, -5, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="relative z-10"
      >
        {styles[product.image].icon}
      </motion.div>
    </div>
  );
};

const ProductShowcase = () => {
  const [currentProduct, setCurrentProduct] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProduct((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="lg:w-1/2 mt-12 lg:mt-0 relative flex items-center justify-center">
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl w-full max-w-lg h-[650px] backdrop-blur-sm">
        {/* Background Blobs */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <motion.div
            className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full"
            style={{ backgroundColor: products[currentProduct].color }}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
              borderRadius: ["50%", "60% 40% 70% 30%", "40% 60% 30% 70%", "50%"]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
          <motion.div
            className="absolute -left-20 -top-20 w-96 h-96 rounded-full"
            style={{ backgroundColor: "#A3C9BC" }}
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.05, 0.1, 0.05],
              borderRadius: ["50%", "40% 60% 30% 70%", "60% 40% 70% 30%", "50%"]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
        </div>

        <div className="absolute inset-0 bg-white bg-opacity-30 backdrop-blur-sm z-0"></div>

        <div className="relative h-full flex flex-col items-center justify-between p-8 z-10">
          <div className="w-full text-center">
            <motion.div
              key={currentProduct}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <div className="text-2xl font-bold text-[#363F46] mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>Featured Merchandise</div>
              
              <div className="h-64 w-full rounded-2xl flex items-center justify-center relative overflow-hidden mb-6">
                <motion.div
                  animate={{ 
                    y: [0, -5, 0],
                    rotate: [0, 1, 0, -1, 0]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="relative z-10 w-56 h-56 rounded-2xl shadow-xl overflow-hidden"
                  style={{ 
                    background: `linear-gradient(135deg, white 0%, ${products[currentProduct].color}20 100%)`,
                    boxShadow: `0 20px 50px ${products[currentProduct].color}30`
                  }}
                >
                  {renderProductIcon(products[currentProduct])}
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          <div className="w-full bg-white bg-opacity-80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-[#F0F0F0]">
            <motion.div
              key={`info-${currentProduct}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-[#363F46] text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {products[currentProduct].name}
              </h3>
              <p className="text-sm text-[#363F46] mt-3 text-center opacity-80 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                {products[currentProduct].description}
              </p>
              <div className="text-xl text-[#5B2333] font-semibold mt-3 text-center" style={{ fontFamily: "'Inter', sans-serif" }}>
                {products[currentProduct].price}
              </div>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: products[currentProduct].color,
                  boxShadow: `0 10px 20px ${products[currentProduct].color}40`
                }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-6 py-3 bg-[#A3C9BC] text-white rounded-lg font-medium shadow-md transition-all duration-300 flex items-center gap-2 mx-auto"
                style={{ 
                  fontFamily: "'Poppins', sans-serif",
                  minWidth: '160px'
                }}
              >
                <ShoppingBag size={16} />
                Quick View
              </motion.button>
            </motion.div>
            
            <div className="flex justify-center gap-3 mt-6">
              {products.map((_, index) => (
                <motion.button
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${currentProduct === index ? "w-8 bg-[#5B2333]" : "w-2 bg-[#E0E0E0]"}`}
                  onClick={() => setCurrentProduct(index)}
                  whileHover={{ scale: 1.3 }}
                />
              ))}
            </div>
          </div>
        </div>
        
        <motion.div
          animate={{ 
            rotate: [0, 3, 0, -3, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity
          }}
          className="absolute top-6 right-5 bg-gradient-to-r from-[#5B2333] to-[#813E4F] text-white text-xs font-bold uppercase tracking-wider py-2 px-4 rounded-full shadow-lg z-20"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          New
        </motion.div>
      </div>
      
      <div className="absolute -bottom-7 left-0 right-0 flex justify-center gap-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 border border-[#A3C9BC]"
        >
          <Award size={14} className="text-[#5B2333]" />
          <span className="text-xs font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>Quality Guaranteed</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 border border-[#A3C9BC]"
        >
          <Globe size={14} className="text-[#5B2333]" />
          <span className="text-xs font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>Nationwide Shipping</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 border border-[#A3C9BC]"
        >
          <HeartHandshake size={14} className="text-[#5B2333]" />
          <span className="text-xs font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>Supports Campus Orgs</span>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductShowcase;