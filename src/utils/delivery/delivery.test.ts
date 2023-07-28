import { toCurrency } from "../number";
import { deliveryFee, isExpressDelivery } from "./index";

test('deliveryFee returns correct text for zero deliveryFee', () => {
  const zeroFee: number = 0;
  const result: string = deliveryFee(zeroFee);
  expect(result).toBe('رایگان');
});

test('deliveryFee returns correct text for non-zero deliveryFee', () => {
  const nonZeroFee: number = 15000;
  const result: string = deliveryFee(nonZeroFee);
  expect(result).toBe(`${toCurrency(nonZeroFee)} تومان`);
});

test('isExpressDelivery returns correct text for true value', () => {
  const result: string = isExpressDelivery(true);
  expect(result).toBe('ارسال‌اکسپرس');
});

test('isExpressDelivery returns correct text for false value', () => {
  const result: string = isExpressDelivery(false);
  expect(result).toBe('پیک‌فروشنده');
});
