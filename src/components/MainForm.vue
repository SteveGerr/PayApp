<template>
  <form class="form">
    <div class="form__header">
      <div class="form__heading"><img src="../assets/header-icons/pay-icon.png" alt=""> <span>оплата картой</span></div>
      <!-- sum component -->
    </div>
    <div class="form__inputs-wrap">
      <!-- Num card -->
      <InputComp
        :placeholder="inputPlaceholder.numberCard"
        :data="inputData.numberCard"
      />
      <!-- Name -->
      <InputComp
        :placeholder="inputPlaceholder.nameOwner"

       />
      <!-- wrap date and CVC -->
      <div class="form__date-card-wrap">
        <!-- form date-->
      <InputComp
        class="form__date"
        :placeholder="inputPlaceholder.cardDate" />
        <!-- form CVC -->
      <InputComp :placeholder="inputPlaceholder.cvcCrard" />

      </div>

      <!-- Phone number -->
      <InputComp :placeholder="inputPlaceholder.phoneNumber" />
      <!-- email -->
      <InputComp :placeholder="inputPlaceholder.email" />
      <!-- btn -->
      <Button/>
      <div class="form__sertificate">
        <span>Платёж защищен сертификатом</span>
        <span class="form__sertificate_green">TLS и протоколом 3D Secure</span>
      </div>
      <div class="form__attantion-txt">
        Внимание! Ваш банк может взимать <br> дополнительную комиссию.
      </div>

    </div>

    <div class="form__footer">
      <div class="form__footer-links">
        <a href="#" class="form__btn-back-to-shop"><img src="../assets/footer-icons/back-arrow.png" alt=""> Вернуться в магазин</a>
        <a href="#" class="form__support"><img src="../assets/footer-icons/question-mark.png" alt="">Написать в поддержку</a>
      </div>
      <div class="form__footer-payment-systems">
        <!-- DSS -->
        <img src="../assets/DSS.png" alt="DSS">
        <!-- VISA -->
        <img src="../assets/Visa.png" alt="VISA">
        <!-- MIR -->
        <img src="../assets/Mir.png" alt="MIR">
        <!-- MasterCard -->
        <img src="../assets/SecureCode.png" alt="MasterCard">
      </div>
    </div>
  </form>
</template>

<script>
import InputComp from "./InputComp";
import Button from "./Button";

export default {
  name: "MainForm",

  components: {
    InputComp,
    Button
  },

  data() {
    return {
      inputPlaceholder: {
        numberCard: "Number card",
        nameOwner: "Name and surname",
        cardDate: "MM/YY",
        cvcCrard: "CVC",
        phoneNumber: "Phone number",
        email: "Email"
      },

      inputData: {
        numberCard: 1234456789001111,
      }
    }
  }

}
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    max-width: 450px;
    margin: 0 auto;
    background: #fff;
    border: 1px solid #BBBDC2;
    position: relative;
  }
  .form::after {
    max-width: 430px;
    bottom: -12px;
  }
  .form::before {
    max-width: 410px;
    bottom: -23px;
  }
  .form::after,
  .form::before {
    content: "";
    width: 100%;
    height: 11px;
    min-height: 11px;
    border-left: 1px solid #BBBDC2;
    border-right: 1px solid #BBBDC2;
    position: absolute;
  }

  /* border-bottom */
  .form::after,
  .form::before,
  .form__header  {
    border-bottom: 1px solid #BBBDC2;
  }

  .form__header,
  .form__inputs-wrap,
  .form__footer-payment-systems,
  .form__footer-links {
    padding: 0 40px;
  }
  .form__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-height: 60px;
  }
  .form__heading {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0.15em;
    text-align: left;
    color: #161717;
    text-transform: uppercase;
  }
  .form__heading img {
    margin-right: 20px;
  }
  .form__inputs-wrap {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .form__sertificate {
    margin: 12px 0 0 0;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0em;
    text-align: center;

  }
  .form__sertificate_green {
    margin-left: 2px;
    color: #76BB55;
  }
  .form__attantion-txt {
    margin-top: 20px;
    text-align: center;
    font-size: 13px;
    font-weight: 400;
    font-style: normal;
    line-height: 15px;
  }
  .form__footer {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .form__footer-links {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 14px;
    border-top: 1px solid #BBBDC2;
    border-bottom: 1px solid #BBBDC2;
  }
  .form__footer-links a {
    display: flex;
    align-items: center;
    width: 100%;
    text-decoration: none;
    color: #787D89;
  }
  .form__footer-links img {
    margin-right: 12px;
  }
  .form__footer-payment-systems {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .form__date-card-wrap {
    display: flex;
    width: 100%;
  }
  .form__date {
    margin-right: 10px;
  }

</style>