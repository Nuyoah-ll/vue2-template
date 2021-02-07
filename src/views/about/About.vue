<template>
  <div class="about">
    <h2>{{ msg }} Page</h2>
  </div>
</template>

<script>
export default {
  name: "About",
  components: {},
  mixins: [],
  props: {
    msg: {
      type: String,
      default: "About",
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
.about {
}
</style>