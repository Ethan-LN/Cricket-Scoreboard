# Cricket Scoreboard

This repository contains code for a simple React-based Game Scoreboard app. The app allows you to keep track of multiple games and their respective team scores.

#
### GameBoard Component

The `GameBoard` component is the main component responsible for managing the list of games and rendering the scoreboards. It keeps track of the game numbers using React's `useState` hook and allows you to add new games. The `Scoreboard` component is used to display the scoreboards for each game.


### Scoreboard Component

The `Scoreboard` component is responsible for displaying the team names and scores for a particular game. It uses React's `useState` hook to manage the state of team names and their scores. You can enter the team names in the input fields and update the scores by clicking on the buttons provided.

### TeamScore Component

The `TeamScore` component is used within the `Scoreboard` component to display the individual team's score details. It uses React's `useState` hook to manage the runs and wickets for each team. Buttons are provided to add runs and wickets for the respective team.

