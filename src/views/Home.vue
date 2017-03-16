<template>
<div>
<navbar />

Page body here

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
