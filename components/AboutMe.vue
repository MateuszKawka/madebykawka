<template>
<!--  <section class="section" id="about-me">-->
<!--    <h2 class="section__title">O mnie</h2>-->
<!--    <div class="about-me">-->
<!--&lt;!&ndash;      <div class="about-me__photo"></div>&ndash;&gt;-->
<!--      <div class="about-me__content">-->
<!--        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi facere ipsum labore odio! Doloribus commodi eaque architecto corporis tenetur, illum consequuntur, rerum vero libero necessitatibus porro accusamus, omnis ipsa culpa.</p>-->
<!--        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi facere ipsum labore odio! Doloribus commodi eaque architecto corporis tenetur, illum consequuntur, rerum vero libero necessitatibus porro accusamus, omnis ipsa culpa.</p>-->
<!--      </div>-->
<!--    </div>-->
<!--  </section>-->
</template>

<style lang="scss" scoped>
.section__title {
  margin-top: $s5;
}

.about-me {
}

.about-me__photo {
  display: block;
  width: 240px;
  height: 240px;
  position: relative;
  z-index: 21;
  background: url("/avatar.jpg") center no-repeat;
  background-size: cover;
  margin: 0 auto;
}

// .about-me__photo::before {
//   content: "";
//   display: block;
//   align-items: center;
//   position: absolute;
//   width: 100%;
//   top: -10%;
//   left: 0;
//   padding: 1rem 0;
//   height: 120%;
//   background: $details-color;
//   z-index: -1;
//   transform: translateX(-50%);
//   transition: 0.25s all ease-in-out;
// }

.about-me {
  width: 60%;
  margin-top: $s4;
  text-align: center;

  p {
    margin-top: $s2;
  }
}

.about-me__content {
    margin-top: $s7;
}

@media only screen and (max-width: $mobile) {
 .about-me {
     width: 90%;
 }
}
</style>
