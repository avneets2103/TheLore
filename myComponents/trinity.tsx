"use client"
import { Button } from "@nextui-org/react";
import Spline from "@splinetool/react-spline";
import Image from "next/image";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

function Trinity() {
  return (
    <>
      <div className="-z-2 absolute top-0 h-full w-full">
        <Spline scene="https://prod.spline.design/LfXBcFPEMtpGi2Lc/scene.splinecode" />
      </div>
      <div className="absolute flex h-screen w-screen items-center justify-center gap-6 -z-2">
        <Button
          variant="flat"
          startContent={
            <Image
              src="/Icons/linkedin.png"
              alt="linkedin"
              width={20}
              height={20}
            />
          }
          className="bg-[#0b65c2]/[0.7] text-gray-300"
          onPress={() => window.open("https://www.linkedin.com/in/avneets2103/", "_blank")}
        >
          <p className="text-medium font-semibold">
            <LinkPreview
              url="/#trinity"
              imageSrc="/Linkedin.png"
              isStatic
            >
              LinkedIn
            </LinkPreview>
          </p>
        </Button>
        <Button
          variant="flat"
          startContent={
            <Image
              src="/Icons/githubW.png"
              alt="github"
              width={20}
              height={20}
            />
          }
          className="bg-gray-800/[0.7] text-gray-300"
          onPress={() => window.open("https://github.com/avneets2103", "_blank")}
        >
          <p className="text-medium font-semibold">
          <LinkPreview
              url="/#trinity"
              isStatic
              imageSrc="/githubLink.png"
            >
              GitHub
            </LinkPreview>
        </p>
        </Button>
        <Button
          variant="flat"
          startContent={
            <Image
              src="/Icons/code.png"
              alt="leetcode"
              width={20}
              height={20}
            />
          }
          className="bg-yellow-700/[0.7] text-gray-300"
          onPress={() => window.open("https://leetcode.com/u/avneets2103/", "_blank")}
        >
          <p className="text-medium font-semibold">
            <LinkPreview
              url="/#trinity"
              isStatic
              imageSrc="/leetcode.png"
            >
              LeetCode
            </LinkPreview>
          </p>
        </Button>
      </div>
    </>
  );
}

export default Trinity;
  