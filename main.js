// Saytın başlığını "Salam, Dünya!" olaraq dəyişdirin.
const title = document.querySelector("title");
title.textContent = "Salam, Dünya!";

// Bir HTML faylında id="myParagraph" olan bir paragrafın məzmununu "Yeni məzmun" olaraq dəyişdirin.(Hər iki üsulla)

// const div=document.getElementById("myParagraph")
// div.textContent='Yeni məzmun '
// const div=document.querySelector("#myParagraph")
// div.textContent='Yeni məzmun '

// Bir HTML faylında name=email olan bir inputun dəyərini "admin@gmail.com" olaraq dəyişdirin.
// const input= document.querySelector("input[name=email]")
// input.value='admin@gmail.com'

// Bir HTML faylında cədvəlin içinə işçilərin siyahısını əlavə edin.(Arrayin içindəki bütün proopertylər olmaldır)
const employees = [
  {
    name: "Farman",
    age: 22,
    position: "Frontend | Team Leader",
    salary: 250,
  },
  {
    name: "Subhan",
    age: 22,
    position: "Backend | Team Leader",
    salary: 250,
  },
  {
    name: "Aqil",
    age: 27,
    position: "QA Tester",
    salary: 70,
  },
  {
    name: "Lala",
    age: 18,
    position: "QA Tester",
    salary: 70,
  },
  {
    name: "Oktay",
    age: 12,
    position: "Frontend",
    salary: 160,
  },
];
// const tbody = document.querySelector("#employee-table-body");
// employees.forEach(function (employee) {
//   var trow = "<tr>";
//   for (var key in employee) {
//     trow += "<td>" + employee[key] + "</td>";
//   }
//   tbody.innerHTML += trow;
// });

// Div elementini id-sine görə seçin və ona bir class əlavə edin

// const div = document.querySelector("#text");
// div.setAttribute("class", "texts");
// console.log(div);
// Div elementini class-ın a görə  seçin daha sonra isə onun id-sini tapın
const findId = document.querySelector(".demo");
let a =findId.getAttribute("id"   );

console.log(a);
