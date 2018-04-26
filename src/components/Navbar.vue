<template>
  <div id="myNav">





    <div class="collapse bg-inverse" id="navbarHeader" style="background: #333;">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 py-4">

            <h4 class="text-white">About Adult Redeploy Illinois</h4>
            <p class="text-muted">
              <a href="http://www.icjia.state.il.us/redeploy">Adult Redeploy Illinois</a> is a state initiative providing funding and technical assistance to local jurisdictions
              to support the diversion of non-violent offenders from prison to more effective and less expensive community-based
              supervision and services. ARI has grown from five initial pilot sites in early 2011, to the current 20 sites,
              implementing 39 programs covering 39 Illinois counties (as of March 2017).

            </p>
          </div>
          <div class="col-sm-4 py-4">
            <h4 class="text-white">Contact</h4>
            <ul class="list-unstyled">
              <li>
                <a href="http://www.icjia.state.il.us/redeploy" class="text-white">Visit ARI website</a>
              </li>
              <li>
                <a href="mailto: cja.irc@illinois.gov" class="text-white">Send email</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar navbar-light bg-faded">
      <div class="container d-flex justify-content-between">

        <a href="#" class="navbar-brand" style="font-weight: 900">ADULT REDEPLOY ILLINOIS</a>

        <button class="navbar-toggler hamburger hamburger--spin" type="button" data-toggle="collapse" data-target="#navbarHeader"
          aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </div>





    <!-- TEMPLATE END -->

  </div>
</template>

<script>

  export default {
    mounted() {

      // console.log(this.publicPath)
      $(document).ready(function () {
        $('.hamburger').click(function () {
          $(this).toggleClass('is-active');
        });
      });
    },
    components: {

    },
    name: 'Navbar',
    methods: {


    },
    data() {
      return {

      }
    }
  }
</script>


<style scoped>
  a {
    color: #fff;
  }

  a:hover {
    color: #aaa
  }

  .hamburger {
    margin-top: -12px
  }

  .nav-header {
    font-weight: 900;
    text-transform: uppercase;
    color: #444
  }

  .hamburger-box {

    height: 6px;

  }

  .navbar {
    -webkit-box-shadow: none !important;
    -moz-box-shadow: none !important;
    box-shadow: none !important;
  }
</style>
s