<template>
  <v-card class="card">
    <input
      type="text"
      class="text-input"
      placeholder="タイトル(14文字以内を推奨)"
      style="width: 100%;margin:1%"
      v-model="title"
    />
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      title: ""
    };
  },
  created() {},
  methods: {},
  watch: {
    title: {
      handler: function() {
        this.$emit("titlePass", this.title);
      }
    }
  }
};
</script>

<style scoped></style>
