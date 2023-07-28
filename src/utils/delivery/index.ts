import { toCurrency } from "../number";

function deliveryFee(deliveryFee: number) {
  if (deliveryFee === 0) return 'رایگان';
  return `${toCurrency(deliveryFee)} تومان`;
}
function isExpressDelivery(isExpressDelivery: boolean) {
  return isExpressDelivery ? 'ارسال‌اکسپرس' : 'پیک‌فروشنده';
}

export { deliveryFee, isExpressDelivery };
