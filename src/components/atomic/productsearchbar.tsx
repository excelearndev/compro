/** @format */

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search } from "lucide-react";

interface SearchBarProps {
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string | undefined) => void;
  onSortChange: (value: "asc" | "desc") => void;
  searchValue: string;
  categoryValue?: string;
  sortValue: "asc" | "desc";
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearchChange,
  onCategoryChange,
  onSortChange,
  searchValue,
  categoryValue,
  sortValue,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    categoryValue
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const categories = [
    { label: "IT Training", value: "IT_TRAINING" },
    { label: "IT Consultant", value: "IT_CONSULTANT" },
    { label: "IT Support", value: "IT_SUPPORT" },
  ];

  const handleCategoryClick = (value: string) => {
    if (selectedCategory === value) {
      setSelectedCategory(undefined);
      onCategoryChange(undefined);
    } else {
      setSelectedCategory(value);
      onCategoryChange(value);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSortChange = (value: "asc" | "desc") => {
    onSortChange(value);
    setIsDropdownOpen(false);
  };

  const getSortLabel = () => {
    return sortValue === "desc" ? "Newest First" : "Oldest First";
  };

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

        {/* Category Pills */}
        <div className="flex items-center gap-2">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => handleCategoryClick(category.value)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === category.value
                  ? "bg-[#00AEEF] text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-300 hover:border-[#00AEEF] hover:text-[#00AEEF]"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="relative z-50" ref={dropdownRef}>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsDropdownOpen(!isDropdownOpen);
            }}
            className="flex items-center gap-2 px-6 py-2 bg-white text-gray-600 rounded-full border border-gray-300 hover:border-cyan-500 hover:text-cyan-500 transition-colors duration-200 whitespace-nowrap"
          >
            <span className="text-sm font-medium">{getSortLabel()}y</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleSortChange("desc");
                }}
                className={`w-full px-4 py-3 text-left text-sm transition-colors flex items-center justify-between cursor-pointer ${
                  sortValue === "desc"
                    ? "text-[#00AEEF] font-medium bg-[#00AEEF50]"
                    : "text-[#00AEEF] hover:bg-gray-50"
                }`}
              >
                <span>Newest First</span>
                {sortValue === "desc" && (
                  <span className="text-[#00AEEF]">✓</span>
                )}
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleSortChange("asc");
                }}
                className={`w-full px-4 py-3 text-left text-sm transition-colors flex items-center justify-between cursor-pointer ${
                  sortValue === "asc"
                    ? "text-[#00AEEF] font-medium bg-[#00AEEF50]"
                    : "text-[#00AEEF] hover:bg-gray-50"
                }`}
              >
                <span>Oldest First</span>
                {sortValue === "asc" && (
                  <span className="text-[#00AEEF]">✓</span>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
