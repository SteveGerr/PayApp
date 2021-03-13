<template>
  <input
    class="input-comp"
    type="text"
    :placeholder="placeholder"
    v-model="inputData"
    @input="sendData"
    >
</template>

<script>
export default {
  name: "InputComp",

  data() {
    return {
      inputData: ''
    }
  },

  props: {
    placeholder: {
      type: String
    },
    data: {},
  },

  methods: {
    sendData () {
      this.$emit('sendInput', this.inputData)
    }
  }


}
</script>

<style scoped>
  .input-comp {
    width: 100%;
    min-height: 60px;
    margin: 5px 0;
    padding: 0 30px 0 40px;
    border-radius: 77px;
    border: 1px solid #DADCE2;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    color: #787D89;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    outline: none;
  }
</style>