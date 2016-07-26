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
<div class="container">
  <div class="row">
  
    <div class="col-md-7">
	  <div class="row">
	    <div class="form-group col-md-12">
	      <h1 class="white">Let's Get Started!</h1>
	      <p>Contact us today to discuss how Big Data can help your company!</p>
		</div>
	  </div>
      <div class="row">
        <div class="form-group col-md-6 col-sm-12">
          <input class="form-control validate[required]" placeholder="First Name" type="text" name="FirstName" id="FirstName">
        </div>
        <div class="form-group col-md-6 col-sm-12">
          <input class="form-control validate[required]" placeholder="Last Name" type="text" name="LastName" id="LastName">
        </div>
      </div>
      <div class="row">
        <div class="form-group col-md-6 col-sm-12">
          <input class="form-control validate[required,custom[email]]" placeholder="Email" type="text" name="email">
        </div>
        <div class="form-group col-md-6 col-sm-12">
          <input class="form-control validate[required]" placeholder="Phone" type="text" name="phone">
        </div>
      </div>
      <div class="row">
        <div class="form-group col-md-12">
          <textarea placeholder="Details" name="message" id="message" class="form-control validate[required]"></textarea>
        </div>
      </div>
      <div class="row">
        <div class="form-group col-md-12 text-center">
          <input type="submit" class="btn btn-primary" value="Contact Us">
        </div>
      </div>
    </div>

    <div class="col-md-5 contact-right-info">
      <h3>ORLANDO OFFICE</h3>

      <p>800 N Magnolia Ave<br />
	  Orlando, FL 32803<br />
	  <a href="tel:4078981961">407.898.1961</a></p>

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

    <p>WebCorpCo specializes in taking your businesses data and turning it into a wide range of insights that help drive intelligent business decisions. By mining your business data, WebCorpCo can provide you with a comprehensive set of recommendations as to how to optimize your strengths and minimize your weaknesses.</p>

    <p class="marginBottom40">Contact us today. Game changing insights into your business are only a click away.</p>
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
<script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>   
<script type="text/javascript" src="https://maps.googleapis.com/maps-api-v3/api/js/25/7/common.js"></script>   
<script type="text/javascript" src="https://maps.googleapis.com/maps-api-v3/api/js/25/7/map.js"></script>    
<script type="text/javascript" src="https://maps.googleapis.com/maps-api-v3/api/js/25/7/util.js"></script>   
<script type="text/javascript" src="https://maps.googleapis.com/maps-api-v3/api/js/25/7/marker.js"></script>   
<script type="text/javascript" src="https://maps.googleapis.com/maps-api-v3/api/js/25/7/onion.js"></script> 
<script type="text/javascript" src="https://maps.googleapis.com/maps-api-v3/api/js/25/7/stats.js"></script>  
<script type="text/javascript" src="https://maps.googleapis.com/maps-api-v3/api/js/25/7/controls.js"></script>
```
