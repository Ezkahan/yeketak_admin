const { useState } = require("react");

const useToggle = (status = true) => {
  const [isOpen, setIsOpen] = useState(status);
  // const open = () => setIsOpen(true);
  // const close = () => setIsOpen(false);
  const toggle = () => setIsOpen(!isOpen);
  return {
    isOpen,
    toggle,
  };
};

export default useToggle;
