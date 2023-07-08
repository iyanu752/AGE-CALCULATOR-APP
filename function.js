//OUTPUT ELEMENTS

const output_Year = document.getElementById("yearAnswer");
const output_Month = document.getElementById("monthAnswer");
const output_Day = document.getElementById("dayAnswer");

//INPUT ELEMENTS

const btn = document.getElementById("Button");
const input_Day = document.getElementById("days");
const input_Month = document.getElementById("months");
const input_Year = document.getElementById("years");
const form = document.getElementById("Form")


//ERROR ELEMENTS

const error_Day = document.querySelector("errorDay");
const error_Month = document.querySelector("errorMonth");
const error_Year = document.querySelector("errorYear"); 

const date = new Date();

const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

// ERROR HANDLING FOR DAYS IF DAYS IS MORE THAN 31

document.getElementById("days").addEventListener("input", (e) => {
    if (document.getElementById("days").value > 31) {
        document.querySelector(".errorDay").style.display = "block";
        document.querySelector(".dateDay").style.color = "hsl(0, 100%, 67%)";
    } else {
        document.querySelector(".errorDay").style.display = "none";
        document.querySelector(".dateDay").style.color = "hsl(0, 1%, 44%)";
    };

    
});


// ERROR HANDLING FOR MONTHS IF MONTHS IS MORE THAN 12

document.getElementById("months").addEventListener("input", (e) => {
    if (document.getElementById("months").value > 12) {
        document.querySelector(".errorMonth").style.display = "block";
        document.querySelector(".dateMonth").style.color = "hsl(0, 100%, 67%)";
    } else {
        document.querySelector(".errorMonth").style.display = "none";
        document.querySelector(".dateMonth").style.color = "hsl(0, 1%, 44%)";
    };

});

//ERROR HANDLING IF YEAR IS GREATER THAN 2023

document.getElementById("years").addEventListener("input", (e) => {
    if (document.getElementById("years").value > 2023) {
        document.querySelector(".errorYear").style.display = "block";
        document.querySelector(".dateYear").style.color = "hsl(0, 100%, 67%)";
    } else {
        document.querySelector(".errorYear").style.display = "none";
        document.querySelector(".dateYear").style.color = "hsl(0, 1%, 44%)";
    };
});

// ERROR HANDLING IF INPUTS ARE EMPTY WHEN SUBMITTED

document.getElementById("Form").addEventListener("submit", (e) => {
    e.preventDefault();

    if (document.getElementById("days").value.length === 0) {
        document.querySelector(".errorDayTwo").style.display = "block";
    } else {
        document.getElementById("days").addEventListener("input", (e) => {
            document.querySelector(".errorDayTwo").style.display = "none";

        });
        
    };

    if (document.getElementById("months").value.length === 0 ) {
        document.querySelector(".errorMonthTwo").style.display = "block";
    } else {
        document.getElementById("months").addEventListener("input", (e) => {
            document.querySelector(".errorMonthTwo").style.display = "none";
        });
        
    };

    if (document.getElementById("years").value.length === 0 ) {
        document.querySelector(".errorYearTwo").style.display = "block";
    } else {
        document.querySelector(".years").addEventListener("input", (e) => {
            document.querySelector(".errorYearTwo").style.display = "none";
        });
       
    };
}); 

// CALCULATION CODE

document.getElementById("Form").addEventListener("submit", (e) => {
    e.preventDefault();

    document.getElementById("yearAnswer").innerHTML = year - document.getElementById("years").value;
    document.getElementById("monthAnswer").innerHTML = 12 - document.getElementById("months").value;
    document.getElementById("dayAnswer").innerHTML = (year - document.getElementById("years").value) * 365;

});