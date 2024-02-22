const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const ageOne = [5, 2, 4, 1, 15, 8, 3,10,20];
const ageTwo = [16, 6, 10, 5, 6, 1, 4];


function testFinal() {
    // CAU 1
    const mergedArray  = [...new Set([...ageOne, ...ageTwo])];
    // Cau 2
    let totalNum = 0;
    const ageFinal = [] ;
    //cách 1
    // for (let num of mergedArray) {
    //     if(num % 2 === 0) {
    //         totalNum += num;
    //     }else {
    //         num = num ** 2;
    //     }

    //     ageFinal.push(num)
    // }
    // cách 2
    mergedArray.map(function(a,b,c) {
        if (a % 2 === 0 ) {
            totalNum += a;
        }
        else {
            a = Math.pow(a,2);
        }
        ageFinal.push(a);
    } )
    // cau 3
    const sortArr =   ageFinal.sort((a,b) => (a - b))

    // cau 4

    const lengthArr = ageOne.length > ageTwo.length ? ageOne : ageTwo;

    // cau 5 
    let totalArr = 0;
    ageFinal.forEach(e => {
        if (e >= 10) {
            totalArr += e;
            // console.log(e,totalArr);
        }
    });
    // cau 6
    
    const result = document.querySelector('.result');

    function handelCreateBtn(callBack) {
        const btnPay = document.createElement("button");
        btnPay.setAttribute("type", "submit")
        btnPay.innerText = "Thanh Toan";
        
        result.appendChild(btnPay);
        result.style.display = "flex";
        result.style.justifyContent  = "center";
        result.style.alignItems  = "center";
        result.style.height  = "100vh";


        btnPay.addEventListener("click", function(e) {
            e.preventDefault();
            const message = createMes("BAN THANH TOAN THANH CONG");
            result.appendChild(message);
            message.addEventListener("click", function() {
                result.removeChild(message); // Remove the message from the result
            });
        })
    }

    function createMes(mess) {
        const messItem = document.createElement("div");
        messItem.setAttribute("class", "mess");
        messItem.innerText = mess;
        return messItem;
    }

    handelCreateBtn(createMes);
    
    
    
    // cau 7 
    const gameEvent = new Map([
        [10,'Ghi bàn'],
        [25,'Thẻ vàng'],
        [40,'Thẻ đỏ'],
        [60,'Ghi bàn'],
        [30,'Ghi bàn'],
        [55,'Thẻ vàng'],
        [80,'Thẻ đỏ'],
        [89,'Thay người'],
        [92,'Ghi bàn']
    ])

    const halves = new Map([
        [1,[]],
        [2,[]]
    ])

    gameEvent.forEach((event,time)=> {
        const half = time <= 45 ? 1 : 2;
        halves.get(half).push({ time, event });
    })
    console.log(halves);
    // Tìm thời gian kết thúc trận đấu
    const endTime = Math.max(...gameEvent.keys());

    // Tính trung bình thời gian giữa các sự kiện
    let totalEventGaps = 0;
    let eventCount = 0;
    let previousEventTime = null;

    gameEvent.forEach((event, time) => {
        if (previousEventTime !== null) {
            totalEventGaps += time - previousEventTime;
            eventCount++;
        }
        previousEventTime = time;
    });

    const averageEventGap = eventCount > 0 ? totalEventGaps / eventCount : 0;

    // console.log("Thời gian kết thúc trận đấu:", endTime, "phút");
    // console.log("Thời gian trung bình giữa các sự kiện:", averageEventGap.toFixed(2), "phút");
    // Cau 9

    class Person {
        constructor(name, address, cccd, phone) {
            this.name = name;
            this.address = address;
            this.cccd = cccd;
            this.phone = phone;
        }
        info() {
            return `Tên tôi là ${this.name} đang sống tại ${this.address}, "${this.cccd}","${this.phone}"`
        }
    }
    
    class User extends Person {
        constructor(name, address, cccd, phone, dateSalary) {
            super(name, address, cccd, phone);
            this.dateSalary = dateSalary;
        }
    
        setNameUser() {
            if (this.name.length < 4) {
                console.log("Vui lòng nhập tên dài hơn 4 kí tự");
            } else {
                console.log("Chào mừng user tham gia hệ thống FPT");
            }
        }
    }
    
    const user = new User("John Doe", "123 Main St", "123-456-7890", "123456789", "2024-02-22");
    console.log(user.info());
    user.setNameUser(); 
    
    // console.log(totalArr);

    // console.log(lengthArr);
    // console.log(mergedArray);
    // console.log(ageFinal);
    // console.log(totalNum);
}

testFinal()