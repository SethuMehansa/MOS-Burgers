let PASSWORD = 1234;
let IDNUMBER = 1234;
console.log("p/w:" + PASSWORD);
console.log("id :" + IDNUMBER);
let userName;
let root = document.getElementById("root");

root.innerHTML = loginPage();
function login() {
    userName = document.getElementById("userName").value="sethu";
    let idNumber = document.getElementById("idNumber").value=1234;
    let passwordKey = document.getElementById("passwordKey").value=1234;

    if (!userName || !idNumber || !passwordKey) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Fill ALL Fields!",
            
          });
    } else if (passwordKey != PASSWORD || idNumber != IDNUMBER) {
        Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Invalid ID Number/Password!",
  
});
    } else {
        homePage();
    }
}

function loginPage() {
    return `
    <div class="boxForm">
        <label for="userName"><h2>Admin Login</h2></label>
        <input type="text" placeholder="Name" id="userName" class="txtInput"><br>
                <input type="text" placeholder="ID Number" id="idNumber"class="txtInput"><br>
                <input type="password" placeholder="Password/Key" id="passwordKey"class="txtInput"><br>
                <button id="login" onclick="login()" class="listChangeButton">Login</button><br>
                </div>
`
}

function homePage() {
    root.innerHTML = ` <header>
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
<div class="col"><a href="javascript:manageCustomer()"><img src="images/beverages.jpg" alt="" class="homebtns"></a></div>
<div class="col"><a href="javascript:manageItems()"><img src="images/beverages.jpg" alt="" class="homebtns"></a></div>
<div class="col"><a href="javascript:manageOrder()"><img src="images/beverages.jpg" alt="" class="homebtns"></a></div>
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
                <p>Welcome to the MOS Burgers Admin Dashboard – your central hub for managing products, orders, and customer data. Streamline operations, monitor performance, and ensure every customer enjoys the quality and service that MOS Burgers is known for.</p>
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
function manageCustomer() {
    root.innerHTML = `
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
                <p>Welcome to the MOS Burgers Admin Dashboard – your central hub for managing products, orders, and customer data. Streamline operations, monitor performance, and ensure every customer enjoys the quality and service that MOS Burgers is known for.</p>
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
function addCustomer() {
    root.innerHTML = `
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
    <h2 class="title">Add Customer</h2>
</div>
<div class="boxForm">
    <label for="customerName">Customer Name:</label><br>
    <input type="text" placeholder="Name" id="customerName" class="txtInput"><br>
    <label for="customerPhonenumber">Phone Number:</label><br>
    <input type="text" placeholder="Phone Number" id="customerPhonenumber" class="txtInput"><br>
    <button class="listChangeButton" onclick="addCustomerbtn()">Add Customer</button>
</div>
<div class="tableBox">
    <table style="width: 100%;">
        <tr>
            <td  class="itemsHead">Customer Name</td>
            <td  class="itemsHead">Phone Number</td>
        </tr>
    </table>
    <table id="customerList"style="width: 100%;">

    </table>
    </div>
`

}
let customerList = [{name:"sethu",contact:"0767368366"}];

function addCustomerbtn() {
     let customerName = document.getElementById("customerName").value;
    let customerPhonenumber = document.getElementById("customerPhonenumber").value;

    let numberIsValid=phonenumberValidation(customerPhonenumber);


    if(!numberIsValid){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid Phonenumber!",
          });
        document.getElementById("customerPhonenumber").value="";
    }else if(customerList!=null&&customerList.some(element=>element.contact===customerPhonenumber)){
        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "Customer Already Exists!",
          });
        document.getElementById("customerPhonenumber").value="";
    }else{
    let customerDetails = {
        name: customerName,
        contact: customerPhonenumber,
    }
    customerList.push(customerDetails);
    console.log(customerList);
    
    let printCustomer = ""
    customerList.forEach((element) => {
        printCustomer = `
  <tr>
      <td  class="tableRow">${element.name}</td>
      <td  class="tableRow">${element.contact}</td>
      </tr>
`
    })

    document.getElementById("customerList").innerHTML += printCustomer;
    Swal.fire({
        icon: "success",
        title: "Done",
        text: "Customer Added!",
      });
}}
function viewCustomers() {
    root.innerHTML = `
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
       <div class="tableBox">
    <table style="width: 100%;">
        <tr>
            <td  class="itemsHead">Customer Name</td>
            <td  class="itemsHead">Phone Number</td>
        </tr>
    </table>
    <table id="customerList"style="width: 100%;">

    </table>
    </div> 
        `
        let printviewCustomer="";
    customerList.forEach((element) => {
        printviewCustomer += `
          <tr>
              <td  class="tableRow">${element.name}</td>
              <td  class="tableRow">${element.contact}</td>
              </tr>
        `
    })

    document.getElementById("customerList").innerHTML += printviewCustomer;
}

function searchCustomer(){
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
   <div>
        <h2 class="title">Search Customer</h2>
     </div>
     <div class="boxForm">
        <label for="enter_customer_id">Enter Customer Phone Number:</label>
        <input type="text"  id="enter_customer_id" class="txtInput" placeholder="Phone Number">
        <button class="listChangeButton" onclick="searchCustomerbtn()">Search <i class="bi bi-search"></i></button>
     </div>
    <div class="tableBox">
        <table style="width: 100%;">
            <tr>
                <td  class="itemsHead">Customer Name</td>
                <td  class="itemsHead">Phone Number</td>
            </tr>
        </table>
        <table id="searchedCustomerList"style="width: 100%;">
    
        </table>
        <div>
           <h3 class="title" id="OrdersByName">Orders By </h3>
           <div>
            <table id="ordersBy">

            </table>
           </div>
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
                <p>Welcome to the MOS Burgers Admin Dashboard – your central hub for managing products, orders, and customer data. Streamline operations, monitor performance, and ensure every customer enjoys the quality and service that MOS Burgers is known for.</p>
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
let foundCustomer;
function searchCustomerbtn(){
    let enter_customer_id=document.getElementById("enter_customer_id").value;
    console.log(enter_customer_id);
    
     foundCustomer=customerList.find(element=>element.contact===enter_customer_id);

    if(foundCustomer){      
      let printfoundCustomer=`
       <tr>
              <td  class="tableRow">${foundCustomer.name}</td>
              <td  class="tableRow">${foundCustomer.contact}</td>
              </tr>
      `
      document.getElementById("OrdersByName").innerHTML="Orders By "+foundCustomer.name;
      document.getElementById("searchedCustomerList").innerHTML += printfoundCustomer;

    //   let printfoundCustomerOrders=`<tr>
    //   </tr>`
    //   printfoundCustomerOrders=`
      
    //   `

    }else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Customer Does Not Exsist!",
            
          });
    }

}

function deleteCustomer(){
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
    <h2 class="title">Delete Customer</h2>
</div>
 <div class="boxForm">
                <label for="enter_customer_id" style="margin: 5px;">Enter Customer ID :</label>
                <input type="text" id="enter_customer_id" class="txtInput" placeholder="Phone Number">
                <button class="listChangeButton" onclick="searchCustomerbtn()"><i class="bi bi-search"></i></button>
             </div>
             <div class="tableBox">
                <table style="width: 100%;">
                    <tr>
                        <td  class="itemsHead">Customer Name</td>
                        <td  class="itemsHead">Phone Number</td>
                    </tr>
                </table>
                <table id="searchedCustomerList"style="width: 100%;">
            
                </table>
                 <div>
           <h3 class="title" id="OrdersByName">Orders By </h3>
           <div>
            <table id="ordersBy">

            </table>
           </div>
                </div>
                </div>
                </div>
            <div class="text-center">
                <button class="deletebtn" onclick="deleteCustomerbtn()" style="background-color: rgb(255, 40, 7);">Delete Customer</button>
                <button class="deletebtn" onclick="deleteCustomerAndOrdersbtn()">Delete Customer and Orders</button>
            </div>
    <footer id="about" class="text-center">
        <div class="row">
            <div class="col">
                <img src="images/mos logo.png" alt="" style="width: 400px;height: 200px;">
                <h6>©MOSBurgers</h6>
            </div>
            <div class="col">
                <h5 class="foottitles">About</h5>
                <p>Welcome to the MOS Burgers Admin Dashboard – your central hub for managing products, orders, and customer data. Streamline operations, monitor performance, and ensure every customer enjoys the quality and service that MOS Burgers is known for.</p>
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
function deleteCustomerbtn(){
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            let temp=[];
           // customerList chnage array
             temp=customerList.filter(element=>element.contact!==foundCustomer.contact);
            console.log(temp);
            
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });

    
}
function deleteCustomerAndOrdersbtn(){
    //===============COMPLETE CODE====================================================
}
function updateCustomer(){
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
    <h2 class="title">Update Customer</h2>
</div>
<div class="boxForm" style="padding:10px;text-align: center;">
            <label for="enter_customer_id" style="margin: 5px;">Enter Customer ID :</label>
            <input type="text" id="enter_customer_id" class="txtInput" placeholder="Phone Number">
            <button class="listChangeButton" onclick="searchCustomerUpdatebtn()"><i class="bi bi-search"></i></button>
         </div> 
         <div class="tableBox" style="height: 200px;">
            <table style="width: 100%;">
                <tr>
                    <td  class="itemsHead">Customer Name</td>
                    <td  class="itemsHead">Phone Number</td>
                </tr>
            </table>
            <table id="searchedCustomerUpdateList"style="width: 100%;">
        
            </table>
        </div>
     <div class="text-center">
        <button class="listChangeButton" onclick="updatCustomerbtn()">Update</button>
     </div>
 <footer id="about" class="text-center">
        <div class="row">
            <div class="col">
                <img src="images/mos logo.png" alt="" style="width: 400px;height: 200px;">
                <h6>©MOSBurgers</h6>
            </div>
            <div class="col">
                <h5 class="foottitles">About</h5>
                <p>Welcome to the MOS Burgers Admin Dashboard – your central hub for managing products, orders, and customer data. Streamline operations, monitor performance, and ensure every customer enjoys the quality and service that MOS Burgers is known for.</p>
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
function searchCustomerUpdatebtn(){
    let enter_customer_id=document.getElementById("enter_customer_id").value;
    console.log(enter_customer_id);
    
     foundCustomer=customerList.find(element=>element.contact===enter_customer_id);

    if(foundCustomer){      
      let printfoundCustomer=`
      <tr>
        <td  class="tableRow"><input type="text" id="newCustomerName" class="txtInput" value="${foundCustomer.name}"></td>
        <td  class="tableRow"><input type="text"  id="newCustomerID" class="txtInput" value="${foundCustomer.contact}"></td>
        </tr>
              
      `
      document.getElementById("searchedCustomerUpdateList").innerHTML += printfoundCustomer;

    }else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Customer Does Not Exsist!",
            
          });
    }
}
function updatCustomerbtn() {

        let newCustomerName = document.getElementById("newCustomerName").value.trim();
        let newCustomerID = document.getElementById("newCustomerID").value.trim();

        if (!newCustomerName || !newCustomerID) {
            Swal.fire({
                icon: "warning",
                title: "Incomplete Input",
                text: "Please fill out both fields.",
            });
            
        }else{

        const customerIndex = customerList.findIndex(customer => customer.contact === foundCustomer.contact);

            customerList[customerIndex].name = newCustomerName;
            customerList[customerIndex].contact = newCustomerID;


            Swal.fire({
                icon: "success",
                title: "Updated!",
                text: "Customer details have been updated successfully.",
            });

            document.getElementById("searchedCustomerUpdateList").innerHTML = `
                <tr>
                    <td class="tableRow">${newCustomerName}</td>
                    <td class="tableRow">${newCustomerID}</td>
                </tr>
            `;

            foundCustomer = customerList[customerIndex];
    
}}

function manageItems() {
    console.log("manage items");

    root.innerHTML = `
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
                <p>Welcome to the MOS Burgers Admin Dashboard – your central hub for managing products, orders, and customer data. Streamline operations, monitor performance, and ensure every customer enjoys the quality and service that MOS Burgers is known for.</p>
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
function viewItems() {
    root.innerHTML = `
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
                <p>Welcome to the MOS Burgers Admin Dashboard – your central hub for managing products, orders, and customer data. Streamline operations, monitor performance, and ensure every customer enjoys the quality and service that MOS Burgers is known for.</p>
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


let itemList = [{itemtype:"burger",code:"B1001",name:"Classic Burger (Large)",price:"750",discount:""},{itemtype:"burger",code:"B1002",name:"Classic Burger (Regular)",price:"1500",discount:"15"},{itemtype:"beverage",code:"B1016",name:"Crispy Chicken Submarine (Large)",price:"2000",discount:""},{code:"B1045",name:"Coca-Cola (330ml) ",price:"1230",discount:""}];
let burgerList = [{code:"B1001",name:"Classic Burger (Large)",price:"750",discount:""},{code:"B1002",name:"Classic Burger (Regular)",price:"1500",discount:"15"}];
let submarineList = [{code:"B1016",name:"Crispy Chicken Submarine (Large)",price:"2000",discount:""},{code:"B1017",name:"Crispy Chicken Submarine (Regular) ",price:"1500",discount:""}];
let friesList = [{code:"B1025",name:"Steak Fries (Large)",price:"1200",discount:""},{code:"B1026",name:"Steak Fries (Medium)",price:"600",discount:""}];
let pastaList = [{code:"B1031",name:"Chicken n Cheese Pasta ",price:"1600",discount:"15"},{code:"B1032",name:"Chicken Penne Pasta ",price:"1700",discount:""}];
let chickenList = [{code:"B1038",name:"Fried Chicken (Small)",price:"1200",discount:""},{code:"B1039",name:"Fried Chicken (Regular) ",price:"2300",discount:"10"}];
let beveragesList = [{code:"B1044",name:"Pepsi (330ml) ",price:"990",discount:"5"},{code:"B1045",name:"Coca-Cola (330ml) ",price:"1230",discount:""}];

function burgerMenu() {
    //console.log("burger menu");
    root.innerHTML = `
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
<div class="boxForm" style="padding: 5px;width: fit-content;">
              <input type="text" class="txtInput" id="enter_item_idname" placeholder="Search">
              <button class="listChangeButton" onclick="searchItembtn('burger')"><i class="bi bi-search"></i></button>
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
                <p>Welcome to the MOS Burgers Admin Dashboard – your central hub for managing products, orders, and customer data. Streamline operations, monitor performance, and ensure every customer enjoys the quality and service that MOS Burgers is known for.</p>
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
    let printBurger = ""
    burgerList.forEach((element) => {
        printBurger += `
      <tr>
          <td  class="tableRow">${element.code}</td>
          <td  class="tableRow">${element.name}</td>
          <td  class="tableRow">${element.price}</td>
          <td  class="tableRow">${element.discount}%</td>
          </tr>
    `
    })

    document.getElementById("burgersList").innerHTML += printBurger;
}
function submarineMenu() {
   // console.log("submarine menu");
    root.innerHTML = `
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
<div class="boxForm" style="padding: 5px;width: fit-content;">
              <input type="text" class="txtInput" id="enter_item_idname" placeholder="Search">
              <button class="listChangeButton" onclick="searchItembtn('submarine')"><i class="bi bi-search"></i></button>
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
                <p>Welcome to the MOS Burgers Admin Dashboard – your central hub for managing products, orders, and customer data. Streamline operations, monitor performance, and ensure every customer enjoys the quality and service that MOS Burgers is known for.</p>
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
    let printSubmarine = ""
    submarineList.forEach((element) => {
        printSubmarine += `
      <tr>
          <td  class="tableRow">${element.code}</td>
          <td  class="tableRow">${element.name}</td>
          <td  class="tableRow">${element.price}</td>
          <td  class="tableRow">${element.discount}%</td>
          </tr>
    `
    })

    document.getElementById("submarineList").innerHTML += printSubmarine;
}
function friesMenu() {
   // console.log("fries menu");
    root.innerHTML = `
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
<div class="boxForm" style="padding: 5px;width: fit-content;">
              <input type="text" class="txtInput" id="enter_item_idname" placeholder="Search">
              <button class="listChangeButton" onclick="searchItembtn('fries')"><i class="bi bi-search"></i></button>
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
                <p>Welcome to the MOS Burgers Admin Dashboard – your central hub for managing products, orders, and customer data. Streamline operations, monitor performance, and ensure every customer enjoys the quality and service that MOS Burgers is known for.</p>
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
    let printFries = ""
    friesList.forEach((element) => {
        printFries += `
      <tr>
          <td  class="tableRow">${element.code}</td>
          <td  class="tableRow">${element.name}</td>
          <td  class="tableRow">${element.price}</td>
          <td  class="tableRow">${element.discount}%</td>
          </tr>
    `
    })

    document.getElementById("friesList").innerHTML += printFries;
}
function pastaMenu() {
   // console.log("pasta menu");
    root.innerHTML = `
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
<div class="boxForm" style="padding: 5px;width: fit-content;">
              <input type="text" class="txtInput" id="enter_item_idname" placeholder="Search">
              <button class="listChangeButton" onclick="searchItembtn('pasta')"><i class="bi bi-search"></i></button>
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
                <p>Welcome to the MOS Burgers Admin Dashboard – your central hub for managing products, orders, and customer data. Streamline operations, monitor performance, and ensure every customer enjoys the quality and service that MOS Burgers is known for.</p>
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
    let printPasta = ""
    pastaList.forEach((element) => {
        printPasta += `
      <tr>
          <td  class="tableRow">${element.code}</td>
          <td  class="tableRow">${element.name}</td>
          <td  class="tableRow">${element.price}</td>
          <td  class="tableRow">${element.discount}%</td>
          </tr>
    `
    })

    document.getElementById("pastaList").innerHTML += printPasta;
}
function chickenMenu() {
  //  console.log("chicken menu");
    root.innerHTML = `
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
   <h2 class="title">Chicken</h2>
</div>
<div class="boxForm" style="padding: 5px;width: fit-content;">
              <input type="text" class="txtInput" id="enter_item_idname" placeholder="Search">
              <button class="listChangeButton" onclick="searchItembtn('chicken')"><i class="bi bi-search"></i></button>
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
   <table id="chickenList" style="width: 100%;">

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
               <p>Welcome to the MOS Burgers Admin Dashboard – your central hub for managing products, orders, and customer data. Streamline operations, monitor performance, and ensure every customer enjoys the quality and service that MOS Burgers is known for.</p>
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
    let printChicken = ""
    chickenList.forEach((element) => {
        printChicken += `
     <tr>
         <td  class="tableRow">${element.code}</td>
         <td  class="tableRow">${element.name}</td>
         <td  class="tableRow">${element.price}</td>
         <td  class="tableRow">${element.discount}%</td>
         </tr>
   `
    })

    document.getElementById("chickenList").innerHTML += printChicken;
}
function beveragesMenu() {
  //  console.log("beverages menu");
    root.innerHTML = `
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
   <h2 class="title">Beverages</h2>
</div>
<div class="boxForm" style="padding: 5px;width: fit-content;">
              <input type="text" class="txtInput" id="enter_item_idname" placeholder="Search">
              <button class="listChangeButton" onclick="searchItembtn('beverages')"><i class="bi bi-search"></i></button>
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
   <table id="beverageList" style="width: 100%;">

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
               <p>Welcome to the MOS Burgers Admin Dashboard – your central hub for managing products, orders, and customer data. Streamline operations, monitor performance, and ensure every customer enjoys the quality and service that MOS Burgers is known for.</p>
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
    let printBeverage = ""
    beveragesList.forEach((element) => {
        printBeverage += `
     <tr>
         <td  class="tableRow">${element.code}</td>
         <td  class="tableRow">${element.name}</td>
         <td  class="tableRow">${element.price}</td>
         <td  class="tableRow">${element.discount}%</td>
         </tr>
   `
    })

    document.getElementById("beverageList").innerHTML += printBeverage;

}
let itemCODEnum=0;
function generateItemCODE(){
    return "B1"+itemCODEnum.toString().padStart(3,'0');
    }
function addItem() {
    root.innerHTML = `
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
                    <label for="type">Select Type:</label><br>
                    <select name="Type" id="type">
                        <option value="burger">Burger</option>
                        <option value="submarine">Submarine</option>
                        <option value="fries">Fries</option>
                        <option value="pasta">Pasta</option>
                        <option value="chicken">Chicken</option>
                        <option value="beverages">Beverages</option>
                    </select><br>
                    <label for="item_code">Item Code:</label><br>
                    <h4 id="item_code" class="label"></h4><br>
                    <label for="item_name">Item Name:</label><br>
                    <input type="text" id="item_name" placeholder="Item Name" class="txtInput"><br>
                    <label for="item_price">Price:</label><br>
                    <input type="number" id="item_price" placeholder="Price" class="txtInput"><br>
                    <label for="item_discount">Discount:</label><br>
                    <input type="number" id="item_discount" placeholder="Discount" class="txtInput"><br>
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
                <p>Welcome to the MOS Burgers Admin Dashboard – your central hub for managing products, orders, and customer data. Streamline operations, monitor performance, and ensure every customer enjoys the quality and service that MOS Burgers is known for.</p>
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
    document.getElementById("item_code").innerHTML=generateItemCODE();
}
function addItembtn() {
    let type = document.getElementById("type").value;
    let itemName = document.getElementById("item_name").value;
    let itemPrice = document.getElementById("item_price").value;
    let itemDiscount = document.getElementById("item_discount").value;
     

    let itemDetails = {
        itemtype:type,
        code: generateItemCODE(),
        name: itemName,
        price: itemPrice,
        discount: itemDiscount,
    };
    itemList.push(itemDetails);
    console.log(itemDetails);

    if (type == "burger") {
        console.log("burger");
        burgerList.push(itemDetails);
        console.log(burgerList);
    } else if (type == "submarine") {
        console.log("submarine");
        submarineList.push(itemDetails);
        console.log(submarineList);
    } else if (type == "fries") {
        console.log("fries");
        friesList.push(itemDetails);
        console.log(friesList);
    } else if (type == "pasta") {
        console.log("pasta");
        pastaList.push(itemDetails);
        console.log(pastaList);
    } else if (type == "chicken") {
        console.log("chicken");
        chickenList.push(itemDetails);
        console.log(chickenList);
    } else if (type == "beverages") {
        console.log("beverages");
        beveragesList.push(itemDetails);
        console.log(beveragesList);
    }


    let printItem = ""
    itemList.forEach((element) => {
        printItem = `
     <tr>
         <td  class="tableRow">${element.type}</td>
         <td  class="tableRow">${element.code}</td>
         <td  class="tableRow">${element.name}</td>
         <td  class="tableRow">${element.price}</td>
         <td  class="tableRow">${element.discount}%</td>
         </tr>
   `
    })
    Swal.fire({
        icon: "success",
        title: "Done",
        text: "Item Added!",
      });
    document.getElementById("tableList").innerHTML += printItem;
    itemCODEnum++;
    document.getElementById("item_code").innerHTML=generateItemCODE();
    //    document.getElementById("item_code").value=""
    //    document.getElementById("item_name").value=""
    //    document.getElementById("item_price").value=""
    //    document.getElementById("item_discount").value=""
}
function searchItem(){
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
   <div>
        <h2 class="title">Search Item</h2>
     </div>
     <div class="boxForm">
        <label for="enter_item_idname">Enter Item Code or Name:</label>
        <input type="text"  id="enter_item_idname" class="txtInput" placeholder=" Item Code/Name">
        <button class="listChangeButton" onclick="searchItembtn('all')">Search <i class="bi bi-search"></i></button>
     </div>
     <div class="filterBox col">
        <h5 class="filterBy">Filter By :</h5>
<select name="filterBy" id="filterBy">
    <option value="ByCode">By Code</option>
    <option value="ByAscendingPrice">Price : Lowest to Highest</option>
    <option value="ByDescendingPrice">Price : Highest to Lowest</option>
</select>
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
        <table id="searchedItemList"style="width: 100%;">
    
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
                <p>Welcome to the MOS Burgers Admin Dashboard – your central hub for managing products, orders, and customer data. Streamline operations, monitor performance, and ensure every customer enjoys the quality and service that MOS Burgers is known for.</p>
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
function searchItembtn(type){
let enter_item_idname=document.getElementById("enter_item_idname").value.toLowerCase();
let searchedItem=[];
if(type=='all'){
if(enter_item_idname==""){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill ALL Fields!",
        
      });
}else{
    let filterBy=document.getElementById("filterBy").value;
    if(filterBy=="ByCode"){
searchedItem=itemList.filter(element=>
    element.code.toLowerCase().includes(enter_item_idname)||element.name.toLowerCase().includes(enter_item_idname));

let printfoundItem=searchedItem.map(element=>`
<tr>
         <td  class="tableRow">${element.itemtype}</td>
         <td  class="tableRow">${element.code}</td>
         <td  class="tableRow">${element.name}</td>
         <td  class="tableRow">${element.price}</td>
         <td  class="tableRow">${element.discount}%</td>
         </tr>
`)
document.getElementById("searchedItemList").innerHTML=printfoundItem;
}else if(filterBy=="ByAscendingPrice"){
console.log("ascending");
//===============COMPLETE CODE===============

}else if(filterBy=="ByDescendingPrice"){
    console.log("descending");
    //===============COMPLETE CODE===============
}}}else if(type=='burger'){
    searchedItem=burgerList.filter(element=>
        element.code.toLowerCase().includes(enter_item_idname)||element.name.toLowerCase().includes(enter_item_idname));
    
    let printfoundBurgers=searchedItem.map(element=>`
    <tr>
             <td  class="tableRow">${element.code}</td>
             <td  class="tableRow">${element.name}</td>
             <td  class="tableRow">${element.price}</td>
             <td  class="tableRow">${element.discount}%</td>
             </tr>
    `)
    document.getElementById("burgersList").innerHTML=printfoundBurgers;
    
}else if(type=='submarine'){
    searchedItem=submarineList.filter(element=>
        element.code.toLowerCase().includes(enter_item_idname)||element.name.toLowerCase().includes(enter_item_idname));
    
    let printfoundSubmarines=searchedItem.map(element=>`
    <tr>
             <td  class="tableRow">${element.itemtype}</td>
             <td  class="tableRow">${element.code}</td>
             <td  class="tableRow">${element.name}</td>
             <td  class="tableRow">${element.price}</td>
             <td  class="tableRow">${element.discount}%</td>
             </tr>
    `)
    document.getElementById("submarinelist").innerHTML=printfoundSubmarines;
    }else if(type=='fries'){
        searchedItem=friesList.filter(element=>
            element.code.toLowerCase().includes(enter_item_idname)||element.name.toLowerCase().includes(enter_item_idname));
        
        let printfoundFries=searchedItem.map(element=>`
        <tr>
                 <td  class="tableRow">${element.code}</td>
                 <td  class="tableRow">${element.name}</td>
                 <td  class="tableRow">${element.price}</td>
                 <td  class="tableRow">${element.discount}%</td>
                 </tr>
        `)
        document.getElementById("friesList").innerHTML=printfoundFries;
}else if(type=='pasta'){
    searchedItem=pastaList.filter(element=>
        element.code.toLowerCase().includes(enter_item_idname)||element.name.toLowerCase().includes(enter_item_idname));
    
    let printfoundPasta=searchedItem.map(element=>`
    <tr>
             <td  class="tableRow">${element.code}</td>
             <td  class="tableRow">${element.name}</td>
             <td  class="tableRow">${element.price}</td>
             <td  class="tableRow">${element.discount}%</td>
             </tr>
    `)
    document.getElementById("pastaList").innerHTML=printfoundPasta;    
}else if(type=='chicken'){
    searchedItem=chickenList.filter(element=>
        element.code.toLowerCase().includes(enter_item_idname)||element.name.toLowerCase().includes(enter_item_idname));
    
    let printfoundChicken=searchedItem.map(element=>`
    <tr>
             <td  class="tableRow">${element.code}</td>
             <td  class="tableRow">${element.name}</td>
             <td  class="tableRow">${element.price}</td>
             <td  class="tableRow">${element.discount}%</td>
             </tr>
    `)
    document.getElementById("chickenList").innerHTML=printfoundChicken;  
}else if(type=='beverages'){
    searchedItem=beveragesList.filter(element=>
        element.code.toLowerCase().includes(enter_item_idname)||element.name.toLowerCase().includes(enter_item_idname));
    
    let printfoundBeverages=searchedItem.map(element=>`
    <tr>
             <td  class="tableRow">${element.code}</td>
             <td  class="tableRow">${element.name}</td>
             <td  class="tableRow">${element.price}</td>
             <td  class="tableRow">${element.discount}%</td>
             </tr>
    `)
    document.getElementById("beverageList").innerHTML=printfoundBeverages;  
}
}
let orderIDnum=0;
function manageOrder() {
    root.innerHTML = `
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
                <p>Welcome to the MOS Burgers Admin Dashboard – your central hub for managing products, orders, and customer data. Streamline operations, monitor performance, and ensure every customer enjoys the quality and service that MOS Burgers is known for.</p>
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

function generateOrderID(){
return "ODR"+orderIDnum.toString().padStart(4,'0');
}

function addOrder(){  
    
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
    <h2 class="title">Add Order</h2>
</div>
<div class="boxForm">
    <label for="orderId">Order ID:</label><br>
    <h4 id="orderId" class="label"></h4><br>
    <label for="customerName">Customer Name:</label><br>
    <input type="text" placeholder="Name" id="customerName" class="txtInput"><br>
    <label for="customerId">Customer ID:</label><br>
    <input type="text" placeholder="Phone Number" id="customerId" class="txtInput"><br>
    <label for="item">Item:</label><br>
    <input type="text" placeholder="Item Name" id="item" class="txtInput"><br>
    <label for="quantity">Quantity:</label><br>
    <input type="text" placeholder="Quantity" id="quantity" class="txtInput"><br>
    <label for="amount">Amount:</label><br>
    <h4 id="amount" class="label"></h4><br>
    <label for="discount">Discount:</label><br>
    <h4 id="discount" class="label"></h4><br>
    <h2 class="label">Total:</h2><br>
    <h4 class="label" id="total"></h4><br>
    <button class="listChangeButton" onclick="addOrderbtn()">Add Order</button>
</div>
<div class="tableBox">
    <table style="width: 100%;">
        <tr>
            <td  class="itemsHead">Order ID</td>
            <td  class="itemsHead">CustomerID</td>
            <td  class="itemsHead">Item</td>
            <td  class="itemsHead">Quantity</td>
            <td  class="itemsHead">Amount</td>
        </tr>
    </table>
    <table id="orderList"style="width: 100%;">

    </table>
    </div>
`
document.getElementById("orderId").innerHTML=generateOrderID();
let TOTALAMOUNT=totalAmount();
document.getElementById("amount").value=TOTALAMOUNT;
}
let orderList=[];
let printOrder=""

function addOrderbtn(){
let customerName=document.getElementById("customerName").value;
let customerId=document.getElementById("customerId").value;
let item=document.getElementById("item").value;
let quantity=document.getElementById("quantity").value;
let phoneNumberIsValid=phonenumberValidation(customerId);

if(!phoneNumberIsValid){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Phone Number Invalid!",
        
      });
document.getElementById("customerId").value=""
}else{

 let orderDetails={
    id:generateOrderID(),
    customername:customerName,
    customerid:customerId,
    itemname:item,
    qty:quantity,
    amount:Amount(),
    discount:discount,
    totamount:totalAmount()
 }
 orderList.push(orderDetails);
 console.log(orderList);
 
 orderList.forEach((element) => {
    printOrder = `
 <tr>
     <td  class="tableRow">${element.id}</td>
     <td  class="tableRow">${element.customer}</td>
     <td  class="tableRow">${element.itemname}</td>
     <td  class="tableRow">${element.qty}</td>
     <td  class="tableRow">${element.totamount}</td>
     </tr>
`
})
Swal.fire({
    icon: "success",
    title: "Done",
    text: "Order Added!",
  });
document.getElementById("orderList").innerHTML+=printOrder;
orderIDnum++;
document.getElementById("orderId").innerHTML=generateOrderID();
}}
function totalAmount(amount,discount){
    //COMPLETE CODE===================================
}
function Amount(item,qty){
//COMPLETE CODE==================================================================================================
}
function viewOrders(){
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
        <h2 class="title">View Orders</h2>
    </div>
    <div class="tableBox">
    <table style="width: 100%;">
        <tr>
            <td  class="itemsHead">Order ID</td>
            <td  class="itemsHead">CustomerID</td>
            <td  class="itemsHead">Item</td>
            <td  class="itemsHead">Quantity</td>
            <td  class="itemsHead">Amount</td>
        </tr>
    </table>
    <table id="orderList"style="width: 100%;">

    </table>
    </div>
    ` 
    document.getElementById("orderList").innerHTML+=printOrder;
}
function phonenumberValidation(customerPhonenumber){
    let numberOfDigits=customerPhonenumber.toString().length;
    let firstDigit=customerPhonenumber.toString()[0];
    console.log(firstDigit);
    
if(numberOfDigits!=10 || firstDigit!=0){
    return false;
}
return true;
}