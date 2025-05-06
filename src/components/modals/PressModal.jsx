// components/modals/PressModal.jsx
import Modal from '../Modal';

const PressModal = ({ isOpen, onClose }) => {
  const pressItems = [
    {
      source: "University Times",
      title: "Campus Cavern Revolutionizes Student Merchandise",
      date: "March 2025",
      quote: "The platform has changed how student organizations fundraise and connect with their communities."
    },
    {
      source: "Tech Campus",
      title: "Student Startup Reaches 1 Million Sales",
      date: "February 2025",
      quote: "What began as a campus project now serves over 250 universities worldwide."
    },
    {
      source: "Entrepreneur Daily",
      title: "How Campus Cavern Built a Community-First Marketplace",
      date: "January 2025",
      quote: "By focusing on authentic connections rather than just transactions, they've created lasting value."
    }
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Press & Media">
      <div className="prose prose-green max-w-none">
        <h4 className="text-[#5B2333]">Media Resources</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          {[
            { title: "Press Kit", button: "Download ZIP" },
            { title: "Brand Assets", button: "View Guidelines" },
            { title: "Company Facts", button: "Download PDF" }
          ].map((resource) => (
            <div key={resource.title} className="border border-[#A3C9BC]/30 rounded-lg p-4 text-center">
              <h5 className="font-medium text-[#2D4A43]">{resource.title}</h5>
              <button className="mt-2 text-sm bg-[#A3C9BC] text-[#2D4A43] px-3 py-1 rounded hover:bg-[#7AB8A8] transition-colors">
                {resource.button}
              </button>
            </div>
          ))}
        </div>

        <h4 className="text-[#5B2333] mt-8">Press Contact</h4>
        <div className="bg-[#F7F4F3] p-4 rounded-lg border border-[#A3C9BC]/30 my-4">
          <p className="font-medium text-[#2D4A43]">Media Relations Team</p>
          <p className="text-sm">press@campuscavern.com</p>
          <p className="text-sm">+1 (555) 123-4567</p>
        </div>

        <h4 className="text-[#5B2333] mt-8">Featured In</h4>
        <div className="space-y-6 my-4">
          {pressItems.map((item) => (
            <div key={item.title} className="border-b border-[#A3C9BC]/20 pb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h5 className="font-bold text-[#2D4A43]">{item.title}</h5>
                  <p className="text-sm text-[#2D4A43]/80">{item.source} • {item.date}</p>
                </div>
                <button className="text-xs bg-[#2D4A43] text-[#F7F4F3] px-2 py-1 rounded hover:bg-[#1E3630] transition-colors">
                  Read Article
                </button>
              </div>
              <blockquote className="mt-2 pl-4 border-l-2 border-[#A3C9BC] text-[#2D4A43]/90">
                "{item.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default PressModal;