import { motion } from "framer-motion";
import { ShoppingBag, Award, Globe, HeartHandshake } from "lucide-react";
import { useState, useEffect } from "react";

const products = [
  { 
    name: "Computer Science T-Shirt", 
    price: "₱299.99", 
    color: "#A3C9BC", 
    image: "/cs-1.png",
    description: "Black cotton tee with Computer Science department logo. Perfect for classes, hackathons, and campus events."
  },
  { 
    name: "Information Technology T-Shirt", 
    price: "₱299.99", 
    color: "#5B2333", 
    image: "/it-1.png",
    description: "Classic white IT department shirt with modern tech-inspired design. Breathable fabric ideal for lab sessions."
  },
  { 
    name: "CSG Merch", 
    price: "₱299.99", 
    color: "#363F46", 
    image: "/csg-1.png",
    description: "Official College of Computer Studies shirt featuring the CCS seal. Show your school pride in style."
  }
];

const renderProductImage = (product) => {
  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden relative">
      <div 
        className="absolute inset-0" 
        style={{ 
          background: `linear-gradient(135deg, ${product.color}20 0%, ${product.color}60 100%)`
        }}
      ></div>
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
        className="relative z-10 w-full h-full"
      >
        <img 
          src={product.image} 
          alt={product.name}
          className="object-cover w-full h-full" // Changed from object-contain to object-cover
        />
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
                  className="relative z-10 w-full h-full rounded-2xl shadow-xl overflow-hidden" // Removed fixed dimensions
                  style={{ 
                    boxShadow: `0 20px 50px ${products[currentProduct].color}30`
                  }}
                >
                  {renderProductImage(products[currentProduct])}
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