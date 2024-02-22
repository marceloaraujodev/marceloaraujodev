import PropTypes from 'prop-types';

// { isOpen, onClose, children}
export default function Modal({ isOpen, children }) {
  // if(!isOpen) return null
console.log(isOpen)
  return (
    <>
    {isOpen && <div className='overlay' />}
    <dialog open={isOpen}>
    <div className='modal-content'>
      {children}
      </div>
    </dialog>
    </>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node
};