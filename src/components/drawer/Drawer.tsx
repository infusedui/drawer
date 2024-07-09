import React from "react";
import "./Drawer.scss";
import { useDrawer } from "../../hooks/drawer/Drawer.hooks";
import { DrawerProps } from "./Drawer.types";

const Drawer: React.FC<DrawerProps> = ({ drawerContainer, children }) => {
  const { drawerState, close } = useDrawer();

  return (
    <div className={`drawer-root ${drawerState() ? "open" : "close"}`}>
      <div className="drawer-page">{children}</div>
      <div className="drawer-container-root">
        <div className="drawer-background" onClick={close}></div>
        <div className="drawer-container">{drawerContainer}</div>
      </div>
    </div>
  );
};

export default Drawer;
