if(!localStorage.getItem('users')) {
  var users = [];
  users.push({
    user: 'tester',
    pass: '123'
  });
  localStorage.setItem('users', JSON.stringify(users));
}
// JSON.parse
// JSON.stringify

if(localStorage.getItem('logged')) {
  //$('#welcomemsg').text(`Hello ${localStorage.getItem('username')}!`)
  $('#welcomemsg').text(`Witaj ${localStorage.getItem('username')}!`)
} else {
  // store login&pass in variables
  var login = localStorage.getItem('login');
  var pass = localStorage.getItem('pass');
  localStorage.removeItem('pass');
  localStorage.removeItem('login');

  // log in
  var loginCheck = false;

  var users = JSON.parse(localStorage.getItem('users'));
  for(var i = 0; i < users.length; i++) {
    if(users[i].user === login && users[i].pass === pass) { loginCheck = true; }
  }
  if(loginCheck) {
    localStorage.setItem('logged', 1);
    localStorage.setItem('username', login);
    window.location.reload();
  } else {
    localStorage.removeItem('logged');
    // localStorage.setItem('notification', "Incorrect login or password");
    localStorage.setItem('notification', "Błędny login lub hasło");
    window.location.href = "index.html";
  }
}

$(document).ready(function() {
  $('#logout').click(function() {
    localStorage.removeItem('logged');
    localStorage.removeItem('username');
    window.location.href = "index.html";
  });
});