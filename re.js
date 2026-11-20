
let students = JSON.parse(localStorage.getItem("students")) || [];
let edit = -1;

const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const course = document.getElementById("course");
const list = document.getElementById("list");
const btn = document.getElementById("btn");

function saveStudents() {
    localStorage.setItem("students", JSON.stringify(students));
}

form.onsubmit = function(e) {
    e.preventDefault();

    let student = {
        name: name.value,
        email: email.value,
        course: course.value
    };

    if (edit == -1) {
        students.push(student);
    } else {
        students[edit] = student;
        edit = -1;
        btn.textContent = "Add Student";
    }

    saveStudents();
    form.reset();
    showStudents();
};

function showStudents() {
    list.innerHTML = "";

    students.forEach(function(s, i) {
        let row = list.insertRow();

        row.insertCell().textContent = s.name;
        row.insertCell().textContent = s.email;
        row.insertCell().textContent = s.course;

        let action = row.insertCell();

        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";

        editBtn.onclick = function() {
            name.value = s.name;
            email.value = s.email;
            course.value = s.course;
            edit = i;
            btn.textContent = "Update Student";
        };

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.onclick = function() {
            students.splice(i, 1);

            if (edit == i) {
                form.reset();
                edit = -1;
                btn.textContent = "Add Student";
            } else if (edit > i) {
                edit--;
            }

            saveStudents();
            showStudents();
        };

        action.append(editBtn, deleteBtn);
    });
}

showStudents();
