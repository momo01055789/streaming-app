import { Suspense } from "react";
import Navbar from "./_componentes/navbar";
import { Sidebar, SidebarSkelelton } from "./_componentes/sidebar";
import { Container } from "./_componentes/container";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Suspense fallback={<SidebarSkelelton />}>
          <Sidebar />
        </Suspense>
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default BrowseLayout;
