<template>
  <v-list>
    <div v-for="item in mainArticle" :key="item.index">
      <v-list-title v-if="item.type == 'title'">
        {{
        item.contents
        }}
      </v-list-title>
      <v-list-item v-if="item.type == 'detail'">
        {{
        item.contents
        }}
      </v-list-item>
      <img v-if="item.type == 'image'" :src="item.uploadedImage" />
    </div>
  </v-list>
</template>

<script>
export default {
  props: ["mainArticle"],
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style scoped></style>
