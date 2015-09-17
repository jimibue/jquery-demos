/**
 * Created by James Yeates on 9/15/15.
 */

$(document).ready(function(){

   $('#window-location').html("window height: "+$(document).height() + " scrollTop " + $(document).scrollTop());
   $( "#window-size" ).html( "Width:"  + $( window ).width() +" Height:" + $( window ).height() )
       .css({
          top:function(){return $( window ).height()/2 },
          left:function(){return $( window ).width()/2 }
       });
   //EVENT HANDLERS and EFFECTS


   //.hide( duration [, easing ] [, complete ] )
   $('#item1').click(function(e){
      $(this).hide(1000,'linear', done(e));
   });

   //.hide( duration [, easing ] [, complete ] )
   $('#item1a').click(function(e){
      $("#item1").show(1000,'linear', done(e));
   });

   //.toggle( duration [, easing ] [, complete ] )
   $('#item2-btn').click(function(e){
      $('#item2').toggle(1000,'linear', done(e));
   });


   //SCROLL
    $(window).scroll(function(f){
      $('#window-location').html("window height: "+$(document).height() + " scrollTop " + Math.floor($(document).scrollTop()))
          .css({
             top:function(){return $(document).scrollTop()}
          });
      $( "#window-size" ).html( "Width:"  + $( window ).width() +" Height:" + $( window ).height() )
          .css({
             top: function () {
                return $(window).height() / 2 + $(document).scrollTop()
             }
          });

   });
   //Resize
   $( window ).resize(function() {
      $( "#window-size" ).html( "Width:"  + $( window ).width() +" Height:" + $( window ).height() )
          .css({
             top:function(){return $( window ).height()/2 + $(document).scrollTop()},
             left:function(){return $( window ).width()/2 }
          });
   });

   //callback
   function done(e)
   {
      console.log(e)
   }

});