import { ReactElement, useEffect, useState } from "react";

interface CarouselProps {
  slides: Array<ReactElement>;
}

function Carousel({ slides }: CarouselProps) {
  const [previous, setPrevious] = useState(0);
  const [active, setActive] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const switchSlide = async () => {
    await new Promise((r) => setTimeout(r, 3000));
    setTransitioning(false);
    setPrevious(active);
    setActive((active + 1) % slides.length);
    await new Promise((r) => setTimeout(r, 200));
    setTransitioning(true);
  };

  useEffect(() => {
    switchSlide();
  }, [active]);

  return (
    <div className="w-full bg-stone-800 dark:bg-stone-200 relative overflow-hidden">
      {slides[previous]}
      <div
        className={
          "absolute w-full top-0 " +
          (transitioning ? "transition-all left-0" : "left-full")
        }
      >
        {slides[active]}
      </div>
    </div>
  );
}

export default Carousel;
