<template>
  <v-page>
    <v-toolbar>
      <v-button v-show="preview" class="left" @click="backPreview"
        >back</v-button
      >
      <div class="center">{{ pageTitle }}</div>
    </v-toolbar>

    <div v-show="!preview">
      <title-data @titlePass="getTitle"></title-data>
      <main-image @mainImagePass="getImage"></main-image>
      <main-articles @dataPass="mainArticleGet"></main-articles>
      <info @infoPass="infoGet"></info>
      <date @datePass="dateGet"></date>
      <author
        @authorPass="authorGet"
        @authorInfoPass="authorInfoGet"
        @authorIconPass="authorIconGet"
        @authorImgPass="authorImgGet"
      ></author>
      <category @categoryPass="categoryGet"></category>
      <university @universityPass="universityGet"></university>
      <div style="padding: 10px 9px;">
        <v-button modifier="large" @click="previewOpen()">プレビュー</v-button>
      </div>
    </div>
    <div v-show="preview">
      <preview :main-article="mainArticle"></preview>
      <div style="padding: 10px 9px;">
        <v-button modifier="large" @click="articleAdd()"
          >記事を投稿する</v-button
        >
      </div>
    </div>
    <modal
      @modalClose="close"
      v-bind:modal-visible="showModal"
      v-show="showModal"
      >{{ message }}</modal
    >
  </v-page>
</template>

<script>
import modal from "./components/00modal.vue";
import mainArticles from "./components/01mainArticles.vue";
import titleData from "./components/02title.vue";
import mainImage from "./components/03mainImage.vue";
import info from "./components/04textArea.vue";
import date from "./components/05dateDecide.vue";
import author from "./components/06authorInfo.vue";
import category from "./components/07category.vue";
import university from "./components/08university.vue";
import preview from "./components/100preview.vue";
import firebase from "firebase";

export default {
  data() {
    return {
      pageTitle: "パンプラージュ記事追加フォーム",
      title: "",
      date: "",
      info: "",
      author: "",
      authorInfo: "",
      authorIconImg: {
        name: "",
        url: "",
      },
      authorBackgroundImg: {
        name: "",
        url: "",
      },
      mainArticle: [],
      articleMainImg: {
        name: "",
        url: "",
      },
      range: "all",
      category: "未選択",
      university: "",
      message: "問題が発生し、処理を完了できませんでした。",
      submitActivate: true,
      showModal: false,
      preview: false,
      finished: false,
    };
  },
  components: {
    modal,
    mainArticles,
    titleData,
    mainImage,
    info,
    date,
    author,
    preview,
    category,
    university,
  },
  created() {
    // const timestamp = firebase.firestore.Timestamp.now();
    // alert(timestamp.toDate())
  },
  mounted() {},
  methods: {
    /* eslint-disable */
    backPreview() {
      this.preview = false;
    },
    previewOpen() {
      let that = this;
      if (
        this.title != "" &&
        this.mainArticle != "" &&
        this.articleMainImg.name != "" &&
        this.author !== "" &&
        this.date !== "" &&
        this.category !== "" &&
        this.university !== ""
      ) {
        this.message = "プレビューを表示します";
        this.showModal = true;
        this.preview = true;
        this.pageTitle = this.title;
      } else {
        this.message =
          "タイトル・メイン画像・記事部分・公開日・著者・カテゴリー・大学は必須入力です！";
        this.showModal = true;
      }
    },
    articleAdd() {
      let that = this;
      this.message = "記事を保存します。";
      this.showModal = true;

      if (preview) {
        this.mainArticle.forEach(function (item, index, array) {
          delete item.uploadedImage;
        });
        var db = firebase.firestore();
        const timestamp = firebase.firestore.Timestamp.now();
        db.collection("rinrinDatas")
          .add({
            title: that.title,
            mainArticle: that.mainArticle,
            articleMainImg: that.articleMainImg,
            date: that.date,
            author: that.author,
            info: that.info,
            range: that.range,
            category: that.category,
            university: that.university,
            timestamp: timestamp,
            canRead: false,
            views: 0,
            good: 0,
          })
          .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            that.message = "データを保存しました。";
            that.showModal = true;
            that.finished = true;
            if (
              that.author !== "" &&
              that.authorInfo !== "" &&
              that.authorIconImg !== "" &&
              that.authorBackgroundImg !== ""
            ) {
              db.collection("rinrinAuthor").add({
                name: that.author,
                info: that.authorInfo,
                icon: that.authorIconImg,
                backgroundImg: that.authorBackgroundImg,
              });
            }
          })
          .catch(function (error) {
            console.error("Error adding document: ", error);
            that.message =
              "エラーが発生しました。お手数ですが、かわせに問い合わせてください。";
            that.showModal = true;
          });
      } else {
        this.message =
          "予期せぬエラーが発生しました。お手数ですがやり直してください。";
        this.showModal = true;
      }
    },
    mainArticleGet(value) {
      this.mainArticle = value;
    },
    getTitle(value) {
      this.title = value;
    },
    infoGet(value) {
      this.info = value;
    },
    getImage(value) {
      this.articleMainImg = value;
    },
    dateGet(value) {
      this.date = value;
    },
    authorGet(value) {
      this.author = value;
    },
    authorInfoGet(value) {
      this.authorInfo = value;
    },
    authorIconGet(value) {
      this.authorIconImg = value;
    },
    authorImgGet(value) {
      this.authorBackgroundImg = value;
    },
    categoryGet(value) {
      this.category = value;
    },
    universityGet(value) {
      this.university = value;
    },
    close(value) {
      if (this.finished) {
        window.location.reload();
      }
      this.showModal = false;
    },
  } /* eslint-enable */,
};
</script>
<style scoped>
.card {
  margin: 10px 10px -5px 10px;
}
.tytle {
  text-decoration: underline;
}
</style>
