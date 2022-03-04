let user = prompt("Who's there?");

if (user == 'Admin') {
    let password = prompt('Enter password');

    if (password == "TheMaster") {
        console.log("Welcome Master");
    } else if (password == "Cancel") {
        console.log("Cancelled");
    } else {
        console.log("Wrong Password");
    }
} else if (user == 'Cancel') {
    console.log('Cancelled');
} else {
    console.log("I don't know you");
}
