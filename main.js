let inputId = document.querySelector("#input-id");
let btn = document.querySelectorAll(".btn");
let string = "";
let arrbtn = Array.from(btn);
arrbtn.forEach((index) => {
  index.addEventListener("click", (e) => {
    let valuee = e.target.innerHTML;
    if (valuee == "=") {
      string = eval(string);
    } else if (valuee == "Ac") {
      string = "";
    } else if (valuee == "del") {
      string = string.substring(0, string.length - 1);
    } else {
      string += valuee;
    }
    inputId.value = string;
  });
});
