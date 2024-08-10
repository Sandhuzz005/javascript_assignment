/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let number_of_days=0;
let days=document.querySelectorAll(".day-selector li");
let totalcost=0;
let clear_button=document.getElementById("clear-button");
let daily_rate=35;
let halfButton=document.getElementById("half");
let full=document.getElementById("full");
let calculated_cost=document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

    // days.forEach(day=>{
    //     day.addEventListener("click",function()
    // {
    //     if (!this.classList.contains("clicked")){
    //         this.classList.add("clciked");
    //         number_of_days++;
    //     }
    //     else{
    //         this.classList.remove("clicked");
    //         number_of_days--;
    //     }
    //     calculatedCost()
    // })
    // })
function applyclickedclass(){
        if (!this.classList.contains("clicked")) 
        {
            this.classList.add("clicked");
            number_of_days++;
        }
        else{
            this.classList.remove("clicked");
            number_of_days--;
        }
    //number_of_days = 0;
    // let chosenItems = document.getElementsByClassName("clicked");
    // for (let i=1;i<=chosenItems.length; i++)
    //     {
    //         number_of_days++;
    //     }
        calculatedCost();
}
for(i=0 ; i<days.length;i++)
{
    days[i].addEventListener("click",applyclickedclass);
}
/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function removeclickedclass(){
    days.forEach(day=>day.classList.remove("clicked"));
    number_of_days=0;
    totalcost=0;
    calculatedCost();
}
clear_button.addEventListener("click",removeclickedclass);
/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
let half_rate = 20
function changehalfrate() {
    daily_rate= half_rate;
    halfButton.classList.add("clicked");
    full.classList.remove("clicked");
    calculatedCost();
}
half.addEventListener("click",changehalfrate)
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function changefullrate(){
    daily_rate=35;
    full.classList.add("clicked");
    half.classList.remove("clicked");
    calculatedCost();
}
full.addEventListener("click",changefullrate)
/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculatedCost(){
    totalcost=daily_rate*number_of_days;
    calculated_cost.innerHTML=totalcost;
}


