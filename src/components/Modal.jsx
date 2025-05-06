// components/Modal.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop with blur */}
          <motion.div
            initial={{ backdropFilter: 'blur(0px)' }}
            animate={{ backdropFilter: 'blur(4px)' }}
            exit={{ backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 bg-[#2D4A43]/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal content */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#F7F4F3] text-[#2D4A43] rounded-xl shadow-2xl"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-[#A3C9BC] rounded-t-xl">
              <h3 className="text-2xl font-bold">{title}</h3>
              <button
                onClick={onClose}
                className="p-1 rounded-full hover:bg-[#2D4A43]/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">{children}</div>

            {/* Footer */}
            <div className="sticky bottom-0 p-4 bg-[#F7F4F3] border-t border-[#A3C9BC]/30">
              <button
                onClick={onClose}
                className="px-6 py-2 ml-auto text-sm font-medium bg-[#2D4A43] text-[#F7F4F3] rounded-lg hover:bg-[#1E3630] transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;