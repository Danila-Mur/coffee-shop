<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            <nav-item classItem="footer__item" :link="links.footer.link">
              <img :src="require(`@/assets/logo/${links.footer.icon}`)" :alt="links.footer.icon" />
            </nav-item>

            <nav-item
              classItem="footer__item"
              v-for="link in links.other"
              :key="link.id"
              :link="link.link"
              :text="link.text"
            ></nav-item>
          </ul>
        </div>
      </div>
      <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo" />
    </div>
  </footer>
</template>

<script>
import NavItem from '@/components/NavItem.vue';

export default {
  components: { NavItem },
  computed: {
    links() {
      return this.$store.getters['getFooterLinks'];
    },
  },
};
</script>
