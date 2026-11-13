Age Check Application

Project Background and Motivation:
Building on my 10 years of experience in the security industry, I have frequently faced strict legal enforcement challenges, particularly around age verification.
In my current workplace, an officer manning the main entrance or a guest ambassador is required to look at a customer’s ID card, read their birth date, and perform a mental calculation to figure out if they are 18 or older. Doing this calculation manually can be a little confusing due to multiple variables (the month and the year) having an influence on a person’s age. Furthermore, performing such a calculation mentally during busy periods or when dealing with high-pressure environments can increase the chance of mistakes. Failing to catch an underage ID can lead to major legal issues for a venue.
To solve this, I have engineered an app called "Age Check". Age Check is a digital application designed to calculate the age of a person instantly, helping officers to verify the age of a person quickly and in an error-free manner.

Key Features & Operational Logic:
	I have engineered Age Check to make calculating the age of an individual as foolproof as possible by eliminating; 

•	Automated Live Calendar Date: The app looks at the internal clock of the device when it loads. It formats and prints it directly to the display screen so that the security officer has an instant live reference point right in front of them without needing to check their phone or watch.
•	Real-Time Age Calculator: The app allows the user to quickly type the customer's Date of Birth directly into the input box and click the submit panel. The JavaScript code automatically extracts the year, month, and day information to calculate the person's exact age behind the scenes.
•	Automated Entry Compliance Alerts: Once the code figures out the age, it checks to see if the current day and month match the customer's birthday. It then processes the age through validation checks to display clear text prompts on the display panel, so the guard knows what to do:
o	If the customer is under 18, it immediately displays a warning saying: "You are below 18!"
o	If the customer is 18 or older and today matches their birthday and month, it displays a celebratory message saying: "Happy Birthday and Wel Come to the Venue".

o	If the customer is 18 or older on any other day, it displays a standard entry message saying: "Wel Come to the Venue".


Language Used:
	Age Check is an app manufactured using standard frontend web technologies:
•	HTML5: Used to build the main structure and layout of the application, including the data input fields and control buttons.
•	CSS3: Used to design the look of the application, configuring clean text alignment padding and utilizing clear theme colours to give a clean structural hierarchy to the page.
•	JavaScript (ES6): Used to write the actual time math logic behind the scenes, running date calculations, tracking calendar month differences, and managing the conditional click triggers.

Code Architecture
I have styled Age Check using CSS to make sure the interface looks balanced and is easy for an officer to read rapidly at an entrance point:
•	Centralised Alignment Layout: The text components and inputs align cleanly in the absolute centre of the page viewport, reducing eye strain when checking details in rapid succession.
•	Colour Coded Identifiers: Elements are styled with explicit colour selectors, such as orange and red fields, to separate input areas from live text banners cleanly.






JavaScript Logic (index.js)
The script binds click event handlers directly to the browser DOM targets. It performs standard date subtraction routines and an exact day/month comparison to verify age safety boundaries and birthday milestones before displaying the final entry verdict on the screen:


submit.onclick = () =>{
const age = calcuate_age(user_dob.value);
const birth = new Date(user_dob.value);
const today = new Date();
if (age < 18) {
result_age.textContent = 'You are below 18!';
}
else if (age >= 18 &&
birth.getDate()=== today.getDate() &&
birth.getMonth() === today.getMonth() ){
result_age.textContent = 'Happy Birthday and Wel Come to the Venue '
}
else {
result_age.textContent = "Wel Come to the Venue";
}
