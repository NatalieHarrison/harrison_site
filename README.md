# https://www.natalieharrison.org 
## Summary
The purpose of this site is to serve as a site similar to what a resume would display. Through this site, employers will not only be able to see my skills, projects I have worked on but also get to know me and see my personality through the site (colors, design, photos, about me.) The site will also include some tools like the derivative calculator and other tools I create in the future that students can use. 

## Feature List
* The user will be able to click links that will direct them to websites related to work that I have done.
  * Github
  * Ksuid site
  * HTH site
  * LinkedIn
* The user will be able to use the tools created by myself.
  * Derivative calculator
  * Basic calculator
* The user will be able to leave a review on me (unfinished)
  * Will require the user to enter their name, choose a star out of 5 and leave a comment
  * Optional to fill in will be the company the user is coming from 
* Timer (in the works) 
  * Start timer
  * Stop timer
  * Pause timer 
  
  ## Data Required
  * The links will require a href 
  * The tools will need to be imported from my other repositories
  * A database will need to be created to save the information left on the reviews
  
  ## Platform
  * Web application
  
  ## Implementation Technologies
  * Languages: Javascript
  * Framework: React
  * Libraries: Material UI 
  
  ## Users
  * User is the only user role. All features and functionality of the site will be open to all users. 
  ----------------------------------------------------------------------------------------------------------------------------------------------
  # Prototype
<img width="813" alt="Screen Shot 2023-01-11 at 3 40 09 PM" src="https://user-images.githubusercontent.com/86238390/211913110-1a276086-af6e-4e76-aa7c-6ac6fa5ecd4a.png">

  ## Links
  ### Scenarios
  * The user clicks on a link and is taken to the correct website
  * The user clicks on a link and it taken to the wrong website
  * The user clicks the link but it doesn't take the user anywhere
  
  ### Data Required
  * None
  
  ### Actions user can perform in the UI 
  * The user can click on a link 
  
  ### Actions/Reactions the system may perform in response to user action
  * None
  ----------------------------------------------------------------------------
  ## Tools
  ### Scenarios
  * The user can access and use the tools in the way they were intended
  * The user cannot use the tools in the way they were intended

  ### Data Required
  * Import repositories from my personal github
  
  ### Actions user can perform in the UI 
  * The user will be able to use the tools 
  
  ### Actions/Reactions the system may perform in response to user action
  * None
  ----------------------------------------------------------------------------
  ## Reviews (unfinished)
  ### Scenarios
  * The user enters in their name, company, choose a star and leave a comment
  * The user completes a review and their review isn't displayed
  * The user receives an error when they try to submit their review
  * The user receives an error when trying to enter one of the required inputs

  ### Data Required
  * None
  
  ### Actions user can perform in the UI 
  * Can enter information in text boxes
  * Can click on a star out of the 5 stars
  
  ### Actions/Reactions the system may perform in response to user action
  * The system will save the entered information
  * The system will display the entered information on the website for anyone to see
  ----------------------------------------------------------------------------
  ## Timer
  ### Scenarios
  * The user wants to enter numbers into the hours and minutes text fields
  * The user wants to start the timer
  * The user wants to reset the timer
  * The user wants pause the timer
  * The user leaves the hour text field blank but not the minutes (and vice versa)
  * The user tries to start the timer without entering any numbers into the text fields
  * The user enters a letter instead of a number in the text field

 ### Data Required 
 * Hours and minutes user has inputted in the text fields
 
 ### Actions user can perform in the UI
 * The user can enter number in text field boxes
 * The user can click on the button to start the timer
 * The user can click on the button to stop the timer
 * The user can click on the button to pause the timer
  
  ![timer countdown logic](https://github.com/NatalieHarrison/harrison_site/assets/86238390/07d19488-4e83-4669-8203-2bec2a03632e)
 * Logic can be simplified
 * Using code from: https://medium.com/bb-tutorials-and-thoughts/how-to-create-a-countdown-timer-in-react-app-typescript-version-5617abfe44f3
   * Changed the tick function to work better and make logic more understandable.
  ----------------------------------------------------------------------------
  
  
  # Libraries used
  * Material UI - npm install @mui/material @emotion/react @emotion/styled
  * Countdownt Timer - npx create-react-app countdown-timer-react-ts --template typescript

  
  
  

 
  
  
  
