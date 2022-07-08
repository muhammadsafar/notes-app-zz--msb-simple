import React from "react";

class SearchSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      titleSearch: "",
    };

    this.onTitleSearchChangeEventHandler =
      this.onTitleSearchChangeEventHandler.bind(this);
  }

  onTitleSearchChangeEventHandler(event) {
    //controlled component
    this.setState(
      {
        titleSearch: event.target.value,
      },
      () => {
        console.log(
          `New state in ASYNC callback: ready send back to body with character ${this.state.titleSearch}`
        );

        //props ready
        this.props.onSearch(this.state.titleSearch);
      }
    );
  }

  render() {
    return (
      <div>
        <section className="search_section">
          <h2>Search note (Optional)</h2>
          <form id="searchNote">
            <input
              type="text"
              id="searchNoteTitle"
              placeholder="find by title"
              value={this.state.titleSearch}
              onChange={this.onTitleSearchChangeEventHandler}
            />
          </form>
        </section>
      </div>
    );
  }
}

export default SearchSection;
