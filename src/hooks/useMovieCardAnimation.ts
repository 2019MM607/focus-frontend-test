import { useState } from 'react';

export const useMovieCardAnimation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const variants = {
    open: { y: '0px', opacity: 1 },
    closed: { y: '100%', opacity: 0 },
  };
  const handleToggleInfo = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, variants, handleToggleInfo };
};
