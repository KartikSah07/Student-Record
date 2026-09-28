const students = [
            {
                name: "Kartik",
                marks: 85,
                class: "B.Tech CSE",
                address: "Jamshedpur"
            },
            {
                name: "Rahul",
                marks: 78,
                class: "B.Tech CSE",
                address: "Ranchi"
            },
            {
                name: "Aman",
                marks: 92,
                class: "B.Tech CSE",
                address: "Patna"
            },
            {
                name: "Priya",
                marks: 88,
                class: "BCA",
                address: "Delhi"
            },
            {
                name: "Riya",
                marks: 75,
                class: "BCA",
                address: "Kolkata"
            },
            {
                name:"Priyanka",
                marks:90,
                class:"BCA",
                address:"Delhi"
            },
            {
                name:"Ajit",
                marks:95,
                class:"B-tech",
                address:"jharkhand"
            },
            {
                name:"Shobha",
                marks:82,
                class:"B.ed",
                address:"Bihar"
            },
            {
                name:"Ankit",
                marks:85,
                class:"BBA",
                address:"Maharastra"
            },
            {
                name:"Aditya",
                marks:90,
                class:"BCA",
                address:"Hyderabad"
            },
            {
                name:"Krishna",
                marks:80,
                class:"BCA",
                address:"Mizoram"
            },
            {
                name:"Bittu",
                marks:87 ,
                class:"Diploma",
                address:"Banaras"
            }
        ];


        
        function displayStudents(studentList) {

            const container = document.getElementById("studentContainer");

            
            container.innerHTML = "";

            studentList.forEach((student) => {

                const card = document.createElement("div");

                card.classList.add("card");

                card.innerHTML = `
                    <h2>${student.name}</h2>
                    <p><strong>Marks:</strong>
                        <span class="marks">${student.marks}</span>
                    </p>
                    <p><strong>Class:</strong> ${student.class}</p>
                    <p><strong>Address:</strong> ${student.address}</p>
                `;

                container.appendChild(card);
            });
        }


        
        displayStudents(students);


        document.getElementById("search").addEventListener("input", function () {

            const searchValue = this.value.toLowerCase();

            
            const filteredStudents = students.filter(student =>
                student.name.toLowerCase().includes(searchValue)||
                student.marks.toString().includes(searchValue)
            );

    
            displayStudents(filteredStudents);
        });