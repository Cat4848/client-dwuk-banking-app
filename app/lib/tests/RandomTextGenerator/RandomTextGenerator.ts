import Chance from "chance";
import { alphabet } from "../../constants/misc";

export default class RandomTextGenerator {
  private some;

  constructor(some: Chance.Chance) {
    this.some = some;
  }

  randomWords(count: number) {
    if (count === 1) {
      return this.some.string({ pool: alphabet });
    } else if (count > 1) {
      const someStrings = Array.from({ length: count }, () => {
        return this.some.string({ pool: alphabet });
      });
      return someStrings;
    } else return null;
  }

  randomSentences(count: number) {
    if (count === 1) {
      return this.some.sentence({ words: 7 });
    } else if (count > 1) {
      const someSentences = Array.from({ length: count }, () => {
        return this.some.sentence({ words: 7 });
      });
      return someSentences;
    } else return null;
  }
}
