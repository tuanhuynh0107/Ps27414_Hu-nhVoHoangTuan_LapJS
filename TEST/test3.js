const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let arr =[3,5,7,2,6,7,8];


// cau 1
function countArr(arr) {
    let total = 0;
    arr.map(item => item % 2 === 0 ? total += item : total += 0 )
    // console.log(total);
}
countArr(arr);
// cau 2
let newArr2 = arr.map(item => item % 2 === 0 ? item * item : item)
// console.log(newArr2);

// cau 3
let sortArr = arr.sort((a,b) => a - b);
let sortArrTT = [...new Set([...arr])]
// console.log(sortArrTT);

// cau 4

function fetchDataFromAPI(api,callBack) {
    fetch(api)
      .then((response) => {
        return response.json();
      })
      .then(callBack)
      .catch(error => console.error('Lỗi:', error));
}
const api = "https://fakestoreapi.com/products?limit=10"
fetchDataFromAPI(api, function name(products) {
    // console.log(products);
})

// cau 5

function totalQtyCatagory(products){
    let qty = 0;
    const newPrd = products.map(item => item.category === "jewelery" ? item : null).filter(item => item !== null)
    // console.log(newPrd);

    function productsDiscount(newPrd) {
        const prddis = products.map(item => {
            if (item.rating.rate > 3) {
                return { ...item, discount: "20%" }; 
            } else {
                return item; 
            }
            
        } )

// cau 4
        function showPrd(prddis) {
            const itemView = $(".result")

            let htmls = prddis.map((item) =>  `
            <tr>
                <td> ${item.title}</td>
                <td><img src="${item.image}" alt="hình sản phẩm" style = "width: 100px; height: 150px;"></td>
                <td><span>${item.price}" </span></td>
                <td><span style="width:350px;">${item.description}" </span></td>
            </tr>
               
            `);

            itemView.innerHTML = htmls;
        }
        showPrd(prddis);
    }

    productsDiscount(newPrd);
}



fetchDataFromAPI(api,totalQtyCatagory)


// cau 8 


class Person {
    constructor(name,age) {
        this.name = name
        this.age = age
    }

    info() {
        return `
            Tên tôi là ${this.name} hiện nay ${this.age}
        `
    }
}

class Employe extends Person {
    constructor(name,age,salary) {
        super(name,age)
        this.salary = salary
    }

    getTax() {
        if(this.salary > 1000) {
            console.log("Số tiền thuế cần đóng " + this.salary * 0.1);
        }else {
            console.log("Số tiền thuế cần đóng " + this.salary * 0.05);
        }
    }
}

const user = new Employe("Huỳnh Võ Hoàng Tuấn", 18, 1000)

console.log(user.info());

user.getTax();