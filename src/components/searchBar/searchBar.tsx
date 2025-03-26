"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Hook para redirecionamento no Next.js
import { SearchBarProps } from "./searchBarInterface";

export default function SearchBar({
  placeholder = "Pesquisar...",
  isVisible = true,
}: SearchBarProps) {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter(); // Hook para redirecionar

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchValue.trim()) {
      router.push(`/searchPage?query=${encodeURIComponent(searchValue)}`);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className={`overflow-hidden transition-all duration-500 ${
        isVisible ? "w-64 opacity-100" : "w-0 opacity-0"
      }`}
    >
      <input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </form>
  );
}
