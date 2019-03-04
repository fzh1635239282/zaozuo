<template>
  <div class="app-index">
      <router-view />
      <FooterNav />
  </div>
</template>

<script>
import FooterNav from "components/layout/FooterNav"

export default {
    components: {
        FooterNav
    }
}
</script>
<style lang="stylus">
</style>