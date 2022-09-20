<template>
  <a-form
    ref="formRef"
    :model="formState"
    v-bind="layout"
    name="nest-messages"
    :validate-messages="formConfig.validateMessages"
    @finish="onFinish"
  >
    <a-form-item
      name="name"
      label="Họ và tên"
      v-model:rules="formConfig.validateSchema.name"
    >
      <a-input v-model:value="formState.name" />
    </a-form-item>

    <a-form-item
      name="email"
      label="Email"
      v-model:rules="formConfig.validateSchema.email"
    >
      <a-input v-model:value="formState.email" />
    </a-form-item>

    <a-form-item
      name="role"
      label="Role"
      v-model:rules="formConfig.validateSchema.role"
    >
      <a-select
        v-model:value="formState.role"
        v-model:options="formConfig.optionsRole"
        style="width: 120px"
      >
      </a-select>
    </a-form-item>

    <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>

    <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
      <a-button type="primary" @click="resetFields">Reset</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import { Form } from "ant-design-vue";
import { useForm } from "ant-design-vue/lib/form";
import { reactive, ref } from "vue";
import formConfig from "./form.config.js";

export default {
  components: { formConfig },
  setup() {
    const useForm = Form.useForm;
    const { resetFields } = useForm();
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };

    const formState = reactive({
      name: "",
      email: "",
      role: null,
    });
    const onFinish = (values) => {
      // call api
      console.log("values :>> ", values);
    };

    return {
      formState,
      onFinish,
      layout,
      formConfig,
      resetFields
    };
  },
};
</script>
