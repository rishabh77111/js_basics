/*VAR-01 Problem Specification
Objective: Convert and display a total number of seconds in standard digital clock format
(HH:MM:SS).
Slabs / Rules:If hours, minutes, or seconds are single digits, they must be padded with a leading zero  (e.g., 5 becomes '05').
Logical Hint:Use division to find hours, and the remainder operator (%) to isolate remaining minutes and seconds. Use .padStart().
Expected Case Scenario:Input: 3665 → Output: '01:01:05' */ 

const prompt = require("prompt-sync")(); // for Node.js input
function timeconvert(totalSeconds){
    let hour=Math.floor(totalSeconds/3600);
    let leftS=totalSeconds%3600;
    let min=Math.floor(leftS/60);
    let sec=leftS%60;

    //add 0

    let hh= hour<10 ? "0"+ hour : ""+ hour;
    let mm= min<10 ? "0"+ min : ""+ min;
    let ss= sec<10 ? "0"+ sec : ""+ sec;

    return `${hh}:${mm}:${ss}`;
}

let input = Number(prompt("Enter total seconds: "));

console.log(timeconvert(input));


/*VAR-02 Problem Specification
Objective:Calculate a customer's total electricity bill based on an tiered unit consumption slab.
Slabs / Rules:Calculate progressively. First 100 units: $1.00/unit. Next 100 units (101-200): $2.00/unit.
Above 200 units: $5.00/unit.
Logical Hint:Do not charge the maximum tier rate for all units. Process the computation progressively
slab-by-slab.
Expected Case Scenario:Input: 250 units → Calculation: (100 * 1) + (100 * 2) + (50 * 5) → Output: $550 */

const prompt=require("prompt-sync")();
function bill(input){
    tsum=0;
    if(input<=100){
        tsum=input*1;
    }
    else if(input>100 && input<=200){
        tsum=100*1+(input-100)*2;
    }
    else{
         tsum=100*1+(100*2)+(input-200)*5;
    }

    return `${tsum}`
};

let input = Number(prompt("Enter units: "));
console.log(bill(input));


/*VAR-03 Problem Specification
Objective:Split a total amount evenly among N friends and display the individual share along with
          the remaining leftover change.
Slabs / Rules:Individual shares must be flat integers (no cents). Leftover remainder change must be
              calculated and stored as a standalone value.
Logical Hint:Utilize Math.floor() to compute the clean integer split, and the modulo operator (%) to
             capture the exact remainder.
Expected Case Scenario:Input: Total = $100, Friends = 3 → Output: Each pays $33, Remainder = $1 */

const prompt=require("prompt-sync")();
let input = Number(prompt("Enter N: "));
let total=Number(prompt("Enter Total: "));

function split(input,total){
  let rs=Math.floor(total/input);
  let rem=total%input;
  console.log(`$${rs}`);
  console.log(`$${rem}`);
}
split(input,total);


/*VAR-04 Problem Specification
Objective:(DOB) string.
Slabs / Rules:Calculate a person's exact current age dynamically given their complete Date of Birth
              Your logic must accurately account for whether the individual's birthday has already
              happened or has yet to happen in the current calendar year.
Logical Hint:Instantiating 'new Date()' gives you access to the modern system calendar. Compare
             years, then adjust based on months and days.
Expected Case Scenario:
Input: '1995-12-15' (Assuming current date is June 2026) → Output: 30 (Since Dec
        15 hasn't occurred yet in 2026)
 */




/*
VAR-05 Problem Specification
Objective: Compute the final total checkout amount given the base price of an item and its active
           discount percentage.
Slabs / Rules:currency cents.
Logical Hint:The final output must be rounded to exactly two decimal places representing financial
Calculate the discount fraction via (price * discount / 100). Use the primitive number utility
.toFixed(2) to secure precision.
Expected Case Scenario:Input: Price = $125.50, Discount = 15% → Output: $106.68

 */

const prompt=require("prompt-sync")();
let base = Number(prompt("Enter base: $ "));
let discount=Number(prompt("Enter discount: $ "));
function final(base,discount){
   let dis=(base*discount)/100;
   let res=base-dis;
   console.log(`$${res.toFixed(2)}`);
};

final(base,discount);

/*VAR-06 Problem Specification
Objective:Calculate an employee's total weekly payroll salary including overtime rules based on
          hours worked and baseline hourly pay.
Slabs / Rules:Regular hours threshold is capped at 40 hours/week. Any hours worked over 40 are
              overtime, compensated at 1.5 times the standard rate.
Logical Hint:Use an if-else structural check. Isolate regular hours from overtime hours before
             multiplying by their respective rates.

Expected Case Scenario:Input: Hours worked = 45, Rate = $20/hr → Calculation: (40 * 20) + (5 * 30) →
                       Output: $950                                              */

const prompt=require("prompt-sync")();
let work=Number(prompt("Enter hours worked: "));
let baselinepay=Number(prompt("Enter baseline pay: "));
function pay(work,baselinepay){
    let threshold=40;
    if(work<=40){
        let money= 40*baselinepay;
         return `$${money}`;
    }
    else{
        let money=(work-40)*1.5*baselinepay +40*baselinepay;
        return `$${money}`;
    }
}
console.log(pay(work,baselinepay));

/*VAR-07 Problem Specification
Objective:Convert a large pool of raw days cleanly into equivalent counts of whole Years, Months,
          and remaining Days.
Slabs / Rules:30 days = 1 month.
              Logical Hint:Assume fixed standard chronological baselines: exactly 365 days = 1 year, and exactly
              Perform successive division and remainder operations. Strip years first, then compute
              months from the remainder, then remaining days.
              Expected Case Scenario:
Input: 400 days → Output: 1 Year, 1 Month, and 5 Days*/
