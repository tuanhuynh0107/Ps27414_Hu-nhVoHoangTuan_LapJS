        const listStudents = [
                {       
                        id: 1,
                        name: "Huỳnh Võ Hoàng A",
                        age: 18,
                        gender: 1
                },
                {
                        id: 2,
                        name: "Huỳnh Võ Hoàng B",
                        age: 18,
                        gender: 2
                },
                {
                        id: 3,
                        name: "Huỳnh Võ Hoàng C",
                        age: 18,
                        gender: 2
                },
                {
                        id: 4,
                        name: "Huỳnh Võ Hoàng D",
                        age: 18,
                        gender: 1
                },
                
        ];
        const Exercise1 = () => {
                const target = document.querySelector('#target');

                target.onmouseover = function(){
                        target.style.background = "#BF360C";
                }
                target.onmouseout = function(){
                        target.style.background = "#33691E";
                }
        } 

        Exercise1();
        // Bài 2
        const Exercise2 = () => {

                const inputText = document.querySelector('#inputText');
                const h3 = document.querySelector('h3');
                const parent = document.querySelector('.parent');
                const btnAdd = document.querySelector('.addChildren');
                inputText.oninput = function() {
                        h3.textContent =  "Nội dung được nhập là: " + inputText.value;
                }

                btnAdd.onclick = function() {
                        const childrenParent = document.createElement('h4');
                        childrenParent.setAttribute('class',"title")
                        childrenParent.innerText = "FPT POLYTECHNIC";
                        parent.appendChild(childrenParent);

                }
        }


        Exercise2();

        // Bài 3


        const Exercise3 = () => {

                const lists = document.querySelector('.listStudents');
                
                const list = listStudents.map(list => {

                        var gender ="Khác";

                        if(list.gender === 1) {
                                gender = "Nam";
                        }else if(list.gender === 2 ){
                                gender = "Nữ";
                        }
                        return `
                                <li class="list">${list.id} -${list.name} - ${list.age}  - ${gender}</li>
                        
                        `;

                })

                lists.innerHTML = list.join('');
        }

        Exercise3();

        // Bài 4

        const Exercise4 = () => {

                const addBtn = document.querySelector('.addBtn');

                addBtn.onclick = function() {
                const idSv = parseInt(document.querySelector('#id').value);
                const name = document.querySelector('#name').value;
                const age = parseInt(document.querySelector('#age').value);
                const gender = document.querySelector('#gender').value;

                if (id && name && gender) {

                        const genderValue = parseInt(gender, 10);
                        const newStudent = {
                        id: idSv,
                        name: name,
                        age: age,  
                        gender: genderValue
                        };
                        listStudents.push(newStudent);
                        // gọi lại Exercise3 để cập nhật lại giao diện
                        Exercise3();

                } else {

                        console.log('Please fill in all fields.');

                }
                
                }
        
        }


        Exercise4();

        // Bài 5
        const Exercise5 = () => {

                const dateBtn = document.querySelector('.dateBtn');

                dateBtn.onclick = function() {

                        var day = document.getElementById("dayInput").value;
                        var month = document.getElementById("monthInput").value;
                        var year = document.getElementById("yearInput").value;
                
                        
                        var userInput = day + '/' + month + '/' + year;
                
                        var userDate = moment(userInput, "DD/MM/YYYY");
                
                
                        if (userDate.isValid()) {
                
                                document.getElementById("result1").innerText = userDate.format('YYYY-MM-DD');
                                document.getElementById("result2").innerText = userDate.format('DD/MM/YYYY');
                                document.getElementById("result3").innerText = userDate.format('DD.MM.YYYY');
                                document.getElementById("result4").innerText = userDate.format('DD, MMM YYYY');
                                document.getElementById("result5").innerText = userDate.format('DD, MMMM YYYY');

                        } else {

                                alert('không hợp lệ.Đình dạng là: DD/MM/YYYY.');
                                
                        }
                        // Bài 6
                        if (userDate.isValid()) {

                        var dayOfWeek = userDate.format('dddd');
                        document.getElementById("result6").innerText = dayOfWeek;
                        
                        }
                }
        
        }

        Exercise5();