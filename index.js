let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let count = document.getElementById('count');
let total = document.getElementById('total');
let catogry = document.getElementById('catogry');
let submit = document.getElementById('submit');
let discount = document.getElementById('discount')
function getTotal() {

    if (price.value != '') {
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = result;
        total.style.background = '#040'
    } else {
        total.innerHTML = '';
        total.style.background = '#a00d02'

    }

}

let datapro;
if (localStorage.prodect != null) {

    datapro = JSON.parse(localStorage.prodect)
} else {

    datapro = [];
}



submit.onclick = function () {

    let newpro = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        catogry: catogry.value
    };
    datapro.push(newpro);
    localStorage.setItem('prodect', JSON.stringify(datapro));
    console.log(datapro);

    clearData();

    showData();
}




function clearData() {

    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    catogry.value = '';
}


function showData() {

    let table = '';
    for (let i = 0; i < datapro.length; i++) {

        table = ` <tr>
                        <td>${i}</td>
                        <td>${datapro[i].title}</td>
                        <td>${datapro[i].price}</td>
                        <td>${datapro[i].taxes}</td>
                        <td>${datapro[i].ads}</td>
                        <td>${datapro[i].discount}</td>
                        <td>${datapro[i].total}</td>
                        <td>${datapro[i].catogry}</td>
                        <td><button id="updata">Updata</button></td>
                   <td><button id="delete">Delete</button></td>
                    </tr>`
    }



}



function deleteData(i) {
    datapro.splice(i, 1);
    localStorage.prodect = JSON.stringify(datapro);
    showData();



}