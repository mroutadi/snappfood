import { RatesColors } from "../../constants";
import { toFa } from "../number";

function rate({rate}: {rate: number}) {
  return {
    rateColor: rate === 0 ? RatesColors[0] : RatesColors[(Math.ceil(rate * 2) / 2 - 0.5) * 10],
    rateText: rate === 0 ? 'رایگان' : toFa(rate.toFixed(1))
  }
}

export { rate };
