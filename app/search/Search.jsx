"use client";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  function handleSearch(e) {
    e.preventDefault();
    setSearch("");
    router.push(`/search/${search}`);
  }

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={search}
        placeholder="Enter search term"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn">
        Search
      </button>
    </form>
  );
}

export default Search;
