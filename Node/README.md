This application is used to update the sports-court booking data in tha DB(MongoDB).

Collections:
There are two Collections used in this application. The name and the schema for those collections are given below

bookings - _id(ObjectID, Auto generated), bookingId(String, Unique), name(String, should not contain any special characters or numbers), contact(String, should be of length 10 and should contain only numbers), game(String), slot(Object, insdie object it conatains 4 properties -> id(Number), startTime(String), endTime(String),slotStatus(String)), slotDate(String),
id(Number), _v(Auto generated)

gameslots - _id(ObjectID, Auto generated), id(Number), date(String), name(String), slots(Array of objects, contains 9 objects, objects will have the following properties -> _id(ObjectID, Auto generated), id(Number), startTime(String), endTime(String),slotStatus(String)), _v(Auto generated)

The following are the api endponits:

1) /dateUpdate -> This will update the date in the gameslots collection when a new date comes as a request that is not in gameslots date and will update all the slotStatus in the slots object as available by changing it to "btn btn-green".

2) /book -> This will have to save the data comes along with the request in the bookings collection if the slot is available and will have to send slot unavailable when the slot is already been booked. If the slot is booked successfully the slotStatus in slots object will have to update as "btn btn-danger" for the gameslots. 

3) /bookedData -> This route will have to fetch all the booked data from the DB.

4) /gameAndSlot -> This route will have to fetch the game and slot details from the gameslots collection.# redux-saga-FP
