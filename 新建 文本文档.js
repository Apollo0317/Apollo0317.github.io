// 定义三种拳头的常量
const ROCK = "石头";
const PAPER = "布";
const SCISSORS = "剪刀";

// 定义一个函数，根据用户的输入返回相应的拳头
function getUserChoice(userInput) {
  // 将用户的输入转换为小写
  userInput = userInput.toLowerCase();
  // 判断用户的输入是否合法，如果是，返回相应的拳头，如果不是，提示错误信息
  if (userInput === "石头" || userInput === "rock") {
    return ROCK;
  } else if (userInput === "布" || userInput === "paper") {
    return PAPER;
  } else if (userInput === "剪刀" || userInput === "scissors") {
    return SCISSORS;
  } else {
    console.log("请输入石头、布或剪刀");
  }
}

// 定义一个函数，随机返回电脑的拳头
function getComputerChoice() {
  // 生成一个0到2之间的随机整数
  let randomNumber = Math.floor(Math.random() * 3);
  // 根据随机数返回相应的拳头
  switch (randomNumber) {
    case 0:
      return ROCK;
    case 1:
      return PAPER;
    case 2:
      return SCISSORS;
  }
}

// 定义一个函数，根据用户和电脑的拳头判断胜负，并打印结果
function determineWinner(userChoice, computerChoice) {
  // 如果用户和电脑的拳头相同，打印平局
  if (userChoice === computerChoice) {
    console.log("平局");
  } else {
    // 如果用户出石头
    if (userChoice === ROCK) {
      // 如果电脑出布，打印电脑赢
      if (computerChoice === PAPER) {
        console.log("电脑赢");
      // 如果电脑出剪刀，打印用户赢
      } else {
        console.log("用户赢");
      }
    // 如果用户出布
    } else if (userChoice === PAPER) {
      // 如果电脑出剪刀，打印电脑赢
      if (computerChoice === SCISSORS) {
        console.log("电脑赢");
      // 如果电脑出石头，打印用户赢
      } else {
        console.log("用户赢");
      }
    // 如果用户出剪刀
    } else {
      // 如果电脑出石头，打印电脑赢
      if (computerChoice === ROCK) {
        console.log("电脑赢");
      // 如果电脑出布，打印用户赢
      } else {
        console.log("用户赢");
      }
    }
  }
}

// 定义一个函数，开始游戏
function playGame() {
  // 提示用户输入拳头
  let userInput = prompt("请输入石头、布或剪刀");
  // 获取用户的拳头
  let userChoice = getUserChoice(userInput);
  // 获取电脑的拳头
  let computerChoice = getComputerChoice();
  // 打印用户和电脑的拳头
  console.log("用户出了" + userChoice);
  console.log("电脑出了" + computerChoice);
  // 判断胜负并打印结果
  determineWinner(userChoice, computerChoice);
}

// 调用游戏函数
playGame();
