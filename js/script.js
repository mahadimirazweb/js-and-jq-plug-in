$('.counter').counterUp({
    delay: 10,
    time: 1000,
});

// ex-2:
$('.timer').countimer({
  enableEvents: true
}).on('hour', function(evt, time){
  // every hour
});

$('.timer').countimer({
  enableEvents: true
}).on('minute', function(evt, time){
  // every minute
});

$('.timer').countimer({
  enableEvents: true
}).on('second', function(evt, time){
  // every second
});