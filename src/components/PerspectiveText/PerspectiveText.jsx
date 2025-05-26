"use client";
import React, { useRef } from "react";
import styles from "./Home.module.css";
import Text3d from "./Text3d";

export default function PerspectiveText() {
  const plane = useRef(null);
  const maxRotate = 45;

  const manageMouseMove = (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    const perspective = window.innerWidth * 4;
    const rotateX = maxRotate * x - maxRotate / 2;
    const rotateY = (maxRotate * y - maxRotate / 2) * -1;

    if (plane.current) {
      plane.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
    }
  };

  return (
    <div onMouseMove={manageMouseMove} className={styles.container}>
      <div ref={plane} className={styles.body}>
        <Text3d primary="Ruwina" secondary="Ranasinghe" />
      </div>
    </div>
  );
}
