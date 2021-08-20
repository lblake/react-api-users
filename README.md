# React Self Study Project: Using an API to Display User Information
I used JSON Placeholder website: https://jsonplaceholder.typicode.com/ 'users' endpoint and axios: https://github.com/axios/axios.
To fetch a list of users data and display their information using React, React Hooks,JSX,CSS and React-Paginate: https://www.npmjs.com/package/react-paginate 
Test where written using React Testing Library and Jest 

# Goals
1: Display a user CSS cards in the homepage for each user, with their details<br>
2: Create a search bar at the top of the page, where you can search for users based on their names, and every time you type something, the the displayed users are filtered based on what you typed you have typed. <br>
3: Only display users name and email on the CSS cards on the homepage. Clicking on a CSS card you should be redirected to a new page where you will display all the information for a user<br>
4: Add pagination to display x number of users per page. Search filtering should still work on each page<br>
5: Add the option for the user to be able to select how many users they want to display per page (use select HTML element) 

# Tests
1: Test if the component UserList renders without errors<br>
2: Test if the word "User Information" exists in the document<br>
3: Test if the api data is displaying the users on the page, by mocking the api data<br>
4: Test if when you enter some text in the searchbar, the function handleChange is called, and check if based on the word search the input to see if it has that value, and also check if in the page any user with that name searched exists<br>


# Installation

install node if not already installed on your computer

After installing node you will need to do the following:

1: Clone the repository

2: After installing node open your IDE or Terminal or Git bash in the cloned directory and run the following command:<br> npm install to install the project dependencies
