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
  $('#form').submit(function(e) {
    var login = $('#login').val();
    var pass = $('#password').val();

    if(!login || !pass) {
      e.preventDefault();
      localStorage.setItem('notification', 'Musisz podać login i hasło');
      window.location.reload();
    }

    var newuser = {
      user: login,
      pass: pass
    };

    debugger;
    var ls_users = localStorage.getItem('users')
    ls_users = JSON.parse(ls_users);
    ls_users.push(newuser);
    localStorage.setItem('users', JSON.stringify(ls_users));
  });
});