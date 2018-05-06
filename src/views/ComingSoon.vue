<template>
  <section>
    <div id="logo">
      <img src="../assets/logo.gif" alt="Logo">
    </div>
    <div id="text">Side under udvikling</div>
    <div>
      <swinging-image></swinging-image>
    </div>
  </section>
</template>

<script>
import SwingingImage from '../components/SwingingImage';
export default {
  components: {
    SwingingImage
  }
}
</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  #logo {
    padding-top: 40px;
    img {
      width: 50px;
      height: 50px;
    }
  }
  #text {
    align-self: center;
  }
}
</style>
