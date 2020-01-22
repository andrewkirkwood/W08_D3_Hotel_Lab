use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    firstName: "carlos",
    surname: "montoya",
    email: "carlos@email.com",
    checkedIn: "true"
  },
  {
    firstName: "John",
    surname: "Smith",
    email: "JS@email.com",
    checkedIn: "true"
  },
  {
    firstName: "Sam",
    surname: "Johnson",
    email: "SJ@email.com",
    checkedIn: "false"

  }
])
