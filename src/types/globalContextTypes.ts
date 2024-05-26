export interface GlobalState {
  isScrolled: boolean;
  isMobile: boolean;
}

export interface GlobalContextProps {
  state: GlobalState;
  navbarScrolled: (isScrolled: boolean) => void;
  mobileState: (isMobile: boolean) => void;
}
