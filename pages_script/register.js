console.log("ready");

var email = document.getElementById("email");
var passw = document.getElementById("password");
var submit = document.getElementById("submit");

submit.addEventListener('click', () => {
  $.ajax({
    url:'/u/register',
    type:'post',
    data: {
      email: email.value,
      password: passw.value
    },
    success:(res) => {
      if(res.err){
        alert(res.msg);
        return false;
      }
      location.href='/';
    }
  });
});
