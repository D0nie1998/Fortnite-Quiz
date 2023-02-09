# Fortnite quiz


![responsive picture](/assets/images/Amiresponsive.png)
<br/>
<br/>

# Table of Contents
1. [Introduction](#introduction)
2. [User Experience](#user-experience-ux)
3. [Main Features](#main-features)
4. [Technologies](#technologies)
5. [Testing](#testing)
6. [Deployment](#deployment)
7. [References](#references)

<br />
<br />

# Introduction & Aims
This is an interactive quiz game where players are tested on their knowledge on the game fortnite through various questions. The game consists of 10 questions. If a player answers a question correctly, they will get 10 points. After completing the game, the user can save their high score and later look back on the top high scores for the game. 

</br>
</br>

## Aims
- To create a site using HTML CSS and JavaScript
- Be responsive on all devices
- To be easy to use
- Be able to catch the eye
- Be fun and memorable
<br />
<br />

# User Experience
## As a first time visitor, I want to:
- Be able to understand the game and navigate through the website it with no problems.
- Be able to get feedback if i answered the question correctly or incorrectly
- Be able to see my progress in the quiz with a progress bar
- Be able to save my username with my score
- Be able to view my high score 
<br />
<br />

# Technologies 
- HTML5 - Hypertext markup language used to give the website its overall structure and semantic value.
- CSS3 - Cascading Style Sheets used to apply consistent styles across all sections of the application.
- JavaScript - JavaScript is a high-level, dynamically typed, interpreted programming language used for creating interactive web pages and developing web applications.
-  Github  - Used to continuously develop and deploy the incremental versions of the application.
- Balsamiq  - Software that i used to create the wireframes i used for this project.
- Google Fonts -  Google Fonts is a collection of free, open-source font families that can be used in web design and typography.
- Canva - Canva is a graphic design platform that allows users to create various types of visual content, 

</br>
</br>

# Testing

## Responsiveness testing
The issue with the website was that it was not displaying correctly when the screen width was set to 1368px. The page would not cover the entire screen, resulting in a partial view of the content and a suboptimal user experience. This problem was due to the website not being designed with responsive design in mind, causing the layout to break at certain screen widths.

![responsiveissue](/assets/images/responsiveissue.png)

</br>
</br>

After investigating the issue, I soon discovered that the problem was with the CSS background-size command. Instead of using only cover, I had used both contain and cover together. Upon removing contain and using only cover, the issue was promptly resolved. The page now fully covers the screen at a width of 1368px, providing a seamless and fully functional user experience.

![responsivesolution](/assets/images/responsesolution.png)


## Multiple-browser testing
To ensure the best possible user experience, I tested the website on multiple browsers including Google Chrome, Mozilla Firefox, Microsoft Edge, and Safari. I was pleased to find that the website displayed correctly on all of these browsers and there were no issues with the responsive design. This rigorous testing process ensured that the website could be accessed and used by a wide range of users, regardless of their preferred browser.

![browsercheck](/assets/images/browsercheck.png)

</br>
</br>

## Validation

### HTML
After completing my HTML code for the website, I decided to run a validation test to ensure that the code was written correctly and adhered to best practices. I visited the W3C HTML Validator and submitted my code for testing. The results showed that I had one error in the index part of the code, where I had forgotten to add the alt attribute to the img command. This was an easy fix and I quickly added the missing alt text. However, the validator did not show any issues with the games, highscore, and end parts of the code, indicating that these sections of the HTML were written correctly. It made me very happy to see that the number of errors was minimal and I was confident that my code would function well and provide an optimal user experience.

![htmltest](/assets/images/htmlerror.png)

### CSS
After successfully fixing the HTML errors, I moved on to validate my CSS code. I visited the W3C CSS Validator and submitted my stylesheet for testing. To my delight, the results showed that there were no errors in the CSS code. This meant that my stylesheet was written correctly and adhered to best practices, which would ensure that the website would look and function as intended. I was relieved and confident that my website would provide an optimal user experience, both in terms of content and aesthetics.

![csstest](/assets/images/csstest.png)


# Deployment
I deployed the site on GitHub pages. The following steps were used to deploy:
1. In the project repository, navigate to the settings tab.
2. Select the pages tab from the left hand menu.
3. Under the source section, in the drop-down menu select the main branch and click save.
4. Once the page has refreshed a ribbon will display indicating the successful deployment of the site and link to the live page.

## Local Deployment
Steps to clone this project from GitHub:
1. In the project repository, navigate to the code button.
2. Select download Zip from the clone menu.
3. Once zip file has been downloaded, unzip the file.
4. Save the file and run it locally

</br>
</br>