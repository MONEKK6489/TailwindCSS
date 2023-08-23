import { PropsWithChildren } from "react";

import { Menu } from "../menu";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="layout">
      <Menu />
      <div className="content">
        <div>{children}</div>
      </div>
    </div>
  );
};
