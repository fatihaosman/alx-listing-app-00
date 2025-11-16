import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t mt-8">
      <div className="max-w-7xl mx-auto p-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} alx-listing · Built with Next.js & Tailwind
      </div>
    </footer>
  );
};

export default Footer;
