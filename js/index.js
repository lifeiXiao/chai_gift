
/*
  Shape Shifter
  =============
  A canvas experiment by Kenneth Cachia
  http://www.kennethcachia.com
  Updated code
  ------------
  https://github.com/kennethcachia/Shape-Shifter
*/


var S = {
  init: function () {
    var action = window.location.href,
        i = action.indexOf('?a=');

    S.Drawing.init('.canvas');
    document.body.classList.add('body--ready');

    if (i !== -1) {
      S.UI.simulate(decodeURI(action).substring(i + 3));
    } else {
      S.UI.simulate('|#countdown 3||祝|小柴|2022|早日暴富|学业有成|万事如意|请欣赏|烟花表演|');
    }

    S.Drawing.loop(function () {
      S.Shape.render();
    });
  }
};


S.Drawing = (function () {
  var canvas,
      context,
      renderFn
      requestFrame = window.requestAnimationFrame       ||
                     window.webkitRequestAnimationFrame ||
                     window.mozRequestAnimationFrame    ||
                     window.oRequestAnimationFrame      ||
                     window.msRequestAnimationFrame     ||
           
