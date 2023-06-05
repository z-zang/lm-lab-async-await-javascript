import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";
const jsonTypicodeError = "https://falseurl/throw-error";


const fetchData = (apiEndPoint) => {
  fetch(apiEndPoint)
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
};

// fetchData(jsonTypicode);


const fetchDataAsync = async (apiEndPoint) => {
  try {
    const response = await fetch(apiEndPoint);
    const responseJson = await response.json();
    console.log(responseJson)

  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

fetchDataAsync(jsonTypicode);
fetchDataAsync(jsonTypicodeError); // used to check error handling
