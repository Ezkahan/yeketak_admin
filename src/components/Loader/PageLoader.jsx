import { Audio } from "react-loader-spinner";

const PageLoader = () => {
  return (
    <section className="bg-slate-900 bg-opacity-50 backdrop-blur fixed top-0 left-0 w-full h-full z-50 flex flex-col items-center justify-center select-none">
      <Audio heigth="100" width="100" color="yellow" ariaLabel="loading" />
      <h1 className="font-montserrat-bold text-xl my-5 text-yellow-300">
        Ýüklenýär
      </h1>
    </section>
  );
};

export default PageLoader;
