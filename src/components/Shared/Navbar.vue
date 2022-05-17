<template>
  <b-navbar id="navbar" toggleable="lg" type="light" variant="light">
    <b-navbar-brand href="/"> <strong>CrimBOT</strong></b-navbar-brand>
    <b-navbar-toggle
      target="nav-collapse"
      style="background-color: #ffffff"
    ></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item align="center"
          ><router-link to="/">Home</router-link></b-nav-item
        >
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style scoped>
  #navbar {
    padding: 10px;
    margin: 20px 0px 0px 0px;
    border: 1px solid black;
    border-radius: 5px;
  }
</style>

<script>
  export default {
    name: "Navbar",
    components: {},
    data: function () {
      return {};
    },
    mounted() {},
    updated() {},
    computed: {},
    methods: {},
  };
</script>
