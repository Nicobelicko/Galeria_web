
document.getElementById('a-submit-registro').addEventListener('click',registerNewUser);
document.getElementById('a-submit-registro').addEventListener('click',registerNewUser);




let Userlist =[];

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
    Userlist=getUserlist();
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
     let pass =false;
     
    for(let i=0;i < Userlist.length;i++){
        if(username==Userlist[i][0]&&password==Userlist[i][1]){
            pass = true;
        }
        
    }
    return pass;
}
function loginUser(){
    let Username= '', Password= '', Email= '';

    Username = document.getElementById('nombre-usuario').value;
    Password = document.getElementById('user-password').value;
   

}

