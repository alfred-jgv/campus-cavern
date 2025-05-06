import Modal from '../Modal';

const TermsModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Terms of Service">
      <div className="prose prose-green max-w-none">
        <h4 className="text-[#5B2333]">1. Acceptance of Terms</h4>
        <p>
          By accessing or using Campus Cavern, you agree to be bound by these Terms of Service. 
          If you do not agree to all the terms, you may not use our service.
        </p>

        <h4 className="text-[#5B2333] mt-6">2. User Responsibilities</h4>
        <p>
          You are responsible for maintaining the confidentiality of your account and password. 
          You agree to accept responsibility for all activities that occur under your account.
        </p>

        <h4 className="text-[#5B2333] mt-6">3. Intellectual Property</h4>
        <p>
          All content included on Campus Cavern, such as text, graphics, logos, and images, 
          is the property of Campus Cavern or its content suppliers and protected by copyright laws.
        </p>

        <h4 className="text-[#5B2333] mt-6">4. Limitation of Liability</h4>
        <p>
          Campus Cavern shall not be liable for any indirect, incidental, special, consequential 
          or punitive damages resulting from your access to or use of the service.
        </p>
      </div>
    </Modal>
  );
};

export default TermsModal;