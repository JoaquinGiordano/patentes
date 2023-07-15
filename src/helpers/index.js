import { AVAILABLE_LETTERS } from './constants';

function getPoints(number) {
  let points = 0;
  number
    .toString()
    .split('')
    .forEach(digit => {
      points += Number(digit);
    });
  return points;
}

function generateRandomPlate() {
  const LETTERS_QUANTITY = 3;

  let plate = { text: '', letters: [], numbers: 294, points: 0 };

  for (let i = 0; i < LETTERS_QUANTITY; i++) {
    plate.letters[i] =
      AVAILABLE_LETTERS[Math.floor(Math.random() * AVAILABLE_LETTERS.length)];
  }
  plate.numbers = Math.floor(Math.random() * 1000);
  plate.text = `${plate.letters.join('')} ${plate.numbers < 10 ? '0' : ''}${
    plate.numbers < 100 ? '0' : ''
  }${plate.numbers}`;

  plate.points = getPoints(plate.numbers);
  return plate;
}

export { generateRandomPlate, getPoints };
