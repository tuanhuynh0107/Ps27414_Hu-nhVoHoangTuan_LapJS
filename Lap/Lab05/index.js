let Exercise1 = () => {
    function ThucDay(callback) {
        console.log("b1. Đã ngủ dậy!");
        callback();
      }
      
      function DanhRang(callback) {
        console.log("b2. Đang đánh răng");
        setTimeout(function () {
          console.log("Đã đánh răng xong!");
          callback();
        }, 2000);
      }
      
      function ThayQuanAo(callback) {
        console.log("b3. Đang thay quan ao");
        setTimeout(function () {
          console.log("Đã thay quần áo xong!");
          callback();
        }, 3000);
      }
      
      function DiHoc(callback) {
        console.log("b4. Đang di chuyển...");
        setTimeout(function () {
          console.log("Đã đến trường!");
          callback();
        }, 4000);
      }
      
      function thucHienCacBuoc() {
        ThucDay(() => {
          DanhRang(() => {
            ThayQuanAo(() => {
              DiHoc(() => {
              });
            });
          });
        });
      }
      
      thucHienCacBuoc();
      
} 

Exercise1();


let Exercise2 = () => {
    function ThucDay() {
        return new Promise(resolve => {
          console.log("b1. Đã ngủ dậy!");
          resolve();
        });
      }
      
      function DanhRang() {
        return new Promise(resolve => {
          console.log("b2. Đang đánh răng");
          setTimeout(function () {
            console.log("Đã đánh răng xong!");
            resolve();
          }, 2000);
        });
      }
      
      function ThayQuanAo() {
        return new Promise(resolve => {
          console.log("b3. Đang thay quần áo");
          setTimeout(function () {
            console.log("Đã thay quần áo xong!");
            resolve();
          }, 3000);
        });
      }
      
      function DiHoc() {
        return new Promise(resolve => {
          resolve();
        });
      }
      
      ThucDay()
        .then(() => DanhRang())
        .then(() => ThayQuanAo())
        .then(() => DiHoc())
        .then(() => {
          console.log("b4. Đang di chuyển...");
          return new Promise(resolve => {
            setTimeout(function () {
              console.log("Đã đến trường!");
              resolve();
            }, 4000);
          });
        })
        .catch(error => {
          console.error("Đã xảy ra lỗi: ", error);
        });
      
}

let Exercise3 = () => {
        function promptAsync(question) {
            return new Promise((resolve) => {
            const input = prompt(question);
            resolve(input);
            });
        }
      
        function delay(ms) {
            return new Promise((resolve) => {
            setTimeout(resolve, ms);
            });
        }
      
        async function enterStudentInfo() {
        const studentName = await promptAsync("Nhập họ và tên sinh viên:");
        const courseName = await promptAsync("Nhập tên môn học:");
      
        const grades = {};
      
        async function enterLabGrade(labNumber, weight) {
          const labGrade = await promptAsync(`Nhập điểm Lab ${labNumber}:`);
          grades[`Lab${labNumber}`] = { grade: parseFloat(labGrade), weight };
          await delay(3000); // Chờ 3 giây
        }
      
        await enterLabGrade(1, 10);
        await enterLabGrade(2, 20);
        await enterLabGrade(3, 30);
      
        const finalGrade = await promptAsync("Nhập điểm thi Final:");
        grades.Final = { grade: parseFloat(finalGrade), weight: 40 };
        await delay(3000); // Chờ 3 giây
      
        const averageGrade =
          (grades.Lab1.grade * grades.Lab1.weight +
            grades.Lab2.grade * grades.Lab2.weight +
            grades.Lab3.grade * grades.Lab3.weight +
            grades.Final.grade * grades.Final.weight) /
          100;
      
        let classification;
        if (averageGrade < 5) {
          classification = "Yếu";
        } else if (averageGrade < 7) {
          classification = "Trung Bình Khá";
        } else if (averageGrade < 8.5) {
          classification = "Khá";
        } else {
          classification = "Giỏi";
        }
      
        console.log(`Điểm trung bình của sinh viên ${studentName} môn ${courseName}: ${averageGrade}`);
        console.log(`Học lực: ${classification}`);
      }
      
      enterStudentInfo();
      
}

Exercise3();