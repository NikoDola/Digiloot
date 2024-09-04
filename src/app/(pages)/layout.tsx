// app/(profile)/layout.tsx
import React from 'react';
import { ReactNode } from 'react';
import NavMenuFooter from '@/components/NavMenuFooter'
import Bouncer from '@/components/Bouncer'

interface LayoutProps {
  children: ReactNode;
}

const ProfileLayout: React.FC<LayoutProps> = ({ children }) => {
  
  return (
    <div>
      <Bouncer/>
      <main>{children}</main>
      <footer>
        <NavMenuFooter />
      </footer>
    </div>
  );
};

export default ProfileLayout;
