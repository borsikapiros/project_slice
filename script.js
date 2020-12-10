//todo app, 10 üres mező default + lehet újat hozzáadni, checkbox + text input mező, törlés gomb minden sornál

function pageLoad () {
    // változót létrehozni a root-nak
    let root = document.getElementById("root");

    // eltárolni a default számot másik változóban
    let nrOfItems = 10;

    // div, checkbox, input mező és törlés button egy többsoros változóban (egy sor html struktúrája, ` jellel)
    let todoItem = `
                <div class="todoRow">
                <input type="checkbox">
                <input type="text">
                <button class="deleteBtn">Delete</button>
                </div>
                `;

    // ezt 10x létre kell hozni egy for ciklussal és hozzáadni a felülethez
    for (let i = 0; i < nrOfItems; i++) {
        root.insertAdjacentHTML("beforeend", todoItem);

    }

    // plusz gomb lista végére, vagy utána (afterend)
    root.insertAdjacentHTML("afterend", `
      <button id="add">+</button>
    `);

    // clickkel hozzáadunk egy újabb sort a root elemhez
    function newItem() {
        root.insertAdjacentHTML("beforeend", todoItem);

        // TODO: eseményfigyelőt az új sorokra is (47.)
    }
    document.getElementById("add").addEventListener("click", newItem);

    // querySAll-lal classnév alapján a törlés gombokat kijelölöm és elmentem változóba
    let delBtns = root.querySelectorAll(".deleteBtn");
    console.log(delBtns);

    // for ciklussal ráteszünk mindre click eseményt 
    function removeItem(e) {
        e.target.parentElement.remove();
    }
    for (let index = 0; index < delBtns.length; index++) {
        delBtns[index].addEventListener("click", removeItem);
        
    }

    // hogy jelölöm ki az elemet, aminek a parentjének kitöröljük az outerhtml-jét


}

window.addEventListener("load", pageLoad);