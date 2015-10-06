/**
 * Created by jcc on 10/5/15.
 */
(function($) {
    var $sliderUL = $('div#slider').children('ul'),
        $imgs = $sliderUL.find('img'),
        imgWidth = $imgs[0].width,
        imgsLen = $imgs.length,
        currentImg = 1,
        totalImgWidth = imgsLen *imgWidth;

    $('#slider-nav').show().find('button').on('click',function(){
        var direction = $(this).data('dir'),
            location = imgWidth;

         (direction ==='next')?++currentImg:--currentImg;
        if(currentImg === 0){
            currentImg = imgsLen;
            location= totalImgWidth-imgWidth;
            direction = 'next';

        }else if(currentImg-1=== imgsLen) {
            currentImg = 1;
            location =0;
        }

        transition($sliderUL,location, direction);



    });

    function transition(container,location,direction){
        var unit;
        if(direction && location !==0){
            unit = (direction === 'next') ? "-=" : "+=";
        }
        container.animate({
            marginLeft: unit+ '600'

        })

    }
})(jQuery);