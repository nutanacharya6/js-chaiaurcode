const accountId = 144433 
let accountEmail = "nutanacharya1@gmail.com"
var accountPassword = "12345"
accountCity = "Pokhara"

// accountId = 2 not allowed because you cannot change value of const

accountEmail = "nutangoldmedal@gmail.com"
accountPassword = "666666"
accountCity = "ktm"
 
/* 
Prefer not to use var beccause of issue in block scope and functional scope
*/

let accountState;


 console.table ([accountEmail,accountId,accountPassword,accountCity,accountState])
 