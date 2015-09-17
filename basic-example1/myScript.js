/**
 * Created by James Yeates on 9/15/15.
 */

$(document).ready(function(){
    var svg = $('svg');
    var w  = $(window);
    var vLine = $('#vLine');
    var hLine = $('#hLine');
    svg.attr({
       width: function(){return $(window).innerWidth()},
        height: w.innerHeight()
    });

    crossHairs();

    w.resize(function(){
        crossHairs();
        svg.attr({
            width: function(){return w.innerWidth()},
            height: w.innerHeight()
        });

    });

    w.scroll(function(){
        svg.css({
            top: w.scrollTop()
        })
    });



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
});