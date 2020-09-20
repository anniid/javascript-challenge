// from data.js
var tableData = data;

// get table ref, make sure it is blank first, so that all the data is new instead of added to itself repeatedly
var tbody = d3.select("tbody");

function buildT(data) {
    tbody.html(""); //cleared
    // for each loop through the data, append a row and cells
    data.forEach((drow) => {
        var row = tbody.append("tr");
        Object.values(drow).forEach((dcell)=> {
            var cell = row.append("td");
            cell.text(dcell);
        });
    });
}
buildT(tableData)
//get datetime value from the filter

// was the date entered? filter data using that date
// if date then
    // apply filter to only keep data rows that match the input

    // then rebuild the table using that filter


//attach an event to listen for the form button

//build the table when the page loads

