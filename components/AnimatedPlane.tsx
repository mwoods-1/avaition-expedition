'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './AnimatedPlane.module.css';

export default function AnimatedPlane() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setIsVisible(true);
  }, []);

  return (
    <div className={styles.planeContainer}>
      {/* Animated speed lines / swoosh effect */}
      <div className={`${styles.swooshLine} ${styles.line1}`}></div>
      <div className={`${styles.swooshLine} ${styles.line2}`}></div>
      <div className={`${styles.swooshLine} ${styles.line3}`}></div>
      <div className={`${styles.swooshLine} ${styles.line4}`}></div>

      {/* Glow effect */}
      <div className={styles.glowEffect}></div>

      {/* The plane image */}
      <div className={`${styles.planeWrapper} ${isVisible ? styles.animate : ''}`}>
        <Image
          src="/images/plane.png"
          alt="Flying plane"
          width={280}
          height={180}
          priority
          className={styles.planeImage}
        />
      </div>

      {/* Trail effect circles */}
      <div className={styles.trailContainer}>
        <div className={`${styles.trailDot} ${styles.dot1}`}></div>
        <div className={`${styles.trailDot} ${styles.dot2}`}></div>
        <div className={`${styles.trailDot} ${styles.dot3}`}></div>
      </div>
    </div>
  );
}
