"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { IconCalendarEvent, IconLocation, IconMap } from "@tabler/icons-react";
import { Button } from "./button";
import Link from "next/link";
import { AlertDialogDemo } from "../modal";
import { CheckboxReactHookFormMultiple } from "../eventTodo";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
    icon?: JSX.Element | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];

  return (
    <motion.div className="h-[30rem] flex justify-center relative space-x-10 rounded-md p-10">
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-5xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-slate-300 max-w-sm mt-10 pb-10"
              >
                {item.description}
              </motion.p>
              <div className="flex-col  ">
                <div className="flex gap-2 border-r pb-7">
                  <IconCalendarEvent size={20} />
                  <div>
                    <h3 className="text-xl">Date</h3>
                    <p className="text-sm">10 March 2024</p>
                    <p className="text-violet-200">14:00-17:00</p>
                  </div>
                </div>

                <div className="flex gap-2 border-r pb-7">
                  <IconLocation size={20} />
                  <div>
                    <h3 className="text-xl">Location</h3>
                    <p className="text-sm">İstanbul</p>
                  </div>
                </div>

                <div className="bg-background text-xl font-small p-6 rounded-xl border-2 dark:border-gray-700 border-gray-300">
                  <p className="text-primary textfo mb-4 ">
                    Welcome! To join the event, please register below.
                  </p>
                    <AlertDialogDemo/>
                </div>

                <div>
                  <CheckboxReactHookFormMultiple/>
                </div>
               
              </div>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        className={cn(
          "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 ",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  );
};
