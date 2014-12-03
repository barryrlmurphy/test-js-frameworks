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
        var tempNum = 35677926;
        for(var i=0;i<data.ads.length;i++){
          console.log("title: " + data.ads[i].header + ", id: " + data.ads[i].id);
          tempNum = parseInt(tempNum)-parseInt(i);
          var ad = {
              title: data.ads[i].header,
              published: data.ads[i].displayAge,
              price: data.ads[i].price,
              county: data.ads[i].county,
              image: "http://photos2.donedeal.ie/cars/2011-audi-a6-2-0tdi-170bhp-s-line-special-edition/SearchThumbLarge/" + tempNum + ".jpeg"
            };
          console.log(ad);
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

var ads = [
    {
      title: 'Ford Focus Zetac 1.4 4DR',
      published: "3 hours ago",
      price: 5950,
      county: "Wexford",
      image: "http://photos2.donedeal.ie/cars/hyundai-getz-1-1-5dr/SearchThumbLarge/35639875.jpeg"
    },
    {
      title: 'BMW 3 Series 1.6 5DR',
      published: "6 hours ago",
      price: 4950,
      county: "Waterford",
      image: "http://photos2.donedeal.ie/cars/2004-merc-c200-cdi-auto/SearchThumbLarge/32052413.jpeg"
    },
    {
      title: 'Opel Astra 1.6 Hatchback',
      published: "1 day ago",
      price: 10000,
      county: "Offaly",
      image: "http://photos2.donedeal.ie/cars/mercedes-benz-slk-class-slk-200-kompres/SearchThumbLarge/34230569.jpeg"
    },
    {
      title: 'VW Golf 1.4 Diesel - BARGAIN',
      published: "3 days ago",
      price: 3000,
      county: "Cork",
      image: "http://photos2.donedeal.ie/cars/mercedes-benz-slk-class-slk-200-kompres/SearchThumbLarge/34230568.jpeg"
    }
  ];
