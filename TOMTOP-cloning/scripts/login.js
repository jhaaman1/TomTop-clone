let receiveData = JSON.parse(localStorage.getItem('login'))
// console.log(receiveData);

let loginData = () => {
    event.preventDefault()
    
    let Useremail = document.getElementById('inp1').value;
    let Userpassword = document.getElementById('pass').value;

    for(let i=0; i<receiveData.length; i++){

        if(receiveData[i].email === Useremail && receiveData[i].password === Userpassword){
            // let e = details[i].email;
            // localStorage.setItem('UseremailID',JSON.stringify(e))
            alert(`Hello ${receiveData[i].email} Your Login is Successful`)
            window.location.href = 'index.html';
            return;
        }else if(i === receiveData.length - 1) alert('Invalid Email or PassWord') 
    }

}

