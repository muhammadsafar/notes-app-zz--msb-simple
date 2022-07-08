import React from "react";

function ReverseButton({ archived, id, onArchive }) {
  let btn = "Archive";
  if (archived) btn = "Active";

  return (
    <button
      className="flex_child btn_archive"
      id={id}
      onClick={() => onArchive(id)}
    >
      {btn}
    </button>
  );
}

export default ReverseButton;
