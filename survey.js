const readline = require('readline');
const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?", "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];

const AskQuestion = (rl, question) => {
  return new Promise(resolve => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

const Ask = function(questions) {
  return new Promise(async resolve => {
    let rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    let results = [];
    for (let i = 0; i < questions.length;i++) {
      const result = await AskQuestion(rl, questions[i]);
      results.push(result);
    }
    rl.close();
    resolve(results);
  });
};

Ask(questions).then(answers => console.log(answers));
