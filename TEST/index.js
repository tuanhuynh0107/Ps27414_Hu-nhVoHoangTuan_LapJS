const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let arr = ["t", "a", "c", "d", "-", "x", "v", "m", "z"];

// 1.1. Xóa phần tử "-" khỏi mảng và thêm vào " " thay thế
arr = arr.map(item => item === "-" ? " " : item);

// 1.2. In ra màn hình chuỗi in hoa đảo ngược của mảng
let reversedUpperCaseString = arr.map(item => item.toUpperCase()).reverse().join("");
// console.log(reversedUpperCaseString);

// 1.3. Tìm và thay thế chuỗi "object" thành chuỗi "strings"
let replacedArr = arr.map(item => item === "object" ? "strings" : item);

// 1.4. Tạo chuỗi "data structures", sử dụng concat nối 2 chuỗi
let dataStructuresString = "data" + " " + "structures";

// 1.5. Cắt và in ra màn hình "structures" từ chuỗi được nối ở trên
let subString = dataStructuresString.substring(5);
// console.log(subString);

let arr1 = [2,3,4,14,12,35,43,30,23] 

let arr2 = [90,82,19,73,46,20];

// Tạo mảng arr bao gồm arr1 và arr2 biết arr2 nằm ở vị trí thứ 2 trong arr1 (sử dụng toán tử spread)

let newArr = [...arr1.slice(0,2),...arr2,...arr1.slice(2)];

let htmls = "";

// let newDm = 
function handelItem(newArr) {
    newArr.forEach(item => {
            if(item < 20 || item > 70 ) {
                htmls += item + " ";
            }
    })
} 
// handelItem(newArr)
// Kiểm tra số nguyên số trong kkhoarng


function isPrime(num) {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

// Sử dụng toán tử đoạn mạch để in ra các số nguyên tố trong khoảng từ 30 đến 80
function isNguyento(newArr) {
    newArr.forEach(item => isPrime(item) && (htmls += item + " "))
}
// isNguyento(newArr)

// sắp xếp mảng tăng dần hoặc giảm dần

function sortOddAscending(arr,b) {
    // Lọc ra các số lẻ từ mảng arr
    let oddNumbers = arr.filter(item => item % 2 !== 0);
    
    // Sắp xếp các số lẻ theo thứ tự tăng dần hoặc giảm dần


    if( b === "tang") {
        oddNumbers.sort((a, b) => a - b);
        

    }else {
        oddNumbers.sort((a, b) => b - a);
    }

    return oddNumbers;
}

// let newTnag = sortOddAscending(newArr,"giam");
// document.querySelector('.result-1').innerText = htmls;



// KIEM LOI FORM
function handelForm() {
    const itemForm = $('#form-1');
    itemForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // getItem

        let userName = $("#fullName").value;
        let passWord = $("#passWord").value;

        let usernameRegex = /^PS\d{5}$/;
        let passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/;
        let message = (usernameRegex.test(userName) && passwordRegex.test(passWord)) ? "dung" : "sai";

        alert(message);
    })
}


// handelForm();


let course = {
    name: "Nang Cao",
    id: "Web18031"
}

let lesson = course?.lesson?? "Khong co lessson";

// console.log(lesson);

function sortArr(arr) {
    arr.sort((a,b)=> a- b)

    return arr;
}
console.log(sortArr([1,2,3,6,3,5,6]));