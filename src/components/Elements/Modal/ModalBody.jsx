const ModalBody = ({ children, className = '' }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

export default ModalBody;
