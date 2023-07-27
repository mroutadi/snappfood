import { isNumber, isString } from "./type";

function toFa(input?: string | number | null): string {
  if (!(isNumber(input) || isString(input))) {
    return '';
  }
  return (input + '').replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[Number(d)]);
}

function toEn(input?: string | number | null): string {
  if (!(isNumber(input) || isString(input))) return '';
  return (input + '').replace(/[۰-۹]/g, (d) => toString('۰۱۲۳۴۵۶۷۸۹'.indexOf(d)));
}

function toCurrency(value: number | string) {
  let price = Number(toEn(value?.toString()?.replace?.(/,/g, '')));

  if (isNaN(price)) {
    return '۰';
  }
  let priceText = String(price).replace(/\$|\,/g, '');
  for (let i = 0; i < Math.floor((priceText.length - (1 + i)) / 3); i++) {
    priceText =
      priceText.substring(0, priceText.length - (4 * i + 3)) +
      ',' +
      priceText.substring(priceText.length - (4 * i + 3));
  }

  return toFa(priceText);
}

export { toFa, toEn, toCurrency };
