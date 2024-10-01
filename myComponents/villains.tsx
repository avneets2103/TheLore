"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/components/hooks/use-outside-click";

export function Villains() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[450px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.activeSrc}
                  alt={active.title}
                  className="w-full sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <div className="flex items-center gap-1">
                    <motion.a
                        layoutId={`button2-${active.title}-${id}`}
                        href={active.githubLink}
                        target="_blank"
                        className="px-4 py-3 text-sm rounded-full font-bold bg-gray-300 text-black"
                    >
                        <div className="flex gap-1 items-center">
                            <p>Github</p>
                            <Image src="/Icons/github.png" width={100} height={100} alt="github" className="h-4 w-4" />
                        </div>
                    </motion.a>
                    <motion.a
                        layoutId={`button-${active.title}-${id}`}
                        href={active.ctaLink}
                        target="_blank"
                        className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                    >
                        {active.ctaText}
                  </motion.a>
                  </div>
                </div>
                <div className="pt-2 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-y-scroll max-h-[50vh] lg:max-h-[20vh] dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Full Stack Doctor!",
    title: "Medix",
    src: "/Icons/doctor.png",
    ctaText: "Investigate",
    ctaLink: "https://btp-web-tau.vercel.app/login",
    activeSrc: "/medixMain.svg",
    githubLink: "https://github.com/avneets2103/BTP_Web",
    content: () => {
      return (
        <>
        <p>
            Power of NEXT.JS + NODE.JS + AWS + LANGCHAIN + TRANSFORMER LEARNING came together to form:
        </p>
        <p>
          Medix, a cutting edge healthcare platform. The technique to store reports of patients at one place. The courage to parse those reports and create a all knowing knowledge base out them. Create Infinite amounts of graphs on the finger tips of the user based on his knowledge base. <br></br> But the power which everyone feared was the power to provide Summarized medical history, symptoms and also provide a differential diagnosis platform for the doctor.
        </p>
        </>
      );
    },
  },
  {
    description: "The Serial-Mailer!",
    title: "ColdMailer",
    src: "/Icons/gmail.png",
    ctaText: "Investigate",
    ctaLink: "https://youtu.be/4YP3mwAaI9In",
    activeSrc: "/coldMain.svg",
    githubLink: "https://github.com/avneets2103/coldMailer",
    content: () => {
      return (
        <>
        <p>
            Power of NODE.JS + NODEMAILER + EXPRESS came together to form:
        </p>
        <p>
          ColdMailer, The Cold Hearted Mailer. The technique to send mails with attachments with a single click without even opening the application is awesome. But the power which everyone feared was the power to send different types of cold mails, with different routes to not only 1 but 100s of people at one click. 
        </p>
        </>
      );
    },
  },
  {
    description: "The GTA driver!",
    title: "A Better Car",
    src: "/Icons/car.png",
    ctaText: "Investigate",
    ctaLink: "https://drive.google.com/file/d/1IEzZMl-g5IumpMpnrKEmvw1gYndULOdu/view?usp=sharing",
    activeSrc: "/carMain.svg",
    githubLink: "https://github.com/avneets2103/Car-racing-RL",
    content: () => {
      return (
        <>
        <p>
          Power of Reinforcement Learning + OpenAI Gym + Proximal Policy Optimization (PPO) algorithm came together to form:
        </p>
        <p>
          {`A Better Car, The GTA driver. The technique to drive a car better than you my friend. He uses Reinforcement Learning, that means it learns from its mistakes (unlike you). Using the PPO algorithm in the OpenAI GYM environment, he can cause utter desctruction.`}
        </p>
        </>
      );
    },
  },
  {
    description: "The Killer Of Darwin!",
    title: "Darwin's Evolution",
    src: "/Icons/evolution.png",
    ctaText: "Investigate",
    ctaLink: "https://www.youtube.com/watch?v=tYSzAyuey0s&ab_channel=AvneetSingh",
    activeSrc: "/darwinMain.png",
    githubLink: "https://github.com/avneets2103/Darwin-s-Comouflage",
    content: () => {
      return (
        <>
        <p>
            Power of EVOLUTIONARY ALGORITHM + PYTHON came together to form:
        </p>
        <p>
          Darwin's Evolution, The Killer of Darwin. Using the evolutionary algorithm, he generates, selects, mutates and cross whole population of species in the forest! God of its own world.
        </p>
        </>
      );
    },
  }
];
