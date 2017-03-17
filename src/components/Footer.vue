<template>
  <div >
    <!-- TEMPLATE START -->
    <footer class="text-center" id="footer">

          <div class="footer-text">© {{getFullYear()}}
            <a href="http://www.icjia.state.il.us">Adult Redeploy Illinois</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
              <a href="http://www.icjia.state.il.us/redeploy">Illinois Criminal Justice Information Authority</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <i class="fa fa-github" aria-hidden="true"></i>
                &nbsp;&nbsp;<a href="https://github.com/ICJIA/icjia-ari-all-sites-2017">View on GitHub</a>
              </div>


    </footer>
  </div>
</template>

<script>

export default {

  components: {

  },
  name: 'Footer',
  methods: {

      getFullYear: function () {
        var today = new Date();
        return today.getFullYear();
      }

  },
  data () {
    return {

    }
  }
}
</script>


<style scoped>

a {color: #eee}
footer {border-top: 0px solid #bbb; margin-top: -32px;
  padding-top: 20px; padding-bottom: 20px; background-color: #777; color: #eee;}
.footer-text {font-size:13px;}


</style>
