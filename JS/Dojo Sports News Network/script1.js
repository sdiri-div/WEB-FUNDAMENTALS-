function rmv(ele){
 
    document.getElementById(ele).innerText ++;
 } 


function rmv1(del){
  document.getElementById(del).innerText ++;
}


function button(scrib){
  var scrib=document.getElementById(scrib)
 
  setTimeout(()=> alert('the Ninjas have won'), 3000 );
  scrib.remove()
}


// for(var i=0; i<colors.length; i++) {
  // colors[i].style.color = colors[i].innerText;
// }

// function tt(z){
  // var element=document.getElementById(z)
  // alert("THENK YOU TO ACCEPT")
  // element.remove()
// }