// from data.js
var tableData = data;
var button = d3.select("#filter-btn");
// Selecting elements fthat will be modified in the HTML code 
var tbody = d3.select("tbody");
var msg = d3.select("#msg_confirm")

// Loading the complete table in index.html
tableData.forEach((dataReport) => {
    // Create row for saving the data
    var row = tbody.append("tr");
    // Using Object to append every row in the table and show it in the HTML code
    Object.entries(dataReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Button function
button.on("click", function () {
    // Button click confirmation
    console.log("A button was clicked!");
    // Cleaning previous data in the table 
    tbody.html("");
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element with its id
    var inputElement = d3.select("#datetime");
    // Get value
    var dataValue = inputElement.property("value");
    // Printing the value in console
    console.log(dataValue);

    // Filter initial data 
    var newData = tableData.filter(Table => Table.datetime === dataValue);
    // Printing filtered data in the console
    console.log(newData);
    // Condition if data is found and results printing
    if (newData.length === 0) {
        console.log("No data registered");
        msg.html("No results found");
    }
    else {
        // Display new data in the main page 
        newData.forEach((dataReport) => {
            // Create row for saving the data
            var row = tbody.append("tr");
            Object.entries(dataReport).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            });
        });
    }
});
