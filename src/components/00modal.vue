<template>
  <v-dialog :visible.sync="modalVisible">
    <slot></slot>
    <template slot="footer">
      <v-btn @click="modalClose">Ok</v-btn>
    </template>
  </v-dialog>
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

<style scoped></style>
