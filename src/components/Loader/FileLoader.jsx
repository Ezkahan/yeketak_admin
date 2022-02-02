import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const FileLoader = ({ percentage }) => {
  return (
    <section className="bg-slate-900 bg-opacity-50 backdrop-blur fixed top-0 left-0 w-full h-full z-50 flex flex-col items-center justify-center select-none cursor-progress">
      <div className="w-96">
        <CircularProgressbar
          backgroundPadding="#fde047"
          strokeWidth="7"
          value={percentage}
          maxValue={100}
          text={`${percentage}%`}
          styles={{
            path: {
              stroke: "#dfe047",
            },
            trail: {
              stroke: "#fff",
            },
            text: {
              fill: "#dfe047",
              fontSize: "1.3rem",
              fontFamily: "Montserrat-Bold",
            },
          }}
        />
      </div>
      <h1 className="font-montserrat-bold text-4xl my-10 text-yellow-300 animate-pulse">
        Ýüklenýär
      </h1>
    </section>
  );
};

export default FileLoader;
