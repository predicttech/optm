"use client";

import * as React from "react";
import { useMotionValue, useSpring } from "motion/react";
import {
  Gauge,
  GaugeIndicator,
  GaugeLabel,
  GaugeRange,
  GaugeTrack,
  GaugeValueText,
} from "@/components/ui/gauge";
import { motion } from "framer-motion";

export function GaugeDemo1() {
  const biologicalMotion = useMotionValue(0);
  const chronologicalMotion = useMotionValue(0);

  const biologicalSpring = useSpring(biologicalMotion, {
    stiffness: 60,
    damping: 15,
  });

  const chronologicalSpring = useSpring(chronologicalMotion, {
    stiffness: 60,
    damping: 15,
  });

  const [biologicalValue, setBiologicalValue] = React.useState(0);
  const [chronologicalValue, setChronologicalValue] = React.useState(0);

  React.useEffect(() => {
    biologicalMotion.set(58);
    chronologicalMotion.set(47);

    const unsubscribe1 = biologicalSpring.on("change", (latest) => {
      setBiologicalValue(Math.round(latest));
    });

    const unsubscribe2 = chronologicalSpring.on("change", (latest) => {
      setChronologicalValue(Math.round(latest));
    });

    return () => {
      unsubscribe1();
      unsubscribe2();
    };
  }, [
    biologicalMotion,
    chronologicalMotion,
    biologicalSpring,
    chronologicalSpring,
  ]);

  return (
    <div className="hidden md:block">
      <motion.div
        className="absolute left-1/2 bottom-1/3 pb-20 translate-x-[100%] translate-y-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Gauge value={biologicalValue} size={100} thickness={8}>


          <GaugeIndicator className="bg-white/10 rounded-full backdrop-blur-sm">
            <GaugeTrack className="bg-white" />
            <GaugeRange stroke="white" />
          </GaugeIndicator>

          <GaugeValueText className="text-white">{biologicalValue}</GaugeValueText>

          <GaugeLabel className="text-white">Knee Age</GaugeLabel>

        </Gauge>
      </motion.div>
      <motion.div
        className="absolute right-1/4 mr-10 top-1/2 translate-x-[250%] -translate-y-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3,
        }}
      >
        <Gauge value={chronologicalValue} size={100} thickness={8}>
          <GaugeIndicator className="bg-white/10 rounded-full backdrop-blur-sm">
            <GaugeTrack className="bg-white" />
            <GaugeRange stroke="white" />
          </GaugeIndicator>

          <GaugeValueText className="text-white">{chronologicalValue}</GaugeValueText>

          <GaugeLabel className="text-white">Biological Age</GaugeLabel>

        </Gauge>
      </motion.div>
    </div>
  );
}

export function GaugeDemo2() {
  const biologicalMotion = useMotionValue(0);
  const chronologicalMotion = useMotionValue(0);

  const biologicalSpring = useSpring(biologicalMotion, {
    stiffness: 60,
    damping: 15,
  });

  const chronologicalSpring = useSpring(chronologicalMotion, {
    stiffness: 60,
    damping: 15,
  });

  const [biologicalValue, setBiologicalValue] = React.useState(0);
  const [chronologicalValue, setChronologicalValue] = React.useState(0);

  React.useEffect(() => {
    biologicalMotion.set(58);
    chronologicalMotion.set(47);

    const unsubscribe1 = biologicalSpring.on("change", (latest) => {
      setBiologicalValue(Math.round(latest));
    });

    const unsubscribe2 = chronologicalSpring.on("change", (latest) => {
      setChronologicalValue(Math.round(latest));
    });

    return () => {
      unsubscribe1();
      unsubscribe2();
    };
  }, [
    biologicalMotion,
    chronologicalMotion,
    biologicalSpring,
    chronologicalSpring,
  ]);

  return (
    <div className="hidden md:block">
      <motion.div
        className="absolute left-1/3 bottom-1/3 translate-x-[220%] translate-y-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Gauge className="" value={biologicalValue} size={100} thickness={8}>
          <GaugeIndicator className="bg-white/10 rounded-full backdrop-blur-sm">
            <GaugeTrack />
            <GaugeRange />
          </GaugeIndicator>

          <GaugeValueText>{biologicalValue}</GaugeValueText>

          <GaugeLabel  >Biological</GaugeLabel>
        </Gauge>
      </motion.div>
      <motion.div
        className="absolute right-1/4 top-1/3 translate-x-[150%] -translate-y-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3,
        }}
      >
        <Gauge value={chronologicalValue} size={100} thickness={8}>
          <GaugeIndicator className=" rounded-full backdrop-blur-sm">
            <GaugeTrack />
            <GaugeRange />
          </GaugeIndicator>

          <GaugeValueText  >{chronologicalValue}</GaugeValueText>

          <GaugeLabel  >Chronological</GaugeLabel>
        </Gauge>
      </motion.div>
    </div>
  );
}

export function GaugeDemo3() {
  const biologicalMotion = useMotionValue(0);
  const chronologicalMotion = useMotionValue(0);

  const biologicalSpring = useSpring(biologicalMotion, {
    stiffness: 60,
    damping: 15,
  });

  const chronologicalSpring = useSpring(chronologicalMotion, {
    stiffness: 60,
    damping: 15,
  });

  const [biologicalValue, setBiologicalValue] = React.useState(0);
  const [chronologicalValue, setChronologicalValue] = React.useState(0);

  React.useEffect(() => {
    biologicalMotion.set(58);
    chronologicalMotion.set(47);

    const unsubscribe1 = biologicalSpring.on("change", (latest) => {
      setBiologicalValue(Math.round(latest));
    });

    const unsubscribe2 = chronologicalSpring.on("change", (latest) => {
      setChronologicalValue(Math.round(latest));
    });

    return () => {
      unsubscribe1();
      unsubscribe2();
    };
  }, [
    biologicalMotion,
    chronologicalMotion,
    biologicalSpring,
    chronologicalSpring,
  ]);

  return (
    <div className="hidden md:block">
      <motion.div
        className="absolute left-1/3 top-1/3 translate-x-[330%] translate-y-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3,
        }}
      >
        <Gauge value={biologicalValue} size={100} thickness={8}>
          <GaugeIndicator className="rounded-full backdrop-blur-sm">
            <GaugeTrack />
            <GaugeRange />
          </GaugeIndicator>

          <GaugeValueText>{biologicalValue}</GaugeValueText>

          <GaugeLabel>Biological</GaugeLabel>
        </Gauge>
      </motion.div>
      <motion.div
        className="absolute right-1/5 bottom-1/4 -translate-y-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3,
        }}
      >
        <Gauge value={chronologicalValue} size={100} thickness={8}>
          <GaugeIndicator className=" rounded-full backdrop-blur-sm">
            <GaugeTrack />
            <GaugeRange />
          </GaugeIndicator>

          <GaugeValueText  >{chronologicalValue}</GaugeValueText>

          <GaugeLabel  >Chronological</GaugeLabel>
        </Gauge>
      </motion.div>
    </div>
  );
}