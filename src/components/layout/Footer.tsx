import React from "react";

const Footer: React.FC = () => (
  <footer className="w-full text-center py-4 text-xs text-white/60 backdrop-blur-lg bg-white/5 border-t border-white/10">
    © {new Date().getFullYear()} Prismxy. All rights reserved.
  </footer>
);

export default Footer;
