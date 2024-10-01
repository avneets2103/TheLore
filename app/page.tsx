import React from "react";
import ThemeComponent from "@/myComponents/themeComponent";
import EntryPage from "@/myComponents/entryPage";
import Dawg from "@/myComponents/dawg";
import Forest from "@/myComponents/forest";
import ForestLore from "@/myComponents/forestLore";
import AncientPowers from "@/myComponents/ancientPowers";
import { Villains } from "@/myComponents/villains";
import VillainLore from "@/myComponents/villainLore";
import Trinity from "@/myComponents/trinity";
import { TimelineDemo } from "@/components/demo/expandableCards";
import { FloatingDockDemo } from "@/myComponents/dock";

export default function Home() {
  return (
    <>
      <ThemeComponent />
      <div className="fixed bottom-2 mx-auto z-10 w-[100vw]">
        <FloatingDockDemo/>
      </div>
      <div className="relative flex h-[100vh] w-[100vw] flex-row items-start justify-center bg-black" id="TARS">
        <EntryPage />
      </div>
      <div className="relative flex h-[100vh] w-[100vw] bg-black" id="hype">
        <Dawg />
      </div>
      <div className="flex h-[100vh] w-[100vw] flex-col bg-black" id="college">
        <Forest />
        <ForestLore />
      </div>
      <div className="h-fit lg:h-[100vh] w-[100vw] bg-black flex justify-center items-center" id="skills">
        <AncientPowers/>
      </div>
      <div className="mt-[10vh] lg:mt-0 h-fit lg:h-screen w-screen lg:bg-grid-white/[0.2] relative flex items-center justify-center bg-black" id="projects">
        <div className="hidden lg:block pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex w-[70%] flex-col items-center gap-4">
          <VillainLore/>
          <Villains/>
        </div>
      </div>
      <div className="bg-grid-white/[0.2] relative flex items-center justify-center bg-black" id="experience">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <TimelineDemo />
      </div>
      <div className="h-screen w-screen bg-black relative" id="trinity">
        <Trinity />
      </div>
    </>
  );
}
