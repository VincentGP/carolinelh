<template>
  <figure class="swing">
    <img src="../assets/swinging.jpg" >
  </figure>
</template>

<style lang="scss" scoped>
.swing {
  animation: swing ease-in-out 1s infinite alternate;
  transform-origin: center -20px;
  // float:left;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
.swing img {
  width: 200px;
  display: block;
}
.swing:after{
  content: '';
  position: absolute;  
  width: 20px; 
  height: 20px;  
  border: 1px solid #999;
  top: -10px; 
  left: 46%;
  z-index: 0;
  border-bottom: none;
  border-right: none;
  transform: rotate(45deg);
}
/* nail */
.swing:before {
  content: '';
  position: absolute;
  width: 5px; height: 5px;
  top: -14px;left: 50%;
  z-index: 5;
  border-radius: 50% 50%;
  background: #000;
}
@keyframes swing {
  0% {
    transform: rotate(3deg); 
  }
  100% { 
    transform: rotate(-3deg); 
  }
}
</style>
