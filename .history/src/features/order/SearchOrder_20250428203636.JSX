import { useState } from "react";

function SearchOrder() {
  const [query, setQuery] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
  }
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
