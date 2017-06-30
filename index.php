<?php
if ( $_SERVER['REQUEST_METHOD'] == 'POST' )
{
  
  $to = 'admin@thefuneralplanningcompany.co.uk';
  
  $subject = 'Contact Form';
  
  $headers = "From: " . strip_tags($_POST['email']) . "\r\n";
  $headers .= "Reply-To: ". strip_tags($_POST['email']) . "\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
  
  
  $message .= '<p><strong>'.strip_tags($_POST['first_name']).' '.strip_tags($_POST['last_name']).' made an enquiry the contact number is '.strip_tags($_POST['phone']).'</strong></p>';
  $message .= '<p><strong>'.strip_tags($_POST['comment']).'</strong></p>';
  
  
  mail($to, $subject, $message, $headers);
  $_POST["email"]="";
  $_POST["first_name"]="";
  $_POST["last_name"]="";
  $_POST["phone"]="";
  $_POST["comment"]=""; 
}
?>
<!DOCTYPE html>
<html lang="en" itemscope itemtype="https://schema.org/Organization">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
  <title>Comfort Estate Planning</title>
  <meta name="description" content="Comfort Estate Planning works with you ensuring your will and estate are in good order. Our specialists are able to help you alter or confirm your estate arrangements.">
  <meta name="keywords" content="senior citizen,funeral planning,funeral plans,insurance company,insurance broker,death preparation,last will and testament, will writers, funeral planners, estate planning, estate mangement, wills and estates">
  <meta content="en" name="language">
  <meta content="en_GB" name="og:locale">
  <meta content="GB-SKP" name="geo.region">
  <meta content="Stockport" name="geo.placename">
  <meta content="53.408502; -2.1687369999999648" name="geo.position">
  <meta content="53.408502, -2.1687369999999648" name="ICBM">
  <meta content="info@comfortestateplanning.co.uk" name="reply-to">
  <meta content="Comfort Estate Planning" name="owner">
  <meta content="Comfort Estate Planning" name="author">
  <meta content="Joz | Web & Graphic Design Studio" name="designer">
  <meta content="Comfort Estate Planning" name="copyright">
  <meta content="index,follow" name="robots">
  <link href="humans.txt" rel="author">
  
  <!--  FACEBOOK OG  ==================================================  -->
  <meta content="Wills and Estate Planning by Comfort Estate Planning, part of the Comfort Group" property="og:title">
  <meta content="Comfort Estate Planning works with you ensuring your will and estate are in good order. Our specialists are able to help you alter or confirm your estate arrangements." property="og:description">
  <meta content="company" property="og:type">
  <meta content="https://comfortestateplanning.co.uk/index.php" property="og:url">
  <meta content="https://comfortestateplanning.co.uk/img/small-still1.jpg" property="og:image">
  <meta content="Comfort Estate Planning" property="og:site_name">
  <meta content="100000433067496,771587369" property="fb:admins">
  <meta content="1832898456987553" property="fb:app_id">
  
  <!--  Twitter OG  ==================================================  -->
  <meta content="player" name="twitter:card">
  <meta content="@comfortestateuk" name="twitter:site">
  <meta content="Comfort Estate Planning" name="twitter:title">
  <meta content="https://www.youtube.com/embed/amsYrZbJgL4" name="twitter:player">
  <meta content="Comfort Estate Planning works with you ensuring your will and estate are in good order. Our specialists are able to help you alter or confirm your estate arrangements." name="twitter:description">
  <meta content="https://comfortestateplanning.co.uk/img/small-still1.jpg" name="twitter:image">
  <meta content="@mrjozzi" name="twitter:creator">
  
  <!--  Google+ OG  ==================================================  -->
  <meta content="senior citizen,funeral planning,funeral plans,insurance company,insurance broker,death preparation,last will and testament, will writers, funeral planners, estate planning, estate mangement, wills and estates" name="news_keywords">
  <link href="https://plus.google.com/104613685056534202018" rel="publisher">
  <link href="https://plus.google.com/+JolyonFavreau" rel="author">







  <link rel="icon" href="favicon.ico">
  <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
  <!-- <link href="../../assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet"> -->
  <!-- Add to homescreen for Chrome on Android -->
  <meta name="mobile-web-app-capable" content="yes">
  <link rel="shortcut icon" href="img/touch/icon-128x128.png">
  <!-- Add to homescreen for Safari on iOS -->
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <meta name="apple-mobile-web-app-title" content="Web Starter Kit">
  <link rel="apple-touch-icon-precomposed" href="apple-touch-icon-precomposed.png">
  <!-- Tile icon for Win8 (144x144 + tile color) -->
  <meta name="msapplication-TileImage" content="img/touch/ms-touch-icon-144x144-precomposed.png">
  <meta name="msapplication-TileColor" content="#3372DF">
  <!-- Bootstrap core CSS -->
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <!-- Custom styles for this template -->
  <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600" rel="stylesheet">
  <link href="css/font-awesome.min.css" rel="stylesheet" />
  <link href="css/animate.min.css" rel="stylesheet" />
  <link href="css/style.min.css" rel="stylesheet" />
  <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
  <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  <script type="application/ld+json">
   {
  "@context": "https://schema.org",
  "@type": "website",
  "url": "https://www.comfortestateplanning.co.uk",
  "name": "Comfort Estate Planning",
  "description": "Professional advice and services for your wills and estate management. Comfort Estate Planning works with you ensuring your will and estate are in good order. Our specialists are able to help you alter or confirm your estate arrangements.",
  "keywords": "senior citizen,funeral planning, will arrangements,insurance company,insurance broker,death preparation,last will and testament, will writers, funeral planners, estate planning, estate management, wills and estates",
  "image": "https://comfortestateplanning.co.uk/img/will-signing.jpg",
  "mainEntity": {
    "@type": "WebPage",
    "@id": "https://comfortestateplanning.co.uk/index.php",
    "mainEntityOfPage": "https://comfortestateplanning.co.uk",
    "headline": "Comfort Wills and Estate Planning",
    "about": "Professional advice and services for your wills and estate management."
  },
  "Audience": {
    "@context": "https://schema.org",
    "@type": "Audience",
    "audienceType": "estate management,wills and estates,estate planning,senior citizen,funeral planning,funeral plans,insurance company,insurance broker"
  },
  "author": {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Comfort Estate Planning",
    "legalName": "Comfort Group",
    "url": "https://comfortestateplanning.co.uk",
    "logo": "https://comfortestateplanning.co.uk/img/logo.png",
    "email": "info@comfortestateplanning.co.uk",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "15a Kingston Mill",
      "addressLocality": "Stockport",
      "addressRegion": "Greater Manchester",
      "postalCode": "SK3 0AL",
      "addressCountry": "United Kingdom"
    },
    "parentOrganization": {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Comfort Group",
      "alternateName": "Comfort Estate Planning"
    },
    "foundingDate": "2014",
    "founder": {
      "@type": "Person",
      "name": "Mark White"
    },
    "foundingLocation": {
      "@type": "place",
      "address": {
        "streetAddress": "15 Kingston Mill",
        "addressLocality": "Stockport",
        "addressRegion": "Greater Manchester",
        "postalCode": "SK3 0AL",
        "addressCountry": "United Kingdom"
      }
    },
    "sameAs": [
      "https://www.facebook.com/Comfort-Estate-Planning-1894823347456943/",
      "https://twitter.com/comfortestateuk",
      "https://www.google.co.uk/maps/place/Comfort+Estate+Planning/@53.4085829,-2.1692407,15z/data=!4m2!3m1!1s0x0:0xc4b567e3fff771fe?sa=X&ved=0ahUKEwiv4aH1g8rUAhWJBsAKHcH4DgUQ_BIIfjAK",
      "https://plus.google.com/104613685056534202018?hl=en-GB",
      "https://www.linkedin.com/company-beta/18120999"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+44-161-282-1930",
        "contactType": "customer service",
        "areaServed": "GB",
        "availableLanguage": "English"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+44-800-0987-841",
        "contactType": "customer support",
        "contactOption": "TollFree",
        "areaServed": [
          "GB"
        ],
        "availableLanguage": [
          "English"
        ]
      }
    ]
  },
  "creator": [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Joz Favreau",
      "alternateName": "Joz",
      "jobTitle": "Web Manager and Designer",
      "url": "https://www.linkedin.com/in/showcasejoz/",
      "worksFor": "Comfort Group"
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "James E Russell",
      "alternateName": "James",
      "jobTitle": "Web Developer",
      "worksFor": "Comfort Group"
    }
  ]
}
  </script>
</head>

<body id="home">
<!-- Preloader -->
    <div id="preloader">
      <div id="status">
        &nbsp;
      </div>
    </div><!--[if lt IE 8]>
        <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

  <!-- Navigation -->
  <nav class="navbar navbar-inverse navbar-fixed-top" id="topNav">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#home">Comfort Estate Planning</a>
      </div>
      <div id="navbar" class="collapse navbar-collapse">
        <ul class="nav navbar-nav pull-right">
          <li><a href="tel:+448000987841">0800 0987 841</a></li>
          <li class="active"><a href="#home">Home</a></li>
          <li><a href="#about">Why do I need a Will?</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <!--/.nav-collapse -->
    </div>
  </nav>
  <section class="full">
    <div class="container ">
      <div class="row">
        <div class="col-xs-12 col-md-6 text wow fadeInLeft">
          <div class="text-inner">
            <h1>Comfort Estate Planning can write your will, only <strong>£199</strong></h1>
            <div class="description wow flipInX">
              <p>
                Secure your family assets with our fantastic <strong>Will Writing</strong> service. Complete this simple form and one of our experts will contact you.
              </p>
            </div>
            <div class="top-big-link wow fadeInUp">
              <a class="btn btn-lg btn-orange scroll-link" href="#about">Learn more</a>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-md-5 col-md-offset-1 form-box wow fadeInUp">
          <div class="form-top text-purple">
            <div class="form-top-left">
              <h3>Find out more</h3>
              <p>Fill in the form below to get more information</p>
            </div>
            <div class="form-top-right">
              <i aria-hidden="true" class="fa fa-pencil text-purple wow fadeInLeft"></i>
            </div>
          </div>
          <div class="form-bottom bk-orange">
            <form method="post">
              <div class="form-group">
                <label class="sr-only" for="form-first-name">First name</label>
                <input type="text" name="form-first-name" placeholder="First name..." class="form-first-name form-control" id="form-first-name">
              </div>
              <div class="form-group">
                <label class="sr-only" for="form-last-name">Last name</label>
                <input type="text" name="form-last-name" placeholder="Last name..." class="form-last-name form-control" id="form-last-name">
              </div>
              <div class="form-group">
                <label class="sr-only" for="form-phone">Phone</label>
                <input type="tel" name="form-phone" placeholder="Phone..." class="form-phone form-control" id="form-phone">
              </div>
              <div class="form-group">
                <label class="sr-only" for="form-email">Email</label>
                <input type="text" name="form-email" placeholder="Email..." class="form-email form-control" id="form-email">
              </div>
              <div class="form-group">
                <label class="sr-only" for="form-about-yourself">About your estate</label>
                <textarea name="form-about-yourself" placeholder="Tell us about your estate concerns..." class="form-about-yourself form-control" id="form-about-yourself"></textarea>
              </div>
              <button type="submit" class="btn btn-lg btn-purple">Enquire now!</button>
              <div class="form-links pull-right">
                <a href="privacy.html">Privacy</a> -
                <a href="disclaimer.html">Disclaimer</a> - 
                <a href="sitemap.html">Sitemap</a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-md-6 text wow fadeInLeft" data-wow-delay="1500">
          <div class="text-inner-notice">
            <p>You have come to the right place for help! Your family's plans estate managing. Managing your inheritance TAX concerns. And giving you the information that will strengthen your trust.</p>
            <div class="top-big-link wow fadeInUp">
              <span class="label label-primary">Primary</span>
              <span class="label label-primary">Primary</span>
              <span class="label label-primary">Primary</span>
              <span class="label label-primary">Primary</span>
              <span class="label label-primary">Primary</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="about" class="full-orange">
    <div class="container-fluid">
      <div class="container">
        <div class="row text-light">
          <div class="col-xs-12 col-md-8 margin-bottom-20">
            <h2 class="wow fadeIn" data-wow-offset="200">Do I need a will?</h2>
            <p class="wow fadeIn" data-wow-offset="200">As a resident of England or Wales. If you die without a will, the law will decide who gets your estate. So if you don’t have any living relatives. All of your possessions and any property you own will do to the crown.</p>
            <hr class="wow fadeIn" data-wow-offset="200">
            <h2 class="wow fadeIn" data-wow-offset="200">What should I consider?</h2>
            <p class="wow fadeIn" data-wow-offset="200">We all want the best for our children and dependants. So it’s important to protect them in your will. Decide who should have control of your estate on your passing. And save your family additional grief.</p>
            <ul class="wow fadeIn" data-wow-offset="200">
              <li>What is the value of your estate worth?</li>
              <li>Who will I pass the estate onto?</li>
            </ul>
            <hr class="wow fadeIn" data-wow-offset="200">
            <h2 class="wow fadeIn" data-wow-offset="200">What is my “estate”?</h2>
            <p class="wow fadeIn" data-wow-offset="200">Throughout your lifetime you gather possessions, saving and investments. A car, furniture and all of your treasured personal items. You might own your home, all or part of a company and a holiday home.</p>
            <p class="wow fadeIn" data-wow-offset="200">These possessions are referred to as your estate. It’s the job of your will to state who should receives these at the time of your death.</p>
            <hr class="wow fadeIn" data-wow-offset="200">
            <a href="#contact" class="btn btn-lg btn-purple wow fadeInRightBig" data-wow-offset="250">Contact us today!</a>
          </div>
          <div class="col-md-4 side-img">
            <img src="img/will-proteted-family.jpg" alt="What is my estate?">
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="filler">
    <div class="parallax-window parallax-vehicle wow bounceInRight" data-wow-duration="750ms" data-wow-delay="500ms" data-parallax="scroll" data-natural-width="1920" data-natural-height="600" data-image-src="img/will-signing.jpg" data-wow-offset="200">
      <h4 class="title">
                If the worst happens, your family will have peace of mind for only £199.00
            </h4>
    </div>
  </section>
  <section id="contact" class="full-purple">
    <div class="container-fluid">
      <div class="container margin-bottom-20">
        <div class="row text-light">
          <div class="col-xs-12 col-md-5 col-lg-6">
            <h3>Contact Comfort Estate Planning</h3>
            <p>We are eager to answer any questions you may have. Your will is essential and important. Our expert Estate Management adviser keen for you to contact us.</p>
            <hr class="hr-half" />
            <div class="row">
              <div class="col-xs-8">
                <h4 itemprop="name">Comfort Estate Planning</h4>
                <address itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
                  <span itemprop="streetAddress">15a Kingston Mill</span>
                  <br>
                  <span itemprop="addressLocality">Stockport</span>
                  <br>
                  <span itemprop="addressRegion">Greater Manchester</span>
                  <br>
                  <span itemprop="postalCode">SK3 0AL</span>
                </address>
              </div>
              <div class="col-xs-4">
                <i class="fa fa-address-card-o fa-3" aria-hidden="true"></i>
              </div>
            </div>
            <div class="row">
              <div class="contact-methods">
                <span itemprop="telephone"><a class="tel-no btn btn-orange  col-xs-6 col-md-4" href="tel:+448000987841"><i class="fa fa-phone text-dark" aria-hidden="true"></i> 0800 0987 841 </a></span>
                <span itemprop="email"><a class="email btn btn-orange col-xs-5 col-xs-offset-1 col-md-4 col-md-offset-3" href="mailto:info@comfortfuneralplans.co.uk"><i class="fa fa-envelope text-dark" aria-hidden="true"></i> email us</a></span>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-md-5 col-md-offset-2 col-lg-6 col-lg-offset-0">
            <hr class="hr-half visible-xs-block visible-sm-block">
            <form class="form-horizontal" id="contact_form" method="post" name="contact_form">
              <fieldset>
                <div class="row">
                  <div class="col-xs-5">
                    <!-- Text input-->
                    <div class="form-group">
                      <label class="control-label">First Name</label>
                      <div class="inputGroupContainer">
                        <div class="input-group">
                          <span class="input-group-addon"><i class="fa fa-user"></i></span>
                          <input class="form-control" name="first_name" placeholder="First Name" type="text" value="<?php echo $_POST["first_name"] ?>">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-5 pull-right">
                    <!-- Text input-->
                    <div class="form-group">
                      <label class="control-label">Last Name</label>
                      <div class="inputGroupContainer">
                        <div class="input-group">
                          <span class="input-group-addon"><i class="fa fa-user"></i></span>
                          <input class="form-control" name="last_name" placeholder="Last Name" type="text" value="<?php echo $_POST["last_name"] ?>">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Text input-->
                <div class="form-group">
                  <label class="control-label" for="inputemail">E-Mail</label>
                  <div class="inputGroupContainer">
                    <div class="input-group">
                      <span class="input-group-addon"><i class="fa fa-at"></i></span>
                      <input aria-describedby="inputemailStatus" class="form-control" id="inputemail" name="email" placeholder="j.smith@hotmail.com" type="text" value=" <?php echo $_POST["email"] ?>">
                    </div>
                  </div><span aria-hidden="true" class="fa fa-ok form-control-feedback"></span> <span class="sr-only" id="inputemailStatus">(success)</span>
                </div>
                <!-- Text input-->
                <div class="form-group">
                  <label class="control-label">Phone No.</label>
                  <div class="inputGroupContainer">
                    <div class="input-group">
                      <span class="input-group-addon"><i class="fa fa-phone"></i></span>
                      <input class="form-control" name="phone" placeholder="0161 282 1930" type="text" value="<?php echo $_POST["phone"] ?>">
                    </div>
                  </div>
                </div>
                <!-- Text area -->
                <div class="form-group">
                  <label class="control-label">Message</label>
                  <div class="inputGroupContainer">
                    <div class="input-group">
                      <span class="input-group-addon"><i class="fa fa-terminal"></i></span>
                      <textarea class="form-control" name="comment" placeholder="Write your message here" rows="6" value=" <?php echo $_POST["comment"] ?>"></textarea>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-5">
                    <!-- Checkbox -->
                    <div class="form-group">
                      <div class="has-succes">
                        <div class="checkbox">
                          <label>
                            <input data-error="Sign up to our mailing list?" id="checkboxSuccess" checked="checked" type="checkbox" value="mailing-list"> I'd like to stay informed! <span>Add me to your mailing-list</span></label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-7 pull-right">
                    <!-- Button -->
                    <div class="form-group">
                      <button class="btn btn-block btn-orange text-light text-hover-light" type="submit">Send your message <span class="fa fa-send"></span></button>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="alert alert-green" id="success_message" role="alert">
                    Success <i class="fa fa-thumbs-up"></i> Thanks for contacting us, we will get back to you shortly.
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="container-fluid google-map-container">
    <div id="map_container"></div>
    <div id="map"></div>
  </div>
  <footer>
    <div class="container">
      <div class="row footer">
        <div class="col-xs-12 col-md-2">
          <p>Comfort Estate Planning. - &copy;opyright <span class="year"></span></p>
          <p>part of the Comfort Holdings group</p>
        </div>
        <div class="col-xs-12 col-md-5">
          <a href="https://jigsaw.w3.org/css-validator/check/referer">
            <img src="img/site/vcss.gif" alt="Valid CSS!" />
          </a>

          <a href="https://jigsaw.w3.org/css-validator/check/referer">
            <img src="img/site/vcss-blue.gif" alt="Valid CSS!" />
          </a>

          <a href="https://ssl.comodo.com/comodo-ssl-certificate.php?track=8172">
            <img src="https://comfortestateplanning.co.uk/img/site/comodo_secure_seal_76x26_transp.png" alt="Secure Website SSL connection" />
          </a>

        </div>
        <div class="col-xs-12 col-md-5">
          <p>Registered in England and Wales, Company Registration No. 09341100</p>
          <p>Data Protection No. ZA104435</p>
        </div>
      </div>
    </div>
  </footer>

  <!-- modal boxes -->
    <!-- Modal -->
    <div class="modal fade" id="success" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">Message Received</h4>
          </div>
          <div class="modal-body">
            Thank you for sending us a message. We have now received it and are directing it to the correct department.
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-purple" data-dismiss="modal">OK</button>
          </div>
        </div>
      </div>
    </div>


  <!-- Bootstrap core JavaScript
    ================================================== -->
  <!-- Placed at the end of the document so the pages load faster -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script>
  window.jQuery || document.write('<script src="/js/jquery.min.js"><\/script>')
  </script>
  <script src="js/bootstrap.min.js"></script>
  <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
  <!-- <script src="../../assets/js/ie10-viewport-bug-workaround.js"></script> -->
  <script defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBWBcF_oKeV8jty0KOCCcPn01Fgo9cBrAA&callback=initMap"></script>
  <script type="text/javascript" src="js/wow.min.js"></script>
  <script type="text/javascript" src="js/home.js"></script>
  <script defer type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="72189a95-d610-4542-9a6a-5e2a13b2a2ad";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.im/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script>
    <!-- Google Analytics -->
      <script src="https://cdn.jsdelivr.net/ga-lite/latest/ga-lite.min.js" async></script>
      <script>
        var galite = galite || {};
        galite.UA = 'UA-101050490-1';
      </script>
    <?php
      if ( $_SERVER['REQUEST_METHOD'] == 'POST' )
      {   
        echo "<script type='text/javascript'>
      $(document).ready(function(){
      $('#success').modal('show');
      });
      </script>";
            }
    ?>
</body>

</html>
