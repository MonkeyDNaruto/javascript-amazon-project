function renderOrders() {

}

// import { products } from "./products";

// export const orders = JSON.parse(localStorage.getItem("orders")) || [];

// export function addOrder(order) {
//   orders.unshift(order);
//   saveToStorage();
// }

// function saveToStorage() {
//   localStorage.setItem("orders", JSON.stringify(orders));
// }

// export function renderOrders() {
//   const container = document.querySelector(".js-orders");
//   if (!container) return;

//   let ordersHTML = "";

//   orders.forEach((order) => {
//     ordersHTML += `
//       <div class="order-container">
//         <div class="order-header">
//           <div class="order-header-left-section">
//             <div class="order-date">
//               <div class="order-header-label">Order Placed:</div>
//               <div>${new Date(order.orderTime).toDateString()}</div>
//             </div>
//             <div class="order-total">
//               <div class="order-header-label">Total:</div>
//               <div>$${(order.totalCostCents / 100).toFixed(2)}</div>
//             </div>
//           </div>

//           <div class="order-header-right-section">
//             <div class="order-header-label">Order ID:</div>
//             <div>${order.id}</div>
//           </div>
//         </div>

//         <div class="order-details-grid">
//           ${order.products
//             .map(
//               (product) => `
//                 <div class="product-image-container">
//                   <img src="${product.image}">
//                 </div>

//                 <div class="product-details">
//                   <div class="product-name">
//                     ${product.name}
//                   </div>
//                   <div class="product-delivery-date">
//                     Arriving on: ${new Date(
//                       product.estimatedDeliveryTime
//                     ).toDateString()}
//                   </div>
//                   <div class="product-quantity">
//                     Quantity: ${product.quantity}
//                   </div>

//                   <button class="buy-again-button button-primary">
//                     Buy it again
//                   </button>
//                 </div>

//                 <div class="product-actions">
//                   <a href="tracking.html">
//                     <button class="track-package-button button-secondary">
//                       Track package
//                     </button>
//                   </a>
//                 </div>
//               `
//             )
//             .join("")}
//         </div>
//       </div>
//     `;
//   });

//   container.innerHTML = ordersHTML;
// }

// document.addEventListener("DOMContentLoaded", renderOrders);
