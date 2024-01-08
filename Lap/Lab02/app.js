const $ = document.querySelector.bind(document);

const Exercise1 = () => {
    const exercise1 = $('.Exercise1');
    const countBtn = $('.countBtn');

    countBtn.addEventListener('click', function () {
        const lengthNumber = $('#lengthNumber').value;
        if(lengthNumber == "" ) {
            alert("Bạn nhập vào 1 chuỗi rỗng")
        }else {
            const length = document.createElement('span');
            length.classList.add('length');
            length.textContent = lengthNumber.length;
            exercise1.appendChild(length);
        }
    });
}



const Exercise2 = () => {
  
    const substring = $('.substring');

    substring.addEventListener('click', function () {
        const convertString = $('.convertString').value;
        const numberString = $('.numberString').value;
        if (isNaN(numberString) || numberString <= 0) {
            alert('Vui lòng nhập một số nguyên dương.');
            return;
        }
        var resultString = convertString.substring(0, numberString);
        if (resultString.length < convertString.length) {
            resultString += '...';
        } else {
            resultString += '.';
        }

        $('.result').innerHTML= resultString;
    });
}

const Exercise3 = () => {
    const convertTCLBtn = $('.convertTCLBtn');

    convertTCLBtn.addEventListener('click', function() {
        const inputString = $('.inputString').value;

        if (inputString.trim() == "") {
            alert("Bạn cần nhập một chuỗi")
            return;
        }
        var camelCaseString = inputString.replace(/[^a-zA-Z0-9]/g, ' ').split(' ').map(function (word, index) {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join('');

        $('.result2').innerHTML = camelCaseString;

    })
} 

const Exercise4 = () => {
    const checkEmailBtn = $('.checkEmailBtn');
    checkEmailBtn.addEventListener('click', function() {
        const valueEmail = $('.Email').value;
        var emailRegex = /^[a-z][a-z0-9_\.]{4,31}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/i;
        const resultEmail =  emailRegex.test(valueEmail);
        $('.result3').innerHTML = resultEmail ? "TRUE" : "FALSE";
    })
}

// start
Exercise1();
Exercise2();
Exercise3();
Exercise4();