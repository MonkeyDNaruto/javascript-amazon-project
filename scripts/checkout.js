import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymantSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { loadProducts } from "../data/products.js";
// import "../data/cart-class.js";
// import "../data/backend-practice.js"

loadProducts(() => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});

