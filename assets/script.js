//will start loading saved storage

var am = localStorage.getItem('09am');
if ('09am') {
  $('#09 textarea').text(am);
}

var am = localStorage.getItem('10am');
if ('10am') {
  $('#10 textarea').text(am);
}

var am = localStorage.getItem('11am');
if ('11am') {
  $('#11 textarea').text(am);
}

var am = localStorage.getItem('12am');
if ('12am') {
  $('#12 textarea').text(am);
}

var am = localStorage.getItem('1pm');
if ('1pm') {
  $('#13 textarea').text(am);
}

var am = localStorage.getItem('2pm');
if ('2pm') {
  $('#14 textarea').text(am);
}

var am = localStorage.getItem('3pm');
if ('3pm') {
  $('#15 textarea').text(am);
}

var am = localStorage.getItem('4pm');
if ('4pm') {
  $('#16 textarea').text(am);
}

var am = localStorage.getItem('5pm');
if ('5pm') {
  $('#17 textarea').text(am);
}
//displayed time and date
var currentdate = dayjs().format('dddd, MMMM D YYYY, h:mm:ss a');
$('#currentDay').text(currentdate);
const now = dayjs();
var hour = now.format('HH');
//click storage function for all lines
$(document).ready(function () {
  $('#09 button').click(function () {
    var textareaValue = $('#09 textarea').val();
    localStorage.setItem('09am', textareaValue);
  });
});

$(document).ready(function () {
  $('#10 button').click(function () {
    var textareaValue = $('#10 textarea').val();
    localStorage.setItem('10am', textareaValue);
  });
});

$(document).ready(function () {
  $('#11 button').click(function () {
    var textareaValue = $('#11 textarea').val();
    localStorage.setItem('11am', textareaValue);
  });
});

$(document).ready(function () {
  $('#12 button').click(function () {
    var textareaValue = $('#12 textarea').val();
    localStorage.setItem('12am', textareaValue);
  });
});

$(document).ready(function () {
  $('#13 button').click(function () {
    var textareaValue = $('#13 textarea').val();
    localStorage.setItem('1pm', textareaValue);
    });
});

$(document).ready(function () {
  $('#14 button').click(function () {
    var textareaValue = $('#14 textarea').val();
    localStorage.setItem('2pm', textareaValue);
    console.log(localStorage);
  });
});

$(document).ready(function () {
  $('#15 button').click(function () {
    var textareaValue = $('#15 textarea').val();
    localStorage.setItem('3pm', textareaValue);
    });
});

$(document).ready(function () {
  $('#16 button').click(function () {
    var textareaValue = $('#16 textarea').val();
    localStorage.setItem('4pm', textareaValue);
  });
});

$(document).ready(function () {
  $('#17 button').click(function () {
    var textareaValue = $('#17 textarea').val();
    localStorage.setItem('5pm', textareaValue);
  });
});
//will change colors dependin time

$(".time-block").each(function () {
  var times = $(this).attr("id");
  if (times == hour) {
    $(this).removeClass("future").addClass("present");
  }
  else if (times < hour) {
    $(this).removeClass("future").addClass("past");
  }
  else {
    $(this).addClass("future");
  }

})

