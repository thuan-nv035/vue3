<template>
  <p class="text-red-500 font-bold">asdvsd</p>
  <p class="text-red-500 font-bold">{{ firstName }}</p>
  <input class="text-black" type="text" v-model="searchText" />
  <ul>
    <li v-for="(customer, index) in customersFilled" :key="index">
      {{ customer }}
    </li>
  </ul>
  <!-- <button @click="onChangSomething">Click me</button> -->
</template>

<script>
import console from "console";
import { ref, reactive, computed, watch } from "vue";
export default {
  // props: {
  //   theme: {
  //     type: String,
  //     required: false,
  //     default: "light",
  //   },
  // },
  setup(props, context) {
    console.log(props);
    console.log(context);
    const searchText = ref("");
    const customers = reactive(["thuan", "thai", "thang"]);
    const customersFilled = computed(() =>
      customers
        .map((customer) => {
          customer = customer.toLowerCase();
          return customer;
        })
        .filter((customer) => customer.includes(searchText.value.toLowerCase()))
    );

    watch(searchText, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    });

    return {
      searchText,
      customersFilled,
    };
  },
};
</script>
