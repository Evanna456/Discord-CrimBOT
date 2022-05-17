<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col col lg="12">
          <keep-alive>
            <component v-bind:is="GetNavbar"></component>
          </keep-alive>
        </b-col>
      </b-row>
    </b-container>
    <router-view />
  </div>
</template>

<style>
  :root {
    --primaryColor: #b695ca;
    --secondaryColor: #e8c7fe;
    --primaryBackground: #ffffff;
    --secondaryBackground: #000;
  }

  html,
  body {
    background-color: var(--primaryColor);
    width: 100%;
    height: auto;
    margin: 0px;
    padding: 0px;
  }

  /*fonts*/

  @font-face {
    font-family: CustomFontNormal;
    src: url("/fonts/roboto/woff2/Roboto-Regular.woff2") format("woff2"),
      url("/fonts/roboto/ttf/Roboto-Regular.ttf") format("truetype");
  }

  @font-face {
    font-family: CustomFontBold;
    src: url("/fonts/roboto/woff2/Roboto-Bold.woff2") format("woff2"),
      url("/fonts/roboto/ttf/Roboto-Bold.ttf") format("truetype");
  }

  @font-face {
    font-family: CustomFontItalic;
    src: url("/fonts/roboto/woff2/Roboto-Italic.woff2") format("woff2"),
      url("/fonts/roboto/woff2/Roboto-Italic.ttf") format("truetype");
  }

  @font-face {
    font-family: CustomFontLight;
    src: url("/fonts/roboto/woff2/Roboto-Light.woff2") format("woff2"),
      url("/fonts/roboto/ttf/Roboto-Light.ttf") format("truetype");
  }

  /*components*/

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: CustomFontBold, sans-serif;
    color: #4d4d4d;
    word-wrap: break-word;
  }

  strong {
    font-family: CustomFontBold, sans-serif;
    font-size: 20px;
    color: #4d4d4d;
    word-wrap: break-word;
  }

  label,
  p {
    font-family: CustomFontNormal, sans-serif;
    font-size: 20px;
    color: #4d4d4d;
    word-wrap: break-word;
  }

  small {
    font-family: CustomFontNormal, sans-serif;
    color: #4d4d4d;
    word-wrap: break-word;
  }

  textarea {
    font-family: CustomFontNormal, sans-serif;
    font-size: 20px;
    color: #4d4d4d;
    resize: none;
    max-width: 100%;
  }

  i {
    font-family: CustomFontItalic, sans-serif;
    font-size: 20px;
    color: #4d4d4d;
    word-wrap: break-word;
  }

  /*a*/

  a {
    font-family: CustomFontNormal, sans-serif;
    color: var(--secondaryColor);
    text-decoration: none;
    font-size: 17px;
  }

  a:focus,
  a:hover {
    font-family: CustomFontNormal, sans-serif;
    color: var(--primaryColor);
    text-decoration: none;
  }

  #errors {
    color: #ff1a1a !important;
  }

  #success {
    color: #009933 !important;
  }

  /*end:a*/

  /*box*/

  /*table*/

  table {
    width: 100%;
    empty-cells: show;
  }

  table th {
    font-family: CustomFontBold, sans-serif;
    font-size: 20px;
  }

  table td {
    font-family: CustomFontNormal, sans-serif;
    font-size: 20px;
    word-wrap: break-word;
  }

  /*end:table*/

  /*boxes*/

  /*assets*/

  #round-img {
    border-radius: 50%;
  }

  .img-responsive {
    max-width: 100%;
    height: auto;
  }

  .vid-responsive {
    max-width: 100%;
    height: auto;
  }

  /*button*/

  /*select*/

  /*preloader*/

  /*ellipsis*/

  .ellipsis {
    display: inline;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /*other components*/

  #nprogress .bar {
    background-color: var(--primaryColor) !important;
  }
</style>

<script>
  import Navbar from "./components/Shared/Navbar.vue";

  export default {
    name: "App",
    components: {},
    data: function () {
      return {};
    },
    mounted() {},
    updated() {},
    computed: {
      GetNavbar() {
        return Navbar;
      },
    },
    methods: {},
  };
</script>
