/**Both objects should have the following properties:

.name for the passenger.
.from for where the passenger is flying from.
.to for where the passenger is flying to.
.businessClass boolean value for whether it's in business class (true/false).
.upgrade() method changes the .businessClass property to true or prints a message if false 
(e.g., "Your ticket is already business class!").
After creating these objects, use the .upgrade() method on at least one of them and then log both objects to the conso */

const departTripTicket = {
    name: "Andrei",
    from: "Madrid" ,
    to: "London",
    businessClass: false,
    upgrade (){
        if (departTripTicket.businessClass === false){
            departTripTicket.businessClass = true;
            console.log("Ticket upgraded!");
        } else {
            console.log("Your ticket is already business class!");
        }

    }
}

const returnTripTicket = {
    name: "Andrei",
    from: "Madrid" ,
    to: "London",
    businessClass : false,
    upgrade (){
        if (returnTripTicket.businessClass === false){
            returnTripTicket.businessClass = true;
            console.log("Ticket upgraded!");
        } else {
            console.log("Your ticket is already business class!");
        }

    }
}

returnTripTicket.upgrade();