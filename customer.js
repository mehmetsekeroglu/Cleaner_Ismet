function createCustomerPage() {
    return`
    <section id="customer-page">
            <div id="customer-list">
                <ul>
                    <li class="list-header">Customers
                        <ul>
                        ${createCustomer()}
                        </ul>
                    </li>
                </ul>
            </div>
            <div id="customer-form">
                <form id="customer-form-name" class="needs-validation" novalidate>
                    <div class="input-group mb-3">
                        <input id="input-customer" type="text" class="form-control border border-dark"
                            placeholder="Customer Name">
                        <div class="input-group-append">
                            <button id="add-customer" class="btn btn-dark" type="button">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
   `
}

function showCustomerPage() {
    mainElement.innerHTML = createCustomerPage()
}

function enterTheSystem() {
mainElement.addEventListener("click", function (event) {
    if (event.target.id === "login") {
        showCustomerPage();
    }
})    
}

function setCustomerList() {
    let customerNameArea = document.querySelector("#input-customer");
    let customerList=[];
    customerList.push({ 
            customerName: customerNameArea.value,
            victim: []
    })
    let key = customerList[0].customerName
    localStorage.setItem(key, JSON.stringify(customerList));
    showCustomerPage();
}

function addCustomerHandler() {
    mainElement.addEventListener("click", (event) => {
        //event.preventDefault();
        if (event.target.id === "add-customer") {
            setCustomerList()
        }
    })
}



function addCustomer() {
    let storageCustomerList = [];
    for (let index = 0; index < localStorage.length; index++) {
        let customer = JSON.parse(localStorage.getItem(localStorage.key(index)));
        storageCustomerList.push(customer);
    }
    return storageCustomerList;
}

function createCustomer() {
    return addCustomer().map((customers,i) =>
        customers.map((customer, index) =>
            ` 
            <li id="${customer.customerName}" class="customer-list-name">${customer.customerName} <img width=80 src="https://cdn1.iconfinder.com/data/icons/emoticon-of-avatar-woman/128/09_woman_angry_avatar_emoticon_smiley_people_user-512.png"></img></li>
            
        `)).join("")
}








