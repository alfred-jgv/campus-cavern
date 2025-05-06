// components/modals/AboutModal.jsx
import Modal from '../Modal';

const AboutModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="About Campus Cavern">
      <div className="prose prose-green max-w-none">
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="flex-1">
            <h4 className="text-[#5B2333]">Our Story</h4>
            <p>
              Founded in 2023, Campus Cavern began as a passion project between university friends who wanted
              to make authentic student organization merchandise more accessible. What started as a campus
              initiative has grown into a global platform connecting students with quality merchandise from
              verified university clubs worldwide.
            </p>
          </div>
          <div className="flex-1">
            <h4 className="text-[#5B2333]">Our Team</h4>
            <p>
              We're a diverse team of former student leaders, designers, and tech enthusiasts united by our
              love for campus culture. With members from over 15 different universities, we bring firsthand
              understanding of what makes student organizations special.
            </p>
          </div>
        </div>

        <h4 className="text-[#5B2333]">By The Numbers</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
          {[
            { number: '1+', label: 'Universities' },
            { number: '10+', label: 'Organizations' },
            { number: '10k+', label: 'Items Sold' },
            { number: '98%', label: 'Satisfaction Rate' }
          ].map((stat) => (
            <div key={stat.label} className="bg-[#A3C9BC]/10 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-[#5B2333]">{stat.number}</p>
              <p className="text-sm text-[#2D4A43]">{stat.label}</p>
            </div>
          ))}
        </div>

        <h4 className="text-[#5B2333]">Our Values</h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {[
            "Authentic campus connections",
            "Quality you can trust",
            "Supporting student initiatives",
            "Sustainable practices",
            "Inclusive community",
            "Transparent operations"
          ].map((value) => (
            <li key={value} className="flex items-start gap-2">
              <span className="text-[#A3C9BC]">✓</span>
              <span>{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};

export default AboutModal;