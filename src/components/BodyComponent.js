import React from "react";

import NoteInput from "./NoteInput";
import SearchSection from "./SearchSection";
import NoteActiveList from "./NoteActiveList";
import NoteArchiveList from "./NoteArchiveList";
import FilterComponentList from "./FilterComponentList";

class BodyComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      notes,
      onDelete,
      onArchive,
      onSearch,
      addNote,
      dataFilter,
      isFilter,
    } = this.props;

    return (
      <div className="container">
        <h2 className="title-addnew">Add Note </h2>
        <NoteInput addNote={addNote} />
        <SearchSection onSearch={onSearch} />

        {!isFilter ? (
          <React.Fragment>
            <NoteActiveList
              notes={notes}
              onDelete={onDelete}
              onArchive={onArchive}
            />
            <NoteArchiveList
              notes={notes}
              onDelete={onDelete}
              onArchive={onArchive}
            />
          </React.Fragment>
        ) : (
          <FilterComponentList
            fnotes={dataFilter}
            onDelete={onDelete}
            onArchive={onArchive}
          />
        )}
      </div>
    );
  }
}

export default BodyComponent;
