import readline from "readline";
import {
  checkUserInputForBuyLotto,
  checkUserInputForBonusNumber,
  checkUserInputForWinningNumber,
  checkUserInputForRetry,
} from "./validation/index.js";

export async function readLineAsync(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const input = await new Promise((resolve) => {
    rl.question(query, (answer) => {
      rl.close();
      resolve(answer);
    });
  });

  checkUserInputForBuyLotto(input);

  return input;
}
export async function getWinningNumbers(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const input = await new Promise((resolve) => {
    rl.question(query, (answer) => {
      rl.close();
      resolve(answer);
    });
  });

  checkUserInputForWinningNumber(input);

  return input;
}

export async function getBonusNumber(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const input = await new Promise((resolve) => {
    rl.question(query, (answer) => {
      rl.close();
      resolve(answer);
    });
  });

  checkUserInputForBonusNumber(input);

  return input;
}
export async function IsUserRetry(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const input = await new Promise((resolve) => {
    rl.question(query, (answer) => {
      rl.close();
      resolve(answer);
    });
  });

  checkUserInputForRetry(input);

  return input;
}
