export function helloWorld() {
    return 'Hello world!';
  }

export function characterLimitTen(word: string): boolean {
  if (word.length <= 10) {
    return false;
  } else { return true; }

}
