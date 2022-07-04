'use strict';

window.addEventListener('DOMContentLoaded', function(){
    var scrl = 0, advc = 0;
    var fromY = null, toY = null;
    var threshold = 2000;
    var convertScroll = function(e, ope) {
        e.preventDefault();
        if (ope == 'wheel' ) {
            scrl += e.deltaY;
        } else if ( ope == 'touch' ) {
            console.log(fromY - toY);
            scrl += (fromY - toY) / 2;
        }
        if ( scrl > 0 && scrl < 8000 ) {
            document.getElementsByTagName('body')[0].style.position = 'fixed';
            advc = scrl - 0;
            console.log('advc = ' + advc);
            var layerGenThs = advc % 1200;
            if (layerGenThs = 0) {


            }
            var layer = document.getElementsByClassName('layer');
            for (var i = 0;i < layer.length;i++) {
                var adj, adj2;
                switch (i) {
                    case 0:  adj = -5; adj2 = 1.0; break;
                    case 1:  adj = -3; adj2 = 0.6; break;
                    case 2:  adj = -1; adj2 = 0.3; break;
                    case 3:  adj =  0; adj2 = 0.0; break;
                    default: adj =  0;
                }
                console.log(i, adj, layer[i]);
                layer[i].style.transform = 'translateZ(' + (adj + advc / threshold) + 'px)';

                if (i == 0) {
                    layer[i].style.opacity = advc / 4000;
                } else {
                    var shadow = layer[i].querySelectorAll('.shadow');
                    for (var j = 0;j < shadow.length;j++) {
                        console.log(shadow[j]);
                        shadow[j].style.opacity = (adj2 - (advc / 2000 ));
                    }
                }
            }
            // var front = document.getElementsByClassName('layer_front');
            // front[0].style.transform = 'translateZ(' + (advc / threshold) + 'px)';
            // var middle = document.getElementsByClassName('layer_middle');
            // middle[0].style.transform = 'translateZ(' + (- 1 + advc / threshold) + 'px)';
            // var back = document.getElementsByClassName('layer_back');
            // back[0].style.transform = 'translateZ(' + (- 3 + advc / threshold) + 'px)';
        } else if ( scrl >= 8000 ) {
                document.getElementsByTagName('body')[0].style.position = 'relative';
            console.log('scrl = ' + scrl);
            var wrapper = document.getElementsByClassName('wrapper');
            wrapper[0].scrollLeft = scrl;
        } else {
            scrl = 0;
            advc = 0;
        }

    }

    window.addEventListener('scroll', (e) => {
        e.preventDefault();
    }, {passive: false});

    window.addEventListener('touchstart', (e) => {
        e.preventDefault();
        fromY = e.touches[0].pageY;
        // console.log(fromY);
    }, {passive: false});

    window.addEventListener('touchmove', (e) => {
        e.preventDefault();
        toY = e.touches[0].pageY;
        convertScroll(e, 'touch');
        // console.log(toY);
    }, {passive: false});

    window.addEventListener('touchend', (e) => convertScroll(e, 'touch'), {passive: false});

    window.addEventListener('wheel', (e) => convertScroll(e, 'wheel'), {passive: false});


})
