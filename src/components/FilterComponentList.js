import React from "react";
import FilterComponentItem from "./FilterComponentItem";
import { showFormattedDate } from "../utils/index";

function FilterComponentList({ fnotes, onDelete, onArchive }) {
  const datas = fnotes;

  if (datas.length === 0) {
    return (
      <div className="note-container">
        <h4 className="note-head">Search</h4>
        <p className="no-data-fetch">Not data found</p>
      </div>
    );
  } else {
    return (
      <div className="note-container">
        <h4 className="note-head">Found</h4>
        <div className="note-area">
          {datas.map((note) => (
            <FilterComponentItem
              key={note.id}
              id={note.id}
              ds={showFormattedDate(note.createdAt)}
              onDelete={onDelete}
              onArchive={onArchive}
              {...note}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default FilterComponentList;
