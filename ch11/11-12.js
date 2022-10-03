function localShippingRules(data) {
  if (data) return new ShippingRules(data);
  else throw new OrderProcessingError(-23);
}

function calculateShippingCosts(anOrder) {
  const shippingRules = localShippingRules(anOrder.country);
  if (shippingRules < 0) return shippingRules; // 오류전파
}

class OrderProcessingError extends Error {
  constructor(errorCode) {
    super(`주문 처리 오류: ${errorCode}`);
    this.code = errorCode;
  }

  get name() {
    return "OrderProcessingError";
  }
}

let status;
try {
  status = calculateShippingCosts(orderData);
} catch (error) {
  if (error instanceof OrderProcessingError) {
    errorList.push({ order: orderData, errorCode: status });
  } else {
    throw error;
  }
}
