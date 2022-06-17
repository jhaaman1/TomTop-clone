function Data(e,p,ap,c,ch){
    this.email = e;
    this.password = p;
    this.againpass = ap;
    this.checkbox = c;
    this.checkbox2 = ch;
}

let signin = JSON.parse(localStorage.getItem('login')) || [];

function signup(){
    event.preventDefault()
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let againpass = document.getElementById('passagain').value;
    let checkbox = document.getElementById('check1').checked;
    let checkbox2 = document.getElementById('check2').checked;

    let s = new Data(email, password, againpass, checkbox, checkbox2);
    console.log(s);

    signin.push(s);
    

    if(password === againpass){
        alert(`Hello ${email} your signup is successful`)
        localStorage.setItem('login',JSON.stringify(signin));
        window.location.href = 'login.html';
    
    }else{
        alert('Hello Your Password is Incorrect')
    }

}