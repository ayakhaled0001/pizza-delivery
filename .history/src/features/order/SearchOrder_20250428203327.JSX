import { useState } from "react";

function SearchOrder() {
  const [query, setQuery] = useState("");
  return <input placeholder="search oder #" value={query} />;
}

export default SearchOrder;
