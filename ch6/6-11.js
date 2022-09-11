export function priceOrder(product, quantity, shippingMethod) {
  const basePrice = product.basePrice * quantity;
  const discount = calculateDiscountPrice(product, quantity);
  const shippingCost = calculateShippingCost(
    basePrice,
    shippingMethod,
    quantity
  );

  return basePrice - discount + shippingCost;
}

function calculateShippingCost(basePrice, shippingMethod, quantity) {
  const shippingPerCase =
    basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;
  const result = quantity * shippingPerCase;
  return result;
}

function calculateDiscountPrice(product, quantity) {
  return (
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate
  );
}

// 사용 예:
const product = {
  basePrice: 10,
  discountRate: 0.1,
  discountThreshold: 10,
};

const shippingMethod = {
  discountThreshold: 20,
  feePerCase: 5,
  discountedFee: 3,
};

const price = priceOrder(product, 5, shippingMethod);

console.log(price);
