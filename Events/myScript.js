/**
 * Created by jcc on 9/22/15.
 */
$(document).ready(function(){
    console.log("YO");
    //more efficient to put link in a variable
    var $link = $('link');
    $('button').click(function(){
        //var style = $(this).text().toLowerCase();
        //var style = $(this).attr('data-file').toLowerCase();



        //$this.siblings().removeAttr('disabled');
        //$this.attr("disabled","true");


        //clean up
        var $this = $(this),
            style = $this.data('file').toLowerCase();

        $link.attr("href",style+".css");

        $this
            .siblings()
                .removeAttr("disabled")
                .end()//go out of siblings and back to this
            .attr('disabled','true');

    })

});
