const PREFIX = [
  '숲바람',
  '대숲잎',
  '이슬',
  '솔잎',
  '새싹',
  '이끼',
  '나뭇결',
  '햇살',
  '바람결',
  '푸른잎',
];

const EMOJI = ['🌿', '🍃', '🌱', '🐼', '🕊️'];

function randomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomNumber(): string {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

export function generateAnonName(): string {
  return `${randomItem(PREFIX)}${randomItem(EMOJI)}#${randomNumber()}`;
}
