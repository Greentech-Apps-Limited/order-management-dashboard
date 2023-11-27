import { useRouter } from 'next/router';
import { createContext, useEffect, useMemo, useState } from 'react';

export const UtilityContext = createContext();

export const UtilityProvider = ({ children }) => {
  const { asPath } = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) setIsOpen(false);
  }, [asPath]);

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') setIsOpen(false);
  };
  const handleNavLinkClick = () => {
    if (isOpen) setIsOpen(false);
  };

  const contextValue = useMemo(() => {
    return {
      isOpen,
      setIsOpen,
      toggleSidebar,
      handleKeyDown,
      handleNavLinkClick,
    };
  }, [isOpen, setIsOpen]);

  return <UtilityContext.Provider value={contextValue}>{children}</UtilityContext.Provider>;
};
