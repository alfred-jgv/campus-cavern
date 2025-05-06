// components/modals/PrivacyModal.jsx
import Modal from '../Modal';

const PrivacyModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Privacy Policy">
      <div className="prose prose-green max-w-none">
        <h4 className="text-[#5B2333]">1. Information We Collect</h4>
        <p>
          We collect personal information you provide when you create an account, make a purchase, 
          or communicate with us. This may include name, email, shipping address, and payment details.
        </p>

        <h4 className="text-[#5B2333] mt-6">2. How We Use Information</h4>
        <p>
          We use your information to process transactions, provide customer support, improve our services, 
          and communicate with you about products, services, and promotions.
        </p>

        <h4 className="text-[#5B2333] mt-6">3. Information Sharing</h4>
        <p>
          We do not sell or rent your personal information to third parties. We may share information 
          with service providers who assist us in operating our website and conducting our business.
        </p>

        <h4 className="text-[#5B2333] mt-6">4. Data Security</h4>
        <p>
          We implement security measures to maintain the safety of your personal information. 
          However, no method of transmission over the Internet is 100% secure.
        </p>

        <h4 className="text-[#5B2333] mt-6">5. Your Rights</h4>
        <p>
          You may review, update, or delete your account information at any time by accessing your account settings.
        </p>
      </div>
    </Modal>
  );
};

export default PrivacyModal;