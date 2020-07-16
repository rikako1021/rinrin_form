<template>
  <v-alert-dialog modifier="rowfooter" :visible.sync="modalVisible">
    <slot></slot>
    <template slot="footer">
      <v-alert-dialog-button @click="modalClose">Ok</v-alert-dialog-button>
    </template>
  </v-alert-dialog>
</template>

<script>
export default {
  props: ["modalVisible"],
  data() {
    return {};
  },
  created() {},
  methods: {
    modalClose() {
      this.$emit("modalClose", false);
    }
  }
};
</script>

<style scoped>
</style>
