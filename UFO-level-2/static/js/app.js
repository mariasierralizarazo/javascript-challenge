// from data.js
var tableData = data;
var button = d3.select("#filter-btn");
// Selecting elements fthat will be modified in the HTML code 
var tbody = d3.select("tbody");
var msg = d3.select("#msg_confirm");

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
    var inputElement = d3.select("#parameter_id");
    var category = document.getElementById('category_id');

    // Getting category selected and input
    var dataValue = inputElement.property("value");
    var categoryValue = category.options[category.selectedIndex].innerHTML;

    // Printing the value in console
    console.log(dataValue);
    console.log(categoryValue);

    // Filter initial data acording to the selected category
    if (categoryValue === "Date/Time") {
        var newData = tableData.filter(Table => Table.datetime === dataValue);
    }
    else if (categoryValue === "City") {
        var newData = tableData.filter(Table => Table.city === dataValue);
    }
    else if (categoryValue === "State") {
        var newData = tableData.filter(Table => Table.state === dataValue);
    }
    else if (categoryValue === "Country") {
        var newData = tableData.filter(Table => Table.country === dataValue);
    }
    else {
        var newData = tableData.filter(Table => Table.shape === dataValue);
    }
    // Printing filtered data lenght in the console
    console.log(newData.length);
    
    // Condition if data is found and results printing
    if (newData.length === 0) {
        console.log("No data registered");
        msg.html("No results found.");
    }
    else {
        msg.html(" ");
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
