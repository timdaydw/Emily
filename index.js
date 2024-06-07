var aniNextPos = [1, 2, 0];

let leftX = [220, 490, 980];
let topY = [80, 170, 80];

let prodOffset = 400;
let prodOffsetCount = 0;
let maxProdOffsetCount = 3;


$(document).ready(function() {
  console.log('jQuery works');
  initUIEvent();
  initAnimation();
  setInterval(function() {
    animattionHandler()
  }, 2800);
});


function initUIEvent() {
  $('#btn-news-up').click(function() {
    console.log('up');
    $('#news-list').animate({
      scrollTop: 0
    }, 300);
  });
  $('#btn-news-down').click(function() {
    console.log('down');
    $('#news-list').animate({
      scrollTop: 500
    }, 300);
  });

  $('#btnScrollLeft').click(function() {
    console.log('prodOffsetCount = ' + prodOffsetCount);
    if(prodOffsetCount > 0) {
      prodOffsetCount--;
      $('#best-prod-container').animate({
        scrollLeft: prodOffsetCount * prodOffset
      });
    }
  });


  $('#btnScrollRight').click(function() {
    console.log('prodOffsetCount = ' + prodOffsetCount);
    if(prodOffsetCount < maxProdOffsetCount) {
      prodOffsetCount++;
      $('#best-prod-container').animate({
        scrollLeft: prodOffsetCount * prodOffset
      });
    }
  });

}

function animattionHandler() {
  console.log('ani');
  for(let i = 0; i < 3; i++) {
    let nextPos = aniNextPos[i];
    $('#ani_prod' + (i + 1)).animate( {
      top: topY[nextPos],
      left: leftX[nextPos],
      opacity: (nextPos == 1) ? 1 : 0.7,
    }, 600);
    $('#ani_prod' + (i + 1) + ' img').animate( {
      height: (nextPos == 1) ? '460px' : '220px'
    }, 600);
  }

  for(let i = 0; i < 3; i++) {
    aniNextPos[i] = (aniNextPos[i] + 1) % 3;
  }
}


function initAnimation() {
  for(var i = 0; i < 3; i++) {
    console.log($('#ani_prod' + (i + 1)));
    $('#ani_prod' + (i + 1)).css('left', leftX[i] + 'px');
    $('#ani_prod' + (i + 1)).css('top', topY[i] + 'px');
    $('#ani_prod' + (i + 1) + ' img').height((i == 1) ? 460 : 220);
  }
}