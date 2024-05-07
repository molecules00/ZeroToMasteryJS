/* Create a Variable name (favActorFirstName) & store your FA Fname */
/* Create a Variable name (favActorLastName) & store your FA Lname */
/* Create a Variable name (fullname) & concatenate (FA Fname and FA Lname) */
/* Create a Variable name (uppercase) & Capitalize your FA fullname */
/* Create a Variable name (message) & store `My Favorite actor is (FA fullname) & say something `*/
/* Now append this message to the (message variable)  `his best show is Silicon Valley ` */
/* Log the message variable */

let favActorFirstName = "Joaquin";
let favActorLastName = "Phoenix";
let fullname = favActorFirstName + " " + favActorLastName;
let uppercase = fullname.toUpperCase();
let message = `My Favorite is ${fullname} and the i love his movie about the joker `;

message += `and his best show is Joker`;

console.log(fullname);
