import { useCallback, useState } from "react";

export const useDrawer = () => {
  const [visibility, setVisibility] = useState<boolean>(false);
  const [container, setContainer] = useState<null | React.ReactNode>(null);

  return {
    drawerState: useCallback(() => {
      return visibility;
    }, []),
    open: useCallback(() => {
      setVisibility(true);
      return true;
    }, []),
    close: useCallback(() => {
      setVisibility(false);
      return true;
    }, []),
    switch: useCallback(() => {
      setVisibility(!visibility);
      return true;
    }, []),
    setContent: useCallback((element: React.ReactNode) => {
      setContainer(element);
      return true;
    }, []),
    getContent: useCallback(() => {
      return container;
    }, []),
  };
};
