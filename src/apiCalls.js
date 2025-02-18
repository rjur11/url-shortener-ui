const url = "http://localhost:3001/api/v1/urls";

export const getUrls = () => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.urls);
};

export const postUrls = ({ long_url, title }) => {
  fetch(url, {
    method: "POST",
    body: JSON.stringify({
      long_url: long_url,
      title: title,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

export const deleteUrls = ({ id }) => {
  fetch(`${url}/${id}`, {
    method: "DELETE",
    body: JSON.stringify({
      id: id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};
