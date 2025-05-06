import { motion } from "framer-motion";
import { BadgeCheck, ShoppingBag, Clock } from "lucide-react";

const stats = [
  { 
    value: "100+", 
    label: "Verified Organizations", 
    icon: <BadgeCheck className="text-[#5B2333]" size={24} />,
    description: "Every organization is verified to ensure authenticity and quality merchandise"
  },
  { 
    value: "500+", 
    label: "Merch Items", 
    icon: <ShoppingBag className="text-[#5B2333]" size={24} />,
    description: "Browse through a wide selection of custom-designed products from campus groups"
  },
  { 
    value: "24/7", 
    label: "Customer Support", 
    icon: <Clock className="text-[#5B2333]" size={24} />,
    description: "Our dedicated team is always available to assist with your questions and orders"
  }
];

const HeroStats = () => {
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-md md:max-w-3xl mx-auto lg:mx-0">
      {stats.map((stat, index) => (
        <motion.div 
          key={index}
          whileHover={{ 
            y: -8,
            boxShadow: "0 15px 30px rgba(163, 201, 188, 0.2)",
          }}
          className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-[#A3C9BC] transition-all duration-300"
        >
          <div className="flex justify-center mb-4 bg-[#F7F4F3] p-3 rounded-xl w-12 h-12 mx-auto">
            {stat.icon}
          </div>
          <div className="text-3xl font-bold text-[#5B2333] text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>{stat.value}</div>
          <div className="text-sm font-semibold text-[#363F46] mt-2 text-center" style={{ fontFamily: "'Inter', sans-serif" }}>{stat.label}</div>
          <div className="text-xs text-[#363F46] mt-2 text-center opacity-75" style={{ fontFamily: "'Inter', sans-serif" }}>{stat.description}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default HeroStats;