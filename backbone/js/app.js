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
                  url: that.url,
                  processData: true
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
          // Fill the html with the template and the collection
          $(this.el).html(this.template({ ads: this.collection.toJSON() }));
      }
  });
  
  var app = new adsView({
      // define the el where the view will render
      el: $('#ads-container')
  });
  
  var View = Backbone.View.extend({
    events: {
      "change #county": "change"
    },
    template: _.template($('#countyTemplate').html()),
  
    change: function(e){
      var selectedCounty = $(e.currentTarget).val();
      console.log("e.currentTarget: ",e.currentTarget);
      searchFilters["area"] = [selectedCounty];
      app = new adsView({
          // define the el where the view will render
          el: $('#ads-container')
      });
      app.render();
    },
  
    render: function(){
      this.$el.html(this.template());
    }
  });
  new View({ el: "#countyContainer" }).render();
  
  var searchView = Backbone.View.extend({
    events: {
      "blur #word-search": "change"
    },
    template: _.template($('#searchTemplate').html()),
  
    change: function(e){
      var words = $(e.currentTarget).val();
      console.log("e.currentTarget: ",e.currentTarget);
      searchFilters["words"] = [words];
      app = new adsView({
          // define the el where the view will render
          el: $('#ads-container')
      });
      app.render();
    },
  
    render: function(){
      this.$el.html(this.template());
    }
  });
  new searchView({ el: "#searchContainer" }).render();

});

//"section": "all", "startTime":1416325931669,"max":40,"start":0,"words":"","source":"all","area":["Ireland"],"adType":"forsale","sort":"publishDate desc"}
var searchFilters = {"section": "all", "startTime":1416325931669,"max":40,"start":0,"words":"","source":"all","area":["Ireland"],"adType":"forsale","sort":"publishDate desc"};

