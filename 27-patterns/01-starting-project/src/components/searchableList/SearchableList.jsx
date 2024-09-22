import { useState } from "react";

// Render Props & Dynamic Key handling
export default function SearchableList({ items, itemsKeyFn, children }) {
  const lastChange = useRef();
  const [searchTerm, setSearchTerm] = useState();

  const searchResults = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );
  // Debouncing to improve performance
  function handleChange(event) {
    if (lastChange.current) {
      clearTimeout(lastChange.current);
    }

    lastChange.current = setTimeout(() => {
      lastChange.current = null;
      setSearchTerm(event.target.value);
    }, 5000);
  }

  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search" onChange={handleChange} />
      <ul>
        {searchResults.map((item) => (
          <li key={itemsKeyFn(item)}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
}
