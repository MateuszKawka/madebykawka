<template>
    <section class="section" id="services">
      <h2 class="section__title">
        Czym się zajmuję?
      </h2>

      <div class="services">
        <div class="services-item">
          <h3 class="services-item__name">
            Strony typu wizytówka
          </h3>
          <p class="services-item__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            tempore velit vitae fugit sint consequuntur optio, at nobis ipsum
            ullam molestias dignissimos eaque cum a officia eos nisi? Nisi,
            voluptas.
          </p>
        </div>
        <div class="services-item">
          <h3 class="services-item__name">
            Strony z Systemem Zarządzania Treścią (CMS)
          </h3>
          <p class="services-item__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            tempore velit vitae fugit sint consequuntur optio, at nobis ipsum
            ullam molestias dignissimos eaque cum a officia eos nisi? Nisi,
            voluptas.
          </p>
        </div>
        <div class="services-item">
          <h3 class="services-item__name">
            Blogi
          </h3>
          <p class="services-item__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            tempore velit vitae fugit sint consequuntur optio, at nobis ipsum
            ullam molestias dignissimos eaque cum a officia eos nisi? Nisi,
            voluptas.
          </p>
        </div>
        <div class="services-item">
          <h3 class="services-item__name">
            Projekty graficzne
          </h3>
          <p class="services-item__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            tempore velit vitae fugit sint consequuntur optio, at nobis ipsum
            ullam molestias dignissimos eaque cum a officia eos nisi? Nisi,
            voluptas.
          </p>
        </div>
      </div>
    </section>
</template>

<style lang="scss" scoped>
.services {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  margin-top: $s4;
}

.services-item {
  width: 75%;
  height: auto;
  min-height: $s7;
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
  margin-top: $s4;
  position: relative;
  z-index: 1;
  overflow: hidden;
  padding: 1rem;
}

.services-item:hover::before {
  content: "";
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
  top: 0;
  padding: 1rem 0;
  height: 100%;
  transform: translateX(-100%);
  background: $details-color;
  animation: menuaa 0.25s ease-in-out forwards alternate;
  z-index: -1;
}

@keyframes menuaa {
  to {
    transform: translateX(-40%);
  }
}

.services-item__name {
  width: 100%;
  display: flex;
  align-items: center;
  font-size: $font-size-big;
  font-weight: $font-weight-medium;
}

.services-item__desc {
  margin-left: $s3;
  display: flex;
  align-items: center;
}
</style>
