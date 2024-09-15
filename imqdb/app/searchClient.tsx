"use client";

import React, { useState } from "react";
import SearchBar from "@/components/SearchBar";
import QuoteCard from "@/components/QuoteCard";
import axios from "axios";
import { useRouter } from "next/navigation";
const Search = () => {
  const [query, setquery] = useState("");
  const [language, setLanguage] = useState("English")
  const router = useRouter()

  const onSearch = (e: any) => {
    e.preventDefault();
    router.push(`/search?query=${query}&lang=${language}`);
  };

  return (
    <>
      <div className="flex flex-col w-full text-center my-5 px-2 md:px-0">
        <h1 className="sm:text-xl md:text-4xl font-bold">A place for your favourite movie quotes</h1>
        <p className="italic">Search for your favourite movie quotes</p>
      </div>
      <SearchBar query={query} setQuery={setquery} onSubmit={onSearch} language={language} setLanguage={setLanguage} />
    </>
  );
};

export default Search;
