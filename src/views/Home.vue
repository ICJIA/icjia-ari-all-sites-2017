<template>
<div>
<navbar />


<section class="jumbotron text-center">
     <div class="container">
       <h1 class="jumbotron-heading">2017 Adult Redeploy Illinois All-Sites Summit </h1>
       <p class="lead text-muted">
         May 17-18, 2017 </p>
       <p>
         <a href="#" class="btn btn-primary">Register Now</a>

       </p>
     </div>
   </section>
<my-footer />

</div>









</template>

<script>
    import Navbar from '@/components/Navbar'
    import MyFooter from '@/components/Footer'

    export default {
        name: 'Home',
        mounted () {

        },
        metaInfo() {
        return {
          title: this.title

        }
      },
        components: {

            Navbar,
            MyFooter
        },
        data() {
            return {
              title: 'Home'
            }
        }
    }
</script>

<style scoped>

</style>
