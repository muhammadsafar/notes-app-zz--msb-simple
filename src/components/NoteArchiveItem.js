import React from "react";
import DeleteButton from "./DeleteButton";
import ReverseButton from "./ReverseButton";

function NoteArchiveItem({ archived, body, ds, id, title, onArchive, onDelete }) {
  return (
    <div className="card">
      <h4>{title}</h4>
      <p className="note-date">{ds}</p>
      <p className="notice">{body}</p>
      <div className="flex_container_action">
        <DeleteButton id={id} onDelete={onDelete} />
        <ReverseButton id={id} archived={archived} onArchive={onArchive} />
      </div>
    </div>
  );
}

export default NoteArchiveItem;
