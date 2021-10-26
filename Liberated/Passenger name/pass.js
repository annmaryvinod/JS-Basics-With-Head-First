function printPassenger(passenger) {
  var message = passenger.name;
  if (passenger.paid) {
    message = message + " has paid";
  } else {
    message = message + " has not paid";
  }
  console.log(message);
  return false;
}
processPassengers(passengers, printPassenger);


process()
