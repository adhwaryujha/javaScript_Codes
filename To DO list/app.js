let input = prompt("ENter your option");
let array = ["Nothing here yet"];
let i = 0;
while (input !== "quit") {
    if (input === "new") {
        if (i === 0)
            array.pop();
        let todo = prompt("Enter your Todo here");
        array.push(`${i + 1}. ${todo}`);
        i++;
    }
    else if (input === "list") {
        console.log("**********************");
        console.log(array);
        console.log("**********************");
    }
    else {
        let j = prompt("Enter the number for todo to be removed:");
        array.splice(j - 1, 1);
    }
    input = prompt("Enter what do you want to do next :");
}

console.log("You quitted the app.....");