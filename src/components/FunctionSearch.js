import React from "react";
import { useState } from "react";
import { getInitialData } from "../utils/index";

function FunctionSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <input
        type="text"
        placeholder="search"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />

      {getInitialData()
        .filter((item) => {
          if (searchTerm == "") {
            return item;
          } else if (
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return item;
          }
        })
        .map((item) => {
          return (
            <div className="data">
              <p>{item.title}</p>
            </div>
          );
        })}
    </div>
  );
}

export default FunctionSearch;
