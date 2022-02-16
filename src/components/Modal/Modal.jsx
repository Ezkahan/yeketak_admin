import { AnimatePresence, motion } from "framer-motion";

const Modal = ({ children, isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 bg-slate-900 bg-opacity-50 backdrop-blur-xl w-full h-full flex items-center justify-center z-50"
        >
          <main className="bg-slate-900 bg-opacity-90 backdrop-blur-lg w-96 xl:w-150 p-4 xl:p-7 rounded-xl">
            {children}
          </main>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Modal;
