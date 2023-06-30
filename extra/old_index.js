/* function findPage(starting_point, page_count) {
  let start_page = 0;
  let end_page = 0;
  let prev_page = 0;
  let next_page = 0;

  if (page_count > 2) {
    if (starting_point + 1 < page_count) {
      if (starting_point > 2) {
        start_page = starting_point - 1;
        end_page = starting_point + 2;
      } else {
        start_page = 1;
        end_page = starting_point + 2;
      }
    } else {
      start_page = starting_point - 1;
      end_page = page_count;
    }
  } else {
    start_page = 1;
    end_page = page_count;
  }

  if (page_count > starting_point) {
    next_page = starting_point + 1;
  } else {
    next_page = page_count;
  }

  if (starting_point < 1) {
    prev_page = 1;
  } else {
    prev_page = starting_point - 1;
  }

  return [start_page, end_page, prev_page, next_page];
} */

// console.log(findPage(4, 9));
// console.log(findPage(3, 9));
// console.log(findPage(5, 2));

/* // parent.jsx
import Child from './child'
function callBack(param) {
  console.log(param)
}

const Parent = () => <h1>I'm from Parent Component</h1>;
export default Parent;

// child.jsx
const Child = (callBack) => {
  callBack(10);
  return "I'm from Child Component"
}

export default Child; */

// console.log([1, 2, 34, 5].join(""));

// import axios from "axios";

/* const axios = require("axios");
const { response } = require("express");

const axiosInstance = axios.create({
  baseURL: "https://syedamirali.com/php/bangladesh",
}); */

// axios
// .get("https://syedamirali.com/php/bangladesh/divisions.php")
// .then((res) => res.json())
// .then((res) => console.log(res.data));

/* axios
  .get("https://syedamirali.com/php/bangladesh/districts.php")
  .then((response) => {
    const data = response.data;
    // console.log(data);
  });

const fetch = require("node-fetch");

fetch("https://syedamirali.com/php/bangladesh/districts.php")
  .then((res) => res.json())
  .then((data) => console.log(data)); */

/*  









@param if user are in Bangladesh 





*/

// $("#foreigner").click(function () {
//   $("#foreign").prop("checked", true);
//   $("#bangladesh").prop("checked", false);
//   $("#local_user").addClass("!hidden");
//   $("#foreign_user").removeClass("!hidden");
// });

// $("#bangladeshi").click(function () {
//   $("#bangladesh").prop("checked", true);
//   $("#foreign").prop("checked", false);
//   $("#foreign_user").addClass("!hidden");
//   $("#local_user").removeClass("!hidden");
// });

/* function calculateChargingTime(batteryVoltage, chargerVoltage, loadCurrent) {
  // Calculate the charging current (difference between charger voltage and battery voltage)
  const chargingCurrent = chargerVoltage - batteryVoltage;

  // Calculate the charging time (charging current divided by the load current)
  const chargingTime = chargingCurrent / loadCurrent;

  // Return the charging time
  return chargingTime;
}

// Example usage
const batteryVoltage = 7.4; // Battery voltage in volts
const chargerVoltage = 9; // Charger voltage in volts
const loadCurrent = 2; // Load current in amperes

const chargingTime = calculateChargingTime(
  batteryVoltage,
  chargerVoltage,
  loadCurrent
);
console.log(`Estimated charging time: ${chargingTime} hours`); */

console.clear();
function calculateChargingTime(
  batteryVoltage,
  batteryCapacity,
  chargerVoltage
) {
  // Calculate the charging current (difference between charger voltage and battery voltage)
  const chargingCurrent = chargerVoltage - batteryVoltage;

  // Calculate the charging time (battery capacity divided by the charging current)
  const chargingTime = batteryCapacity / chargingCurrent;

  // Return the charging time
  return chargingTime;
}
/* 
// Example usage
const batteryVoltage = 7.4; // Battery voltage in volts
const batteryCapacity = 30; // Battery capacity in Ah
const chargerVoltage = 9; // Charger voltage in volts
const loadCurrent = 2; // Load current in amperes

const chargingTime = calculateChargingTime(
  batteryVoltage,
  batteryCapacity,
  chargerVoltage
);
console.log(`Estimated charging time: ${chargingTime} hours`);
 */

function pageCount(current_page, total_page) {
  let prev_page = current_page - 1;
  let next_page = current_page + 2;

  current_page <= 1 && (prev_page = current_page);
  total_page <= current_page && (next_page = total_page);

  return { prev_page, next_page };
}

// console.log(pageCount(2 /** @param current page */, 2 /** @param total page*/));
/* if (current_page <= 1) {
    prev_page = current_page;
  }

  if (total_page <= current_page) {
    next_page = total_page;
  } */

const data = [
  {
    hidden: "NOTHING",
    checkout_product_id: "11",
    checkout_totla_product_quantity: "1",
  },
  {
    checkout_product_id: "14",

    checkout_totla_product_quantity: "1",
  },
  {
    name: "_token",
    hidden: "NOTHING",
    checkout_product_id: "15",
  },
  {
    name: "_token",
    value: "5SUx82Il9b5aQqgd4mg0oBsN6tbOq8l8OhCNu2uO",
    hidden: "NOTHING",
    checkout_product_id: "12",
  },
  {
    name: "_token",
    value: "5SUx82Il9b5aQqgd4mg0oBsN6tbOq8l8OhCNu2uO",
    hidden: "NOTHING",
    checkout_product_id: "21",
  },
];

// var price = parseInt(prompt("Product Price : "));
// var discount = parseInt(prompt("Enter Discount : "));

function percentage(price, percent) {
  return ((price * 100) / (100 - percent)).toFixed();
}

console.log(percentage(60, 29));
console.log(percentage(80, 25));
console.log(percentage(100, 10));
// console.log(mainPrice);

const percentageWithPrice = (price, percentage) =>
  Math.trunc((price * 100) / (100 - percentage));
console.log(
  /** @param It returns the number from which the discount percentage is subtracted to get the original principal number  */ percentageWithPrice(
    60,
    29
  )
);
console.log(percentageWithPrice(80, 25));
console.log(percentageWithPrice(100, 10));
/** @param Try to use FETCH
 * 
const fetch = require("node-fetch");
fetch("file:///home/SYED_AMIR_ALI/Downloads/download_json_data_table.json")
  .then((response) => response.json())
  .then((data) => console.log(data));
  
  */

/* console.clear();
const fs = require("fs");

let jsonData;
const data = fs.readFile(
  "/home/SYED_AMIR_ALI/Downloads/download_json_data_table.json",
  "utf8",
  function (error, data) {
    if (error) {
      console.log(error);
      return;
    } else {
      jsonData = data;
      // console.log(JSON.parse(data));
      let time_data = {
        offer_start_time: [],
        offer_end_time: [],
      };

      const needed_data = JSON.parse(data)?.filter(
        // (d) => d.offer_starting_time && d.offer_starting_time
        (d) => {
          // console.log(d.offer_starting_time)

          time_data.offer_start_time.push(d.offer_starting_time);
          time_data.offer_end_time.push(d.offer_ending_time);
        }
      );

      console.log(time_data);
      return data;
    }
  }
);

setTimeout(() => {
  // console.log("JSON_DATA", JSON.parse(jsonData));
}, 500);

console.log(new Date("2023-06-22T09:52").toLocaleDateString()); */

function args(...args) {
  return { ...args };
}

console.log(args(10, 20, 30, { Amir: 20 }, "Ataur", "Abir"));
console.clear();

/* function countTrue(array) {
  return array.filter((item) => item).length;
}

console.log(
  countTrue([
    true,
    true,
    false,
    true,
    true,
    false,
    false,
    false,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    true,
    false,
    false,
    false,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    true,
    false,
    false,
    false,
    true,
    false,
    true,
    true,
    true,
  ])
);

console.log(countTrue([false, false])); */

/* function remainder(x, y) {
  if (x % y === 0) {
    return 0;
  } else return x;
}

console.log(remainder(1, 3)); // ➞ 1

console.log(remainder(3, 4)); // ➞ 3

console.log(remainder(-9, 45)); // ➞ -9

console.log(remainder(5, 5)); // ➞ 0 */

function calcAge(age) {
  return age * 24;
}

console.log(calcAge(65));
/* console.clear();
//  (Mon Jun 26 2023 - 4:10:10 PM) => 2023-06-26T10:10:10.013Z
//  (Mon Jun 27 2023 - 4:14:10 PM) => 2023-06-26T18:00:00.000Z

const prev_time = "2023-06-26T10:10:10.013Z";
const next_time = "2023-06-26T18:00:00.000Z";

// console.log(new Date("Mon Jun 27 2023").toISOString());
// console.log(new Date("2023-06-26T10:10:10.013Z").toDateString());

// console.log(Math.abs(new Date(next_time) - new Date(prev_time)));

const diff_time = Math.abs(new Date(next_time) - new Date(prev_time));

// console.log(diff_time / (1000 * 1));
// console.log(Math.ceil(1409.49935 / 60));
// console.log(1175 / 60);

const x = setInterval(() => {
  // console.log(28190);
  console.log(new Date().toLocaleTimeString());
}, 1000);

clearInterval(() => x, 1000);

 */
console.clear();

// 60tk
// 29%
// let y = 100 / 29;
// console.log(85 - y);
// console.log(29 / (1 / 100));
console.clear();
function countDown(seconds) {
  if (seconds > 0) {
    console.log(`${seconds} seconds left now!`);
    console.clear();
    setInterval(() => countDown(seconds - 1), 1000);
  } else {
    console.log(`Time Out!`);
  }
}

countDown(10);

/**
 *  @param Console Test
 * 
 * 
 
// setInterval(() => {
console.log(
  `\nTime Left Now: \n`,
  `get nano_seconds ${get_nano_seconds(mainDate)}\n`,
  `get seconds ${get_seconds(mainDate)}\n`,
  `get minutes ${get_minutes(mainDate)}\n`,
  `get hours ${get_hours(mainDate)}\n`,
  `get days ${get_days(mainDate)}\n`
);
// }, 1000);

// console.log(new Date("2023-06-27T18:00:00.000Z").toLocaleTimeString());
// console.clear();

 */
/* const pvt = new Date("2023-06-26T10:10:10.013Z").toISOString();
const pt = new Date().toISOString();
const date = (param) => new Date(param);
const diff = Math.ceil(Math.abs(date(pt) - date(pvt)));

const get_nano_sec = diff % 1000;
const get_sec = Math.round((diff / 1000) % 60);
const get_min = Math.round((diff / (1000 * 60)) % 60);
const get_hrs = Math.round((diff / (1000 * 60 * 60)) % 60);
const get_day = Math.round((diff / (1000 * 60 * 60 * 60)) % 24);
console.clear();
console.log("Nano Seconds:\t", get_nano_sec);
console.log("Seconds:\t", get_sec);
console.log("Minute:\t", get_min);
console.log("Hours:\t", get_hrs);
console.log("Day:\t", get_day);
 //  class="flex items-center flex-row-reverse justify-center gap-3 p-4" 
*/

/**
 * @param Timer Clear INTERVAL
 *
 */

const get_nano_seconds = (difference) => difference % 1000;
const get_seconds = (difference) => Math.floor((difference / 1000) % 60);
const get_minutes = (difference) => Math.floor((difference / (1000 * 60)) % 60);
const get_hours = (difference) =>
  Math.floor((difference / (1000 * 60 * 60)) % 24);
const get_days = (difference) => Math.floor(difference / (1000 * 60 * 60 * 24));

function renderCountdownTimer() {
  const end = new Date(
    "Wed Jun 28 2023 11:59:00 GMT+0600 (Bangladesh Standard Time)"
  );
  const now = new Date();
  const start = new Date(
    "Wed Jun 28 2023 10:45:00 GMT+0600 (Bangladesh Standard Time)"
  );

  let mainDate = end - start;

  if (mainDate <= 0) {
    clearInterval(intervalID);
    document.getElementById("timer").innerHTML = "Time has ENDED!";
    return;
  }

  /* if (now < start) {
    document.getElementById("timer").innerHTML =
      "Time was started on! " + start;
    // return;
  } else { */

  document.getElementById("timer").innerHTML = `
      <div style="display: flex; flex-direction: row-reverse; align-items: center; justify-content: center; gap:16px;">
        <p>Nano Seconds: <strong>${get_nano_seconds(mainDate)}</strong></p>
        <p>Seconds: <strong>${get_seconds(mainDate)}</strong></p>
        <p>Minutes: <strong>${get_minutes(mainDate)}</strong></p>
        <p>Hours: <strong>${get_hours(mainDate)}</strong></p>
        <p>Days: <strong>${get_days(mainDate)}</strong></p>
      </div>
    `;
}

/* } else {
    document.getElementById("timer").innerHTML = `
    <div style="display: flex; flex-direction: row-reverse; align-items: center; justify-content: center; gap:16px;">
      <p>Nano Seconds: <strong>0</strong></p>
      <p>Seconds: <strong>0</strong></p>
      <p>Minutes: <strong>0</strong></p>
      <p>Hours: <strong>0</strong></p>
      <p>Days: <strong>0</strong></p>
    </div>
  `;
  } */
// }

const intervalID = setInterval(() => renderCountdownTimer(), 1000);

/**
 * @param END TIMER
 *
 */

/* const end = new Date(
      "Wed Jun 30 2023 23:00:00 GMT+0600 (Bangladesh Standard Time)"
    );
    const start = new Date(
      "Wed Jun 28 2023 13:55:00 GMT+0600 (Bangladesh Standard Time)"
    ); */
