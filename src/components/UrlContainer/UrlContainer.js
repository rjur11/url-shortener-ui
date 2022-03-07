import React from "react";
import "./UrlContainer.css";
import { deleteUrls } from "../../apiCalls";

const UrlContainer = ({ urls, removePost }) => {
  const urlEls = urls.map((url) => {
    return (
      <div className="url">
        <h3 className="card-title">{url.title}</h3>
        <a className="link" href={url.short_url} target="blank">
          {url.short_url}
        </a>
        <p>{url.long_url}</p>
        <button
          onClick={() => {
            removePost(url.id);
            deleteUrls(url.id);
          }}
        >
          X
        </button>
      </div>
    );
  });

  return (
    <section>
      {urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p>}
    </section>
  );
};

export default UrlContainer;
