
let Userlist =[];
let a = document.getElementById('a-submit-registro');
if(a){
    a.addEventListener('click',registerNewUser);
}
let b = document.getElementById('enter-login')
if(b){
    b.addEventListener('click',login);
}
function registerNewUser(){
    
    
    let newUser = [], Username= '', Password= '', Email= '';

    Username = document.getElementById('username-reg').value;
    Password = document.getElementById('user-password-reg').value;
    Email = document.getElementById('user-email-reg').value;

    
    
    let pass=review(Username,Password);
    if(pass==false){
    newUser.push(Username,Password,Email);
    addInUserlist(newUser);
    }else{
        alert('Usuario ya registrado');
    }
    
    
    
    
}
function addInUserlist(pnewUser){
    let Userlist=getUserlist();
    Userlist.push(pnewUser);
    localStorage.setItem('LSUserlist',JSON.stringify(Userlist));

}
function getUserlist(){
    let LocalUserlist = JSON.parse(localStorage.getItem('LSUserlist'));
    if(LocalUserlist == null){
        LocalUserlist=Userlist;
    }
    return LocalUserlist;
}
function review(username,password){
     alert('entra en revisión');
     let Userlist = getUserlist();
     let pass =false;
     
    for(let i=0;i < Userlist.length;i++){
        if(username==Userlist[i][0]&&password==Userlist[i][1]){
            pass = true;
            alert('entro al if');
        }
        
    }
    return pass;
}

function login(){
    
    let Username= '', Password= '';
    
    Username = document.getElementById('username').value;
    Password = document.getElementById('user-password').value;
    
    let pass = review(Username, Password);
    if(pass==true){
        alert('Bienvenido');
    }else{
        alert('Usuario no existe');
    }

}

