import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMax: 50,
      maxTitleLength: 50,
      title: "",
      noteta: "",
    };

    this.onInputTitleChangeHandler = this.onInputTitleChangeHandler.bind(this);
    this.onInputNotetaChangeHandler =
      this.onInputNotetaChangeHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onInputTitleChangeHandler(event) {
    let lencount = event.target.value.length;
    let maxLen = this.state.maxTitleLength;
    let res = maxLen - lencount;

    let inputTarget = document.querySelector("#input-title");
    inputTarget.setAttribute("maxLength", this.state.maxTitleLength);

    const msg = document.getElementById("msg");
    if (res <= 5) {
      msg.style.color = "red";
    } else {
      msg.style.color = "black";
    }

    this.setState((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
        showMax: res,
      };
    });
  }

  onInputNotetaChangeHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        noteta: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();

    const detectTitle = document.querySelector("#input-title");
    const detectNote = document.querySelector("#input-textarea");

    if (detectTitle.value.length < 1 || detectNote.value.length < 1) {
      alert("isi data dulu");
    } else {
      this.props.addNote(this.state);

      this.setState(() => {
        return {
          title: "",
          noteta: "",
          showMax: 50,
          maxTitleLength: 50,
        };
      });
    }
  }

  render() {
    const noteContent = "Input your note here...";
    return (
      <form className="form-input" onSubmit={this.onSubmitEventHandler}>
        <span id="msg">
          {this.state.showMax} - characters left (with spaces)
        </span>
        <br />
        <input
          type="text"
          id="input-title"
          placeholder="Note Title"
          value={this.state.title}
          onChange={this.onInputTitleChangeHandler}
        />
        <br />
        <textarea
          id="input-textarea"
          placeholder={noteContent}
          cols="30"
          rows="20"
          value={this.state.noteta}
          onChange={this.onInputNotetaChangeHandler}
        ></textarea>
        <br />
        <button type="submit" id="input-submit">
          New
        </button>
      </form>
    );
  }
}

export default NoteInput;
