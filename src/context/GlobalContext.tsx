import { createContext, useState, ReactNode, useMemo } from "react";
import { GlobalState, GlobalContextProps } from "../types/globalContextTypes";

const initialState: GlobalState = {
  isScrolled: false,
  isMobile: true,
};

const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<GlobalState>(initialState);

  const navbarScrolled = (isScrolled: boolean) => {
    setState((prevState) => ({ ...prevState, isScrolled }));
  };

  const mobileState = (isMobile: boolean) => {
    setState((prevState) => ({ ...prevState, isMobile }));
  };

  const value = useMemo(
    () => ({
      state,
      navbarScrolled,
      mobileState,
    }),
    [state]
  );

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
