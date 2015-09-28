/**
 * Created by jcc on 9/19/15.
 */
//https://www.youtube.com/watch?v=m-NYyst_tiY&list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f&index=2
/*
rules for modules
    -no global variables
    -modules should only manage one thing
    -S.O.P.
    -DRY
    few $ selections
    no memory leaks (all events can be unbound)
  */

//object literal pattern
$(document).ready(function() {

    (function(){
        var beer = {
            beer: ["pabst","willy"],
            init: function(){
                this.cacheDom();
                this.bindEvents();
                this.render();
            },
            cacheDom: function(){
                this.$el = $('#beerModule');
                this.$button = this.$el.find('button');
                this.$input = this.$el.find('input');
                this.$ul = this.$el.find('ul');
                this.template = $('#li-template').html()//no $ because template is an html string
            },
            bindEvents: function(){
                this.$button.on('click',this.addPerson.bind(this));
                this.$ul.delegate('i.del','click',this.deletePerson.bind(this));
            },
            render:function(){
                var data ={
                    beer: this.beer
                };
                this.$ul.html(Mustache.render(this.template,data));
            },
            addPerson: function(){
                this.beer.push(this.$input.val());
                this.render();
                this.$input.val("");
            },
            deletePerson: function(event){
              var $remove = $(event.target).closest('li');
              var i = this.$ul.find('li').index($remove);
              this.beer.splice(i,1);
              this.render();
            }
        };

        beer.init();
    })();
});

