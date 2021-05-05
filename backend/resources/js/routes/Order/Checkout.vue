<template>
  <div class="w-full">
    <div class="lg:w-2/3 w-full mx-auto mt-8 overflow-auto">
      <table class="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th
              class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded-tl rounded-bl"
            >
              Item
            </th>
            <th
              class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200"
            >
              Quantity
            </th>
            <th
              class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200"
            >
              Price
            </th>
            <th
              class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in comp_cart" :key="item.id">
            <td class="p-4" v-text="item.name"></td>
            <td class="p-4" v-text="item.quantity"></td>
            <td class="p-4" v-text="onCartLineTotal(item)"></td>
            <td class="w-10 text-right">
              <button
                class="flex ml-auto text-sm text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                @click="$store.commit('removeFromCart', index)"
              >
                Remove
              </button>
            </td>
          </tr>
          <tr>
            <td class="p-4 font-bold">Total Amount</td>
            <td class="p-4 font-bold" v-text="comp_cartQuantity"></td>
            <td class="p-4 font-bold" v-text="comp_cartTotal"></td>
            <td class="w-10 text-right"></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="lg:w-2/3 w-full mx-auto mt-8">
      <div class="flex flex-wrap -mx-2 mt-8">
        <div class="p-2 w-1/3">
          <div class="relative">
            <label for="first_name" class="leading-7 text-sm text-gray-600"
              >First Name<span style="color: red">(*)</span></label
            >
            <input
              type="text"
              id="first_name"
              name="first_name"
              class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              v-model="v_customer.first_name"
              :disabled="v_paymentProcessing"
            />
          </div>
        </div>
        <div class="p-2 w-1/3">
          <div class="relative">
            <label for="last_name" class="leading-7 text-sm text-gray-600"
              >Last Name<span style="color: red">(*)</span></label
            >
            <input
              type="text"
              id="last_name"
              name="last_name"
              class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              v-model="v_customer.last_name"
              :disabled="v_paymentProcessing"
            />
          </div>
        </div>
        <div class="p-2 w-1/3">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-gray-600"
              >Email Address<span style="color: red">(*)</span></label
            >
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              v-model="v_customer.email"
              :disabled="v_paymentProcessing"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-wrap -mx-2 mt-4">
        <div class="p-2 w-1/3">
          <div class="relative">
            <label for="address" class="leading-7 text-sm text-gray-600"
              >Street Address<span style="color: red">(*)</span></label
            >
            <input
              type="text"
              id="address"
              name="address"
              class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              v-model="v_customer.address"
              :disabled="v_paymentProcessing"
            />
          </div>
        </div>
        <div class="p-2 w-1/3">
          <div class="relative">
            <label for="city" class="leading-7 text-sm text-gray-600"
              >City<span style="color: red">(*)</span></label
            >
            <input
              type="text"
              id="city"
              name="city"
              class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              v-model="v_customer.city"
              :disabled="v_paymentProcessing"
            />
          </div>
        </div>
        <div class="p-2 w-1/6">
          <div class="relative">
            <label for="state" class="leading-7 text-sm text-gray-600"
              >State<span style="color: red">(*)</span></label
            >
            <input
              type="email"
              id="state"
              name="state"
              class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              v-model="v_customer.state"
              :disabled="v_paymentProcessing"
            />
          </div>
        </div>
        <div class="p-2 w-1/6">
          <div class="relative">
            <label for="zip_code" class="leading-7 text-sm text-gray-600"
              >Zip Code<span style="color: red">(*)</span></label
            >
            <input
              type="email"
              id="zip_code"
              name="zip_code"
              class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              v-model="v_customer.zip_code"
              :disabled="v_paymentProcessing"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-wrap -mx-2 mt-4">
        <div class="p-2 w-full">
          <div class="relative">
            <label for="card-element" class="leading-7 text-sm text-gray-600"
              >Credit Card Info<span style="color: red">(*)</span></label
            >
            <div id="card-element"></div>
          </div>
        </div>
      </div>
      <div class="p-2 w-full">
        <button
          class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          @click="onProcessPayment"
          :disabled="v_paymentProcessing"
          v-text="v_paymentProcessing ? 'Processing' : 'Pay Now'"
        ></button>
      </div>
    </div>
  </div>
</template>
<script>
import { loadStripe } from "@stripe/stripe-js";
export default {
  data() {
    return {
      v_stripe: {},
      v_cardElement: {},
      v_customer: {
        first_name: "",
        last_name: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zip_code: "",
      },
      v_paymentProcessing: false,
    };
  },
  async mounted() {
    this.v_stripe = await loadStripe(process.env.MIX_STRIPE_KEY);
    const elements = this.v_stripe.elements();
    // Valid Elements are: card, cardNumber, cardExpiry, cardCvc, postalCode, paymentRequestButton, iban, idealBank, p24Bank, auBankAccount, fpxBank, afterpayClearpayMessage
    this.v_cardElement = elements.create("card", {
      classes: {
        base:
          "bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 p-3 leading-8 transition-colors duration-200 ease-in-out",
      },
    });
    this.v_cardElement.mount("#card-element");
  },
  methods: {
    onCartLineTotal(item) {
      let amount = item.price * item.quantity;
      amount = amount / 100;
      return amount.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    },
    async onProcessPayment() {
      this.v_paymentProcessing = true;
      const { paymentMethod, error } = await this.v_stripe.createPaymentMethod(
        "card",
        this.v_cardElement,
        {
          billing_details: {
            name: this.v_customer.first_name + " " + this.v_customer.last_name,
            email: this.v_customer.email,
            address: {
              line1: this.v_customer.address,
              city: this.v_customer.city,
              state: this.v_customer.state,
              postal_code: this.v_customer.zip_code,
            },
          },
        }
      );
      if (error) {
        this.v_paymentProcessing = false;
        alert("payment by Stripe ERR!!! " + error);
      } else {
        console.log(paymentMethod);
        this.v_customer.payment_method_id = paymentMethod.id;
        this.v_customer.amount = this.comp_cart.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );
        this.v_customer.cart = JSON.stringify(this.comp_cart);
        axios
          .post("/api/purchase", this.v_customer)
          .then((response) => {
            this.v_paymentProcessing = false;
            console.log(response);
            this.$store.commit("updateOrder", response.data);
            this.$store.dispatch("clearCart");
            this.$router.push({ name: "order.summary" }); // routes.js: name: 'order.summary',
          })
          .catch((error) => {
            this.v_paymentProcessing = false;
            alert("payment by Stripe ERR!!! " + error);
          });
      }
    },
  },
  computed: {
    comp_cart() {
      return this.$store.state.state_cart;
    },
    comp_cartQuantity() {
      return this.$store.state.state_cart.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
    },
    comp_cartTotal() {
      let amount = this.$store.state.state_cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      amount = amount / 100;
      return amount.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    },
  },
};
</script>