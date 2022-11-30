import { encode as btoa } from "base-64";
import RazorpayCheckout from "react-native-razorpay";

import { ORDER_ID_URL } from "../apis/payments";
import axios from "../apis/axios";

let RZP_KEY_ID = "rzp_test_rIVcrDf82ldDwq";
let RZP_KEY_SECRET = "YhjqIiE8YtKTfC885Ugp8Uuo";

function uuidv4() {
  // Public Domain/MIT
  var d = new Date().getTime(); //Timestamp
  var d2 =
    (typeof performance !== "undefined" &&
      performance.now &&
      performance.now() * 1000) ||
    0; //Time in microseconds since page-load or 0 if unsupported
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = Math.random() * 16; //random number between 0 and 16
    if (d > 0) {
      //Use timestamp until depleted
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      //Use microseconds since page-load if supported
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

/* It takes in an object with two properties, ammount and currency, and generates an order id from the
Razorpay API and stores it in the orderId variable. It then opens a payment gateway and returns a
promise with the payment id */
export default class Payments {
  /**
   * The constructor function takes in an object with two properties, ammount and currency, and assigns
   * them to the object's properties
   */
  constructor({ ammount, currency }) {
    this.ammount = ammount * 100;
    this.orderId = null;
  }

  /**
   * It generates an order id from the Razorpay API and stores it in the orderId variable
   */
  async generateOrderId() {
    let res = await axios.post("/api/v1/payments/create", {
      amount: this.ammount,
    });
    let order = res.data;

    this.orderId = order.id;
  }

  /**
   * It opens a payment gateway and returns a promise with the payment id
   * @returns The payment_id is being returned.
   */
  async completeOrder({ description, image, name, contact, user_name, color }) {
    return new Promise((resolve, reject) => {
      var options = {
        description,
        image,
        currency: "INR",
        key: RZP_KEY_ID,
        amount: this.ammount.toString(),
        name: name,
        order_id: this.orderId, //Replace this with an order_id created using Orders API.
        prefill: {
          contact,
          name: user_name,
        },
        theme: { color },
      };
      RazorpayCheckout.open(options)
        .then(async (response) => {
          // handle success
          await verifyPayment(response);
          resolve("Payment Successful");
        })
        .catch(({ error }) => {
          // handle failure
          console.log(error);
          reject(`${error?.description}`);
        });
    });
  }
}

async function verifyPayment(response) {
  let res = await axios.post("/api/v1/payments/verify", response);
  return res.data;
}
