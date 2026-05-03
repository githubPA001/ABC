"use client";

import type { ReactNode } from "react";
import type { HTMLMotionProps } from "framer-motion";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type SharedAnimatedSectionProps = {
  delay?: number;
  children?: ReactNode;
};

type AnimatedSectionProps =
  | (SharedAnimatedSectionProps &
      Omit<HTMLMotionProps<"section">, "children"> & { as?: "section" })
  | (SharedAnimatedSectionProps &
      Omit<HTMLMotionProps<"div">, "children"> & { as: "div" });

export function AnimatedSection(props: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const motionProps = {
    initial: shouldReduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: shouldReduceMotion ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: 0.55,
      delay: props.delay ?? 0,
      ease: [0.22, 1, 0.36, 1],
    },
  };

  if (props.as === "div") {
    const { as: _as, delay, className, children, ...divProps } = props;
    return (
      <LazyMotion features={domAnimation}>
        <m.div className={cn(className)} {...motionProps} {...divProps}>
          {children}
        </m.div>
      </LazyMotion>
    );
  }

  const { as: _as, delay, className, children, ...sectionProps } = props;

  return (
    <LazyMotion features={domAnimation}>
      <m.section className={cn(className)} {...motionProps} {...sectionProps}>
        {children}
      </m.section>
    </LazyMotion>
  );
}
