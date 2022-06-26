<template>
  <div>
    <h2>首页</h2>
    <nuxt-link to="/about">关于我们</nuxt-link>
    <nuxt-link to="/contact">联系我们</nuxt-link>
    <Tutorial/>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
