// components/MobileMenu.tsx
'use client';

import { motion, Variants } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const variants = {
  open: {
    x: 0,
  },
  close: {
    x: '100%',
  },
} satisfies Variants;

type MobileMenuProps = {} & React.PropsWithChildren;

const MobileMenu = ({ children }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="items-center flex sm:hidden">
      <button onClick={handleToggle} aria-label="Toggle menu">
        <Menu className="h-8 w-8" />
      </button>
      <motion.div
        variants={variants}
        animate={isOpen ? 'open' : 'close'}
        transition={{ duration: 0.3 }}
        className="fixed bg-background text-foreground inset-0 z-50 flex flex-col items-center justify-center space-y-8"
      >
        <button onClick={handleToggle} className="absolute top-4 right-4" aria-label="Close menu">
          <X className="h-8 w-8" />
        </button>
        <nav className="text-xl space-y-4 block" onClick={() => setIsOpen(false)}>
          {children}
        </nav>
      </motion.div>
    </div>
  );
};

export default MobileMenu;
