export default function Modal({ open, children, onClose }) {
    if(!open) return null;
  
    return (
      <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#fff', padding: '50px' }}>
        <button onClick={onClose}>Close Modal</button>
        {children}
      </div>
    );
  }