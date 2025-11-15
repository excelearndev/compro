/** @format */

import { Search } from "lucide-react";

interface SearchBarProps {
  onSearchChange: (value: string) => void;

  searchValue: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearchChange,

  searchValue,
}) => {
  return (
    <div className="w-full bg-white/50 backdrop-blur-sm rounded-full shadow-lg px-6 py-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center flex-1">
          <Search />
          <input
            type="text"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-4 py-2 text-white placeholder-white bg-transparent border-none outline-none focus:ring-0"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
