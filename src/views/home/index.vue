<template>
  <a-form>
    <Input
      name="username"
      label="username"
      allowClear
      :rules="validateSchema.username"
      type="text"
    />
  </a-form>

  <a-form
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item
      label="Username"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <a-input allowClear v-model:value="formState.username" />
    </a-form-item>

    <a-form-item
      label="Password"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formState.password" />
    </a-form-item>

    <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
      <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>

  <a-rate v-model:value="value" allow-half @click="handleStar" />

  <!-- <a-button type="primary" html-type="submit">Submit</a-button> -->

  <div
    class="drop-zone"
    @drop="onDrop($event, 1)"
    @dragover.prevent
    @dragenter.prevent
  >
    <div
      class="drop-el"
      v-for="item in getList(1)"
      :key="item.id"
      draggable="true"
      @dragstart="startDrag($event, item)"
    >
      {{ item.title }}
    </div>
  </div>
  <div
    class="drop-zone"
    @drop="onDrop($event, 2)"
    @dragover.prevent
    @dragenter.prevent
  >
    <div
      class="drop-el"
      v-for="item in getList(2)"
      :key="item.id"
      draggable="true"
      @dragstart="startDrag($event, item)"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
import "./home.css";
import { defineComponent, reactive, computed, ref } from "vue";
import Input from "../../components/form/input/index.vue";
import validateSchema from "./form.config";
export default defineComponent({
  components: {
    Input,
    validateSchema,
  },

  setup() {
    const value = ref(2.5);
    const formState = reactive({
      username: "",
      password: "",
      remember: true,
    });

    const items = ref([
      { id: 0, title: "item A", list: 1 },
      { id: 1, title: "item B", list: 1 },
      { id: 2, title: "item C", list: 2 },
    ]);

    const getList = (list) => items.value.filter((item) => item.list == list);

    const onFinish = (values) => {
      console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

    const startDrag = (evt, item) => {
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("itemID", item.id);
    };

    const onDrop = (evt, list) => {
      const itemID = evt.dataTransfer.getData("itemID");
      const item = this.items.find((item) => item.id == itemID);
      item.list = list;
    };
    console.log("validateSchema", validateSchema.username);
    const handleStar = () => {
      console.log("value", value.value);
    };
    return {
      formState,
      onFinish,
      onFinishFailed,
      validateSchema,
      value,
      getList,
      handleStar,
      startDrag,
      onDrop,
    };
  },
});
</script>
