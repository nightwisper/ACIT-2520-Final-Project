$(document).ready(()=> {
  console.log("ready");
  var itemList = document.getElementById("ilist");

  $.ajax({
    url:'/l/getAll',
    type:'post',
    success:(resp) => {
      if(resp.err){
        alert(resp.msg);
        return false;
      }
      for (var i = 0; i<resp.length; i++){
        var item = document.createElement('li');
        item.className="list-group-item";
        var desc = document.createElement('p');
        item.innerHTML = resp[i].item;
        desc.innerHTML = resp[i].description;
        item.appendChild(desc);
        itemList.appendChild(item);
      }
    }
  });

  var email = document.getElementById("emailLogin");
  var passw = document.getElementById("pass");
  var submit = document.getElementById("login");

  submit.addEventListener('click', () => {
    $.ajax({
      url:'/u/login',
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
        location.href='localhost:8001/u';
      }
    });
  });
});
