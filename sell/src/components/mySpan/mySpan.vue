<template>
  <span v-show="show" class="icon" :class="[mapTop[type],classMap[index]]" ></span>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      index: {
        type: Object
      },
      show: {
        type: Object
      },
      type: {
        type: Object
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
      this.classMap2 = ['decrease-1', 'discount-1', 'special-1', 'invoice-1', 'guarantee-1'];
      this.classMap3 = ['decrease-3', 'discount-3', 'special-3', 'invoice-3', 'guarantee-3'];
      this.mapTop = [this.classMap, this.classMap2, this.classMap3];
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .icon
    display: inline-block
    vertical-align: top
    width: 12px
    height: 12px
    margin-right: 4px
    background-size: 12px 12px
    background-repeat: no-repeat
    &.decrease
      bg-image('decrease_1')
    &.discount
      bg-image('discount_1')
    &.guarantee
      bg-image('guarantee_1')
    &.invoice
      bg-image('invoice_1')
    &.special
      bg-image('special_1')
    &.decrease-2
      bg-image('decrease_2')
    &.discount-2
      bg-image('discount_2')
    &.guarantee-2
      bg-image('guarantee_2')
    &.invoice-2
      bg-image('invoice_2')
    &.special-2
      bg-image('special_2')
    &.decrease-3
      bg-image('decrease_3')
    &.discount-3
      bg-image('discount_3')
    &.guarantee-3
      bg-image('guarantee_3')
    &.invoice-3
      bg-image('invoice_3')
    &.special-3
      bg-image('special_3')
</style>
