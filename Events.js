function timerGame(name) {
  console.log("Hi, " + name);
}

setTimeout(timerGame, 1000, "Thundercat");

// write a setTimeout function so that it calls the timerGame function after 1 second and prints 'Hi, Thundercat'.


module.exports = timerGame;