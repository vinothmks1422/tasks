const myFamilyMembers = [
    { SNo: 1, firstName: "Shanmugam", lastName: "M K", age: 61, button: "Click" },
    { SNo: 2, firstName: "Lakshmi", lastName: "Shanmugam", age: 52, button: "Click" },
    { SNo: 3, firstName: "Madhubala", lastName: "Shanmugam", age: 29, button: "Click" },
    { SNo: 4, firstName: "Chenchurani", lastName: "Shanmugam", age: 27, button: "Click" },
    { SNo: 5, firstName: "Vinoth", lastName: "Shanmugam", age: 22, button: "Click" },
    { SNo: 6, firstName: "Hariprasanth", lastName: "Shanmugam", age: 19, button: "Click" },
];

// creating the table
const table = document.createElement('TABLE');
document.getElementsByTagName('body')[0].appendChild(table);

// creating the table heading
const table_row1 = document.createElement('TR');
table.appendChild(table_row1);


const heading = ['S.No', 'FIRST NAME', 'LAST NAME', 'AGE', 'FULL NAME'];
for (const a in heading) {
    const table_heading = document.createElement('TH');
    table_row1.appendChild(table_heading);
    table_heading.innerText = heading[a];
}

for (const xyz in myFamilyMembers) {
    const table_row2 = document.createElement('TR');
    table.appendChild(table_row2);
    const data1 = myFamilyMembers[xyz];
    // console.log(data1);
    for (const b in data1) {
        const table_body = document.createElement('TD');
        table_row2.appendChild(table_body);
        table_body.innerText = data1[b];
    }
    // creating the button class
    table_row2.lastElementChild.setAttribute("class", "alert");

    // creating alert
    const Notification = () => {
        alert(data1.firstName + " " + data1.lastName);
    };
    table_row2.lastElementChild.addEventListener("click", Notification);


}
