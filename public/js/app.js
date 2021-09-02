const form = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector(".message-one");
const messageTwo = document.querySelector(".message-two");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const location = search.value;

  if (location) {
    messageOne.textContent = "Loading...";
    messageTwo.textContent = "";

    fetch(`http://localhost:9000/weather?address=${location}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
          messageOne.textContent = data.error;
        } else {
          messageOne.textContent = data.location;
          messageTwo.textContent = data.forecast.summary;
        }
      });
  } else {
    console.log("Please enter an address!");
  }
});
