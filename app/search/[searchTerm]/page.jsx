import React from "react";

const search = async (searchTerm) => {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
  );
  throw new Error("Whops! there is an error");

  const data = await res.json();
  return data;
};

async function SearchResult({ params: { searchTerm } }) {
  const searchResults = await search(searchTerm);

  return (
    <div>
      <h3>You searched for the term {searchTerm}</h3>
      <ol>
        {searchResults.organic_results.map((result) => (
          <li>
            <p>{result.title}</p>
            <p>{result.snippet}</p>
            <br />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default SearchResult;
