import useToggle from "hooks/useToggle";

const Sidebar = () => {
  const { isOpen, close, open, toggle } = useToggle(true);
  return (
    <main
      className={`bg-cyan-100 h-screen ${
        isOpen ? "w-96" : "w-20"
      } duration-500`}
    >
      <nav onClick={toggle} className="flex flex-col">
        Yeketak
      </nav>
    </main>
  );
};

export default Sidebar;
