<template>
  <div>
    <form action="/mail.php" class="form" v-if="!form.sending && !form.send">
      <fieldset class="form__fieldset">
        <div class="form-group">
          <label class="form__label" name="contact_info" for="email-input">Email</label>
          <input
            class="form__input email-input"
            id="email-input"
            type="email"
            v-model="form.formContent.email"
            @keyup="validateEmail"
            :disabled="form.send"
          />
          <p class="form-info--invalid hidden email-error">
            {{ $t(`form.emailError`) }}
          </p>
        </div>
        <div class="form-group">
          <label class="form__label" for="message-input">{{ $t(`form.message`) }}</label>
          <textarea
            type="text"
            class="form__textarea message-input"
            id="message-input"
            name="message"
            @keyup="validateMessage"
            v-model="form.formContent.message"
            :disabled="form.send"
          ></textarea>
          <p class="form-info--invalid hidden message-error">
            {{ $t(`form.messageError`) }}
          </p>
        </div>
      </fieldset>
      <div class="flex">
        <button
          type="button"
          class="button button--light form__button"
          @click="sendMessage"
          v-if="!form.send"
          :disabled="form.sending"
        >
          {{ $t(`form.send`) }}
        </button>
      </div>
    </form>
    <div class="loader" v-if="form.sending && !form.send">
      <svg class="spinner" viewBox="0 0 50 50">
        <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
      </svg>
    </div>
    <div v-if="form.send" >
      <button class="button button--light form__button" @click="resetForm">
        Wyślij kolejną wiadmość
      </button>
    </div>
  </div>
</template>

<script>
const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const messageRegex = /.{3,}/;

const initForm = () => ({
  formContent: {
    email: "",
    message: ""
  },
  formValidation: {
    email: false,
    message: false
  },
  validate: false,
  success: false,
  sending: false,
  send: false
});

import EmailPopup from "@/components/EmailPopup";
export default {
  data() {
    return {
      form: initForm()
    };
  },
  components: {
    EmailPopup
  },
  methods: {
    sendMessage(e) {
      this.validateEmail();
      this.validateMessage();
      this.validation();
      this.form.sending = true;
      this.form.send = false;
      e.preventDefault();
      this.form.sending = false;
      this.form.success = true;
      this.form.send = true;
      if (this.form.validate) {
        fetch("/mail.php", {
          method: "POST",
          body: new URLSearchParams(this.form.formContent)
        })
          .then(response => {
            console.log(response);
            this.form.sending = false;
            if (response.ok) {
              console.log("Wszystko jest git");
              this.form.success = true;
              this.form.send = true;
              this.$modal.show(
                EmailPopup,
                { send: true },
                { draggable: false }
              );
            }
          })

          .catch(err => {
            this.$modal.show(
              EmailPopup,
              { send: false},
              { draggable: false }
            );
          });
      } else {
        this.form.sending = false;
      }
    },
    validateEmail() {
      const emailInput = document.querySelector(".email-input");
      const emailError = document.querySelector(".email-error");

      if (!emailRegex.test(this.form.formContent.email)) {
        this.form.formValidation.email = false;
        emailError.classList.remove("hidden");
        emailInput.classList.add("form__input--invalid");
      } else {
        this.form.formValidation.email = true;
        emailError.classList.add("hidden");
        emailInput.classList.remove("form__input--invalid");
      }
    },
    validateMessage() {
      const messageInput = document.querySelector(".message-input");
      const messageError = document.querySelector(".message-error");

      if (!messageRegex.test(this.form.formContent.message)) {
        this.form.formValidation.message = false;
        messageError.classList.remove("hidden");
        messageInput.classList.add("form__input--invalid");
      } else {
        this.form.formValidation.message = true;
        messageError.classList.add("hidden");
        messageInput.classList.remove("form__input--invalid");
      }
    },
    validation() {
        this.form.validate = this.form.formValidation.email && this.form.formValidation.message
      }
    },
    resetForm() {
      this.form = initForm();
    }
};

</script>

<style lang="scss" scoped>
.form {
}

.form__label {
  color: $text-color;
  font-size: $font-size-medium;
  margin: $s2 0;
  color: #fff;
}

.hidden {
 display: none;
}

.form__input {
  width: 100%;
  background: none;
  border: 2px solid #fff;
  padding: 1rem 2rem;
  color: $text-color;
  background: #fff;
}

.form__input:focus {
  border: 2px solid orange;
}

.form__input--invalid {
  border: 2px solid #bb3737 !important;
  color: #bb3737 !important;
}

.form__textarea {
  width: 100%;
  background: none;
  height: 112px;
  border: 2px solid #fff;
  padding: 1rem 2rem;
  color: $text-color;
  background: #fff;
  resize: vertical;
}

.form__textarea:focus {
  border: 2px solid orange;
}

.form-group {
  height: 100%;
  position: relative;
  display: flex;
  flex-flow: column wrap;
  margin-top: $s4;
}

.flex {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: $s4;
}
.form__fieldset {
  border: none;
  display: flex;
  flex-flow: column wrap;
  width: 420px;
}

@media all and (max-width: $tablets) {
  .form {
    max-width: 320px;
  }

  .form__fieldset {
    width: 320px;
  }
  .flex {
    margin-top: $s1;
  }
}

.form-info--invalid {
  position: absolute;
  bottom: -$s3;
  color: $background-color;
  margin-top: $s1;
}

.form__button {
  margin: $s2 0;
}

.loader {
  width: 100%;
  height: 100%;
  position: relative;
  margin: $s4 0;
}

.spinner {
  animation: rotate 2s linear infinite;
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -25px 0 0 -25px;
  width: 50px;
  height: 50px;

  & .path {
    stroke: #fff;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
</style>
