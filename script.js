let PASSWORD=1234;
let IDNUMBER=1234;
console.log("p/w:"+PASSWORD);
console.log("id :"+IDNUMBER);


let root=document.getElementById("root");

root.innerHTML=loginPage();
function login(){
let userName=document.getElementById("userName").value;
let idNumber=document.getElementById("idNumber").value;
let passwordKey=document.getElementById("passwordKey").value;

if(!userName||!idNumber||!passwordKey){
    alert("Empty Fields");
}else if(passwordKey!=PASSWORD||idNumber!=IDNUMBER){
    alert("Invalid ID Number/Password");
}else{
    root.innerHTML=homePage();
}


}

function loginPage(){
return`
<input type="text" placeholder="Name" id="userName">
        <input type="text" placeholder="ID Number" id="idNumber">
        <input type="password" placeholder="Password/Key" id="passwordKey">
        <button id="login" onclick="login()">Login</button>
`
}

function homePage(){
    return ` <header>
        <div class="nav">
    <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Menu</a></li>
        <li><a href="">Add Customer</a></li>
        <li><a href="">Add Item</a></li>
        <li><a href="">Update Item</a></li>
        <li><a href="">Delete Item</a></li>
    </ul>
        </div>
      </header>
      <div class="container">
       <div class="row text-center">
<div class="col"><button><img src="images/beverages.jpg" alt="" class="homebtns" onclick="menu()"></button></div>
<div class="col"><button><img src="images/beverages.jpg" alt="" class="homebtns"></button></div>
<div class="col"><button><img src="images/beverages.jpg" alt="" class="homebtns"></button></div>
       </div>
 <div class="row text-center">
    <div class="col"><button><img src="images/beverages.jpg" alt="" class="homebtns"></button></div>
    <div class="col"><button><img src="images/beverages.jpg" alt="" class="homebtns"></button></div>

       </div>
      </div>`
}

function menu(){
          root.innerHTML=`
          <header>
        <div class="nav">
    <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Menu</a></li>
        <li><a href="">Add Customer</a></li>
        <li><a href="">Add Item</a></li>
        <li><a href="">Update Item</a></li>
        <li><a href="">Delete Item</a></li>
    </ul>
        </div>
      </header>

          `;
   }
