// loop through rainbow and pring color names to page

const printToDom = (divId, toPrint) => {
    document.getElementById(divId).innerHTML += toPrint;
};

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indego', 'violet'];
const neutrals = ['grey', 'brown', 'olive', 'black', 'beige'];

const printRainbow = (colorArr) => {
    for (i = 0; i < colorArr.length; i++) {
        const color = `<li style='color: ${colorArr[i]}'>${colorArr[i]}</li>`; //ewww, in-line styling
        printToDom('rainbow', color);
    } 
};

printRainbow(colors);
printRainbow(neutrals);



// print fname lname in text element

const instructors = [
    {first: "Zoe", last: "Ames"},
    {first: "Callan", last: "Morrison"},
    {first: "Greg", last: "Korte"},
    {first: "Michael", last: "Clarkeeeeeee"},
  ];

  const listInstructors = (staffArr) => {
      for (i = 0; i < staffArr.length; i++) {
          const employee = `<li>${staffArr[i].first} ${staffArr[i].last}</li>`;
          printToDom('nssStaff', employee);
      }
  };

  listInstructors(instructors);