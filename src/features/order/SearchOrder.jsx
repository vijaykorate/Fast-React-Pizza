import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search Order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-full px-4 py2 text-sm placeholder:text-stone-400
         w-28 sm:w-64 transition-all duratioon-300 sm:focus:w-72 focus:outline-none-yellow-500 
        focus:ring-opacity-50 "
      />
    </form>
  );
}

export default SearchOrder;
