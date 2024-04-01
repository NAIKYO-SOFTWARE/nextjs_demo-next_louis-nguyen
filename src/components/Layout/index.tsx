import Header from "./Header";
import Footer from "./Footer";
import { ReactNode, useEffect } from "react";

interface ILayout {
  children: ReactNode;
  isFooter: boolean;
  isHeader: boolean;
  title: string;
}

function Layout({ children, isFooter, isHeader, title }: ILayout) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div style={{ height: "720px" }}>
      {isHeader && <Header />}
      {children}
      {isFooter && <Footer />}
    </div>
  );
}

export default Layout;
