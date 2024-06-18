<template>
  <header>
    <ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">
      <li class="header__item">
        <router-link to="/">
          <img src="@/assets/logo/Logo.svg" alt="logo" />
        </router-link>
      </li>
      <li class="header__item">
        <router-link to="/our-coffee">Our coffee</router-link>
      </li>
      <li class="header__item">
        <router-link to="/goods">For your pleasure</router-link>
      </li>
      <li class="header__item">
        <router-link to="/contacts">Contact us</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          id: 0,
          link: '/',
          icon: 'Logo.svg',
        },
        {
          id: 1,
          text: 'Our coffee',
          link: '/our-coffee',
        },
        {
          id: 2,
          text: 'For your pleasure',
          link: '/goods',
        },
        {
          id: 3,
          text: 'Contact us',
          link: '/contacts',
        },
      ],
    };
  },
};
</script>
