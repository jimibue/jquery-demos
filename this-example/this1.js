/**
 * Created by jcc on 9/19/15.
 */
$(function(){
    //$("#toggle-btn1").click(function(){
    //    $(this).toggleClass('active');
    //    $("#div1").slideToggle(1000);
    //});

//    lets assume that we want to toggle the button after
//    $("#toggle-btn1").click(function(){
//        var self = $(this);
//        $("#div1").slideToggle(1000,function(){
//            $(self).toggleClass('active');
//        });
//    });

    $("#toggle-btn1").click(function(){

        $("#div1").slideToggle(1000,function(){
            $(this).toggleClass('active');
        }).bind(this);
    });
});
