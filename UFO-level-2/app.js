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
function onClick(){
    d3.event.preventDefault(); //don't refresh when click

//get datetime value from the filter
    var date = d3.select("#datetime").property("value");
    let filterData = tableData
// was the date entered? filter data using that date
    if (date) {
    // apply filter to only keep data rows that match the input
        filterData = filterData.filter(row => row.datetime === date);}
    // then rebuild the table using that filter
    buildT(filterData);
    }   
//attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", onClick);


//build the table when the page loads
buildT(tableData);
