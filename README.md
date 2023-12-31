# Display Fruits in Fruit Fantasy App

## Context

Local fruit vendor Fruit Fantasy in San Francisco sells a variety of fruits to a large number of regular clients. Fruit supply and cost, however, are subject to daily market price fluctuations. To enable clients to observe the fresh fruits that were offered and their costs, the vendor created an app. This will enable them to provide better client service and the best products in terms of quality, advantages, flavor, and taste.​

Design a web page using TypeScript to display the fresh fruits from the database using fetch API. The fruits must be displayed in a way that the content is easy to scan

### Problem Statement

Build a web page using TypeScript which displays the fruits from the json-server using fetch API.​
The fruits must be displayed as cards as shown in the image below:

![](./fruit-fantasy.png)

### Tasks

#### Task 1: Design the Fruit Fantasy web page. 

- Add header in `index.html` file to specify the title "Fresh fruits for the day".​
- Styles can be added inside `public/css/style.css` file​.
- Use onload event within the body tag to call getFruits() function to populate the fruits.
- Add a `<div>` container whose content should be dynamically loaded with the fruits.​
- Give the path as `public/js/app.js` inside the script tag of the `index.html`.​

#### Task 2: Create Fruit object
- Inside `app.js`, create an object type called `Fruit` with the attributes: id, name, image, unit and price: to define the fruit.​

#### Task 3: Retrieve fruits using Fetch API
- Inside `app.js`, define `getFruits()` function to retrieve all the fruits from the JSON server using fetch API `GET` method.
- Handle the response (success and failure) from the Fetch API.​
    - Call the transform() function with the data received for the successful response.​
    - Display an error message on failure.​

#### Task 4: Transform each fruit data 
- Inside `app.js`, define `transform()` function which loops through each fruit data retrieved as response to create a new object called `transformedFruit` that mirrors the object `Fruit` by mapping individual properties.​
- Within the for loop, call `showFruits()` function and pass `transformedFruit` as an argument to it.​

#### Task 5: Display the fruits as cards

- Inside `showFruits()` function, 
    - Declare a constant of HTMLElement type to represent  the `<div>` container element.​
    - Create a string object which contains HTML code to display each fruit as a card using the transformedFruit object. 
        - Use bootstrap class to style the card. ​
        - Additional styling can be provided inside `solution/public/css/style.css`.​
    - Append this string to the `<div>` container using its `innerHTML` property.​


### Font and Color Details
Fonts used:
- 'Times New Roman', 'Times', 'serif' (Heading)

Color codes used:
- Gray (Body background)
- whitesmoke (Heading)

### Execution Steps for the Practice​

Once the solution is completed, following steps must be performed to compile and execute the solution code.
- Open the terminal and give the command `npm run build` to compile `.ts` files and verify the converted files are located inside `solution/public/js` folder.
- Open another terminal and give the command `json-server solution/json/fruits.json` to start the json-server.
- Open the `index.html` file using Live Server and test the expected output.​
