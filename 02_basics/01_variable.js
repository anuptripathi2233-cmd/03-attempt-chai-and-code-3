const accountId = 144553
let accountEmail = "anuptripathi2233@gmail.com"
var accountPassword = "12345"
accountCity = "New Delhi"
let accountState;

// accountId = 2 // not allowed

accountEmail = "abc@gmail.com"
accountPassword = "21212"
accountCity = "Mumbai"

console.log("accountId");

/*
prefer not to use var
beacause of issue in block sope and function scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])