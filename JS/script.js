let Userlist = [];



let div_login = document.getElementById('div-ingreso-login');
let div_forgot = document.getElementById('div-login-forgot');
let btn_forgot = document.getElementById('forgot-password');
let enter_login = document.getElementById('enter-login');
let enter_forgot = document.getElementById('enter-forgot');

let a = document.getElementById("a-submit-registro");
if (a) {
  a.addEventListener("click", registerNewUser);
}
let b = document.getElementById("enter-login");
if (b) {
  b.addEventListener("click", login);
}



btn_forgot.addEventListener('click',show_div_forgot );
btn_forgot.addEventListener('click',ocultar_div_login );

enter_forgot.addEventListener('click',find_password);

function show_div_forgot(){
  
  div_forgot.style.display='block';
  div_forgot.style.position='absolute';
  div_forgot.style.top= '8%';
  div_forgot.style.left= '2.9%';
  enter_forgot.style.display='block';
}
function ocultar_div_login(){
  div_login.style.display='none';
  enter_login.style.display='none';
  btn_forgot.style.display='none';

}


function registerNewUser() {
  
  let newUser = [],
    Username = "",
    Password = "",
    Email = "";

  Username = document.getElementById("username-reg").value;
  Password = document.getElementById("user-password-reg").value;
  Email = document.getElementById("user-email-reg").value;

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

function login() {
  let Username = "",
    Password = "";

  Username = document.getElementById("username").value;
  Password = document.getElementById("user-password").value;
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
function find_password(){
  let Userlist = getUserlist();
  let Username = "";
  let Email = "";
   Username = document.getElementById('username-forgot').value;
   Email = document.getElementById('email-forgot').value;
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
