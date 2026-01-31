import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymantSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
// import "../data/cart-class.js";

renderCheckoutHeader();
renderOrderSummary();
renderPaymentSummary();
