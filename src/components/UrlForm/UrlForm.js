import React, { Component } from "react";
import { postUrls } from "../../apiCalls";

class UrlForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      title: "",
      urlToShorten: "",
    };
  }

  handleTitleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log("title", e.target.value);
    console.log(e.target.value);
  };

  handleUrlChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log("url", e.target.value);
  };

  handleSubmit = (e) => {
    // e.preventDefault();
    postUrls({
      id: Date.now(),
      long_url: this.state.urlToShorten,
      short_url: `http://localhost:3001/useshorturl/${Date.now()}`,
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
          type="text"
          placeholder="Title..."
          name="title"
          value={this.state.title}
          onChange={(e) => this.handleTitleChange(e)}
        />

        <input
          type="text"
          placeholder="URL to Shorten..."
          name="url"
          value={this.state.urlToShorten}
          onChange={(e) => this.handleUrlChange(e)}
        />

        <button onClick={(e) => this.handleSubmit(e)}>Shorten Please!</button>
      </form>
    );
  }
}

export default UrlForm;
