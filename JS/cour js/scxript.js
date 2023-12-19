// with the button register and login
function registrement(element){
  
      if(element.innerText==="Registré"){
       var UserName=prompt("Please Entre your Name")
       var UserPassword=prompt("Please Entre your Password")
       var UserEmail=prompt("Plaese Enret your Email")
      alert("THENK YOU   "+UserName)
// target the login button
       var login=document.getElementById("Login")
        Login.innerText="logout"
      //  change the inner text of the register button to shwo the "Username"
      element.innerText =UserName
      }
      if(element.innerText==="Login"){
        alert("try to Register please")
      }
}


 

// with mouse over and out the image
  
      function changeImage1(element){   
         element.src="/photo/succulents-1.jpg"
    }   
    function changeImage2(element){
      element.src="/photo/succulents-2.jpg"
    }



// with "Like" ++
    function Like(el){
      document.getElementById(el).innerText ++;
    }
    function foot(elm){
      document.getElementById(elm).innerText ++;
    }



// remove to element "bey"
   function footer2(rmv){
    document.getElementById(rmv).remove()
   }
   function footer1(rmv1){
    document.getElementById(rmv1).remove()
   }

   

  //  to alert and remov the accept
  function tt(z){
    var element=document.getElementById(z)
    alert("THENK YOU TO ACCEPT")
    element.remove()
  }