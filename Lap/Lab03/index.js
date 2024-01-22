const $ = document.querySelector.bind(document);
const $$ = document.createElement.bind(document);

let sinhvien = {
  id: 1,
  fullName: "Huỳnh Võ Hoàng Tuấn",
  email: "nht244430@gmail.com",
  avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww",
  address: "Tân Lập 1, Tân Phước, Tiền Giang",
  avgScore: 10,
  subJects: [
    {
      name_Course: "Lập trình web",
      point: 9.5
    },
    {
      name_Course: "reactJs",
      point: 8.0
    },
    {
      name_Course: "JavaScripPlus",
      point: 9.0
    }
  ],

  getAvgScore: function () {
    return this.avgScore;
  },

  setAvgScore: function (point) {
    this.avgScore = point;
  },

  changeAddress: function (newAddress) {
    this.address = newAddress;
  },
  addCourse: function (courseName, coursePoint) {
    this.subJects.push({
      name_Course: courseName,
      point: coursePoint
    });
  }
};

function start() {
  Exercise1();
  Exercise2();
  Exercise3();
}

const Exercise1 = () => {
  console.log("Điểm trung bình ban đầu:", sinhvien.getAvgScore());
  sinhvien.setAvgScore(9.0);
  console.log("Điểm trung bình sau khi cập nhật:", sinhvien.getAvgScore());

  console.log("Địa chỉ ban đầu:", sinhvien.address);
  sinhvien.changeAddress("Hồ Chí MINH việt Nam");
  console.log("Địa chỉ sau khi thay đổi:", sinhvien.address);
}
const Exercise2 = () => {
  const btnShow = $('.showData'); 
  const container = document.querySelector('.container');

  btnShow.addEventListener('click', function (e) {
    e.preventDefault();
    const existingLabel = $('[for="nameSubjects"]');

    if (existingLabel === null) {
      createUi("div", 'label', 'input','input','button');
      renderAndShowSinhVien(); 
    } else {
      alert("Đã thêm");
    }
  });
  function renderAndShowSinhVien() {
    const existingDataSinhVien = $('.dataSinhVien');
  
    if (existingDataSinhVien) {
      // Nếu đã có dataSinhVien thì xóa nó đi rồi mới render lai giao dien
      existingDataSinhVien.remove();
    }
  
    const showSinhVien = `
      <article class="dataSinhVien">
        <h2 class="fullName">${sinhvien.fullName}</h2>
        <p class="email">${sinhvien.email}</p>
        <img src="${sinhvien.avatar}" alt="" class="avatar" >
        <ul>
          <h2>Khóa học</h2>
          ${renderCourse(sinhvien)}
        </ul>
      </article>
    `;
  
    container.insertAdjacentHTML('beforeend', showSinhVien);
  }
  

  function renderCourse(sinhvien) {
    let html = '';
    for (const subject of sinhvien.subJects) {
      html += `<li>${subject.name_Course}-${subject.point}</li>`;
    }
    return html;
  }
  function createUi(wrapper, chidren1, chidren2,chidren3,btnAdd) {
    const newContent = document.createElement(wrapper);
    const newLabel = document.createElement(chidren1);
    const newInput = document.createElement(chidren2);
    const btnAddd = document.createElement(btnAdd); 
    const inputPoint = document.createElement(chidren3); 

    btnAddd.setAttribute("class", "btnAdd");
    inputPoint.setAttribute("placeholder", "Nhập điểm");
    newContent.setAttribute("class", "content");
    newLabel.setAttribute("for", "nameSubjects");
    newInput.setAttribute("id", "nameSubjects");
    newInput.setAttribute("placeholder", "Nhập tên khóa học");

    newLabel.innerText = "Tên khóa học: ";
    btnAddd.innerText = "Thêm";
    newContent.appendChild(newLabel);
    newContent.appendChild(newInput);
    newContent.appendChild(inputPoint);
    newContent.appendChild(btnAddd);
    container.appendChild(newContent);
    btnAddd.addEventListener('click', function () {
      addCourse(newInput,inputPoint);
      renderAndShowSinhVien();
    });
  }
    

    function  addCourse(newInput,inputPoint) {
      const courseName = newInput.value;
      
      const coursePoint =  inputPoint.value;

      if(courseName === " " || coursePoint === "" ) {
        return;
      }
      sinhvien.addCourse(courseName, coursePoint);

      console.log("Khóa học mới đã được thêm:", sinhvien.subJects);
    }

}


const Exercise3 = () => {
  function Student(name, age, address, phone, birthday, subjects) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.phone = phone;
    this.birthday = birthday;
    this.subjects = subjects || [];

    this.addSubject = function (subjectName, teacher, point, year) {
      this.subjects.push({
        name: subjectName,
        teacher: teacher,
        point: point,
        year: year
      });
    };

    this.getAvgScore = function () {
      // Triển khai logic tính avgScore ở đây
      // Lưu ý: Thuộc tính avgScore không được định nghĩa trong mã nguồn gốc
    };

    this.setAvgScore = function (point) {
      this.avgScore = point;
    };

    this.changeAddress = function (newAddress) {
      this.address = newAddress;
    };
  }

  function StudentPoly(name, age, address, phone, birthday, subjects) {
    // Gọi hàm constructor của lớp cha (Student) để khởi tạo các thuộc tính chung
    Student.call(this, name, age, address, phone, birthday, subjects);

    // Thêm phương thức showProfile cho StudentPoly
    this.showProfile = function () {
      const content = $('.bai3');
      // Hiển thị thông tin hồ sơ theo cách cần thiết
      content.innerHTML += `Tên: ${this.name}, Tuổi: ${this.age}, Địa chỉ: ${this.address}, Điện thoại: ${this.phone}, Ngày sinh: ${this.birthday}`;
    };
  }

  // Tạo các thể hiện của StudentPoly
  const FirstPerson = new StudentPoly("huỳnh Võ Hoàng Tuấn", 22, "tân lập Tiền Giang", "332522", "01/01/1999");
  const SecondPerson = new StudentPoly("Jane Doe", 22, "tân lập Tiền Giang", "332522", "05/15/2002");

  // Thêm các môn học cho mỗi người (bạn có thể tùy chỉnh điều này dựa trên nhu cầu của bạn)
  FirstPerson.addSubject("Toán", "tùng", 90, 2022);
  SecondPerson.addSubject("Lịch sử", "Anh", 85, 2021);

  // Hàm xử lý sự kiện khi click vào nút
  const showProfileOnClick = () => {
    // Kiểm tra xem tất cả thông tin bắt buộc có được nhập hay không
    console.log(testInput);
    if (testInput() === false) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    // Gọi phương thức showProfile cho cả hai thể hiện
    FirstPerson.showProfile();
    SecondPerson.showProfile();
  };


  function renderUiEx3() {

    const content = $('.bai3');
    let html = 
    `
      <label for="name1">Tên Sinh viên 1:</label>
      <input type="text" id="name1">
      <label for="age1">Tuổi SV 1:</label>
      <input type="text" id="age1">
      <label for="addRess1">Tuổi SV 1:</label>
      <input type="text" id="addRess1">
      <label for="name2">Tên Sinh viên 1:</label>
      <input type="text" id="name2">
      <label for="age2">Tuổi SV 1:</label>
      <input type="text" id="age2">
      <label for="addRess2">Tuổi SV 1:</label>
      <input type="text" id="addRess2">
      <button class="btnShow">Show Profile</button>
    `;

    content.innerHTML = html;

    const btnShow = $('.btnShow');

    btnShow.addEventListener('click', function() {
      showProfileOnClick();
    })
  }

  function testInput() {
    const content = $('.bai3');
    const name1 =$('#name1').value;
    const name2 =$('#name2').value;
    const age1 =$('#age1').value;
    const age2 =$('#age2').value;
    const addRess1 =$('#addRess1').value;
    const addRess2 =$('#addRess2').value;

    if(name1 === '' || age1 === '' || addRess1 === '' ||name2 === '' || age2 === '' || addRess2 === '') {
      return false;
    }
    content.innerText += `
    Đã nhập:
    Tên sinh viên 1: ${name1} + Tuổi Sính viên 1: ${age1} + Địa chỉ Sính viên 1: ${addRess1} </br> 
    Tên sinh viên 1: ${name2} + Tuổi Sính viên 1: ${age2} + Địa chỉ Sính viên 1: ${addRess2}`

    return true;
  }
  renderUiEx3();
};



start();
