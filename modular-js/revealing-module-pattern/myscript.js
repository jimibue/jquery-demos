/**
 * Created by jcc on 9/28/15.
 */

$(document).ready(function () {


    var beer = (function () {
        var beerList = ['pabst', 'epic'];

        //cache dom
        var $beerModule = $('#beerModule'),
            $btn = $beerModule.find('button'),
            $ul = $beerModule.find('ul'),
            $input = $beerModule.find('input'),
            template = $beerModule.find('#li-template').html();

        //bind events
        $btn.on('click', addBeer);
        //
        $ul.delegate('i.del', 'click', deleteBeer);

        render();

        function render() {
            $ul.html(Mustache.render(template, {beer: beerList}));
        }

        //function addBeer() {
        //    beer.push($input.val());
        //    render();
        //    $input.val('');
        //}e

        function addBeer(value) {
            //see if value is typed in or is from th input
            var name = (typeof value ==="string")? value : $input.val();
            beerList.push(name);
            render();
            $input.val('');
        }

        function deleteBeer(event) {
            var index;
            if(typeof event ==="number"){
                index = event
            }else {
                var $remove = $(event.target).closest('li');
                index = $ul.find('li').index($remove);
            }

            beerList.splice(index, 1);
            render();

        }

        //exposed (public functions)
        return {
            addBeer: addBeer,
            removeBeer:deleteBeer
        }

    })();
    console.log(beer);
    beer.addBeer("df");
});