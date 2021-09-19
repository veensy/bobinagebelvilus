import { useState } from 'react';

export const useStickNav = () => {
  const [stick, setStick] = useState(false);
  const [sticky, setSticky] = useState(0);

  window.onscroll = function () {
    setStick(handleClassListSticky());
  };

  function handleClassListSticky() {
    const nav = document.getElementById('myNav');
    if (!nav) {
      return false;
    }
    const currentSticky = nav.offsetTop;
    if (currentSticky !== 0) {
      setSticky(currentSticky);
    }
    const main = document.getElementById('myMain');
    if (window.pageYOffset > sticky) {
      if (main) main.style.paddingTop = `${sticky - 32}px`;
      return true;
    } else {
      if (main) main.style.paddingTop = `32px`;
      return false;
    }
  }
  return { stick };
};
