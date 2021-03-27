# ApexSystems
ApexSystems


This project was made with Testcafe and POM, in Visual Studio Code, the structure of the project is as follows:

Data: The ConstantsPuppy.json file is located in this folder, it contains the names of all the puppies that are on the adoption page

Pages: In this folder all the pages are located in different js files.

- CustomerDetails.js: In this file are the selectors of when the payment will be made and methods of the payment methods
- DetailsPuppy.js: In this file you will find the selectors of the puppy detail and the method to press the adopt button    
- puppyList.js: In this file you will find the selectors for the list of puppies and the methods to select the puppy and switch pages    
- ShoppingCart.js: In this file are the adoption cart selectors and the methods to complete the adoption, adopt another puppy and change your mind
    
Test: In this folder is located the file where the test cases are created, the test cases are: adopt a puppy, adopt two puppies, show the cart with the puppy, and adopt 3 puppies,
    calling each of the methods created in the files in the pages folder
