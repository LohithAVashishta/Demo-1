
// Function called on lines 91, 146, 201
function displaySelectedValue(locationId, statId, dateId, selectedValue) {
  const dropdownloc = document.getElementById(locationId);
  const dropdownstat = document.getElementById(statId);
  const date = document.getElementById(dateId);
  const selectedvalues = document.getElementById(selectedValue);

  const newValue = document.createElement("div");
  newValue.classList.add(selectedValue);
  newValue.innerHTML = "Location: " + dropdownloc.value + "<br/>" + "Status: " + dropdownstat.value + "<br/> " + "date: " + date.value;


  const removeButton = document.createElement("button");
  removeButton.innerHTML = "Remove";
  removeButton.onclick = function () {
    selectedvalues.removeChild(newValue);
  };

  newValue.appendChild(removeButton);
  selectedvalues.appendChild(newValue);
  event.preventDefault();
}

function displayStations(locationId, selectedValue) {
  const dropdownloc = document.getElementById(locationId);
  const selectedvalues = document.getElementById(selectedValue);

  const newValue = document.createElement("div");
  newValue.classList.add(selectedValue);
  newValue.innerHTML = "Location: " + dropdownloc.value + "<br/>";


  const removeButton = document.createElement("button");
  removeButton.innerHTML = "Remove";
  removeButton.onclick = function () {
    selectedvalues.removeChild(newValue);
  };

  newValue.appendChild(removeButton);
  selectedvalues.appendChild(newValue);
  event.preventDefault();
}


// On lines 55,58, 157, 160, 711, 714, 753, 756, 779, 782, 805, 808, 831, 834, 868, 871, 902, 905
function showHideDivRadio(radioName, dropdownDiv, issueDisplayId) {
  event.preventDefault();
  const name = radioName;
  const firstPart = 'input[name="';
  const lastPart = '"]:checked';
  const t = firstPart + name + lastPart;
  const radio = document.querySelector(t).value;
  const hiddenDiv = document.getElementById(dropdownDiv);
  const hiddenIssues = document.getElementById(issueDisplayId);
  const blockPropertyName = "block";
  if (radio === "NotOK") {
    hiddenDiv.style.display = blockPropertyName;
    hiddenIssues.style.display = blockPropertyName;
  } else {
    hiddenDiv.style.display = "none";
    hiddenIssues.style.display = "none";
  }

}


// On lines 29, 282, 730
function plusbutton(buttonId, secDivId) {
  const plusbutton = document.getElementById(buttonId);
  const hiddenDiv = document.getElementById(secDivId);
  if (hiddenDiv.style.display === "block") {
    hiddenDiv.style.display = "none";
    plusbutton.innerHTML = "<h1>+</h1>"

  } else {
    hiddenDiv.style.display = "block";
    plusbutton.innerHTML = "<h1>-</h1>";
  }
}


// On line 340
function checkboxverify() {
  const nextbutton = document.getElementById("next-button");
  const hideddiv4 = document.getElementById("textforcheckbox");
  const checkboxform = document.getElementById("checkbox-form");
  const checkboxes = checkboxform.querySelectorAll('input[type="checkbox"]');
  var checboxeschecked = 0;

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checboxeschecked++;
    }
  }
  if (checboxeschecked === checkboxes.length) {
    hideddiv4.style.display = "none";
  } else {
    hideddiv4.style.display = "block";
  }
  event.preventDefault();
}


// used on lines 557
function validation(textAreaId, messageID) {
  const input = document.getElementById(textAreaId);
  const message = document.getElementById(messageID);
  const delay = 500;
  const debounce = function (func, wait) {
    let timeout;
    return function () {
      const context = this, args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(context, args);
      }, wait);
    };
  };

  const validate = debounce(function textValidation() {
    const value = input.value;
    // let value=input.value;
    const regex = /^[a-zA-Z0-9 ,.]+$/;

    if (regex.test(value)) {
      message.innerHTML = "valid input";
      message.style.color = "green";
    } else {
      message.innerHTML = "Invalid input";
      message.style.color = "red";
    }
  }, delay);
  input.addEventListener("keypress", validate);


}



// Dynamic input for documents  called on line 243
const docArr = ['Doc1.txt', 'Doc2.txt', 'Doc3.txt', 'Doc4.txt', 'Doc5.txt'];
const cont = document.getElementById('test-container-test');
const cont2 = document.getElementById('section-G2');


const ul = document.createElement('ul');
ul.setAttribute('class', 'list-style-none text-center d-flex flex-wrap p-0');
ul.setAttribute('id', 'listofcheckboxes');

for (i = 0; i <= docArr.length; i++) {
  var li = document.createElement('li');
  li.setAttribute('class', 'p-3 col-12 col-sm-6 col-md-5 boxli marjus');
  li.innerHTML = "<input type='checkbox' name='" + docArr[i] + "'><b><label>" + " " + docArr[i] + "</label></b>";
  ul.appendChild(li);
}
li.innerHTML = '<button id="next-button" onclick="checkboxverify()">Confirm</button>';
cont.appendChild(ul);
cont2.appendChild(ul);











// Dynamic inputs for archival, called on line 243
const archArr = ['NSOP-2', 'NSOP-4', 'NSDAQ-1', 'NSDAQ-2'];
const archCont = document.getElementById('archival-container');

const ul1 = document.createElement('ul');
ul1.setAttribute('class', 'list-style-none text-center d-flex flex-wrap p-8');

for (i = 0; i < archArr.length; i++) {
  var li = document.createElement('li');
  li.setAttribute('class', 'p-3 col-12 col-sm-6 col-md-3 boxli mar-rt-5 marjus');
  li.innerHTML='<b><label for=' + archArr[i] + '>' + archArr[i] + ':</label></b> <select id=' + archArr[i] + 'required> <option value="" disabled selected>status</option> <option value="Ok"> OK</option> <option value="Not Ok"> Not OK</option> </select><input type="text" id="' + archArr[i] + '" name="secB3" style="width:70px" placeholder="Size">';
  ul1.appendChild(li);
}
archCont.appendChild(ul1);


// Dynamic input for Health of all chains,  called on line 243
const healthArr = ['TWSTFT offset ITS-A', 'TWSTFT offset ITS-B', 'TWSTFT offset ITS-C'];
const healthCont = document.getElementById('C4-health');

const ul2 = document.createElement('ul');
ul2.setAttribute('class', 'list-style-none text-center d-flex flex-wrap mar-rt-5 marjus');

for (var i = 0; i < healthArr.length; i++) {
  var li = document.createElement('li');
  li.setAttribute('class', 'p-3 col-12 col-sm-6 col-md-3 boxli');
  li.innerHTML = '<b><label>' + '' + healthArr[i] + ': </label></b> <input type="text" name="' + healthArr[i] + '">';
  ul2.appendChild(li);
}
healthCont.appendChild(ul2);


// Dynamic input for Offsets, called on line 243
const GNSSArr = ['ITSA-GNSS', 'ITSB-GNSS', 'ITSC-GNSS', 'VREMYA-A', 'VREMYA-B', 'ITS-INC2']
const offsetCont = document.getElementById('C5-GNSS');

const ul3 = document.createElement('ul');
ul3.setAttribute('class', 'list-style-none text-center d-flex flex-wrap marjus');
ul3.setAttribute('id', 'listOfChainHealths');


for (var i = 0; i < GNSSArr.length; i++) {
  var li = document.createElement('li');
  li.setAttribute('class', 'p-3 col-12 col-sm-6 col-md-4 boxli ');
  li.innerHTML = "<b><label>" + " " + GNSSArr[i] + ": </label></b> <input type='text' name='" + GNSSArr[i] + "'>";
  ul3.appendChild(li);
}
offsetCont.appendChild(ul3);


//  called on line 243
function dynamicTable(tableid) {
  const table = document.getElementById(tableid);
  const satellites = ["SAT02", "SAT03", "SAT06", "SAT09"];
  const servers = ["", "INC1NSOP2", "INC1NSOP4", "INC2NSOP1", "INC2NSOP2"];

  let tableHTML = "";
  for (var i = 0; i <= satellites.length; i++) {
    tableHTML += "<tr>";
    for (var j = 0; j < servers.length; j++) {
      if (i == 0) {
        tableHTML += `<th>${servers[j]}</th>`;
      }
      else if (j == 0) {
        tableHTML += `<th>${satellites[i - 1]}</th>`;
      }
      else {
        tableHTML += `<td><input type="text"/></td>`;
      }
    }
    tableHTML += "</tr>";

  }
  table.innerHTML = tableHTML;
}


//  called on line 243
function dynamicTableUserPosition(tableid) {
  const table = document.getElementById(tableid);
  const locations = ["LCK", "BLR"];
  const servers = ["", "B5: INC1NSOP2", "B6: INC1NSOP4", "B7: INC2NSOP1", "B8: INC2NSOP2"];

  let tableHTML = "";
  for (var i = 0; i <= locations.length; i++) {
    tableHTML += "<tr>";
    for (var j = 0; j < servers.length; j++) {
      if (i == 0) {
        tableHTML += `<th>${servers[j]}</th>`;
      }
      else if (j == 0) {
        tableHTML += `<th>${locations[i - 1]}</th>`;
      }
      else {
        tableHTML += `<td><input type="text"/></td>`;
      }
    }
    tableHTML += "</tr>";

  }
  table.innerHTML = tableHTML;
}


// Dynamic input for section D1
// Need to correct the radio buttons and need to add text fields when clicked not ok
function dyanmicSchemacs(schemacsId) {
const schemacsArr = ["Monit Status", "INC1-CS5", "INC1-CS6", "INC1-CS7", "INC1-CS8", "INC2-CS5", "INC2-CS6", "INC2-CS7", "INC2-CS8"];
const schemacsCont = document.getElementById(schemacsId);

const ul = document.createElement('ul');
ul.setAttribute('class', 'list-style-none text-center d-flex flex-wrap marjus');


for (i = 0; i <schemacsArr.length; i++) {
  var li = document.createElement('li');
  li.setAttribute('class', 'p-3 col-12 col-sm-6 col-md-2 boxli');
  li.innerHTML = '<b><label>' + '' + schemacsArr[i] + ': </label></b> <input type="radio" id="' + schemacsArr[i] + '-ok"' + 'name="' + schemacsArr[i] + '" value="OK" onchange="showHideDivRadio("' + schemacsArr[i] + '", "' + schemacsArr[i] + '-hidden-div")"> <label for="OK">OK</label>  <input type="radio" id=' + schemacsArr[i]+ '-notok' + 'name="' + schemacsArr[i] + '" value="NotOK" onchange="showHideDivRadio("' + schemacsArr[i] + '", "' + schemacsArr[i] + '-hidden-div")"> <label for="Not OK">Not OK</label>';
  ul.appendChild(li);
}
schemacsCont.appendChild(ul);

}
