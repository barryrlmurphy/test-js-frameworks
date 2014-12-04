/**
* Created with test-js-framework.
* User: barryrlmurphy
* Date: 2014-12-02
* Time: 09:39 AM
*/

//processData: false

$(document).ready(function(){
  
  // Define the model
  ad = Backbone.Model.extend();
  
  // Define the collection
  ads = Backbone.Collection.extend(
      {
          model: ad,
          // Url to request when fetch() is called
          url: 'https://www.donedealtest2.com/api/v2/find/',
          parse: function(response) {
              return response.ads;
          },
          // Overwrite the sync method to pass over the Same Origin Policy
          sync: function(method, model, options) {
              var that = this;
              var params = _.extend({
                  type: "POST",
                  dataType: 'json',
                  contentType: "application/json",
                  data: JSON.stringify(searchFilters),
                  url: that.url
              }, options);
  
              return $.ajax(params);
          }
      });
  
  // Define the View
  adsView = Backbone.View.extend({
      initialize: function() {
        _.bindAll(this, 'render');
        // create a collection
        this.collection = new ads;
        // Fetch the collection and call render() method
        var that = this;
        this.collection.fetch({
          success: function () {
              that.render();
          }
        });
      },
      // Use an extern template
      template: _.template($('#adsTemplate').html()),
  
      render: function() {
        console.log("render");
        console.log(this.collection.toJSON());
          // Fill the html with the template and the collection
          $(this.el).html(this.template({ ads: this.collection.toJSON() }));
      }
  });
  
  var app = new adsView({
      // define the el where the view will render
      el: $('#ads-container')
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
