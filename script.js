let PASSWORD=1234;
let IDNUMBER=1234;
console.log("p/w:"+PASSWORD);
console.log("id :"+IDNUMBER);
let userName;
let root=document.getElementById("root");

root.innerHTML=loginPage();
function login(){
 userName=document.getElementById("userName").value;
let idNumber=document.getElementById("idNumber").value;
let passwordKey=document.getElementById("passwordKey").value;

if(!userName||!idNumber||!passwordKey){
    alert("Empty Fields");
}else if(passwordKey!=PASSWORD||idNumber!=IDNUMBER){
    alert("Invalid ID Number/Password");
}else{
    homePage();
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
    root.innerHTML=` <header>
        <div class="nav">
            <ul>
                <a href="javascript:homePage()"><img src="images/mos logo.png" alt="" style="width: 100px;height: 50px;left: 0;"></a>
                <li><h6 class="adminname">${userName}</h6></li>
                <li><a href="javascript:homePage()">Home</a></li>
                <li><a href="javascript:manageCustomer()">Manage Customer</a></li>
                <li><a href="javascript:manageItems()">Manage Items</a></li>
                <li><a href="javascript:manageOrder()">Manage Order</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </div>
    </header>
      <div class="container">
       <div class="row text-center">
<div class="col"><a href="javascript:viewItems()"><img src="images/beverages.jpg" alt="" class="homebtns"></a></div>
<div class="col"><a href="javascript:manageCustomer()"><img src="images/beverages.jpg" alt="" class="homebtns"></a></div>
<div class="col"><a href="javascript:manageItems()"><img src="images/beverages.jpg" alt="" class="homebtns"></a></div>
       </div>
 <div class="row text-center">
    <div class="col"><a href="javascript:viewItems()"><img src="images/beverages.jpg" alt="" class="homebtns"></a></div>
    <div class="col"><a href="javascript:viewItems()"><img src="images/beverages.jpg" alt="" class="homebtns"></a></div>

       </div>
      </div>
      
       <footer id="about" class="text-center">
        <div class="row">
            <div class="col">
                <img src="images/mos logo.png" alt="" style="width: 400px;height: 200px;">
                <h6>©MOSBurgers</h6>
            </div>
            <div class="col">
                <h5 class="foottitles">About</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, obcaecati odio. Asperiores magni,
                    nobis, laudantium laborum error nihil blanditiis ea doloremque soluta architecto laboriosam sunt
                    neque corrupti earum nesciunt nam.</p>
            </div>
            <div class="col">
                <h5 class="foottitles">Contact</h5>
                <h6 class="foottitles">Email</h6>
                <h6>mosburgers@gmail.com</h6>
                <h6 class="foottitles">Contact Number</h6>
                <h6>+94 123 456 6789</h6>
                <h6 class="foottitles">Social </h6>
                <i class="bi bi-facebook icon"></i> <i class="bi bi-instagram icon"></i> <i class="bi bi-twitter-x icon"></i> <i class="bi bi-tiktok icon"></i>
            </div>
        </div>
    </footer>
      `
      
}
function manageCustomer(){
    root.innerHTML=`
    <header>
        <div class="nav">
            <ul>
                <a href="javascript:homePage()"><img src="images/mos logo.png" alt="" style="width: 100px;height: 50px;left: 0;"></a>
                <li><h6 class="adminname">${userName}</h6></li>
                <li><a href="javascript:homePage()">Home</a></li>
                <li><a href="javascript:manageCustomer()">Manage Customer</a></li>
                <li><a href="javascript:manageItems()">Manage Items</a></li>
                <li><a href="javascript:manageOrder()">Manage Order</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </div>
    </header>
    <div>
    <h2 class="title">Manage Customer</h2>
</div>
    <div class="text-center">
        <div class="row">
            <div class="col"><button onclick="addCustomer()" class="managebtns" style="background-color: rgb(237, 176, 63);"><h3 class="managebtntxt">Add Customer</h3><i class="bi bi-person-fill-add manageicons"></i></button></div>
            <div class="col"><button onclick="viewCustomers()" class="managebtns" style="background-color: rgb(227, 126, 49);"><h3 class="managebtntxt">View Customers</h3><i class="bi bi-person-lines-fill manageicons"></i></button></div>
            <div class="col"><button onclick="searchCustomer()" class="managebtns" style="background-color: rgb(238, 229, 55);"><h3 class="managebtntxt">Search Customer</h3><i class="bi bi-search manageicons"></i></button></div>
        </div>
        <div class="row">
            <div class="col"><button onclick="updateCustomer()" class="managebtns" style="background-color: rgb(112, 209, 67);"><h3 class="managebtntxt">Update Customer</h3><i class="bi bi-pencil-square manageicons"></i></button></div>
            <div class="col"><button onclick="deleteCustomer()" class="managebtns" style="background-color: rgb(180, 143, 222);"><h3 class="managebtntxt">Delete Customer</h3><i class="bi bi-person-dash-fill manageicons"></i></button></div>
        </div>
    </div>
    <footer id="about" class="text-center">
        <div class="row">
            <div class="col">
                <img src="images/mos logo.png" alt="" style="width: 400px;height: 200px;">
                <h6>©MOSBurgers</h6>
            </div>
            <div class="col">
                <h5 class="foottitles">About</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, obcaecati odio. Asperiores magni,
                    nobis, laudantium laborum error nihil blanditiis ea doloremque soluta architecto laboriosam sunt
                    neque corrupti earum nesciunt nam.</p>
            </div>
            <div class="col">
                <h5 class="foottitles">Contact</h5>
                <h6 class="foottitles">Email</h6>
                <h6>mosburgers@gmail.com</h6>
                <h6 class="foottitles">Contact Number</h6>
                <h6>+94 123 456 6789</h6>
                <h6 class="foottitles">Social </h6>
                <i class="bi bi-facebook icon"></i> <i class="bi bi-instagram icon"></i> <i class="bi bi-twitter-x icon"></i> <i class="bi bi-tiktok icon"></i>
            </div>
        </div>
    </footer>
    `
}

function manageItems(){
    console.log("manage items");
    
    root.innerHTML=`
    <header>
        <div class="nav">
            <ul>
                <a href="javascript:homePage()"><img src="images/mos logo.png" alt="" style="width: 100px;height: 50px;left: 0;"></a>
                <li><h6 class="adminname">${userName}</h6></li>
                <li><a href="javascript:homePage()">Home</a></li>
                <li><a href="javascript:manageCustomer()">Manage Customer</a></li>
                <li><a href="javascript:manageItems()">Manage Items</a></li>
                <li><a href="javascript:manageOrder()">Manage Order</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </div>
    </header>
    <div>
    <h2 class="title">Manage Items</h2>
</div>
    <div class="text-center">
        <div class="row">
            <div class="col"><button onclick="addItem()" class="managebtns" style="background-color: rgb(237, 176, 63);"><h3 class="managebtntxt">Add Item</h3><i class="bi bi-plus-circle manageicons"></i></button></div>
            <div class="col"><button onclick="viewItems()" class="managebtns" style="background-color: rgb(227, 126, 49);"><h3 class="managebtntxt">View Item</h3><i class="bi bi-list-ul manageicons"></i></button></div>
            <div class="col"><button onclick="searchItem()" class="managebtns" style="background-color: rgb(238, 229, 55);"><h3 class="managebtntxt">Search Item</h3><i class="bi bi-search manageicons"></i></button></div>
        </div>
        <div class="row">
            <div class="col"><button onclick="updateItem()" class="managebtns" style="background-color: rgb(112, 209, 67);"><h3 class="managebtntxt">Update Item</h3><i class="bi bi-pencil-square manageicons"></i></button></div>
            <div class="col"><button onclick="deleteItem()" class="managebtns" style="background-color: rgb(180, 143, 222);"><h3 class="managebtntxt">Delete Item</h3><i class="bi bi-trash3-fill manageicons"></i></button></div>
        </div>
    </div>

    <footer id="about" class="text-center">
        <div class="row">
            <div class="col">
                <img src="images/mos logo.png" alt="" style="width: 400px;height: 200px;">
                <h6>©MOSBurgers</h6>
            </div>
            <div class="col">
                <h5 class="foottitles">About</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, obcaecati odio. Asperiores magni,
                    nobis, laudantium laborum error nihil blanditiis ea doloremque soluta architecto laboriosam sunt
                    neque corrupti earum nesciunt nam.</p>
            </div>
            <div class="col">
                <h5 class="foottitles">Contact</h5>
                <h6 class="foottitles">Email</h6>
                <h6>mosburgers@gmail.com</h6>
                <h6 class="foottitles">Contact Number</h6>
                <h6>+94 123 456 6789</h6>
                <h6 class="foottitles">Social </h6>
                <i class="bi bi-facebook icon"></i> <i class="bi bi-instagram icon"></i> <i class="bi bi-twitter-x icon"></i> <i class="bi bi-tiktok icon"></i>
            </div>
        </div>
    </footer>
    `
}
function viewItems(){
          root.innerHTML=`
          <header>
        <div class="nav">
            <ul>
                <a href="javascript:homePage()"><img src="images/mos logo.png" alt="" style="width: 100px;height: 50px;left: 0;"></a>
                <li><h6 class="adminname">${userName}</h6></li>
                <li><a href="javascript:homePage()">Home</a></li>
                <li><a href="javascript:manageCustomer()">Manage Customer</a></li>
                <li><a href="javascript:manageItems()">Manage Items</a></li>
                <li><a href="javascript:manageOrder()">Manage Order</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </div>
    </header>
    <div>
    <h2 class="title">Select Item</h2>
</div>
<div>
        <div class="row">
            
          <div class="col"><a href="javascript:burgerMenu()"><img src="images/burger2.jpg" alt="" class="homebtns"></a></div>
          <div class="col"><a href="javascript:submarineMenu()"><img src="images/submarine.jpg" alt="" class="homebtns"></a></div>
          <div class="col"><a href="javascript:friesMenu()"><img src="images/fries.jpg" alt="" class="homebtns" ></a></div>
        </div>
        <div class="row">
            <div class="col"><a href="javascript:pastaMenu()"><img src="images/pasta.jpg" alt="" class="homebtns" ></a></div>
            <div class="col"><a href="javascript:chickenMenu()"><img src="images/chicken.jpg" alt="" class="homebtns" ></a></div>
            <div class="col"><a href="javascript:beveragesMenu()"><img src="images/beverages.jpg" alt="" class="homebtns"></a></div>
          </div>
      </div>

 <footer id="about" class="text-center">
        <div class="row">
            <div class="col">
                <img src="images/mos logo.png" alt="" style="width: 400px;height: 200px;">
                <h6>©MOSBurgers</h6>
            </div>
            <div class="col">
                <h5 class="foottitles">About</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, obcaecati odio. Asperiores magni,
                    nobis, laudantium laborum error nihil blanditiis ea doloremque soluta architecto laboriosam sunt
                    neque corrupti earum nesciunt nam.</p>
            </div>
            <div class="col">
                <h5 class="foottitles">Contact</h5>
                <h6 class="foottitles">Email</h6>
                <h6>mosburgers@gmail.com</h6>
                <h6 class="foottitles">Contact Number</h6>
                <h6>+94 123 456 6789</h6>
                <h6 class="foottitles">Social </h6>
                <i class="bi bi-facebook icon"></i> <i class="bi bi-instagram icon"></i> <i class="bi bi-twitter-x icon"></i> <i class="bi bi-tiktok icon"></i>
            </div>
        </div>
    </footer>

          `;      
   }
   
function burgerMenu(){
    console.log("burger menu");
    
}
   
let itemList=[];
let burgerList=[];
let submarineList=[];
let friesList=[];
let pastaList=[];
let chickenList=[];
let beveragesList=[];

   function burgerMenu(){
    console.log("burger menu");
    root.innerHTML=`
<header>
        <div class="nav">
            <ul>
                <a href="javascript:homePage()"><img src="images/mos logo.png" alt="" style="width: 100px;height: 50px;left: 0;"></a>
                <li><h6 class="adminname">${userName}</h6></li>
                <li><a href="javascript:homePage()">Home</a></li>
                <li><a href="javascript:manageCustomer()">Manage Customer</a></li>
                <li><a href="javascript:manageItems()">Manage Items</a></li>
                <li><a href="javascript:manageOrder()">Manage Order</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </div>
    </header>

    <div>
    <h2 class="title">Burgers</h2>
</div>
<div class="tableBox">
    <table style="width: 100%;">
        <tr>
            <td class="itemsHead">Type</td>
            <td class="itemsHead">Item Code</td>
            <td class="itemsHead">Item Name</td>
            <td class="itemsHead">Price (LKR)</td>
            <td class="itemsHead">Discount</td>
        </tr>
    </table>
    <table id="burgersList" style="width: 100%;">

    </table>
</div> 
<footer id="about" class="text-center">
        <div class="row">
            <div class="col">
                <img src="images/mos logo.png" alt="" style="width: 400px;height: 200px;">
                <h6>©MOSBurgers</h6>
            </div>
            <div class="col">
                <h5 class="foottitles">About</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, obcaecati odio. Asperiores magni,
                    nobis, laudantium laborum error nihil blanditiis ea doloremque soluta architecto laboriosam sunt
                    neque corrupti earum nesciunt nam.</p>
            </div>
            <div class="col">
                <h5 class="foottitles">Contact</h5>
                <h6 class="foottitles">Email</h6>
                <h6>mosburgers@gmail.com</h6>
                <h6 class="foottitles">Contact Number</h6>
                <h6>+94 123 456 6789</h6>
                <h6 class="foottitles">Social </h6>
                <i class="bi bi-facebook icon"></i> <i class="bi bi-instagram icon"></i> <i class="bi bi-twitter-x icon"></i> <i class="bi bi-tiktok icon"></i>
            </div>
        </div>
    </footer>
    `
    let printBurger=""    
    burgerList.forEach((element)=>{
        printBurger=`
      <tr>
          <td  class="tableRow">${element.code}</td>
          <td  class="tableRow">${element.name}</td>
          <td  class="tableRow">${element.price}</td>
          <td  class="tableRow">${element.discount}%</td>
          </tr>
    `
    })
   
    document.getElementById("burgersList").innerHTML+=printBurger;  
   }
   function submarineMenu(){
    console.log("submarine menu");
    root.innerHTML=`
    <header>
        <div class="nav">
            <ul>
                <a href="javascript:homePage()"><img src="images/mos logo.png" alt="" style="width: 100px;height: 50px;left: 0;"></a>
                <li><h6 class="adminname">${userName}</h6></li>
                <li><a href="javascript:homePage()">Home</a></li>
                <li><a href="javascript:manageCustomer()">Manage Customer</a></li>
                <li><a href="javascript:manageItems()">Manage Items</a></li>
                <li><a href="javascript:manageOrder()">Manage Order</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </div>
    </header>

    <div>
    <h2 class="title">Submarines</h2>
</div>
<div class="tableBox">
    <table style="width: 100%;">
        <tr>
            <td class="itemsHead">Type</td>
            <td class="itemsHead">Item Code</td>
            <td class="itemsHead">Item Name</td>
            <td class="itemsHead">Price (LKR)</td>
            <td class="itemsHead">Discount</td>
        </tr>
    </table>
    <table id="submarineList" style="width: 100%;">

    </table>
</div> 
<footer id="about" class="text-center">
        <div class="row">
            <div class="col">
                <img src="images/mos logo.png" alt="" style="width: 400px;height: 200px;">
                <h6>©MOSBurgers</h6>
            </div>
            <div class="col">
                <h5 class="foottitles">About</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, obcaecati odio. Asperiores magni,
                    nobis, laudantium laborum error nihil blanditiis ea doloremque soluta architecto laboriosam sunt
                    neque corrupti earum nesciunt nam.</p>
            </div>
            <div class="col">
                <h5 class="foottitles">Contact</h5>
                <h6 class="foottitles">Email</h6>
                <h6>mosburgers@gmail.com</h6>
                <h6 class="foottitles">Contact Number</h6>
                <h6>+94 123 456 6789</h6>
                <h6 class="foottitles">Social </h6>
                <i class="bi bi-facebook icon"></i> <i class="bi bi-instagram icon"></i> <i class="bi bi-twitter-x icon"></i> <i class="bi bi-tiktok icon"></i>
            </div>
        </div>
    </footer>
    `
    let printSubmarine=""    
    submarineList.forEach((element)=>{
        printSubmarine=`
      <tr>
          <td  class="tableRow">${element.code}</td>
          <td  class="tableRow">${element.name}</td>
          <td  class="tableRow">${element.price}</td>
          <td  class="tableRow">${element.discount}%</td>
          </tr>
    `
    })
   
    document.getElementById("submarineList").innerHTML+=printSubmarine; 
   } 
   function friesMenu(){
    console.log("fries menu");
    root.innerHTML=`
     <header>
        <div class="nav">
            <ul>
                <a href="javascript:homePage()"><img src="images/mos logo.png" alt="" style="width: 100px;height: 50px;left: 0;"></a>
                <li><h6 class="adminname">${userName}</h6></li>
                <li><a href="javascript:homePage()">Home</a></li>
                <li><a href="javascript:manageCustomer()">Manage Customer</a></li>
                <li><a href="javascript:manageItems()">Manage Items</a></li>
                <li><a href="javascript:manageOrder()">Manage Order</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </div>
    </header>

    <div>
    <h2 class="title">Fries</h2>
</div>
<div class="tableBox">
    <table style="width: 100%;">
        <tr>
            <td class="itemsHead">Type</td>
            <td class="itemsHead">Item Code</td>
            <td class="itemsHead">Item Name</td>
            <td class="itemsHead">Price (LKR)</td>
            <td class="itemsHead">Discount</td>
        </tr>
    </table>
    <table id="friesList" style="width: 100%;">

    </table>
</div> 
<footer id="about" class="text-center">
        <div class="row">
            <div class="col">
                <img src="images/mos logo.png" alt="" style="width: 400px;height: 200px;">
                <h6>©MOSBurgers</h6>
            </div>
            <div class="col">
                <h5 class="foottitles">About</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, obcaecati odio. Asperiores magni,
                    nobis, laudantium laborum error nihil blanditiis ea doloremque soluta architecto laboriosam sunt
                    neque corrupti earum nesciunt nam.</p>
            </div>
            <div class="col">
                <h5 class="foottitles">Contact</h5>
                <h6 class="foottitles">Email</h6>
                <h6>mosburgers@gmail.com</h6>
                <h6 class="foottitles">Contact Number</h6>
                <h6>+94 123 456 6789</h6>
                <h6 class="foottitles">Social </h6>
                <i class="bi bi-facebook icon"></i> <i class="bi bi-instagram icon"></i> <i class="bi bi-twitter-x icon"></i> <i class="bi bi-tiktok icon"></i>
            </div>
        </div>
    </footer>
    `
    let printFries=""    
    friesList.forEach((element)=>{
        printFries=`
      <tr>
          <td  class="tableRow">${element.code}</td>
          <td  class="tableRow">${element.name}</td>
          <td  class="tableRow">${element.price}</td>
          <td  class="tableRow">${element.discount}%</td>
          </tr>
    `
    })
   
    document.getElementById("friesList").innerHTML+=printFries; 
   } 
   function pastaMenu(){
    console.log("pasta menu");
    root.innerHTML=`
     <header>
        <div class="nav">
            <ul>
                <a href="javascript:homePage()"><img src="images/mos logo.png" alt="" style="width: 100px;height: 50px;left: 0;"></a>
                <li><h6 class="adminname">${userName}</h6></li>
                <li><a href="javascript:homePage()">Home</a></li>
                <li><a href="javascript:manageCustomer()">Manage Customer</a></li>
                <li><a href="javascript:manageItems()">Manage Items</a></li>
                <li><a href="javascript:manageOrder()">Manage Order</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </div>
    </header>

    <div>
    <h2 class="title">Pasta</h2>
</div>
<div class="tableBox">
    <table style="width: 100%;">
        <tr>
            <td class="itemsHead">Type</td>
            <td class="itemsHead">Item Code</td>
            <td class="itemsHead">Item Name</td>
            <td class="itemsHead">Price (LKR)</td>
            <td class="itemsHead">Discount</td>
        </tr>
    </table>
    <table id="pastaList" style="width: 100%;">

    </table>
</div> 
<footer id="about" class="text-center">
        <div class="row">
            <div class="col">
                <img src="images/mos logo.png" alt="" style="width: 400px;height: 200px;">
                <h6>©MOSBurgers</h6>
            </div>
            <div class="col">
                <h5 class="foottitles">About</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, obcaecati odio. Asperiores magni,
                    nobis, laudantium laborum error nihil blanditiis ea doloremque soluta architecto laboriosam sunt
                    neque corrupti earum nesciunt nam.</p>
            </div>
            <div class="col">
                <h5 class="foottitles">Contact</h5>
                <h6 class="foottitles">Email</h6>
                <h6>mosburgers@gmail.com</h6>
                <h6 class="foottitles">Contact Number</h6>
                <h6>+94 123 456 6789</h6>
                <h6 class="foottitles">Social </h6>
                <i class="bi bi-facebook icon"></i> <i class="bi bi-instagram icon"></i> <i class="bi bi-twitter-x icon"></i> <i class="bi bi-tiktok icon"></i>
            </div>
        </div>
    </footer>
    `
    let printPasta=""    
    pastaList.forEach((element)=>{
        printPasta=`
      <tr>
          <td  class="tableRow">${element.code}</td>
          <td  class="tableRow">${element.name}</td>
          <td  class="tableRow">${element.price}</td>
          <td  class="tableRow">${element.discount}%</td>
          </tr>
    `
    })
   
    document.getElementById("pastaList").innerHTML+=printPasta; 
   } 
   function chickenMenu(){
    console.log("chicken menu");
   } 
   function beveragesMenu(){
    console.log("beverages menu");
   }

  function addItem(){ 
    root.innerHTML=`
    <header>
        <div class="nav">
            <ul>
                <a href="javascript:homePage()"><img src="images/mos logo.png" alt="" style="width: 100px;height: 50px;left: 0;"></a>
                <li><h6 class="adminname">${userName}</h6></li>
                <li><a href="javascript:homePage()">Home</a></li>
                <li><a href="javascript:manageCustomer()">Manage Customer</a></li>
                <li><a href="javascript:manageItems()">Manage Items</a></li>
                <li><a href="javascript:manageOrder()">Manage Order</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </div>
    </header>
     
    <div>
    <h2 class="title">Add Item</h2>
    </div>
<div class="boxForm text-center">
                <select name="Type" id="type">
                    <option value="burger">Burger</option>
                    <option value="submarine">Submarine</option>
                    <option value="fries">Fries</option>
                    <option value="pasta">Pasta</option>
                    <option value="chicken">Chicken</option>
                    <option value="beverages">Beverages</option>
                </select>
                <input type="text" id="item_code"  class="txtInput">
                <input type="text" id="item_name" placeholder="Item Name" class="txtInput">
                <input type="number" id="item_price" placeholder="Price" class="txtInput">
                <input type="number" id="item_discount" placeholder="Discount" class="txtInput">
                <button onclick="addItembtn()" class="listChangeButton" id="btnAddItem">Add New Item </button>
            </div>
            
    <div class="tableBox">
    <table style="width: 100%;">
        <tr>
            <td  class="itemsHead">Type</td>
            <td  class="itemsHead">Item Code</td>
            <td  class="itemsHead">Item Name</td>
            <td  class="itemsHead">Price (LKR)</td>
            <td  class="itemsHead">Discount</td>
        </tr>
    </table>
    <table id="tableList" style="width: 100%;">

    </table>
    </div>

 <footer id="about" class="text-center">
        <div class="row">
            <div class="col">
                <img src="images/mos logo.png" alt="" style="width: 400px;height: 200px;">
                <h6>©MOSBurgers</h6>
            </div>
            <div class="col">
                <h5 class="foottitles">About</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, obcaecati odio. Asperiores magni,
                    nobis, laudantium laborum error nihil blanditiis ea doloremque soluta architecto laboriosam sunt
                    neque corrupti earum nesciunt nam.</p>
            </div>
            <div class="col">
                <h5 class="foottitles">Contact</h5>
                <h6 class="foottitles">Email</h6>
                <h6>mosburgers@gmail.com</h6>
                <h6 class="foottitles">Contact Number</h6>
                <h6>+94 123 456 6789</h6>
                <h6 class="foottitles">Social </h6>
                <i class="bi bi-facebook icon"></i> <i class="bi bi-instagram icon"></i> <i class="bi bi-twitter-x icon"></i> <i class="bi bi-tiktok icon"></i>
            </div>
        </div>
    </footer>

    `
  }
  function addItembtn(){
   let type=document.getElementById("type").value; 
   let itemCode=document.getElementById("item_code").value;
   let itemName=document.getElementById("item_name").value;
   let itemPrice=document.getElementById("item_price").value;
   let itemDiscount=document.getElementById("item_discount").value;

 let itemDetails={
    code:itemCode,
    name:itemName,
    price:itemPrice,
    discount:itemDiscount
   };
   itemList.push(itemDetails);
   console.log(itemDetails);
   
   if(type=="burger"){
    console.log("burger");    
   burgerList.push(itemDetails);
   console.log(burgerList);    
   }else if(type=="submarine"){
    console.log("submarine");
    submarineList.push(itemDetails);
    console.log(submarineList);    
   }else if(type=="fries"){
    console.log("fries");
    friesList.push(itemDetails);
    console.log(friesList);    
   }else if(type=="pasta"){
    console.log("pasta");
    pastaList.push(itemDetails);
    console.log(pastaList);    
   }else if(type=="chicken"){
    console.log("chicken");
    chickenList.push(itemDetails);
    console.log(chickenList);    
   }else if(type=="beverages"){
    console.log("beverages");
    beveragesList.push(itemDetails);
    console.log(beveragesList);    
   }

   
    let printItem=""    
   itemList.forEach((element)=>{
    printItem=`
     <tr>
         <td  class="tableRow">${type}</td>
         <td  class="tableRow">${element.code}</td>
         <td  class="tableRow">${element.name}</td>
         <td  class="tableRow">${element.price}</td>
         <td  class="tableRow">${element.discount}%</td>
         </tr>
   `
   })
  
   document.getElementById("tableList").innerHTML+=printItem;
//    document.getElementById("item_code").value=""
//    document.getElementById("item_name").value=""
//    document.getElementById("item_price").value=""
//    document.getElementById("item_discount").value=""
  }
function manageOrder(){
    root.innerHTML=`
    <header>
        <div class="nav">
            <ul>
                <a href="javascript:homePage()"><img src="images/mos logo.png" alt="" style="width: 100px;height: 50px;left: 0;"></a>
                <li><h6 class="adminname">${userName}</h6></li>
                <li><a href="javascript:homePage()">Home</a></li>
                <li><a href="javascript:manageCustomer()">Manage Customer</a></li>
                <li><a href="javascript:manageItems()">Manage Items</a></li>
                <li><a href="javascript:manageOrder()">Manage Order</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </div>
    </header>
    <div>
    <h2 class="title">Manage Orders</h2>
</div>
    <div class="text-center">
        <div class="row">
            <div class="col"><button onclick="addOrder()" class="managebtns" style="background-color: rgb(237, 176, 63);"><h3 class="managebtntxt">Add Order</h3><i class="bi bi-plus-circle manageicons"></i></button></div>
            <div class="col"><button onclick="viewOrders()" class="managebtns" style="background-color: rgb(227, 126, 49);"><h3 class="managebtntxt">View Order</h3><i class="bi bi-list-ul manageicons"></i></button></div>
            <div class="col"><button onclick="searchOrder()" class="managebtns" style="background-color: rgb(238, 229, 55);"><h3 class="managebtntxt">Search Order</h3><i class="bi bi-search manageicons"></i></button></div>
        </div>
        <div class="row">
            <div class="col"><button onclick="updateOrder()" class="managebtns" style="background-color: rgb(112, 209, 67);"><h3 class="managebtntxt">Update Order</h3><i class="bi bi-pencil-square manageicons"></i></button></div>
            <div class="col"><button onclick="deleteOrder()" class="managebtns" style="background-color: rgb(180, 143, 222);"><h3 class="managebtntxt">Delete Order</h3><i class="bi bi-trash3-fill manageicons"></i></button></div>
        </div>
    </div>

    <footer id="about" class="text-center">
        <div class="row">
            <div class="col">
                <img src="images/mos logo.png" alt="" style="width: 400px;height: 200px;">
                <h6>©MOSBurgers</h6>
            </div>
            <div class="col">
                <h5 class="foottitles">About</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, obcaecati odio. Asperiores magni,
                    nobis, laudantium laborum error nihil blanditiis ea doloremque soluta architecto laboriosam sunt
                    neque corrupti earum nesciunt nam.</p>
            </div>
            <div class="col">
                <h5 class="foottitles">Contact</h5>
                <h6 class="foottitles">Email</h6>
                <h6>mosburgers@gmail.com</h6>
                <h6 class="foottitles">Contact Number</h6>
                <h6>+94 123 456 6789</h6>
                <h6 class="foottitles">Social </h6>
                <i class="bi bi-facebook icon"></i> <i class="bi bi-instagram icon"></i> <i class="bi bi-twitter-x icon"></i> <i class="bi bi-tiktok icon"></i>
            </div>
        </div>
    </footer>
    `
}