/**
 * Created by jcc on 9/23/15.
 */
$(document).ready(function () {
    var $dd = $('dd');
    //methods to show and hide
    $dd.hide();
    //$dd.hide();
    //$dd.show();
    //$dd.toggle();
    //$dd.fadeIn();
    //$dd.slideDown();

    //show the first one using filter
    $dd.filter(':nth-child(2)')
        .show();

    //here we are attaching an event listener to all dl
    //which there might be 100's of.  it ids better to attach
    //one listener to dd and from there we can decide what needs to happen
    //$('dt').on("mouseenter",function(){
    //    $(this)
    //        .next()
    //            .slideDown(300)
    //            .siblings('dd')
    //                .slideUp(300);
    //});

    //selector dt here tells JQUERY to only call the call back if the
    //the mouse enters a dt element
    $('dl').on("mouseenter",'dt', function(){
        $(this)
            .next()
            .slideDown(300)
            .siblings('dd')
            .slideUp(300);
    })



});

