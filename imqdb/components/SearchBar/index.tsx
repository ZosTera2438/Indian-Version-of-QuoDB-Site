"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";

export default function SearchBar({ query, setQuery, onSubmit, language, setLanguage }: any) {

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  return (
    <form onSubmit={onSubmit} className="bg-white mx-auto max-w-7xl w-full items-center flex flex-col rounded-full shadow-lg p-2 mb-5">
      <div className="flex w-full">
        <select
          value={language}
          onChange={handleLanguageChange}
          className="font-bold hidden md:block rounded-full w-24 py-2 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs mr-4"
        >
          <option value="Auto">Auto</option>
          <option value="English">English</option>
          <option value="Bengali">Bengali</option>
          <option value="Tamil">Tamil</option>
          <option value="Telegu">Telegu</option>
          <option value="Hindi">Hindi</option>
        </select>

        <Input
          className="font-bold rounded-full w-full py-4 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="bg-gray-600 p-2 hover:bg-blue-400 cursor-pointer mx-2 rounded-full" onClick={onSubmit}>
          <svg
            className="w-6 h-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      <select
        value={language}
        onChange={handleLanguageChange}
        className="font-bold md:hidden block rounded-full w-24 py-2 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs mr-4"
      >
        <option value="English">English</option>
        <option value="Bengali">Bengali</option>
        <option value="Tamil">Tamil</option>
        <option value="Telegu">Telegu</option>
        <option value="Hindi">Hindi</option>
      </select>
    </form>
  );
}
