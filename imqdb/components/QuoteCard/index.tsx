"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { Clapperboard } from 'lucide-react';

export default function QuoteCard() {
  const params = useSearchParams();
  const quote = params.get("query");
  const lang = params.get("lang");
  const [quotes, setQuotes] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false); // New state to handle error

  useEffect(() => {
    fetchQuotes();
  }, [params, quote]);

  const fetchQuotes = async () => {
    setLoading(true);
    setError(false); // Reset error before fetching
    try {
      const req = await axios.post("/api/search", { quote: quote, language: lang });
      setQuotes(req.data.data);
      if (req.data.data.length === 0) {
        setError(true); // Set error if no quotes are found
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true); // Handle error case
    }
  };


  if (quote?.length === 0) return null;

  return (
    <div className="flex flex-col gap-4 lg:p-4 p-2 rounded-lg m-2 w-full md:w-3/5">
      <div className="lg:text-2xl md:text-xl text-lg lg:p-3 p-1 font-black text-gray-700">
        Top Results for {quote}
      </div>

      {loading && <div>Loading...</div>}

      {!loading && quotes.length === 0 && !error && (
        <div className="text-center text-gray-500 font-semibold">
          No data found for {quote}.
        </div>
      )}

      {error && (
        <div className="text-center text-gray-500 font-semibold">
          No data found for {quote}.
        </div>
      )}

      {quotes.map((quote: any) => (
        <div
          key={quote.id}
          className="flex flex-col md:flex-row items-center justify-between w-full p-2 px-6 border-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-all duration-300 ease-in-out"
        >
          <div className="flex items-center gap-5 w-full md:w-4/5">
            <Clapperboard className="w-6 h-6 text-gray-700" />
            <div className="text-sm flex flex-col gap-2 text-gray-600 w-full">
              <span>{quote.quote}</span>
              <span className="text-xs text-gray-500">{quote.timestamps}</span>
            </div>
          </div>
          <div className="text-sm lg:text-lg leading-3 text-gray-700 font-bold text-right w-full md:w-1/5 mt-2 md:mt-0">
            {quote.movie}
          </div>
        </div>
      ))}
    </div>
  );
}
