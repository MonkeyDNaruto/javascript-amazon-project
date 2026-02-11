import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { getOrder } from "../data/orders.js";
import { getProduct, loadProductsFetch } from "../data/products.js";

async function loadPage() {
  await loadProductsFetch();

  const url = new URL(window.location.href);
  const orderId = url.searchParams.get("orderId");
  const productId = url.searchParams.get("productId");

  const order = getOrder(orderId);
  const product = getProduct(productId);

  let productDetails;

  order.products.forEach((details) => {
    if (details.productId === product.id) {
      productDetails = details;
    }
  });

  const today = dayjs();
  const orderTime = dayjs(order.orderTime);
  const deliveryTime = dayjs(productDetails.estimatedDeliveryTime);
  const percentProgress = ((today - orderTime) / (deliveryTime - orderTime)) * 100;

  const deliveredMessage = today < deliveryTime ? 'Arriving on' : 'Delivered on'

  const trackingHTML = `

    <a class="back-to-orders-link link-primary" href="orders.html">
      View all orders
    </a>

    <div class="delivery-date">
      ${deliveredMessage} ${dayjs(productDetails.estimatedDeliveryTime).format(
        "dddd, MMMM D"
      )}
    </div>

    <div class="product-info">
      ${product.name}
    </div>

    <div class="product-info">
      Quantity: ${productDetails.quantity}
    </div>

    <img class="product-image" src="${product.image}">

    <div class="progress-labels-container">
      <div class="progress-label ${
        percentProgress < 50 ? "current-status" : ""
      }">
        Preparing
      </div>
      <div class="progress-label ${
        percentProgress >= 50 && percentProgress < 100 ? "current-status" : ""
      }">
        Shipped
      </div>
      <div class="progress-label ${
        percentProgress >= 100 ? "current-status" : ""
      }">
        Delivered
      </div>
    </div>

    <div class="progress-bar-container">
      <div class="progress-bar" style="width: ${percentProgress}%;"></div>
    </div>
  `;

  document.querySelector(".js-order-tracking").innerHTML = trackingHTML;
}

loadPage();

// const today = dayjs();
// const orderTime = dayjs(order.orderTime);
// const deliveryTime = dayjs(productDetails.estimatedDeliveryTime);

// const elapsed = today.diff(orderTime);
// const total = deliveryTime.diff(orderTime);

// const minTimeline = 24 * 60 * 60 * 1000;
// const adjustedTotal = Math.max(total, minTimeline);

// let percentProgress;
// let stage = "Preparing";

// if (today.isAfter(deliveryTime)) {
//   // Delivery completed
//   percentProgress = 100;
//   stage = "Delivered";
// } else if (elapsed / total < 0.5) {
//   // First half of shipping
//   percentProgress = (elapsed / total) * 100; // 0–50%
//   stage = "Preparing";
// } else {
//   // Second half of shipping
//   percentProgress = 50 + ((elapsed / total - 0.5) * 100); // 50–99%
//   stage = "Shipped";
// }

// // if (today.isAfter(deliveryTime)) {
// //   percentProgress = 100; // Delivered
// // } else if (elapsed / total < 0.5) {
// //   percentProgress = 25; // Preparing (first half)
// // } else {
// //   percentProgress = 75; // Shipped (middle)
// // }

// // Clamp progress to 0–100
// percentProgress = Math.min(100, Math.max(0, percentProgress));

// console.log(percentProgress);
// console.log(today);
// console.log(orderTime);
// console.log(deliveryTime);
// console.log((today - orderTime) / (deliveryTime - orderTime));
