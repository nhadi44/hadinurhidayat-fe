import React from "react";
import MetaData from "../components/metadata";
import Navbar from "../components/navbar";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}
const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <MetaData title={title} />
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
