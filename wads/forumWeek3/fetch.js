// fetch allows us to make network requests and load the information/responses in webpages

fetch("./account.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
