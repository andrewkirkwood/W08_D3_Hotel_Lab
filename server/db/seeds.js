use hotel_bookings;
db.dropDatabase();

db.hotel_bookings.insertMany([
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
