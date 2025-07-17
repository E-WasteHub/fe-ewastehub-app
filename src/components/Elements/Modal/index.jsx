import { AnimatePresence, motion as Motion } from 'motion/react';
import { useEffect } from 'react';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';
import ModalPanel from './ModalPanel';

const Modal = ({ isOpen = false, onClose, children, size = 'md' }) => {
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') onClose?.();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscapeKey);
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='fixed inset-0 bg-black/60 backdrop-blur-sm'
            onClick={onClose}
            aria-hidden='true'
          />
          <ModalPanel size={size}>{children}</ModalPanel>
        </div>
      )}
    </AnimatePresence>
  );
};

// Menyatukan semua bagian ke dalam komponen Modal utama
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
