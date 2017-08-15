<template>
  <aside class="dev">
    <VueDescription :line="'3'">
      {{desc}}
    </VueDescription>
  </aside>
</template>
<script>
  import VueDescription from '../components/description.vue'
  export default {
    data(){
      return {
        desc: '【龘藏竞拍】亲爱的会员前尘莫染君子莫笑，您刚刚成功竞拍了起拍1000，加价2000，订单号20161018161740001348，金额7000。还请您在48小时内及时支付哦。如有疑问请及时联系客服热线4009662988。↵【龘藏竞拍】亲爱的会员前尘莫染君子莫笑，您刚刚成功竞拍了起拍1000，加价2000，订单号20161018161740001348，金额7000。还请您在48小时内及时支付哦。如有疑问请及时联系客服热线4009662988。↵【龘藏竞拍】亲爱的会员前尘莫染君子莫笑，您刚刚成功竞拍了起拍1000，加价2000，订单号20161018161740001348，金额7000。还请您在48小时内及时支付哦。如有疑问请及时联系客服热线4009662988。'
      }
    },
    components: {VueDescription}
  };
</script>
<style rel="stylesheet/scss" lang="scss">
  .dev {
    text-align: center;
    line-height: .36rem;
    font-size: .28rem;
  }


</style>

