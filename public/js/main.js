import Number from "./class/Number";

const num = new Number();

function generate() {
  num
    .randomNumber()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

setInterval(generate, 5000);
