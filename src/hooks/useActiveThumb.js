const useActiveThumb = () => {

  const sincActiveStyles = (selectedIndex) => {
    removeAllActiveStyles()
    const thumbs = document.querySelectorAll(`.thumbnail`)
    if (document.querySelectorAll(`.thumbs-container`).length > 1) {
      const mainThumb = selectedIndex
      const modalThumb = selectedIndex + (thumbs.length / 2)
      addActiveStyles(thumbs[mainThumb])
      addActiveStyles(thumbs[modalThumb])
    } else {
      addActiveStyles(thumbs[selectedIndex])
    }
  }

  const addActiveStyles = (thumbElement) => {
    thumbElement.classList.add("selected-thumb");
  };

  const removeAllActiveStyles = () => {
    document.querySelectorAll(`.thumbnail`).forEach((thumb) => {
      if (thumb.classList.contains("selected-thumb")) {
        thumb.classList.remove("selected-thumb");
      }
    });
  };

  return { sincActiveStyles, addActiveStyles };
};

export default useActiveThumb;
