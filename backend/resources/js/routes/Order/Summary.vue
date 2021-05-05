<template>
  <div class="w-full">
    <div class="lg:w-2/3 w-full mx-auto mt-8 overflow-auto">
      <h2
        class="text-sm title-font text-gray-500 tracking-widest"
        v-text="'Transaction ID: ' + v_order.transaction_id"
      ></h2>
      <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">
        Thank you for your purchase
      </h1>
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
              Subtotal Price
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in v_order.products" :key="item.id">
            <td class="p-4" v-text="item.name"></td>
            <td class="p-4" v-text="item.pivot.quantity"></td>
            <td class="p-4" v-text="onCartLineTotal(item, false)"></td>
            <td class="p-4" v-text="onCartLineTotal(item)"></td>
          </tr>
          <tr>
            <td class="p-4 font-bold">Total Amount</td>
            <td class="p-4 font-bold" v-text="v_orderQuantity"></td>
            <td class="p-4 font-bold"></td>
            <td class="p-4 font-bold" v-text="v_orderTotal"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onCartLineTotal(item, is_sub = true) {
      let amount = is_sub ? item.price * item.pivot.quantity : item.price;
      amount = amount / 100;
      return amount.toLocaleString(process.env.MIX_CASHIER_CURRENCY_LOCALE, {
        style: "currency",
        currency: process.env.MIX_CASHIER_CURRENCY,
      });
    },
  },
  computed: {
    v_order() {
      return this.$store.state.state_order;
    },
    v_orderQuantity() {
      return this.$store.state.state_order.products.reduce(
        (acc, item) => acc + item.pivot.quantity,
        0
      );
    },
    v_orderTotal() {
      let amount = this.$store.state.state_order.products.reduce(
        (acc, item) => acc + item.price * item.pivot.quantity,
        0
      );
      amount = amount / 100;
      return amount.toLocaleString(process.env.MIX_CASHIER_CURRENCY_LOCALE, {
        style: "currency",
        currency: process.env.MIX_CASHIER_CURRENCY,
      });
    },
  },
};
</script>