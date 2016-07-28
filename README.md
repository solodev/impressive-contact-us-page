# Impressive Contact Us Page
Creating an impressive contact page is crucial to converting website visitors into potential leads. With Solodev's unique contact us page featuring Google Maps integration, you can be assured your website visitors will leave impressed. The following code can be used in your own website template with some slight modifications.

## Note
The following code requires a Google Maps API key. To register your business and receive an API key, please visit [Google Developers](https://developers.google.com/maps/documentation/embed/guide#api_key).

## Tutorial

For detailed instructions, view Solodev's [Creating an Impressive Contact Us Page](https://www.solodev.com/blog/web-design/code-examples/creating-an-impressive-contact-us-page.stml) article.

## Demo

Check out a working example on [JSFiddle](https://jsfiddle.net/solodev/ykL8ry7b/).

## HTML

The form includes basic HTML markup for the form and contact details:
```
<div class="container form">
   <div class="row">
      <div class="col-md-7">
         <div class="row">
            <div class="form-group col-md-12">
               <h2>Tell us About Yourself</h2>
               <p style="color: #000000">Contact us today to discuss how Big Data can help your company!</p>
            </div>
         </div>
		 <form name="contactForm" id="contactForm" method="POST" action="">
         <div class="row">
            <div class="col-md-12">
               <div class="control-group">
                  <label>First Name</label>
                  <input type="text" class="demo-default form-control" placeholder="First Name">
               </div>
               <div class="control-group">
                  <label>Last Name</label>
                  <input type="text" class="demo-default form-control" placeholder="Last Name">
               </div>
               <div class="control-group">
                  <label>Company</label>
                  <input type="text" class="demo-default form-control" placeholder="Company">
               </div>
               <div class="control-group">
                  <label>Phone #</label>
                  <input type="text" class="demo-default form-control" placeholder="Phone #">
               </div>
               <div class="control-group">
                  <label>Email</label>
                  <input type="text" class="demo-default form-control" placeholder="yourname@domain.com">
               </div>
               <div class="control-group">
                  <label for="select-beast">I'm Interested In:</label>
                  <select id="select-beast" class="demo-default" placeholder="Select a service...">
                     <option value="">Select a service...</option>
                     <option value="4">Digital Marketing</option>
                     <option value="1">Social Media</option>
                     <option value="3">E-Commerce</option>
                     <option value="5">Mobile Advertising</option>
                  </select>
               </div>
            </div>
         </div>
         <br>
         <div class="row">
            <div class="form-group col-md-12 text-center">
               <input type="submit" class="btn btn-primary" value="Contact Us">
            </div>
         </div>
		 </form>
      </div>
      <div class="col-md-5 contact-right-info">
         <h3>ORLANDO OFFICE</h3>
         <p style="color: #000000">123 Open Door Road Suite 1200<br />
            Orlando, FL 30030<br />
            <a href="tel:4078981961">407.555.1961</a>
         </p>
         <h3>EMAIL ADDRESS</h3>
         <a href="mailto:info@webcorpco.com">info@webcorpco.com</a>
         <h3>SUPPORT</h3>
         <a href="tel:8005551656">800.555.1656</a><br />
         <a href="mailto:support@webcorpco.com">support@webcorpco.com</a>
      </div>
   </div>
</div>
```

The full width map and additional "map-overlay" is constructed with the following code:
```
<div class="container">
   <div class="map-overlay">
      <h3>Changing the digital landscape one client at a time.</h3>
      <p>WebCorpCo specializes in taking your businesses data and turning it into a wide range of insights that help drive intelligent business decisions.</p>
      <a href="https://www.google.com/maps/place/800+N+Magnolia+Ave,+Orlando,+FL+32803/@28.5556405,-81.3775403,17z/data=!3m1!4b1!4m2!3m1!1s0x88e77af15a1459a5:0xa114b20cc1cdb19d" style="color: #d2282e;" target="_blank">Directions to WebCorpCo</a>
   </div>
</div>
<div class="map-area">
   <div id="map-canvas" style="height: 750px; width: 100%;">
      &nbsp;
   </div>
</div>
```

## CSS

All necessary CSS is in impressive-contact-page.css.

## JavaScript

JavaScript to initialize the map is contained in impressive-contact-page.js. Insert your registered API key into the "script.src" URL found in these lines:
```
function loadScript() {
	  var script = document.createElement('script');
	  script.type = 'text/javascript';
	  //script.src = 'http://maps.google.com/maps/api/js?sensor=false';
	  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAvNegdMhrApxE5o7jlPEHGS-gk03rxgUc&sensor=false&callback=initialize';
	  document.body.appendChild(script);
	}
```

Further, adjust the coordinates of the map relative to your business.

## External Includes

The contact page includes the following third-party resources:
```
<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">   
<link rel="stylesheet" type="text/css" href="impressive-contact-page.css">   
<link rel="stylesheet" type="text/css" href="https://www.solodev.com/assets/selectize/css/normalize.css">
<link rel="stylesheet" type="text/css" href="https://www.solodev.com/assets/selectize/css/selectize.default.css">

<script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>   
<script type="text/javascript" src="https://maps.googleapis.com/maps-api-v3/api/js/25/7/common.js"></script>   
<script type="text/javascript" src="https://maps.googleapis.com/maps-api-v3/api/js/25/7/map.js"></script>    
<script type="text/javascript" src="https://maps.googleapis.com/maps-api-v3/api/js/25/7/util.js"></script>   
<script type="text/javascript" src="https://maps.googleapis.com/maps-api-v3/api/js/25/7/marker.js"></script>   
<script type="text/javascript" src="https://maps.googleapis.com/maps-api-v3/api/js/25/7/onion.js"></script> 
<script type="text/javascript" src="https://maps.googleapis.com/maps-api-v3/api/js/25/7/stats.js"></script>  
<script type="text/javascript" src="https://maps.googleapis.com/maps-api-v3/api/js/25/7/controls.js"></script>
<script type="text/javascript" src="https://www.solodev.com/assets/selectize/js/jquery.js"></script>
<script type="text/javascript" src="https://www.solodev.com/assets/selectize/js/selectize.js"></script>
<script type="text/javascript" src="https://www.solodev.com/assets/selectize/js/index.js"></script>

<script type="text/javascript" src="impressive-contact-page.js"></script>
```
