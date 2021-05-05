<template>
  <section class="text-gray-700 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4" v-if="!v_products.length">
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full mb-4">
          <a class="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              class="object-cover object-center w-full h-full block"
              src="https://dummyimage.com/420x260"
            />
          </a>
          <div class="mt-4">
            <h3
              class="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase inline-block mr-2"
            >
              N/A
            </h3>
            <h2 class="text-gray-900 title-font text-lg font-medium">
              Loading
            </h2>
            <p class="mt-1">$0.00</p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap -m-4" v-else>
        <div
          class="lg:w-1/4 md:w-1/2 p-4 w-full mb-4"
          v-for="item_product in v_products"
          :key="item_product.id"
        >
          <router-link
            class="block relative h-48 rounded overflow-hidden"
            :to="{ name: 'products.show', params: { slug: item_product.slug } }"
          >
            <!-- routes.js: name: 'products.show', -->
            <img
              alt="ecommerce"
              class="object-cover object-center w-full h-full block"
              src="https://dummyimage.com/420x260"
            />
          </router-link>
          <div class="mt-4">
            <h3
              class="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase inline-block mr-2"
              v-for="(item_category, index) in item_product.categories"
              v-text="item_category.name"
              :key="index"
            ></h3>
            <h2
              class="text-gray-900 title-font text-lg font-medium"
              v-text="item_product.name"
            ></h2>
            <p class="mt-1" v-text="onFormatCurrency(item_product.price)"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    onFormatCurrency(amount) {
      amount = amount / 100;
      return amount.toLocaleString(process.env.MIX_CASHIER_CURRENCY_LOCALE, {
        style: "currency",
        currency: process.env.MIX_CASHIER_CURRENCY,
      });
    },
  },
  computed: {
    v_products() {
      return this.$store.state.state_products;
    },
  },
};
</script>