const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? ", (name) => {
  rl.question("Which sport is your absolute favorite? ", (sport) => {
    rl.question("What's an activity you like doing? ", (driving) => {
      console.log(
        `Awesome profile, some fun information about you: \n Your name is: ${name} your favorite sport is: ${sport} and your favorite activity is: ${driving} `,

        rl.close()
      );
    });
  });
});
