import Spline from "@splinetool/react-spline/next";
import React from "react";

interface Props {}

function EntryPage(props: Props) {
  const {} = props;

  return (
    <>
      <div className="absolute z-0 mt-10 flex flex-col items-center justify-center overflow-hidden rounded-md">
        <p className="text-gray-300 opacity-50">Hey there!</p>
        <h3 className="relative z-20 text-center text-4xl font-bold text-white">
          I am{" "}
          <span
            className="text-primaryColor"
            style={{
              background: "linear-gradient(30deg, rgb(0, 0, 200), rgb(200, 0, 0))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            T.A.R.S.
          </span>
        </h3>
        <div className="flex flex-col items-center text-medium text-gray-200">
          <p>
            <span className="font-semibold text-white">T</span>echnically{" "}
            <span className="font-semibold text-white">A</span>rtificial{" "}
            <span className="font-semibold text-white">R</span>obotic{" "}
            <span className="font-semibold text-white">S</span>ystem
          </p>
          <p className="text-sm text-gray-400">
            Let me tell you a story!
          </p>
        </div>
      </div>
      <div className="-z-2 absolute top-0 mt-[13%] h-[75%] w-full">
        <Spline scene="https://prod.spline.design/NW0QHz3WXlqQ68W5/scene.splinecode" />
      </div>
    </>
  );
}

export default EntryPage;
