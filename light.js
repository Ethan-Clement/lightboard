
const grid = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

  grid.forEach(function(makeGrid) {
    $('#wrapper').append("<div class='tile'></div>")
  })

  $('#wrapper').on('click', '.tile', function() {
    console.log('click')
    $(this).toggleClass('light');
    });
