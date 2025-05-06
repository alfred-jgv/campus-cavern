// components/modals/MissionModal.jsx
import Modal from '../Modal';

const MissionModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Our Mission">
      <div className="prose prose-green max-w-none">
        <div className="bg-[#5B2333]/5 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold text-[#5B2333] text-center mb-4">
            "To empower student organizations by connecting them with students who value authentic campus culture"
          </h3>
        </div>

        <h4 className="text-[#5B2333]">What We Believe</h4>
        <p>
          Campus organizations are the heart of university life. The merchandise they create represents
          memories, achievements, and school pride. We believe every student should have access to these
          meaningful items, and every organization should benefit from their creations.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-[#F7F4F3] p-4 rounded-lg border border-[#A3C9BC]/30">
            <h5 className="font-bold text-[#5B2333] mb-2">For Students</h5>
            <ul className="space-y-2">
              {[
                "Access to authentic organization merch",
                "Support your favorite clubs directly",
                "Discover new organizations",
                "Show your campus pride"
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#A3C9BC]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#F7F4F3] p-4 rounded-lg border border-[#A3C9BC]/30">
            <h5 className="font-bold text-[#5B2333] mb-2">For Organizations</h5>
            <ul className="space-y-2">
              {[
                "Reach beyond your campus",
                "Earn funding for your initiatives",
                "Protect your designs",
                "Connect with your alumni"
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#A3C9BC]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h4 className="text-[#5B2333]">Our Impact</h4>
        <p>
          Since our launch, we've helped student organizations raise over $2 million for their programs,
          supported 500+ campus initiatives, and connected alumni with their former organizations across
          the globe. Every purchase on Campus Cavern directly benefits student communities.
        </p>
      </div>
    </Modal>
  );
};

export default MissionModal;