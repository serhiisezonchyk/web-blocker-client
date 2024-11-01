import React from 'react';
import Logo from './logo';

interface HeaderProps {
  right?: React.ReactNode;
}

const Header = ({ right }: HeaderProps) => (
  <header className="fixed top-0 w-full border-b-[1px] border-b-border bg-background z-10">
    <div className="container mx-auto">
      <div className="flex justify-between  py-5">
        <Logo />
        {right}
      </div>
    </div>
  </header>
);

export default Header;
