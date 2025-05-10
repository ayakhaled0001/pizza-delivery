import { useState } from "react";

function SearchOrder() {
  const [query, setQuery] = useState("");
  return (
    <form>
      <input
        placeholder="search oder #"
        value={query}
        onChange={(e) => e.target.value}
      />
    </form>
  );
}

export default SearchOrder;
