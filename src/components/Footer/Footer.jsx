const Footer = ({ children }) => {
  return (
    <footer className="col-span-12 xl:fixed bottom-0 left-0 w-full xl:bg-slate-900 xl:bg-opacity-25 backdrop-blur py-2 rounded-t-2xl z-50">
      {children}
    </footer>
  );
};

export default Footer;
