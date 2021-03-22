<template>
  <div class="form__btn form__btn_green" @click="onClick">
    <span class="form__btn-txt">{{ btnTxt }}</span>
    <!--Component sum -->
    <sum-total :totalSum="cSumTotal"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import SumTotal from './SumTotal.vue';

export default {
  components: { SumTotal },
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
  },

  computed: {
    ...mapState(['data']),

    cSumTotal() {
      return this.data.sum
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

  .form__btn:hover {
    cursor: pointer;
  }

  .form__btn:active {
    transform: scale(0.9);
  }

  /* Green */
  .form__btn.form__btn_green {
    background: #62b13d;
  }

  .form__btn-txt {
    margin-right: 10px;
  }

</style>