<template>
  <div class="home">
    <h2>{{ msg }} Page</h2>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  mixins: [],
  props: {
    msg: {
      type: String,
      default: "Home",
    },
  },
  data: function () {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.home {
}
</style>