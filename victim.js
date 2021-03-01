document.addEventListener("click", (event) => {
    //event.preventDefault();
    if (event.target.className === "customer-list-name") {
        currentCustomer = event.target.id
        showVictimPage();
    }
})

function showVictimPage() {
    mainElement.innerHTML = createVictimPage()
}

function createVictimPage() {
    return `
    <section id="death-page">
            <div id="death-list">
                <ul>
                    <li class="list-header">Victim List</li>
                    <ul>
                    ${showVictimList()} 
                  
                    </ul>
                </ul>
            </div>
            <div id="victim-form">
                <form id="victim-form-name" class="needs-validation" novalidate>
                    <div class="input-group mb-3">
                        <input id="input-victim" type="text" class="form-control border border-dark"
                            placeholder="victim Name">
                        <div class="input-group-append">
                            <button id="add-victim" class="btn btn-dark" type="button">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
   `
}

function showVictimList() {
    return getVictim().map(victims => {
        return `    
    <li class="victim-info" id="${victims.victimName}">${victims.victimName}
   ${checkStatus(victims)} 
        </li>     
`
    }).join("")
}


function checkStatus(pVictim) {
    if (pVictim.status) {
        return `
<input type="checkbox" class="form-check-input" checked id="${pVictim.victimName}-check"/>
`
    } else {
        return `<input type="checkbox" class="form-check-input"  id="${pVictim.victimName}-check"/>`
    }
}

function getVictim() {
    let victimList = [];
    victimList = JSON.parse(localStorage.getItem(currentCustomer));
    return victimList[0].victim;
}

document.addEventListener("click", (event) => {
    //event.preventDefault();
    if (event.target.id === "add-victim") {
        setVictimList();
        showVictimPage();
    }
})

function setVictimList() {
    let victimNameArea = document.querySelector("#input-victim");
    let victimList = [];
    victimList = JSON.parse(localStorage.getItem(currentCustomer));
    console.log(victimList[0])
    victimList[0].victim.push({
        victimName: victimNameArea.value,
        status: false,
        address: []
    })
    localStorage.setItem(currentCustomer, JSON.stringify(victimList));
    return victimList
}


document.addEventListener("click", (event) => {
    // event.preventDefault();
    if (event.target.className === "victim-info") {
        currentVictim = event.target.id
        mainElement.innerHTML = showAdressPage();
    }
})

function showAdressPage() {
    return `
    <section>
            <div>
                <ul>
                    <li class="list-header">Victim ${currentVictim}'s Address</li>
                    <ul>
                    ${showAdress()} 
                    </ul>
                </ul>
            </div>
            <div id="address-form">
                <form id="address-form-name" class="needs-validation" novalidate>
                    <div class="input-group mb-3">
                        <input id="input-address" type="text" class="form-control border border-dark"
                            placeholder="enter adress">
                        <div class="input-group-append">
                            <button id="add-address" class="btn btn-dark" type="button">Save Adress</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
   `
}

function showAdress() {
    return getVictimAdress().map(address => {
        return `    
    <li class="victim-address" id="${address}">${address}
        </li>
`
    }).join("")
}

function getVictimAdress() {
    let victimList = []
    victimList = JSON.parse(localStorage.getItem(currentCustomer));
    console.log(currentVictim)
    let clickVictim = victimList[0].victim.filter(victim => {
        if (victim.victimName == currentVictim) {
            return victim
        }
    })
    return clickVictim[0].address;
}

document.addEventListener("click", (event) => {
    //event.preventDefault();
    if (event.target.id === "add-address") {
        setVictimAddress();
        mainElement.innerHTML = showAdressPage();
    }
})

function setVictimAddress() {
    let addressArea = document.querySelector("#input-address");
    let addressList = [];
    addressList = JSON.parse(localStorage.getItem(currentCustomer));
    addressList[0].victim.map(vict => {
        if (vict.victimName == currentVictim) {
            vict.address.push(addressArea.value)
            localStorage.setItem(currentCustomer, JSON.stringify(addressList));
        }
    })
    return addressList
}

function setStatus(pEvent, pStatus) {
    let customer = [];
    customer = JSON.parse(localStorage.getItem(currentCustomer));
    customer[0].victim.map(vict => {
        if (vict.victimName + "-check" == pEvent.target.id) {
            vict.status = pStatus
        }
    })
    localStorage.setItem(currentCustomer, JSON.stringify(customer));
}


document.addEventListener('change', (event) => {
    if (event.target.className == "form-check-input") {
        getVictim().map(victims => {
            if (event.target.id == victims.victimName + "-check") {
                if (event.target.checked) {
                    setStatus(event, true)
                } else {
                    setStatus(event, false)
                }
            }
        })
    }
})