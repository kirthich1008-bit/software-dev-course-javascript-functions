/*
===========================================
🤝 Collaborative Coding Challenge: Event Helpers
===========================================

🎯 Objective:
Students will work in small teams to collaboratively design and implement
reusable functions that solve specific tasks. This activity encourages:

- Teamwork
- Critical thinking
- Knowledge sharing
*/

// ============================================
// 🎉 Scenario:
// Your bootcamp is organizing an event to showcase projects.
// Your team will write reusable JavaScript functions to help manage the event.
// Each function must:
// - Use parameters
// - Use return statements
// - Follow the single responsibility principle
// ============================================


// ============================================
// 🧩 Task 1: Generate Attendee Badge
// ============================================
// Create a function that:
// - Takes a name and a role (e.g., "Alice", "speaker")
// - Returns a string in the format: "Name: Alice, Role: Speaker"

// Steps:
// 1. Define the function with two parameters.
// 2. Format the output string properly.
// 3. Capitalize the role if needed.
// 4. Return the result.


// PSEUDOCODE: Task 1:
// 1.create a function, name function as generateeAttendeeBadge and assign two parameter "name , role".
// 2.in function body write
//    1.captilize/uppercase the starting letter of role and rest should be in lowercase.
//    2.write return statment stating what function has to output with its parameter.
// 3.close function body.
// 4.use console to enter String arguments for function parameters.



function generateAttendeeBadge(name, role){
let captalizedRole = role.charAt(0).toUpperCase() + role.slice(1).toLowerCase();
return `Name: ${name} Role: ${captalizedRole}`;
}
console.log(generateAttendeeBadge("Alice", "Speaker"));
console.log(generateAttendeeBadge("Brian", "volunteer"));
console.log(generateAttendeeBadge("Rhea", "tressurer"));




// ============================================
// 🧩 Task 2: Calculate Event Cost
// ============================================
// Create a function that:
// - Takes number of attendees and cost per attendee.
// - Applies a 10% discount if attendees exceed 100.
// - Returns the total cost.

// Steps:
// 1. Multiply attendees by cost.
// 2. Check if attendee count is over 100.
// 3. If so, apply a 10% discount.
// 4. Return the final total.



// PSEDUCODE: Task 2:
// 1. create a function and name its function as calculate event cost and add two parameters attendees and cost per attendee.
// 2.open function body:
     // 1. multiply attendee and costperattendee to know the cost of event :
     // 2. use if loop to check if attendees are more than 100.
     // 3. open if loop body
     // 4. if attendees are more than 100 give them 10% discount and 
     //     write console to display message that discount is applied. and also is no discount is applied.
     // 5. close if loop body
     // 6. write return for total.
     // 7. close the function body.
// 8. write console for calculating event cost enter two parameters which are Number datatype.
// 9. write two consoles which will have attendees more than 100 and other less than 100 to check weather the code is working correctly.




function calculateEventCost(attendees, costperattendee){
    let total = attendees * costperattendee;
    if(attendees > 100){
        total *= 0.90;
        console.log("10% discount applied!");
    }
        else {
            console.log("Sorry no dicounts!");
        }
    
    return total;
}
console.log(calculateEventCost(120, 25));
console.log(calculateEventCost(50, 15));
// ============================================




// 🧩 Task 3: Validate Email
// ============================================
// Create a function that:
// - Takes an email string as input.
// - Returns true if the email contains both "@" and "." characters.
// - Returns false otherwise.

// Steps:
// 1. Check if the string includes both "@" and ".".
// 2. Return true or false accordingly.





// PSEUDOCODE: Task 3:
// 1. create function and name the function as isvalidate because we are using boolean function to validate email and paramter email.
// 2. open function body:
      // 1. return method we  use include method to check whether entered email has "@" and "." and 
      //   use "&&" because bothe of them should be present to retun value as "true" or else it should return "false".
// 3. close function body.
// 4. write cosnsole funtion to check or validate email and also check by adding needed arguments are present or not.




function isValidEmail(email){
    return email.includes("@") && email.includes(".");
}
console.log(isValidEmail("riya@gmail.com"));
console.log(isValidEmail("riyagmailcom"));
console.log(isValidEmail("riya@@gmail.com"));
console.log(isValidEmail("riya@gmail..com"));




// ============================================
// 🧠 Collaborative Steps
// ============================================

// 📌 Design Phase:
// - Brainstorm function requirements: What inputs and outputs are needed?
// - Assign roles within your team:
//   ▸ Pseudocode Writer
//   ▸ Initial Coder
//   ▸ Testers / Debuggers

// 🛠️ Implementation Phase:
// - Write and refine your three functions as a team
// - Use return statements and ensure reusability

// 🧪 Testing Phase:
// - Each member writes test cases for each function
// - Use console.log() to test different inputs and edge cases

// 🎤 Presentation Phase:
// - Share your functions with the class
// - Explain how your team approached the design and testing process

// ✅ Bonus: Can you extend any of the functions to be more flexible or reusable?
