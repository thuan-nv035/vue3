<template>
      <a-form-item
      v-model:label="label"
      v-model:name="name"
      v-model:placeholder="placeholder"
      v-model:disabled="disabled"
      v-model:maxLength="maxLength"
      v-model:size="disabled"
      v-model:type="type"
      :rules="rules"
    >
      <a-input
       v-model:value="initialValue" 
      :allowClear="allowClear"
      @change="onChange"
       />
    </a-form-item>
</template>

<script>

  export default {
    props: {
      name: {
        type: String,  
        required: true
      },
      initialValue: String,
      placeholder: String,
      allowClear: Boolean,
      disabled: Boolean,
      maxLength: Number,
      size: null,
      type: String,
      onChange: {
        type: Function,
      },
      label: String,
      rules: null,
    },
  setup(props) {
    const onChange = (value) => {
      console.log(value)

      props.onChange && props.onChange(value);

    }
      return {...props}
    },
    name: "Input",
  };
</script>
