# FlashCards Starter Kit

## Abstract

Flashcards is a one-player game that runs in the command line.  When the game starts, the user goes through a series of questions and selects the right answer.  At the end of the game, the game will display the percentage of correct answers from the game.

The focus of this project was to incorporate test driven development.  During creation of this project, tests were written following the red green refactor method.  Tests were the driving force in this project, allowing for quick access to figure out and fix bugs throughout the creation of this game.

## The Game

![2019-10-03 20 10 07](https://user-images.githubusercontent.com/46874658/66176273-54ef0700-e61a-11e9-98c9-2ad68c31402b.gif)


## Installation

Clone down the forked repo (from your GitHub). Since you don't want to name your project "flashcards-starter", you can use an optional argument when you run `git clone` (you replace the `[...]` with the terminal command arguments):

```bash
git clone [remote-address] [what you want to name the repo]
```

Once you have cloned the repo, change into the directory and install the library dependencies. Run:

```bash
npm install
```

To verify that it is setup correctly, run `npm test` in your terminal. You should have 5 pending tests in your `Card` test file that show up.

Running `node index.js` from the root of your project should result in the following message being displayed in your terminal: 

```bash
Node server running on port 3000
```

To actually play the game, then type the following into your terminal:
```
node index.js
```
From there, you will see the first question and possible answers.  Use the arrow keys to select your answer and press enter.  You will see a message telling you if your answer is correct or incorrect.  You can then work through the rest of the questions and will be shown a message at the end telling you the percentage of how many correct guesses you had.

Enjoy playing flashcards!
