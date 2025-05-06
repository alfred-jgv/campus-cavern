// components/modals/CookiesModal.jsx
import Modal from '../Modal';

const CookiesModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Cookies Policy">
      <div className="prose prose-green max-w-none">
        <h4 className="text-[#5B2333]">1. What Are Cookies</h4>
        <p>
          Cookies are small text files stored on your device when you visit our website. 
          They help us provide you with a better experience by remembering your preferences.
        </p>

        <h4 className="text-[#5B2333] mt-6">2. How We Use Cookies</h4>
        <p>
          We use cookies to:
          <ul className="list-disc pl-6 mt-2">
            <li>Remember your login session</li>
            <li>Track items in your shopping cart</li>
            <li>Understand how you use our site to improve our services</li>
            <li>Personalize content and ads</li>
          </ul>
        </p>

        <h4 className="text-[#5B2333] mt-6">3. Managing Cookies</h4>
        <p>
          You can control or delete cookies through your browser settings. 
          However, disabling cookies may affect your ability to use certain features of our website.
        </p>

        <h4 className="text-[#5B2333] mt-6">4. Third-Party Cookies</h4>
        <p>
          We may use third-party services that set their own cookies to provide features like analytics, 
          advertising, and social media integration.
        </p>
      </div>
    </Modal>
  );
};

export default CookiesModal;