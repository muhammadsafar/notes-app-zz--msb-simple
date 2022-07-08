import React from "react";
import HeaderComponent from "./HeaderComponent";
import Notif from "./Notif";
import BodyComponent from "./BodyComponent";
import Footer from "./Footer";

import { getInitialData } from "../utils/index";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      notesFilter: [],
      searchTerm: "",
      filterActive: false,
    };

    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onSubmitInputHandler = this.onSubmitInputHandler.bind(this);
    this.onHandlerNotifBtn = this.onHandlerNotifBtn.bind(this);
  }

  alertInfo(msg) {
    document.getElementById("messageAlerts").innerText = msg;
    const alertDiv = document.querySelector(".alert");
    alertDiv.style.visibility = "visible";
    setTimeout(function () {
      alertDiv.style.visibility = "hidden";
    }, 3000);
  }

  onHandlerNotifBtn(event) {
    const its = document.querySelector(".closebtn");
    its.parentElement.style.visibility = "hidden";
  }

  onDeleteHandler(id) {
    if (window.confirm("Delete note?")) {
      const notes = this.state.notes.filter((item) => item.id !== id);
      const notesFilter = this.state.notesFilter.filter(
        (item) => item.id !== id
      );

      this.setState({ notes, notesFilter });
      this.alertInfo("Delete note...");

    }
  }

  onArchiveHandler(id) {
    console.log("reverse");

    let updatedList = this.state.notes.map((item) => {
      if (item.id == id) {
        return { ...item, archived: !item.archived }; //gets everything that was already in item, and updates "archive if !archive"
      }
      return item; // else return unmodified item
    });

    let updatedListFilter = this.state.notesFilter.map((item) => {
      if (item.id == id) {
        return { ...item, archived: !item.archived }; //gets everything that was already in item, and updates "archive if !archive"
      }
      return item; // else return unmodified item
    });

    this.setState(() => {
      return {
        notes: updatedList,
        notesFilter: updatedListFilter,
      }; // set state to new object with updated list
    });

    this.alertInfo("Move note...");
  }

  onSearchHandler(title) {
    console.log(`binggo search in parent for ${title}`);
    const findNoteLikeTitle = this.state.notes.filter(
      (nots) => nots.title.toLowerCase().indexOf(title.toLowerCase()) > -1
    );
    console.log(`data mirip: ${findNoteLikeTitle}`);

    // this.setState({ count: this.state.count + 1 })

    let getSearchInput = document.querySelector("#searchNoteTitle");
    if (getSearchInput.value.length > 0) {
      console.log(`cari`);
      this.setState((prevState) => {
        return {
          notesFilter: findNoteLikeTitle,
          filterActive: true,
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          filterActive: false,
        };
      });
    }
  }

  onSubmitInputHandler({ title, noteta }) {
    console.log(`sumit for input ready save ${title} - ${noteta}`);

    if (window.confirm("Add new note's ?")) {
      this.setState((prevState) => {
        return {
          notes: [
            ...prevState.notes,
            {
              id: +new Date(),
              title,
              body: noteta,
              createdAt: new Date(),
              archived: false,
            },
          ],
        };
      });

      this.alertInfo("Add note...");
    }
  }

  render() {
    return (
      <>
        <HeaderComponent />
        <Notif onClose={this.onHandlerNotifBtn} />
        <BodyComponent
          notes={this.state.notes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
          onSearch={this.onSearchHandler}
          addNote={this.onSubmitInputHandler}
          dataFilter={this.state.notesFilter}
          isFilter={this.state.filterActive}
        />
        <Footer />
      </>
    );
  }
}

export default NoteApp;
