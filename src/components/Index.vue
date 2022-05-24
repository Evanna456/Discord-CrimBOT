<template>
  <b-container fluid>
    <b-row>
      <b-col id="bot-profile-img" cols="12" align="center">
        <img
          id="round-img"
          class="img-resposive"
          src="./../assets/CrimBOT.png"
          width="300px"
          height="auto"
          alt="logo"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col id="bot-profile-name" cols="12" align="center">
        <h3>CrimBOT</h3>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
  #bot-profile-img {
    margin: 100px 0px 0px 0px;
  }

  #bot-profile-name {
    margin: 10px 0px 0px 0px;
  }
</style>

<script>
  export default {
    name: "Index",
    components: {},
    metaInfo: {
      title: "CrimBOT",
      titleTemplate: "%s",
      meta: [
        {
          name: "description",
          content: "A Discord BOT.",
        },
      ],
    },
    data: function () {
      return {};
    },
    mounted() {
      window.scrollTo(0, 0);
    },
    updated() {},
    computed: {},
    methods: {},
  };
</script>
