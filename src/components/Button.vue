<template>
  <div class="form__btn form__btn_green" @click="onClick">
    <span class="form__btn-txt">{{ btnTxt }}</span>
    <!--Component sum -->

  </div>
</template>

<script>
export default {
  name: "Button",

  data() {
    return {
      btnTxt: "Оплатить",
    }
  },

  methods: {
    onClick() {
      this.$emit('onSend')

    }
  }

}
</script>

<style scoped>
  .form__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 370px;
    min-height: 60px;
    margin: 5px 0;
    border-radius: 50px;
    font-size: 17px;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
  }

  /* Green */
  .form__btn.form__btn_green {
    background: #62b13d;
  }

</style>