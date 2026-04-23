import React, { useRef } from "react";
import FloatingCan from "./FloatingCan";
import { Environment } from "@react-three/drei";
import { Group } from "three";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useStore } from "../hooks/Store";

type Props = {};
gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Scene({}: Props) {
  const can1Ref = useRef<Group>(null);
  const can2Ref = useRef<Group>(null);
  const can3Ref = useRef<Group>(null);
  const can4Ref = useRef<Group>(null);
  const can5Ref = useRef<Group>(null);

  const can1GroupRef = useRef<Group>(null);
  const can2GroupRef = useRef<Group>(null);

  const groupRef = useRef<Group>(null);

  const FLOAT_SPEED = 1.5;
  const isReady = useStore((state) => state.isReady);
  useGSAP(() => {
    if (
      !can1Ref.current ||
      !can2Ref.current ||
      !can3Ref.current ||
      !can4Ref.current ||
      !can5Ref.current ||
      !can1GroupRef.current ||
      !can2GroupRef.current ||
      !groupRef.current
    )
      return;

    isReady();

    gsap.set(can1Ref.current.position, { x: -4, z: -0.2 });
    gsap.set(can1Ref.current.rotation, { z: -0.5 });

    gsap.set(can2Ref.current.position, { x: 4 });
    gsap.set(can2Ref.current.rotation, { z: 0.5 });

    gsap.set(can3Ref.current.position, { y: 6, z: 2 });
    gsap.set(can4Ref.current.position, { x: 2, y: 5, z: 2 });
    gsap.set(can5Ref.current.position, { y: -6 });
    const introTl = gsap.timeline({
      defaults: {
        duration: 3,
        ease: "back.out(1.4)",
      },
    });

    introTl
      .from(can1GroupRef.current.position, { y: -5, x: 1 }, 0)
      .from(can1GroupRef.current.rotation, { z: 3 }, 0)
      .from(can2GroupRef.current.position, { y: 5, x: 1 }, 0)
      .from(can2GroupRef.current.rotation, { z: 3 }, 0);

    const scroll = gsap.timeline({
      default: {
        duration: 2,
      },
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2,
      },
    });

    scroll
      .to(groupRef.current.rotation, { y: Math.PI * 2 })
      // Can 1 - black cherry
      .to(can1Ref.current.position, { x: 2, y: -1, z: -2 }, 0)
      .to(can1Ref.current.rotation, { z: 0.5 }, 0)
      // Can 2 - Lemon Lime
      .to(can2Ref.current.position, { x: 4, y: 1, z: -2 }, 0)
      .to(can2Ref.current.rotation, { z: -0.2 }, 0)

      // Can 3 - Grape
      .to(can3Ref.current.position, { x: 2, y: 1.5, z: -1 }, 0)
      .to(can3Ref.current.rotation, { z: -0.1 }, 0)

      // Can 4 - Strawberry Lemonade
      .to(can4Ref.current.position, { x: 2.5, y: -0.5, z: 1 }, 0)
      .to(can4Ref.current.rotation, { z: 0.3 }, 0)

      // Can 5 -Watermelon
      .to(can5Ref.current.position, { x: 5, y: -1, z: -0.8 }, 0)
      .to(can5Ref.current.rotation, { z: -0.25 }, 0);
  });
  return (
    <group ref={groupRef}>
      <group ref={can1GroupRef}>
        <FloatingCan
          ref={can1Ref}
          flavor="vPineApple"
          floatSpeed={FLOAT_SPEED}
        />
      </group>
      <group ref={can2GroupRef}>
        <FloatingCan
          ref={can2Ref}
          flavor="vPinaColada"
          floatSpeed={FLOAT_SPEED}
        />
      </group>

      <FloatingCan ref={can3Ref} flavor="vBluberry" floatSpeed={FLOAT_SPEED} />

      <FloatingCan
        ref={can4Ref}
        flavor="vBluberry"
        floatSpeed={FLOAT_SPEED}
      />

      <FloatingCan
        ref={can5Ref}
        flavor="vPomegranate"
        floatSpeed={FLOAT_SPEED}
      />

      {/* <OrbitControls /> */}
      <Environment files="/hdr/lobby.hdr" environmentIntensity={1.5} />
    </group>
  );
}
