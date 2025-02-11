import React, { useEffect } from "react";
import SvgStar from "./SvgStar";
import SvgStarMultiple from "./SvgStarMultiple";

const SparkleText = ({
  text,
  style,
}: {
  text: string;
  style?: React.CSSProperties;
}) => {
  useEffect(() => {
    let index = 0;
    const interval = 1000;
    const rand = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min + 1)) + min;
    const stars = document.getElementsByClassName("magic-star");

    const animate = (star: HTMLElement) => {
      star.style.setProperty("--star-left", `${rand(-10, 120)}%`);
      star.style.setProperty("--star-top", `${rand(-10, 50)}%`);
      star.style.animation = "none";
      const height = (star as HTMLElement).offsetHeight;
      console.log(height);
      star.style.animation = "";
    };
    for (const star of Array.from(stars)) {
      setTimeout(
        () => {
          animate(star as HTMLElement);
          setInterval(() => {
            animate(star as HTMLElement);
          }, 1000);
        },
        index++ * (interval / 3),
      );
    }
  }, []);

  return (
    <h1 style={style}>
      <span className="magic">
        <SvgStar />
        <SvgStar />
        <SvgStar />
        <span className="magic-text">{text}</span>
      </span>{" "}
    </h1>
  );
};

export default SparkleText;
