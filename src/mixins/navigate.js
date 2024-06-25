export const navigate = {
  methods: {
    navigate(id) {
      this.$router.push({ name: this.namePage, params: { id } });
    },
  },
};
