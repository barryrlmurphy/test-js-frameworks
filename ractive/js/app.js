/**
* Created with test-js-framework.
* User: barryrlmurphy
* Date: 2014-12-02
* Time: 09:39 AM
*/

$(document).ready(function(){
  
   var ractive = new Ractive({
      // The `el` option can be a node, an ID, or a CSS selector.
      el: 'ads-container',

      // We could pass in a string, but for the sake of convenience
      // we're passing the ID of the <script> tag above.
      template: '#ad-template',

      // Here, we're passing in some initial data
      data: { ads: [] }
    });
    
    $.ajax({
      url: 'https://www.donedealtest2.com/api/v2/find/',
      dataType: "json",
      contentType: "application/json",
      data: JSON.stringify(searchFilters),
      type: "POST",
      success: function(data, textStatus, jqXHR) {
        console.log("search api call success :)");
        console.log(data.ads);
        var imgPlaceholder = "http://load.donedealtest2.com/layout/images/no-photo-220x165.png";
        var thumb;
        for(var i=0;i<data.ads.length;i++){
          thumb = imgPlaceholder;
          if(data.ads[i].photos){
            thumb = data.ads[i].photos[0]["photo-260x260"];      
          }
          var ad = {
              title: data.ads[i].header,
              published: data.ads[i].displayAge,
              price: data.ads[i].price,
              county: data.ads[i].county,
              image: thumb
            };
          //ractive.reset();
          ractive.push('ads',ad);
        }
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log("search api call error: " + errorThrown);
      }
    });
    
    ractive.on( 'searchWord', function () {
      alert("test");
      // ractive.set({
      //   username: name,
      //   signedIn: true,
      //   notSignedIn: false
      // });
    });
   
});

//"section": "all", "startTime":1416325931669,"max":40,"start":0,"words":"","source":"all","area":["Ireland"],"adType":"forsale","sort":"publishDate desc"}
var searchFilters = {"section": "all", "startTime":1416325931669,"max":40,"start":0,"words":"","source":"all","area":["Ireland"],"adType":"forsale","sort":"publishDate desc"};