const $ = document.querySelector.bind(document);


function start() {
    Exercise1();
    Exercise2();

    Exercise3();
   
}
const Exercise1 = () => {
    const btnBmi = $('.btnBMI');
    btnBmi.addEventListener('click', function() {
        // lấy dữ liệu từ input
        const heightPerson = $('#Height');
        const weightPerson = $('#Weight');
        // chuyển từ cm sang m
        const heightPersonM = heightPerson.value / 100;
        // tính chỉ số
        
        var bmi = weightPerson.value / (heightPersonM * heightPersonM);

        // gọi hàm phân loại

        const distribute = distributeBMI(bmi);

        alert("Chỉ số BMI: " + bmi.toFixed(2) + " Thuộc loai: " + distribute);
    });


    function distributeBMI(bmi) {
        if (bmi < 18.5) {
            return "Thiếu cân";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            return "Trọng lượng bình thường";
        } else if (bmi >= 25 && bmi <= 29.9) {
            return "Thừa cân";
        } else if (bmi >= 30 && bmi <= 34.9) {
            return "Béo phì cấp độ 1";
        } else if (bmi >= 35 && bmi <= 39.9) {
            return "Béo phì cấp độ 2";
        } else {
            return "Béo phì cấp độ 3";
        }
    }
   
}

const Exercise2 = () => {
    const btnChange = $('.btnChangeColor');

    btnChange.addEventListener('click', function() {
        setTimeout( function() {
            const changeColor = $('.changeColor');
            const hex = randomhex();
            changeColor.style.backgroundColor = hex;
        },1000)
    })
    function randomhex() {
        return '#' + Math.floor(Math.random()*16777215).toString(16);
    }
}

const Exercise3 = () => {
    var mangSinhVien = [];
    const arrange = $('.arrange');
    arrange.addEventListener('click', function() {
        themVaSapXep();
    } );
    function themVaSapXep() {
        var tenSinhVien = document.getElementById("inputSinhVien").value;
        if(tenSinhVien=== "") {
            return false;
        }
        // Thêm tên vào mảng
        mangSinhVien.push(tenSinhVien);

        // Sắp xếp mảng sinh viên theo tên
        mangSinhVien.sort(function(a, b) {
            return a.localeCompare(b);
        });

        // Hiển thị kết quả
        var ketQuaDiv = document.getElementById("ketQua");
        ketQuaDiv.innerHTML = "<p>Danh sách sinh viên sau khi sắp xếp theo tên:</p><ul>";

        for (var i = 0; i < mangSinhVien.length; i++) {
            ketQuaDiv.innerHTML += "<li>" + mangSinhVien[i] + "</li>";
        }

        ketQuaDiv.innerHTML += "</ul>";

        // Xóa nội dung ô nhập liệu
        document.getElementById("inputSinhVien").value = "";
    }
}



start();