//task1
function calcRectangleArea(width, height) {
  if (!Number.isFinite(width) || !Number.isFinite(height)) {
    throw new Error("Please, provide a number value");
  }
  return width * height;
}

try {
  calcRectangleArea("10", 2);
} catch (error) {
  console.log(error);
}

//task2
function checkAge() {
  let age = prompt("Enter your age");
  let error;
  try {
    if (!age.trim()) {
      error = "The field is empty. Please, enter your age";
      throw new Error(error);
    } else if (!Number.isFinite(+age)) {
      error = "Please, enter a number";
      throw new Error(error);
    } else if (+age < 14) {
      error = "You are too young";
      throw new Error(error);
    } else {
      alert("You can watch this movie");
    }
  } catch (error) {
    alert(error.stack);
  }
}

//task3
class MonthException extends Error {
  constructor(message) {
    super(message);
    this.name = "MonthException";
  }
}

function showMonthName(month) {
  if (month > 12 || month < 1) {
    throw new MonthException("Incorrect month number");
  }
  let monthValue = month - 1;
  return new Date(2022, monthValue).toLocaleString("en-US", { month: "long" });
}

try {
  showMonthName(0);
} catch (error) {
  console.log(error.message);
}

//task4
function showUser(id) {
  if (Math.sign(id) === -1) {
    throw new Error(`Error: ID must not be negative: ${id}`);
  }
  return {
    id,
  };
}

function showUsers(ids) {
  let usersId;
  try {
    usersId = ids.map((id) => {
      return showUser(id);
    });
    return usersId;
  } catch (error) {
    console.log(error);
  }
  console.log(usersId);
  if (!usersId) {
    return ids.filter((id) => id >= 0).map((id) => showUser(id));
  }
}
