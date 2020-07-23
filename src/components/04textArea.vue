<template>
  <v-card class="card">
    <v-textarea
      class="textarea--transparent"
      placeholder="場所など追加情報(未入力可)"
      style="width: 100%; height: 10vh"
      v-model="info"
    ></v-textarea>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      info: ""
    };
  },
  created() {},
  methods: {},
  watch: {
    info: {
      handler: function() {
        this.$emit("infoPass", this.info);
      }
    }
  }
};
</script>

<style scoped></style>
