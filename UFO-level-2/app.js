// from data.js
var tableData = data;

// get table ref, make sure it is blank first, so that all the data is new instead of added to itself repeatedly
var tbody = d3.select("tbody");

function buildT(data) {
    tbody.html(""); //cleared
    // for each loop through the data, append a row and cells
    data.forEach((drow) => {
        var row = tbody.append("tr");
        Object.values(drow).forEach((dcell) => {
            var cell = row.append("td");
            cell.text(dcell);
        });
    });
}
var filters = {}
function updateFilters() {
    d3.event.preventDefault(); //don't refresh when click

    //element, value, id of filter
    var newEl = d3.select(this).select("input");
    var elVal = newEl.property("value");
    var filtID = newEl.attr("id");
    // if filter val changed, add the ID and val to the filters list. else clear the filter from the filters list
    if (elVal) {
        filters[filtID] = elVal;
    }
    else {
        delete filters[filtID]
    }
    filterTable();
}
function filterTable() {
    let filtData = tableData;
    //loop through filters keeping data matching current values
    Object.entries(filters).forEach(([attr, value]) => {
        filtData = filtData.filter(row => row[attr] === value)
    });
    buildT(filtData); //rebuild table
}

//attach an event to listen for changes to any filter
d3.selectAll(".filter").on("change", updateFilters);


//build the table when the page loads
buildT(tableData);