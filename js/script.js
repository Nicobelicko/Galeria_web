
let Userlist = [];
let div_login;
let div_forgot;
let btn_forgot; 
let enter_login; 
let enter_forgot; 
let Username;
let Password ;
let Email;

window.onload=onloadfunc();
function onloadfunc(){
  div_login= document.getElementById('div-ingreso-login');
  div_forgot= document.getElementById('div-login-forgot');
  enter_forgot= document.getElementById('enter-forgot');
  enter_login= document.getElementById('enter-login');
  btn_forgot=document.getElementById('forgot-password');
}





function show_div_forgot(){
  
  div_forgot.style.display='block';
  div_forgot.style.position='absolute';
  div_forgot.style.top= '8%';
  div_forgot.style.left= '2.9%';
  enter_forgot.style.display='block';
  ocultar_div_login();
}
function ocultar_div_login(){
  div_login.style.display='none';
  enter_login.style.display='none';
  btn_forgot.style.display='none';

}


function registerNewUser(usr,pswrd,emil) {
  
  let newUser = [],
    Username = usr,
    Password = pswrd,
    Email = emil;

  

  if (Username != "" && Password != "" && Email != "") {
    let pass = review(Username, Password,Email,1);
    if (pass == false) {
      newUser.push(Username, Password, Email);
      addInUserlist(newUser);
      window.location.href = "galeria.html";
    } else {
      alert("Usuario ya registrado");
    }
  } else {
    alert("Ingrese todos los campos");
  }
}
function addInUserlist(pnewUser) {
  let Userlist = getUserlist();
  Userlist.push(pnewUser);
  localStorage.setItem("LSUserlist", JSON.stringify(Userlist));
}
function getUserlist() {
  
  let LocalUserlist = JSON.parse(localStorage.getItem("LSUserlist"));
  if (LocalUserlist == null) {
    LocalUserlist = Userlist;
  }
  return LocalUserlist;
}
function review(username, password,email,key) {
  let Userlist = getUserlist();
  let pass = false;

  for (let i = 0; i < Userlist.length; i++) {
    if (username == Userlist[i][0] && password == Userlist[i][1]) {
      if(key == 1){
        
      if(email == Userlist[i][2]){
      pass = true;
      }
    }else{
      pass = true;
    }
    }
  }
  return pass;
}

function login(usr,pswrd) {
  

  Username = usr;
  Password = pswrd;
  if (Username != "" && Password != "") {
    let pass = review(Username, Password,null,0);
    if (pass == true) {
      window.location.href = "galeria.html";
    } else {
      alert("Usuario no existe");
    }
  }else{
      alert('Ingrese todos los campos');
  }
}
function find_password(usr,emil){
  let Userlist = getUserlist();
   Username = usr;
   Email = emil;
  
  let Password = "";

  if (Username != "" && Email != "") {
    
    for(let i = 0; i<Userlist.length; i++){
      
      if (Username == Userlist[i][0] && Email == Userlist[i][2]) {
        
        Password ='es: '+ Userlist[i][1];
        break;
      }
      else{
        Password ='No se puedo recuperar, no se encontro el usuario';
      }
    }
    alert('Su contraseña  '+Password);
  }else{
      alert('Ingrese todos los campos');
  }
  
  
}
