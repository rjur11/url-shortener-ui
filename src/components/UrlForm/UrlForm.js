import React, { Component } from "react";
import { postUrls } from "../../apiCalls";

class UrlForm extends Component {
  // props = urls
  constructor({ props }) {
    super();
    this.props = props;
    this.state = {
      title: "",
      urlToShorten: "",
    };
  }

  handleNameChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name);
  };

  handleUrlChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    postUrls({
      long_url: this.state.urlToShorten,
      title: this.state.title,
    });
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({ title: "", urlToShorten: "" });
  };

  render() {
    return (
      <form>
        <input
          className="title-input"
          type="text"
          placeholder="Title..."
          name="title"
          value={this.state.title}
          onChange={(e) => this.handleNameChange(e)}
        />

        <input
          className="url-input"
          type="text"
          placeholder="URL to Shorten..."
          name="urlToShorten"
          value={this.state.urlToShorten}
          onChange={(e) => this.handleUrlChange(e)}
        />

        <button
          className="shorten"
          onClick={(e) => {
            this.handleSubmit(e);
          }}
        >
          Shorten Please!
        </button>
      </form>
    );
  }
}

export default UrlForm;
