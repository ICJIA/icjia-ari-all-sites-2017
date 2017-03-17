<template>
<div>
<navbar />


<section class="jumbotron text-center" id="section-0">
     <div class="container">
       <h1 class="jumbotron-heading">2017 Adult Redeploy Illinois All-Sites Summit </h1>
       <p class="lead heavy spacerTop30">
         May 17-18, 2017 </p>
         <p class="text-muted">
           Chateau Hotel and Conference Center
          <br/>
              1601 Jumer Drive<br/>
              Bloomington, IL 61704
               </p>
           <p class="text-muted">
             </p>





       <p class="registration-closed">
         Registration open 3/29/17 to 4/12/17
         <!-- <div class="x-small">Registration open 3/29/17 to 4/12/17</div> -->

       </p>
     </div>
   </section>

<section id="section-1">
<div class="container">
<div class="row">
  <div class="col-md-5">
    <h2 class="col-head">About the Summit</h2>
<p>The sixth annual All-Sites Summit will feature training
  relevant to the breadth of Adult Redeploy Illinois (ARI) programs.
  This year's summit will focus on peer learning around innovations at ARI sites and community reintegration and partnerships.
</p><p>The summit will include plenary and breakout sessions,
a rollout of the <em>Community Involvement Toolkit</em> project that features
13 ARI innovations from across the state, updates from ARI sites,
and time for networking.
Those expected to attend are a spectrum of ARI site stakeholders
 including but not limited to judges, prosecutors, defense attorneys,
 treatment providers, probation staff and supervisors, law enforcement,
 program coordinators, researchers, program partners and policymakers.
 </p><p>Summit content is structured for relevancy to a broad group of stakeholders. In addition to current ARI program representation, planning grantees will also participate and have previously benefited from exposure to current ARI programs and system-wide training.</p>


<h2 class="col-head spacerTop50">Adult Redeploy Illinois</h2>
<p>Adult Redeploy Illinois is a state initiative providing funding and technical assistance to local jurisdictions to support the diversion of non-violent offenders from prison to more effective and less expensive community-based supervision and services.
</p><p>ARI sites use grant funds to design and implement local programs that address offenders' risks and needs and leverage their assets (family support, employment) to improve public safety and offender outcomes. ARI has grown from five initial pilot sites in early 2011, to the current 20 sites, implementing 39 programs covering 39 Illinois counties (as of March 2017).
</p>  </div>

  <div class="col-md-7">
    <div class="text-center map-container">
      <h2 class="col-head">Adult Redeploy Illinois SFY2017 Sites</h2>
    <img src="/static/img/ARIJanuary 2017-min.png" alt="Adult Redeploy Illinois SFY2017 Sites">
  </div>
  </div>

</div>

</div>




</section>



<section id="section-2">
<div class="container">
  <div class="row">
    <div class="col-md-6">

      <h2 class="col-head">Agenda</h2>

      <p>The 2017 ARI All-Sites Summit will offer peer
        learning around innovations at ARI sites and community reintegration and partnerships. Expected topics include community involvement in local ARI programs, the emerging adult population, reducing employment barriers through criminal records relief, restorative justice and more.
</p><p>For more information, contact <a href="lindsey.lapointe@illinois.gov">lindsey.lapointe@illinois.gov</a>,
Program Manager, <a href="http://www.icjia.state.il.us/redeploy">Adult Redeploy Illinois</a>.</p>
<div class="text-center">
<h5 class="text-muted coming-soon">Agenda, Summit resources, and Power Points coming soon.</h5>
</div>


    </div>

    <div class="col-md-6">

      <h2 class="col-head">Registration, Lodging & Meals</h2>


      <p class="text-center">

<div class="hotel-info text-center">
        <strong>Chateau Hotel and Conference Center</strong> <br/>
1601 Jumer Drive <br/>
Bloomington, IL 61704 <br/>
May 17 and 18, 2017<br/>
<div style="margin-top: 15px;">
<a href="http://www.bloomingtonchateau.com/" class="">
  Hotel information&nbsp;&raquo;</a>
  <br/>


<button class="btn btn-secondary btn-register spacerTop30" disabled>
 REGISTRATION OPEN 3/29/17 TO 4/12/17
 </button>
</div>
</p>
</div>



        <ul>
          <li>There are no actual registration costs for the event; however, all participants must still register for the Summit. It is suggested that participants confirm participation with their ARI program contact before registering.</li>
<li>Mileage, lodging and per diem should be covered in local program budgets.</li>
<li>Participants must make lodging reservations on their own or through their ARI
  programs.</li>
<li>The hotel has set aside a block of rooms on Tuesday, May 16th and Wednesday, May 17th.
   Reservations should be made by Wednesday, April 12th to ensure access
   to the state rate.</li> Ask for the "Adult Redeploy Illinois" room block when making reservations at 309-662-2020.
<li>Expected start time is 8:30am on both days,
  with coffee  and check-in beginning at 7:45am.</li>
<li>Morning coffee and light pastries will be provided.</li>
<li>The Summit will conclude about 4:30pm on Thursday, May 18th.</li>
</ul>



    </div>




  </div>
<div class="row">
  <div class="col-md-12">
    <div class="text-center spacerTop50">
      <p>For more information, contact <a href="lindsey.lapointe@illinois.gov">lindsey.lapointe@illinois.gov</a>,
      Program Manager, <a href="http://www.icjia.state.il.us/redeploy">Adult Redeploy Illinois</a>.</p>
    </div>

  </div>

</div>
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
#section-0 {background-color: #3a3a87; color: #fff}
#section-0 .text-muted {color: #fff !important}
#section-0 .lead {color: #fff !important}
#section-1 {background-color: #fff; padding-top: 60px; padding-bottom: 60px;}
#section-2 {background-color: #eee; padding-top: 60px; padding-bottom: 50px;}
.jumbotron {margin-bottom: 0 !important}
.btn-register {font-weight: 700; text-transform: uppercase;}
.lead {color: #444; font-weight: 900}
.heavy {font-weight: 700}
.spacerTop30 {margin-top: 30px;}
.spacerTop40 {margin-top: 40px;}
.spacerTop50 {margin-top: 50px;}
.x-small {font-size: 12px; font-weight: 900; color: #888; text-transform: uppercase}
.registration-closed {font-weight: 900; margin-top: 60px; text-transform: uppercase;}
.map-container {}
.map-container img {margin-top: 50px; width: 500px;}
.col-head {padding-bottom: 10px; border-bottom: 1px solid #ccc; margin-bottom: 20px}
.coming-soon {margin-top: 50px;}
.hotel-info {margin-top: 50px; margin-bottom: 50px;}
</style>
