function isWinner(arr) {
  return (
    (arr[0] === arr[1] && arr[0] === arr[2] && arr[0]) ||
    (arr[0] === arr[3] && arr[0] === arr[6] && arr[0]) ||
    (arr[0] === arr[4] && arr[0] === arr[8] && arr[0]) ||
    (arr[1] === arr[4] && arr[1] === arr[7] && arr[1]) ||
    (arr[2] === arr[4] && arr[2] === arr[6] && arr[2]) ||
    (arr[2] === arr[5] && arr[2] === arr[8] && arr[2]) ||
    (arr[3] === arr[4] && arr[3] === arr[5] && arr[3]) ||
    (arr[6] === arr[7] && arr[6] === arr[8] && arr[6])
  ) ? true : false;
}

function gameBoardFull(arr) {
  return arr[0] && arr[1] && arr[2] && arr[3] && arr[4] && arr[5] && arr[6] && arr[7] && arr[8];
}

function computerTurn(arr, computer, player, round) {
  const computerCanWin = canWin(arr, computer);
  if (computerCanWin[0]) {
    return computerCanWin[1];
  }

  const playerCanWin = canWin(arr, player);
  if (playerCanWin[0]) {
    return playerCanWin[1];
  }

  const computerCanFork = canFork(arr, computer, round);
  if (computerCanFork[0]) {
    return computerCanFork[1];
  }

  const computerCanCenter = canCenter(arr);
  if (computerCanCenter[0]) {
    return computerCanCenter[1];
  }

  const oppositeCorner = canOppositeCorner(arr, player);
  if (oppositeCorner[0]) {
    return oppositeCorner[1];
  }

  const emptyCorner = canEmptyCorner(arr);
  if (emptyCorner[0]) {
    return emptyCorner[1];
  }

  const emptySide = canEmptySide(arr);
  if (emptySide[0]) {
    return emptySide[1];
  }
}

function canWin(arr, mark) {
  /*
    x|x|[x]
    *|*|*
    *|*|*
  */
  if (arr[0] === mark && arr[1] === mark && arr[2] === '') {
    return [true, 2];
  }
  /*
    x|[x]|x
    *|*|*
    *|*|*
  */
  if (arr[0] === mark && arr[2] === mark && arr[1] === '') {
    return [true, 1];
  }
  /*
    [x]|x|x
    *|*|*
    *|*|*
  */
  if (arr[2] === mark && arr[2] === mark && arr[0] === '') {
    return [true, 0];
  }
  /*
    x|*|*
    x|*|*
    [x]|*|*
  */
  if (arr[0] === mark && arr[3] === mark && arr[6] === '') {
    return [true, 6];
  }
  /*
    x|*|*
    [x]|*|*
    x|*|*
  */
  if (arr[0] === mark && arr[6] === mark && arr[3] === '') {
    return [true, 3];
  }
  /*
    [x]|*|*
    x|*|*
    x|*|*
  */
  if (arr[6] === mark && arr[3] === mark && arr[0] === '') {
    return [true, 0];
  }
  /*
    x|*|*
    *|x|*
    *|*|[x]
  */
  if (arr[0] === mark && arr[4] === mark && arr[8] === '') {
    return [true, 8];
  }
  /*
    x|*|*
    *|[x]|*
    *|*|x
  */
  if (arr[0] === mark && arr[8] === mark && arr[4] === '') {
    return [true, 4];
  }
  /*
    [x]|*|*
    *|x|*
    *|*|x
  */
  if (arr[8] === mark && arr[4] === mark && arr[0] === '') {
    return [true, 0];
  }
  /*
    *|x|*
    *|x|*
    *|[x]|*
  */
  if (arr[1] === mark && arr[4] === mark && arr[7] === '') {
    return [true, 7];
  }
  /*
    *|x|*
    *|[x]|*
    *|x|*
  */
  if (arr[1] === mark && arr[7] === mark && arr[4] === '') {
    return [true, 4];
  }
  /*
    *|[x]|*
    *|x|*
    *|x|*
  */
  if (arr[4] === mark && arr[7] === mark && arr[1] === '') {
    return [true, 1];
  }
  /*
    *|*|x
    *|*|x
    *|*|[x]
  */
  if (arr[2] === mark && arr[5] === mark && arr[8] === '') {
    return [true, 8];
  }
  /*
    *|*|x
    *|*|[x]
    *|*|x
  */
  if (arr[2] === mark && arr[8] === mark && arr[5] === '') {
    return [true, 5];
  }
  /*
    *|*|[x]
    *|*|x
    *|*|x
  */
  if (arr[8] === mark && arr[5] === mark && arr[2] === '') {
    return [true, 2];
  }
  /*
    *|*|x
    *|x|*
    [x]|*|*
  */
  if (arr[2] === mark && arr[4] === mark && arr[6] === '') {
    return [true, 6];
  }
  /*
    *|*|x
    *|[x]|*
    x|*|*
  */
  if (arr[2] === mark && arr[6] === mark && arr[4] === '') {
    return [true, 4];
  }
  /*
    *|*|[x]
    *|x|*
    x|*|*
  */
  if (arr[3] === mark && arr[4] === mark && arr[5] === '') {
    return [true, 5];
  }
  /*
    *|*|*
    x|x|[x]
    *|*|*
  */
  if (arr[3] === mark && arr[5] === mark && arr[4] === '') {
    return [true, 4];
  }
  /*
    *|*|*
    x|[x]|x
    *|*|*
  */
  if (arr[5] === mark && arr[4] === mark && arr[3] === '') {
    return [true, 3];
  }
  /*
    *|*|*
    [x]|x|x
    *|*|*
  */
  if (arr[6] === mark && arr[7] === mark && arr[8] === '') {
    return [true, 8];
  }
  /*
    *|*|*
    *|*|*
    x|x|[x]
  */
  if (arr[6] === mark && arr[8] === mark && arr[7] === '') {
    return [true, 7];
  }
  /*
    *|*|*
    *|*|*
    x|[x]|x
  */
  if (arr[8] === mark && arr[7] === mark && arr[6] === '') {
    return [true, 6];
  }
  /*
    *|*|*
    *|*|*
    [x]|x|x
  */
  return [false, -1];
}

function canFork(arr, mark, round) {
  if (round < 2) {
    return [false, -1];
  }

  if (arr[0] === mark && arr[6] === '' && arr[3] === '') {
    return [true, 6];
  }

  if (arr[0] === mark && arr[2] === '' && arr[1] === '') {
    return [true, 2];
  }

  if (arr[2] === mark && arr[0] === '' && arr[8] === '') {
    return [true, 0];
  }

  if (arr[2] === mark && arr[8] === '' && arr[0] === '') {
    return [true, 8];
  }

  if (arr[8] === mark && arr[2] === '' && arr[5] === '') {
    return [true, 2];
  }

  if (arr[8] === mark && arr[6] === '' && arr[7] === '') {
    return [true, 6];
  }

  if (arr[7] === mark && arr[8] === '' && arr[7] === '') {
    return [true, 8];
  }

  if (arr[7] === mark && arr[3] === '' && arr[0] === '') {
    return [true, 8];
  }

  return [false, -1];
}

function canCenter(arr) {
  if (arr[4] === '') {
    return [true, 4];
  }
  return [false, -1]
}

function canOppositeCorner(arr, player) {
  if (arr[0] === player && arr[8] === '') {
    return [true, 8];
  }

  if (arr[8] === player && arr[0] === '') {
    return [true, 0];
  }

  if (arr[2] === player && arr[6] === '') {
    return [true, 6];
  }

  if (arr[6] === player && arr[2] === '') {
    return [true, 2];
  }

  return [false, -1]
}

function canEmptyCorner(arr) {
  if (arr[0] === '') {
    return [true, 0];
  }

  if (arr[2] === '') {
    return [true, 2];
  }

  if (arr[6] === '') {
    return [true, 6];
  }

  if (arr[8] === '') {
    return [true, 8];
  }
  return [false, -1]
}

function canEmptySide(arr) {
  if (arr[1] === '') {
    return [true, 1];
  }

  if (arr[3] === '') {
    return [true, 3];
  }

  if (arr[5] === '') {
    return [true, 5];
  }

  if (arr[7] === '') {
    return [true, 7];
  }
  return [false, -1];
}

export { isWinner, gameBoardFull, computerTurn };
