import React from 'react';
import './Modal.scss';

// props for modal component
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode; // content inside modal
}

function Modal({ isOpen, onClose, title, children }: ModalProps) {
  // handle escape key to close modal - MUST be before early return
  React.useEffect(() => {
    // only add listener if modal is open
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // add event listener when modal opens
    document.addEventListener('keydown', handleEscape);

    // cleanup when modal closes
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]); // dependencies: run when isOpen or onClose changes

  // handle clicking outside modal to close
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // only close if clicked on backdrop, not modal content
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // dont render anything if modal is closed
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>
        
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;