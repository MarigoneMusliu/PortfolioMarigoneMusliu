"use client";

import { useEffect, useState } from "react";

const AnimationLottie = ({ animationPath, width }) => {
  const [animationData, setAnimationData] = useState(null);
  const [LottieComponent, setLottieComponent] = useState(null);

  useEffect(() => {
    let mounted = true;
    if (!animationPath) return;

    fetch(animationPath)
      .then((res) => res.json())
      .then((data) => {
        if (!mounted) return;
        setAnimationData(data);
      })
      .catch(() => setAnimationData(null));

    import("lottie-react")
      .then((mod) => {
        if (!mounted) return;
        setLottieComponent(() => mod.default || mod);
      })
      .catch(() => {});

    return () => {
      mounted = false;
    };
  }, [animationPath]);

  if (!animationData || !LottieComponent) return null;

  return (
    <LottieComponent
      animationData={animationData}
      loop
      autoplay
      style={{ width: width || "95%" }}
    />
  );
};

export default AnimationLottie;
