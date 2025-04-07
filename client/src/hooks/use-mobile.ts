
import { createContext, useContext } from "react";

export const SidebarContext = createContext({
  open: false,
  animate: true,
});

export const useSidebar = () => {
  return useContext(SidebarContext);
};

