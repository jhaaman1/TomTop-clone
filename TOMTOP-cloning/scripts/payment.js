document.querySelector("form").addEventListener("submit", myfunction)


// var credentials=JSON.parse(localStorage.getItem("creds"))|| [];



function myfunction(){
event.preventDefault()
console.log("inside function")
var cardno=1234567891234567;
var cvv=123;
var expiry="2022-06"
var name2="aman"


    var enteredcardnumber=document.querySelector("#card").value
 var enteredcvv=document.querySelector("#cvv").value
 var enteredexpiry=document.querySelector("#exp").value
 console.log(enteredexpiry);
var enteredname1=document.querySelector("#name").value

// credentials.push(obj)
// // console.log(credentials)

// localStorage.setItem("creds",JSON.stringify(credentials))


    // console.log(credentials)
    if(enteredcardnumber!==cardno && enteredcvv!==cvv && enteredexpiry=="2022-06" && enteredname1==name2){

  
  alert("otp sent to your email & mobile no.")
  alert("payment successfull")

  alert("correct card details")
  alert("Payment Successful");
// master
window.location.href="finishpage.html"

  
}
else{
  alert("error")
}

}