import React from "react";

const Footer = () => (
  <footer className="w-full py-4 bg-primary md:flex justify-between items-center text-xs text-secondary bottom-0 left-0 z-50 px-4">
    <span className="text-center">thanks for checking out my web portfolio</span><br className="md:hidden" />
    <span className="text-center">it is built with react, framer motion and react three fiber</span><br className="md:hidden" />
    <span className="text-center">check out the source code <a className="underline" href="https://github.com/coding-jack/3d-portfolio">here</a></span>
  </footer>
);

export default Footer;
