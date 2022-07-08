import React from "react";
import NoteArchiveItem from "./NoteArchiveItem";
import { showFormattedDate } from "../utils/index";

function NoteArchiveList({ notes, onDelete, onArchive }) {
  const datas = notes.filter((note) => note.archived == true);

  if (datas.length === 0) {
    return (
      <div className="note-container">
        <h4 className="note-head">Archived</h4>
        <p className="no-data-fetch">No data fetch</p>
      </div>
    );
  } else {
    return (
      <div className="note-container">
        <h4 className="note-head">Archived</h4>
        <div className="note-area">
          {datas.map((note) => (
            <NoteArchiveItem
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

export default NoteArchiveList;
