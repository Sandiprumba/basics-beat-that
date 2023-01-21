//(1)there are 2 players and players takes turns
// (2) when a player clicks submit , the gamerolls 2 dice and shows the dice rolls, for example 3 and 6
// (3) the player picks the order of the dice they want, for example, if they wanted the number 63, they would specify that the 2nd dice goes first
// (4) after both players have rolled and chosen the dice order, the player with the higher combined number wins

//  ===problem breakdown and planning ===
// ver 1. rolls 2 dice and turns the output for 1 player. that player chooses the dice order and get the correct return output.
// ver 2. refactored code to include player 2
// ver3. implement comparing dice scores and declare winner.
//  ver4. reset the game so the player can play continually without refreshing the browser page

/* There are 2 players and players take turns.
When a player clicks Submit, the game rolls 2 dice and shows the dice rolls, for example 3 and 6.
//The player picks the order of the dice they want. For example, if they wanted the number 63, they would specify that the 2nd dice goes first. You can choose how the player specifies dice order.
// After both players have rolled and chosen dice order, the player with the higher combined number wins*/
var GAME_STATE_DICE_ROLL = "GAME_STATE_DICE_ROLL";
var GAME_STATE_CHOOSE_DICE_ORDER = "GAME_STATE_CHOOSE_DICE_ORDER";
var gameState = GAME_STATE_DICE_ROLL;

var playerRolls = [];

var rollDice = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal) + 1;
  console.log("roll dice output", randomInteger);
  return randomInteger;
};

var rollDiceForPlayer = function (input) {
  var counter = 0;
  while (counter < 2) {
    playerRolls.push(rollDice());
    counter = counter + 1;
  }
  console.log("rollDiceForPlayer changes, playerRolls: ", playerRolls);
  return (
    "welcome<br><br> you rolled:<br>Dice 1: " +
    playerRolls[0] +
    "  Dice 2: " +
    playerRolls[1] +
    ".<br><br>Now , please input either '1' or '2' to choose the corresponding dice to be used as the first digit of your final value. "
  );
};
var getPlayerScore = function (playerInput) {
  if (playerInput != 1 && playerInput != 2) {
    console.log(
      "Error flow: input validation, invalid input ... NOT 1 and NOT 2"
    );
    return (
      "Error! please only input '1' or '2' to choose which dice to use as the first digit .<br><br>your dice rolls are: <br>Dice 1: " +
      playerRolls[0] +
      " Dice 2: " +
      playerRolls[1] +
      ".."
    );
  }
  // input == 1
  if (playerInput == 1) {
    console.log("control flow: input == 1");
    var playerScore = Number(String(playerRolls[0]) + String(playerRolls[1]));
    return "your choosen value is :" + playerScore;
  }
  // input == 2
  if (playerInput == 2) {
    console.log("control flow: input == 2");
    var playerScore = Number(String(playerRolls[1]) + String(playerRolls[0]));
    return "your choosen value is :" + playerScore;
  }
};
var main = function (input) {
  console.log("checking game state on submit click: ", gameState);
  var myOutputValue = "";
  if (gameState == GAME_STATE_DICE_ROLL) {
    console.log("control flow: gameState == GAME_STATE_DICE_ROLL");
    myOutputValue = rollDiceForPlayer();
    gameState = GAME_STATE_CHOOSE_DICE_ORDER;
  }

  if (gameState == GAME_STATE_CHOOSE_DICE_ORDER) {
    console.log("control flow: gameState == GAME_STATE_CHOOSE_DICE_ORDER");

    myOutputValue = getPlayerScore(input);
  }
  return myOutputValue;
};
