import React from "react";

import { showFormattedDate } from "../utils/index";
import NoteActiveItem from "./NoteActiveItem";

function NoteActiveList({ notes, onDelete, onArchive }) {
  // const { onArchive, onDelete, notes } = this.props;

  const datas = notes.filter((note) => note.archived == false);

  if (datas.length === 0) {
    return (
      <div className="note-container">
        <h4 className="note-head">Note's Active</h4>
        <p className="no-data-fetch">No data fetch</p>
      </div>
    );
  } else {
    return (
      <div className="note-container">
        <h4 className="note-head">Note's Active</h4>
        <div className="note-area">
          {datas.map((note) => (
            <NoteActiveItem
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

export default NoteActiveList;
