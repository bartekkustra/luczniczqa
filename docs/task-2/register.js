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
    var login = $('#login').val();
    var pass = $('#password').val();

    if(!login || !pass) {
      // localStorage.setItem('notification', 'You need to type login and password!');
      localStorage.setItem('notification', 'Musisz podać login i hasło!');
      window.location.reload();
    }

    var newuser = {
      user: login,
      pass: pass
    };

    var ls_users = localStorage.getItem('users')
    ls_users = JSON.parse(ls_users);
    ls_users.push(newuser);
    localStorage.setItem('users', JSON.stringify(ls_users));

    window.location.replace("index.html");
  });

  $('input').keypress(function(e) {
    if(e.key === "Enter") {
      $('button').click();
    }
  });
});