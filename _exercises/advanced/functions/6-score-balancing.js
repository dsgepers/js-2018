/*

    A fun exercise I like to do when I learn a new language is a score balancing function:

    - You have multiple teams (in the example we only have team 1 and team 2, but we need to make our solution generic)
    - You have multiple games (in the example we only have game 1 and game 2, but we need to make our solution generic)

    Game 1 is for example football, where you rarely score 10 goals
    Game 2 is for example handball, where you easily score 20 goals

    How can we know which team is the better team. They have both played football and handball with different scores. Well,
    we can find a way to balance the scores, add them together and get a "real" score for a specific team. This way we can
    make a ranking keeping in mind the average score for a specific game and balancing the other scores to it.

    Strategy:

    1. start of by writing small helper functions like:
    - getTeams
    - getGames
    - getScoresByTeam
    - getScoresByGame
    - getScoresByTeamAndGame
    - ...

    2. calculate the average score of a specific game

    3. get the highest average score of all games

    4. determine the multiply modifier to balance (highest average / average of game)

    5. calculate the real score for a team for a game (= add all points together and multiply it by the modifier from step 4)

    6. sort the rankings

 */

const R = require('ramda');