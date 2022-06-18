'use strict';

window.addEventListener('DOMContentLoaded', function(){
    let x=0,y=0,z=0;

    window.addEventListener('wheel', convertScroll);

    function convertScroll(e) {
        // console.log(e.deltaY);
        y += e.deltaY;
        if ( y >= 8000 ) {
            document.getElementsByTagName('body')[0].style.position = 'fixed';
            z = y - 8000;
            var threshold = 2000;
            console.log('z = ' + z);
            var front = document.getElementsByClassName('layer_front');
            front[0].style.transform = 'translateZ(' + (z / threshold) + 'px)';
            var middle = document.getElementsByClassName('layer_middle');
            middle[0].style.transform = 'translateZ(' + (- 1 + z / threshold) + 'px)';
            var back = document.getElementsByClassName('layer_back');
            back[0].style.transform = 'translateZ(' + (- 3 + z / threshold) + 'px)';
            // var wrapper = document.getElementsByClassName('wrapper');
            // wrapper[0].classList.add('fixed');
            // console.log(z);
            // var layers = document.getElementsByClassName('layer');
            // console.log(layers);
            // var sc = 1;
            // for (var i = 0;i < layers.length;i++) {
                // console.log(layers[i]);
                // sc += z / 10000;
                // console.log(sc);
                // var exist = window.getComputedStyle(layers[i]);
                // let value = exist.getPropertyValue('transform');
                // console.log(value);
                // layers[i].style.transform = 'scale(' + sc + ')';
            // }
        } else if ( y > 0 && y < 8000 ) {
            // z = 0;
            document.getElementsByTagName('body')[0].style.position = 'relative';
            console.log('y = ' + y);
            var wrapper = document.getElementsByClassName('wrapper');
            wrapper[0].scrollLeft = y;
            // var layers = document.getElementsByClassName('layer');
            // for (var i = 0;i < layers.length;i++) {
            //     layers[i].style.transform = 'scale(1)';
            // }
        } else {
            y = 0;
            z = 0;
        }

        // console.log(wrapper[0]);

        // var scrollY = window.scrollY;
        // // var scrollX = window.scrollX;
        // var offsetX = wrapper[0].scrollLeft;
        // console.log(scrollY, offsetX);
        // window.scrollBy(1000, 0);

    }
})
