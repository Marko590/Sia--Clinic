import React, { useEffect, useState } from "react";
import "./styles.css";
import { servicesKeys } from "../lib/data";
import { Box, Typography } from "@mui/material";
import ServiceItem from "./ServiceItem";
import { useSwipeable } from "react-swipeable";

const Carousel = () => {
  const [currentSlide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(currentSlide == servicesKeys.length - 1 ? 0 : currentSlide + 1);
  };
  const previousSlide = () => {
    setSlide(currentSlide == 0 ? servicesKeys.length - 1 : currentSlide - 1);
  };
  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: previousSlide,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });
  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [currentSlide]);
  return (
    <Box sx={{ width: "100%", height: 400 }} {...handlers}>
      <Box className="carousel">
        {servicesKeys.map((slide: string, idx: number) => {
          return (
            <ServiceItem
              key={slide}
              serviceKey={slide}
              sx={{
                opacity: currentSlide === idx ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
                position: "absolute",
              }}
            />
          );
        })}

        <Typography className="indicators">
          {servicesKeys.map((_, idx) => {
            return (
              <button
                onClick={() => {
                  setSlide(idx);
                }}
                className={
                  currentSlide === idx
                    ? "indicator"
                    : "indicator indicator-inactive"
                }
                key={idx}
              ></button>
            );
          })}
        </Typography>
      </Box>
    </Box>
  );
};

export default Carousel;
