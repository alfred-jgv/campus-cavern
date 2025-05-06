// components/modals/CareersModal.jsx
import Modal from '../Modal';

const CareersModal = ({ isOpen, onClose }) => {
  const openPositions = [
    {
      title: "Campus Relations Manager",
      type: "Full-time",
      location: "Remote",
      description: "Build partnerships with student organizations and university administrations."
    },
    {
      title: "Product Designer",
      type: "Contract",
      location: "Hybrid",
      description: "Create intuitive experiences for students and organizations."
    },
    {
      title: "Software Engineer",
      type: "Full-time",
      location: "Remote",
      description: "Develop and maintain our e-commerce platform."
    },
    {
      title: "Marketing Intern",
      type: "Internship",
      location: "Remote",
      description: "Assist with social media and campus outreach programs."
    }
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Join Our Team">
      <div className="prose prose-green max-w-none">
        <div className="bg-[#A3C9BC]/10 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold text-[#5B2333] text-center">
            Help us build the future of campus connections
          </h3>
        </div>

        <h4 className="text-[#5B2333]">Why Work With Us</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4">
          {[
            "Flexible hours",
            "Remote options",
            "Student-friendly",
            "Growth opportunities",
            "Impactful work",
            "Team events",
            "Learning budget",
            "Health benefits"
          ].map((benefit) => (
            <div key={benefit} className="bg-[#F7F4F3] p-2 rounded text-center text-sm">
              {benefit}
            </div>
          ))}
        </div>

        <h4 className="text-[#5B2333] mt-8">Open Positions</h4>
        <div className="space-y-4 my-4">
          {openPositions.map((position) => (
            <div key={position.title} className="border border-[#A3C9BC]/30 rounded-lg p-4 hover:bg-[#A3C9BC]/5 transition-colors">
              <div className="flex justify-between items-start">
                <h5 className="font-bold text-[#2D4A43]">{position.title}</h5>
                <div className="flex gap-2">
                  <span className="text-xs bg-[#5B2333]/10 text-[#5B2333] px-2 py-1 rounded">
                    {position.type}
                  </span>
                  <span className="text-xs bg-[#2D4A43]/10 text-[#2D4A43] px-2 py-1 rounded">
                    {position.location}
                  </span>
                </div>
              </div>
              <p className="text-sm mt-2">{position.description}</p>
              <button className="mt-3 text-sm bg-[#A3C9BC] text-[#2D4A43] px-3 py-1 rounded hover:bg-[#7AB8A8] transition-colors">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-[#F7F4F3] p-4 rounded-lg border border-[#A3C9BC]/30">
          <h5 className="font-bold text-[#5B2333] mb-2">Don't see your dream role?</h5>
          <p className="text-sm mb-3">
            We're always looking for talented people passionate about campus culture. Send us your resume
            and tell us how you'd like to contribute.
          </p>
          <button className="text-sm bg-[#2D4A43] text-[#F7F4F3] px-4 py-2 rounded hover:bg-[#1E3630] transition-colors">
            Submit General Application
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CareersModal;