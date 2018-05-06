<template>
  <section>
    <!-- <div id="logo">
      <img src="../assets/logo.png" alt="Logo">
    </div> -->
    <div id="text">
      <p class="title">Tak fordi du valgte at besøge mit website, som midlertidigt er under udvikling…</p>
      <p>Som uddannet mulitimediedesigner og snarest konceptudvikler, med en kreativ tilgang til at løse problemstillinger, venter der her et website med mit portfolio og diverse information omkring mig.</p>
      <p>Kom snart igen, eller kontakt mig på min mail: <a href="mailto:caroline.l.hansen@live.dk?Subject=Hej%20Caroline">caroline.l.hansen@live.dk</a></p>
      <p>De bedste hilsner Caroline</p>
    </div>
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
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 40px;
  background-image: url('../assets/marmor.jpg');
  #logo {
    position: absolute;
    top: 20px;
    left: 20px;
    img {
      width: 30px;
    }
  }
  #text {
    max-width: 700px;
    padding: 10px;
    background-color: rgba(255, 255, 255, .4);
    font-size: 14px;
    .title {
      font-size: 22px;
      font-weight: 700;
      text-transform: uppercase;
    }
    a {
      color: #F50057;
      text-decoration: none;
    }
  }
}

@media screen and (max-width: 650px) {
  section {
    flex-direction: column;
    #text {
      order: 3;
    }
  }
}

</style>
