import { useEffect, useState } from "react";

import useActiveThumb from "./useActiveThumb";

const useCarouselImage = (images) => {
  const [imageIndex, setImageIndex] = useState(0);

  const handleArrowSwitch = (direction) => {
    switch (direction) {
      case "next":
        setImageIndex((prev) => (prev + 1) % images.length);
        break;
      case "prev":
        setImageIndex((prev) => (prev + images.length - 1) % images.length);
        break;
      default:
        break;
    }
  };

  const handleThumbSwitch = (index) => {
    setImageIndex((prev) => (prev = index));
  };

  const { sincActiveStyles } = useActiveThumb();
  useEffect(() => {
    if (document.body.offsetWidth >= 1024) sincActiveStyles(imageIndex);
  }, [handleThumbSwitch, handleArrowSwitch]);

  let image = images[imageIndex];

  return {
    image,
    handleArrowSwitch,
    handleThumbSwitch,
  };
};

export default useCarouselImage;
