import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">alx-listing</div>
        <div className="flex items-center gap-3">
          <input
            className="border rounded px-3 py-1 hidden sm:block"
            placeholder="Search properties..."
            aria-label="search"
          />
          <nav className="flex gap-2">
            <button className="px-3 py-1 rounded hover:bg-gray-100">Rooms</button>
            <button className="px-3 py-1 rounded hover:bg-gray-100">Mansion</button>
            <button className="px-3 py-1 rounded hover:bg-gray-100">Countryside</button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

