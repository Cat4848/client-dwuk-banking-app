import Chance from "chance";
import { alphabet } from "../../constants/misc";

export default class RandomTextGenerator {
  private some;

  constructor(some: Chance.Chance) {
    this.some = some;
  }

  randomWords(count: number) {
    if (count === 1) {
      return this.randomWord();
    } else if (count > 1) {
      const someStrings = Array.from({ length: count }, () => {
        return this.randomWord();
      });
      return someStrings;
    } else return null;
  }

  private randomWord() {
    return this.some.string({ pool: alphabet });
  }

  randomSentences(count: number) {
    if (count === 1) {
      return this.randomSentence();
    } else if (count > 1) {
      const someSentences = Array.from({ length: count }, () => {
        return this.randomSentence();
      });
      return someSentences;
    } else return null;
  }

  private randomSentence() {
    return this.some.sentence({ words: 7 });
  }
}
