/**
 * Created by jcc on 9/25/15.
 */
$(document).ready(function () {
    var contactForm = {
        $container: $('#form'),

        config: {
            effect:'slideToggle',
            speed:300
        },

        //constructorish
        init: function (configs) {
            //will overwrite properties in config if the object we passed has them
            $.extend(this.config,configs);
            $("<button></button>", {
                text: "contact"
            })
                .insertAfter('#post')
                .on('click', this.show)
        },
        //show: function () {
        //    contactForm.close.call(contactForm.$container);
        //    //array notation
        //    //this will be translated to $container['slideToggle']
        //    contactForm.$container[contactForm.config.effect]();
        //},

        //cleaned up show function
        show: function(){
            var cf = contactForm,
                config = cf.config,
                $container =cf.$container;

            if($container.is(':hidden')){
                cf.close.call($container);
                $container[config.effect](config.speed);
            }

        },

        close:function(){
          var $this = $(this); //container

          //so we only prepend this once. in this case the [0] is the first item
          //which means there is something could also use .length 0 false
          if($this.find('span.close')[0] ) return;
          $("<span class=close>X</span>")
              .prependTo($this)
              .on('click', function(){
                  $this[contactForm.config.effect]();
              })
        }

    };

    //pass contactForm an object and use .extend in init
    contactForm.init({
        effect:"fadeToggle",
        speed: 1000
    });
});