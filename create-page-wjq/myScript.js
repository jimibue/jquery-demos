/**
 * Created by jcc on 9/18/15.
 */
$(document).ready(function(){

    /*
            Note: The way things are done in here
              are not meant to show the best ways to do this
              but instead to show multiple ways to append things
              for demonstration
     */

    //step one append a container on the body
    var $body = $(document.body);
    var $main_container = $('<div>',{id: "main-container"});

    $main_container.css({
        width:"90%",
        height:"400px",
        border:"1px solid grey",
        margin:"auto"
    });

    $body.append($main_container);

    var $main_nav = $('<nav>',{
        id:"main-nav",
        class:"nav",
        mouseover: function(){
            console.log("over");
            $(this).css("background-color","green");
        },
        mouseout: function(){
            console.log("out");
            $(this).css("background-color","white");
        }
    });
    $main_nav.css({
        width:"100%",
        height:"50px"
    });

    $main_container.append($main_nav);

    //a less readable way of adding an element but works
    $('#main-nav').append($('<ul/>')
            .attr({id:"main-ul"})
            .addClass("ul")
    );
    //inefficient way to access something in JQUERY, here we could easy use the id
    $('#main-nav ul').css({
        border:"1px solid grey",
        display:"block",
        "background-color":"blue",
        width:"90%",
        height:"50px"
    });


    $("#main-ul").append($('<li>')
            .addClass("main-li")
            .css({
                border:"1px solid red"
            })
            .text('home')
    );



});