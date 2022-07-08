import React from "react";
import DeleteButton from "./DeleteButton";
import ReverseButton from "./ReverseButton";

function NoteActiveItem({archived, body, ds, id, title, onDelete, onArchive }) {
  return (
    <div className="card">
      <h4>{title}</h4>
      <p className="note-date">{ds}</p>
      <p className="notice">{body}</p>
      <div className="flex_container_action">
        <DeleteButton id={id} onDelete={onDelete} />
        <ReverseButton id={id} onArchive={onArchive} />
      </div>
    </div>
  );
}

export default NoteActiveItem;
