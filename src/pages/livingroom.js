<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>MailHouse - LivingRoom</title>
  <meta content="mail a file to millions of people without having their email address" name="description">
  <meta content="mail, file, mail a file, mailhouse, track pdf download, send, bulk, email, transactional email, cv, resume, recruiter, abdwahab adekola, arbind," name="keywords">

  <!-- Favicons >
  <link href="assets/img/favic.png" rel="icon">
  <link href="assets/img/.png" rel="apple-touch-icon"-->

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Montserrat:300,400,500,700" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet">
  <link href="assets/vendor/ionicons/css/ionicons.min.css" rel="stylesheet">
  <link href="assets/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet">
  <link href="assets/vendor/venobox/venobox.css" rel="stylesheet">
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="assets/css/style.css" rel="stylesheet">

</head>

<body>

  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top">
    <div class="container">

      <div class="logo float-left">
        <!-- Uncomment below if you prefer to use an text logo -->
         <h1><a href="">MailHouse</a></h1> 
       <!-- <a href=""><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
      </div>

     <nav class="main-nav float-right d-none d-lg-block">
        <ul>
          <li class="ctive"><a href="/">Home</a></li>
          <li class="ctive"><a href="/cchome.html">Mail a File</a></li>
          <li><a href="/aboutmailhouse.html">About Us</a></li>
          <li><a href="/pricing.html">Pricing</a></li>
          <li><a href="/accounts">LogIn / SignUp </a></li>
          <li><a href="/search?searchString=cv">Search</a></li>
         
          <li><a href="https://twitter.com/mailhouse247">Contact Us</a></li>
        </ul>
      </nav>


    </div>
  </header>

  <!-- ======= Intro Section ======= -->
  <section id="intro" class="clearfix">
    <div class="container" data-aos="fade-up">

      <div class="intro-img" data-aos="zoom-out" data-aos-delay="200">
        <img src="assets/img/intro-img.svg" alt="" class="img-fluid">
      </div>

      <div class="intro-info" data-aos="zoom-in" data-aos-delay="100">

        <p class="homeP">Enjoy files through mails from around the world</p>
        <p class="homeP">Send emails to others to recieve at their own convenience</p>
        <p class="homeP">Talent head hunting made easier</p>
        <p class="homeP">Write cold emails without disturbing others</p>
        <p class="homeP">Signing up not compulsory</p>
        <div>
          <a href="cchome.html" class="btn-get-started scrollto">Mail a File</a>
          <a href="aboutmailhouse.html" class="btn-services scrollto">ABOUT</a>
        </div>
      </div>

    </div>
  </section><!-- End Intro Section -->

  <!-- ======= recent residents ======= -->
    <section id="about">
      <div class="container" data-aos="fade-up">

        <header class="section-header">
          <h3 style="color:#007bff">RECENT RESIDENTS</h3>
          <p>These are some of the recently shared mails/files, copy as many as you like!</p>
        </header>

        <div class="row about-container">
       
          <div class="col-lg-12  content ">
            
            <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
              
              <table class="table table-sm table-borderless">
    <% recentResidents.forEach(function(recentResident) { %>
    <thead >
      <tr>
        <th scope="col" style="color:orange"><%=recentResident.data().subject %>
          <span style="font-weight: lighter; color:#b2beb5"><%=recentResident.data().whenCreated.slice(4,15) %></span>
        </th>
        
      </tr>
    </thead>
    <tbody style="padding-bottom:15%">
    
      <tr>
        <td><%=recentResident.data().snippet %></td>
      </tr>
      <tr> 
        <td style="font-weight: lighter; color:#6a6c6d"> <%=recentResident.data().attachmentName %>
          <span style="margin-left:25%;">
          <form method="get" action="/copy">
          <input type="hidden" name="ccid" value="<%=recentResident.data().ccid%>" /> 
          <button type="submit" class="btn btn-primary" >COPY THIS</button>
          </form>
          </span>
        </td>
      </tr>
      <tr>
        <td >      

        </td>
      </tr>

    <% }); %>

    </tbody>
</table>
            </div>         

          </div>

          
        </div>


      </div>
    </section><!-- End recent residents -->

  <!-- Vendor JS Files -->
  <script src="assets/vendor/jquery/jquery.min.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/jquery.easing/jquery.easing.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>
  <script src="assets/vendor/counterup/counterup.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/owl.carousel/owl.carousel.min.js"></script>
  <script src="assets/vendor/waypoints/jquery.waypoints.min.js"></script>
  <script src="assets/vendor/venobox/venobox.min.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>

  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>

  </body>