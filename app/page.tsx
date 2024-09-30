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


export default function Home() {
  return (
    <div className="flex flex-col">
      <ThemeComponent />
      <div className="relative flex h-[100vh] w-[100vw] flex-row items-start justify-center bg-black">
        <EntryPage />
      </div>
      <div className="relative flex h-[100vh] w-[100vw] bg-black">
        <Dawg />
      </div>
      <div className="flex h-[100vh] w-[100vw] flex-col bg-black">
        <Forest />
        <ForestLore />
      </div>
      <div className="h-[100vh] w-[100vw] bg-black flex justify-center items-center">
        <AncientPowers/>
      </div>
      <div className="h-screen w-screen bg-grid-white/[0.2] relative flex items-center justify-center bg-black">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex w-[70%] flex-col items-center gap-4">
          <VillainLore/>
          <Villains/>
        </div>
      </div>
      <div className="bg-grid-white/[0.2] relative flex items-center justify-center bg-black">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <TimelineDemo />
      </div>
      <div className="h-screen w-screen bg-black relative" id="trinity">
        <Trinity />
      </div>
    </div>
  );
}
