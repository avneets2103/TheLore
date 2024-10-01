"use client"
import { useEffect, useState } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

interface Props{
  setDim: React.Dispatch<React.SetStateAction<{
    width: number;
    height: number;
  }>>
}

export default function useWindowDimensions({setDim}: Props) {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    setDim({
      width: windowDimensions.width,
      height: windowDimensions.height
    });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <></>;
}

// Extra Small Devices (Phones):
// Range: 0px to 576px

// Small Devices (Tablets):
// Range: 577px to 768px

// Medium Devices (Laptops, Small Desktops):
// Range: 769px to 992px

// Large Devices (Desktops):
// Range: 993px to 1200px

// Extra Large Devices (Large Desktops, TVs):
// Range: 1201px and above