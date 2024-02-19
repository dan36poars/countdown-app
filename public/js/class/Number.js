export default class Number {
  number;
  constructor() {
    this.number = 0;
  }

  async randomNumber() {
    return (
      (await new Promise()) <
      number >
      ((resolve, reject) => {
        const randomNumber = Math.round(Math.random() * 100000);
        if (randomNumber > 1000) {
          resolve(randomNumber);
        } else {
          reject(new Error("Fail rand number greater 1000"));
        }
      })
    );
  }
}
