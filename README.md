# Wings-React-Slot-Booking

React-Slot-Booking
This is a ReactJS application. Fix the test case errors in the application. The test cases are written in Jest.
Instructions for Viewing the App
For viewing your application, click Preview App
Instruction for Running the Test Cases
Install the prerequisites required for your project by clicking Run > Install
Start writing the code for the files in the src directory.
After writing the code, you can test your project by clicking Run > Test or using the npm test command in the terminal.
Note: Any syntax errors or invalid statements or failures in your test cases will stop generating test report files and result in zero.
Working of the Application
The app consists of three pages and one slot component. The user should be able to select a game, pick their slots, and search the booking details.
----Home Page
It should contain game cards with a 'Book Now' button which routes to the Booking page
It should include a 'Check your booking' button which routes to the Search page
----Booking Page
It should display the selected game and date on the header
There should be a ball icon on the header which should navigate to the home page
When today's date is selected, it should display 'Booking has been closed.Book your slot for [tomorrow's date]'
When the next day is selected, the slots should be displayed along with the 'Book Now' button and input fields to get the name and contact number
When a future date is selected, it should display 'Booking is not opened yet'
On clicking 'Book Now', slots must be booked with an alert message displaying the booking ID.
---Slot Color Code
Slots should be differentiated with three colors, as follows:
Green - Available slot
Blue - Selected slot
Red - Booked slot
---Search Page
'No Booking happened yet' message should be displayed when the booking has not happened.
When slots are booked, the booking details should be listed. The user should be able to search for their booking using the booking ID.
'No Booking Found' should be displayed when the booking ID is not found.