import React, { Component } from "react";
import "./App.css";
import { getUrls } from "../../apiCalls";
import UrlContainer from "../UrlContainer/UrlContainer";
import UrlForm from "../UrlForm/UrlForm";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
    };
  }

  componentDidMount() {
    getUrls().then((urls) => this.setState({ urls: urls }));
  }

  removePost = (id) => {
    const updateUrls = this.state.urls.filter((post) => post.id !== id);
    this.setState({ urls: updateUrls });
  };

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm />
        </header>

        <UrlContainer urls={this.state.urls} removePost={this.removePost} />
      </main>
    );
  }
}

export default App;
