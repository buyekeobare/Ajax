function showComments(response) {
  console.log(response.data.email);
}

let apiUrl = "https://jsonplaceholder.typicode.com/comments/1";

let comments = axios.get(apiUrl).then(showComments);


