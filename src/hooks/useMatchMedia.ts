import { useEffect, useLayoutEffect, useState } from 'react';

const useIsomorphicLayoutEffect =
  typeof document !== 'undefined' ? useLayoutEffect : useEffect;

export const useMatchMedia = (
  mediaQueryString: string,
  initialState = false
) => {
  const [state, setState] = useState(initialState);

  useIsomorphicLayoutEffect(() => {
    if (!window?.matchMedia) {
      return;
    }

    const mediaQueryList = window.matchMedia(mediaQueryString);

    const updateState = () => {
      setState(mediaQueryList.matches);
    };
    updateState();

    if (typeof mediaQueryList.addEventListener !== 'undefined') {
      mediaQueryList.addEventListener('change', updateState);
    } else {
      mediaQueryList.addListener(updateState);
    }

    return () => {
      if (typeof mediaQueryList.removeEventListener !== 'undefined') {
        mediaQueryList.removeEventListener('change', updateState);
      } else {
        mediaQueryList.removeListener(updateState);
      }
    };
  }, [mediaQueryString]);

  return state;
};
