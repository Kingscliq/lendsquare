import React, { ReactNode, useState } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [openMobileNav, setOpenMobileNav] = useState<boolean>(false);
  return (
    <section>
      {/* desktop sidebar */}
      <SideNav />
      {/* mobile sidebar */}
      <MobileSideNav
        openMobileNav={openMobileNav}
        setOpenMobileNav={() => setOpenMobileNav(false)}
      />
      {/* main content */}
      <main className="h-screen lg:ml-72">
        <Header openNav={() => setOpenMobileNav(true)} />
        <section className="py-5 px-5 md:px-16 md:py-10 xl:px-20">
          {children}
        </section>
      </main>
    </section>
  );
};
export default Layout;
