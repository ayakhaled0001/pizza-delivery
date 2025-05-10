import { useState } from "react";

function SearchOrder() {
  const [query, setQuery] = useState("");
  return (
    <input
      placeholder="search oder #"
      value={query}
      onChange={(e) => e.target.value}
    />
  );
}

export default SearchOrder;
