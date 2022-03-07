const url = "http://localhost:3001/api/v1/urls";

export const getUrls = () => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.urls);
};

export const postUrls = ({ id, long_url, short_url, title }) => {
  fetch(url, {
    method: "POST",
    body: JSON.stringify({
      id: id,
      long_url: long_url,
      short_url: short_url,
      title: title,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};
