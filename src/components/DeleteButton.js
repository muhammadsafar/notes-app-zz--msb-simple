import React from "react";

function DeleteButton({ id, onDelete }) {
  return (
    <button className="flex_child btn_del" id={id} onClick={() => onDelete(id)}>
      Delete
    </button>
  );
}

export default DeleteButton;
