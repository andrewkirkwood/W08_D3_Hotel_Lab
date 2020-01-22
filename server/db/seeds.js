use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    firstName: "carlos",
    surname: "montoya",
    email: "carlos@email.com"
  },
  {
    firstName: "John",
    surname: "Smith",
    email: "JS@email.com"
  },
  {
    firstName: "Sam",
    surname: "Johnson",
    email: "SJ@email.com"
  }
])
