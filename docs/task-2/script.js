if(!localStorage.getItem('users')) {
  var users = [];
  users.push({
    user: 'tester',
    pass: '123'
  });
  localStorage.setItem('users', JSON.stringify(users));
}

if(localStorage.getItem('notification')) {
  $('.notification')
    .text(localStorage.getItem('notification'))
    .css('display', 'block');
  localStorage.removeItem('notification');
}

$(document).ready(function() {
  $('#form > button').click(function() {
    localStorage.setItem('login', $('#login').val());
    localStorage.setItem('pass', $('#password').val());
    window.location.replace("login.html");
  });

  $('#form > input').keypress(function(e) {
    if(e.key === "Enter") {
      $('button').click();
    }
  });
});