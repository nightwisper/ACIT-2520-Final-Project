console.log("ready");

var item = document.getElementById("item");
var desc = document.getElementById("desc");
var price = document.getElementById("price");
var submit = document.getElementById("submit");

submit.addEventListener('click', () => {
  $.ajax({
    url:'/l/register',
    type:'post',
    data: {
      item: item.value,
      desc: desc.value,
      price:price.value
    },
    success:(res) => {
      if(res.err){
        alert(res.msg);
        return false;
      }
      location.href='localhost:8001/';
    }
  });
});
