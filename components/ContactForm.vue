<template>
    <form action="" class="form">
      <label class="form__label">Imię i nazwisko</label>
      <input class="form__input" type="text" />

      <label class="form__label">Email</label>
      <input class="form__input" type="text" />

      <label class="form__label">Wiadomość</label>
      <textarea type="text" class="form__textarea"></textarea>
      <div class="flex">
          <button type="submit" class="button">Wyślij</button>
      </div>
    </form>
</template>

<style lang="scss">
.form {
    display: flex;
    flex-flow: column wrap;
    width: 100%;
    max-width: 420px;
}

.form__label {
    color: $text-color;
    font-size: $font-size-medium;
    margin: $s2 0;
}

.form__input {
  background: none;
  border: 2px solid $details-color;
  padding: 1rem 2rem;
  border-radius: $default-border-radius;
  color: $text-color;
}

.form__textarea {
  background: none;
  height: 112px;
  border: 2px solid $details-color;
  padding: 1rem 2rem;
  border-radius: $default-border-radius;
  color: $text-color;
  resize: vertical;
}

.flex {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: $s4;
}
</style>
