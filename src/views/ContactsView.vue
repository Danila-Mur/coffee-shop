<template>
  <main>
    <div class="banner contactspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <NavBarComponent />
          </div>
        </div>
        <TitleComponent title="Contact us" />
      </div>
    </div>
    <section class="contacts">
      <div class="container">
        <div class="row">
          <div class="col col-12 col-lg-6 offset-0 offset-lg-3">
            <div class="title mt-5">Tell us about your tastes</div>
            <img class="beanslogo mt-5" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo" />

            <form @submit.prevent="sendData" action="#" class="mt-5">
              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="name-input" class="mb-0">
                    Name
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input v-model="v$.name.$model" type="text" class="form-control" id="name-input" />
                  <span v-for="error in v$.name.$errors" :key="error.$uid">{{ error.$message }}</span>
                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="email-input" class="mb-0">
                    E-mail
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input v-model="v$.email.$model" type="email" class="form-control" id="email-input" />
                  <span v-for="error in v$.email.$errors" :key="error.$uid">{{ error.$message }}</span>
                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="phone-input" class="mb-0"> Phone </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input v-model="v$.phone.$model" type="tel" class="form-control" id="phone-input" />
                  <span v-for="error in v$.phone.$errors" :key="error.$uid">{{ error.$message }}</span>
                </div>
              </div>

              <div class="form-group row textarea">
                <div class="col col-12 d-flex justify-content-center">
                  <label for="pmessage" class="mb-3 mt-3 text-start">
                    Your message
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12">
                  <textarea
                    v-model="v$.message.$model"
                    class="form-control"
                    name="message"
                    id="message"
                    rows="5"
                    placeholder="Leave your comments here"
                  ></textarea>
                  <span v-for="error in v$.message.$errors" :key="error.$uid">{{ error.$message }}</span>
                </div>
              </div>
              <div class="input-group mb-3">
                <div class="input-group-text">
                  <input
                    v-model="v$.agreeOffer.$model"
                    class="form-check-input mt-0"
                    id="check-input"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                  />
                </div>
                <label for="check-input" class="mb-0"> Согласен с договором оферты </label>
                <span v-for="error in v$.agreeOffer.$errors" :key="error.$uid">{{ error.$message }}</span>
              </div>

              <div class="row">
                <div class="col">
                  <button class="btn btn-outline-dark send-btn">Send us</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { useVuelidate } from '@vuelidate/core';
import { required, email, maxLength, sameAs } from '@vuelidate/validators';
import { helpers } from '@vuelidate/validators';

import { minLength } from '@/validators/minLength';

import NavBarComponent from '@/components/NavBarComponent.vue';
import TitleComponent from '@/components/TitleComponent.vue';

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  components: { TitleComponent, NavBarComponent },
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      message: '',
      agreeOffer: true,
    };
  },
  validations() {
    return {
      name: { required },
      email: { required, email },
      phone: {},
      message: { required, maxLength: maxLength(20), minLength: helpers.withMessage('this value min 5', minLength) },
      agreeOffer: {
        checked: (val) => {
          return val;
        },
      },
    };
  },
  methods: {
    async sendData() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;

      const message = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message,
      };

      fetch('http://localhost:3000/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      }).finally(() => {
        this.name = '';
        this.email = '';
        this.phone = '';
        this.message = '';
      });
    },
  },
};
</script>
