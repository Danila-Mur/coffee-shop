<template>
  <div @click="onEmmit(card.id)" :class="classItem">
    <img :src="card.image" :alt="card.image" />
    <div class="best__item-title">{{ card.name }}</div>
    <div class="best__item-price">{{ card.price | addCurrency }}</div>
  </div>
</template>

<script>
export default {
  props: {
    classItem: {
      type: String,
      required: false,
    },
    card: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onEmmit(id) {
      this.$emit('onNavigate', id);
    },
  },
};
</script>
