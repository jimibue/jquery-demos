/**
 * Created by James Yeates on 9/15/15.
 */

$(document).ready(function(){
    var svg = $('svg');
    var w  = $(window);
    var vLine = $('#vLine');
    var hLine = $('#hLine');
    var center_me = $('#center-me');

    //initial setup
    crossHairs()
    centerTab();
    svg.attr({
       width: function(){return $(window).innerWidth()},
        height: w.innerHeight()
    });
    center_me.html("CENTERED!");

    //when window is resized
    w.resize(function(){
        crossHairs();
        centerTab();
        svg.attr({
            width: function(){return w.innerWidth()},
            height: w.innerHeight()
        });
    });

    //on scoll
    w.scroll(function(){
        svg.css({
            top: w.scrollTop()
        });
        center_me.css({
            top: w.scrollTop() + w.innerHeight()/2 - center_me.innerHeight()/2
        })
    });


    //draws vertical and horizontal lines in the middle of the screen
    function crossHairs()
    {
        vLine.attr({
            x1:w.innerWidth()/2,
            x2:w.innerWidth()/2,
            y1: w.scrollTop()- w.scrollTop(),
            y2:w.innerHeight()
        });
        hLine.attr({
            x1:0,
            x2:w.innerWidth(),
            y1:w.innerHeight()/2,
            y2:w.innerHeight()/2
        });

    }
    function centerTab() {
        center_me.css({
            left: function () {
                return w.innerWidth() / 2 - center_me.innerWidth() / 2 + "px"
            },
            top: function () {
                return w.innerHeight() / 2 + w.scrollTop() - center_me.innerHeight() / 2 + "px"
            }

        });
    }

});
