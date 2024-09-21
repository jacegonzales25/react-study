import { useState } from "react";

// Render Props & Dynamic Key handling
export default function SearchableList({ items, itemsKeyFn, children }) {
  const [searchTerm, setSearchTerm] = useState();

  const searchResults = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleChange(event) {
    setSearchTerm(event.target.value);
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
