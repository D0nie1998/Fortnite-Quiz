# Fortnite quiz


![responsive picture](/assets/images/amiresponsive.png)

[You can access the live site here!](https://d0nie1998.github.io/Fortnite-Quiz/)
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

# Introduction
Get ready to put your Fortnite knowledge to the test! This engaging quiz game will challenge players with 10 questions that cover a range of topics related to the popular game. Each correct answer will earn players 10 points and with each correct response, you'll climb the leaderboard of high scores. At the end of the quiz, you can save your score and boast about your ranking among other players who have taken on the challenge. Are you ready to see just how much you know about Fortnite?
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

# Main features

## Home page
When designing the home page for the quiz game, I wanted to create a user-friendly and accessible experience for players. I chose to keep the design simple and straightforward with two clear buttons that players can use to start the quiz or view the high scores. I also selected a visually appealing background that creates a welcoming atmosphere for players. The easy-to-use design and attractive background will ensure that players feel comfortable navigating the site and playing the quiz game. I believe that the simplicity and accessibility of the home page will play a critical role in creating a positive and enjoyable user experience for players.

![desktophome](/assets/images/homepage.png)

In addition to the easy-to-use design on desktop, I also made sure that the quiz game was accessible and user-friendly on mobile devices. I tested the game on various mobile devices to ensure that the buttons and background were properly sized and scaled, and that the text was legible. The results showed that the quiz game was easily accessible on mobile devices and provided a seamless user experience for players on-the-go

![phonehome](/assets/images/phonehomepage.png)

## Logo
Every time I look at the Fortnite logo, I can't help but feel a wave of nostalgia wash over me. The iconic design brings back memories of hours spent playing the game with friends and the excitement of each match. Whether I was landing at Tilted Towers or exploring the map, Fortnite always provided a sense of adventure and fun. That's why I love using the logo - it serves as a reminder of those happy times and the joy that the game brought into my life.

![logo](/assets/images/fortnite.png)

## Buttons
When it came time to choose the colors for the buttons on my website, I knew I wanted something that would stand out and be eye-catching. After experimenting with different combinations, I found that the combination of yellow and black was the most appealing and fun. The bright, cheerful yellow adds a touch of playfulness, while the bold black provides a strong contrast that makes the buttons pop. I believe that these colors work well together to create an attractive and user-friendly interface that visitors will enjoy using.

![buttons](/assets/images/buttons.png)

## Hud
When designing the HUD for my game, I knew that visibility was key. That's why I chose a white background - it provides a clean, bright surface that makes the information easy to read. For the progress bar, I wanted something that would look appealing and stylish. Gold was the perfect choice. Its rich, luxurious color gives the progress bar a touch of glamour and adds a touch of elegance to the overall design. 

![hud](/assets/images/hud.png)

## Questions
"In the questions section of my application, I wanted to provide immediate feedback to users on their answers. That's why I decided to use green and red to indicate whether the answer was correct or incorrect. When a user submits a correct answer, the background of the question turns green, providing a clear visual cue that they have succeeded. If the answer is incorrect, the background turns red, letting the user know that they need to try again. This simple but effective design choice makes it easy for users to track their progress and improve their understanding of the material.

![questions](/assets/images/question.png)

![correct](/assets/images/correct.png)

![incorrect](/assets/images/incorrect.png)

## End page
At the end of each game, players are greeted with a message that says "Thanks for playing!" This is a small but important touch that shows appreciation for their time and effort. Along with the message, players are given the option to save their score and username. This feature allows them to track their progress and compete with friends. The option to play again or return home gives players control over their next move, whether they want to jump right back in for another round or take a break. 

![endgame](/assets/images/endgame.png)

## High score page
The high score page of my game is a place for players to see how they stack up against others. It displays each player's score along with their username, making it easy to see who's on top. This page gives players a sense of accomplishment and adds an extra layer of competition to the game. In addition to viewing their scores, players have the option to return home. This simple but important feature provides a convenient way to navigate back to the main menu and continue playing or explore other parts of the game

![highscore](/assets/images/highscore.png)



## Future Development
I believe that having more questions in an online quiz can lead to a deeper understanding of a user's knowledge. When I'm designing a quiz, I always try to strike a balance between the number of questions and their quality. The questions should be relevant, engaging, and thought-provoking, without taking too long to answer.

After completing the initial version of the quiz game, I am now focused on enhancing the user experience. One aspect I am particularly interested in improving is the animation when a player answers a question. I believe that adding some visually appealing animations will not only make the game more enjoyable, but it will also provide feedback to the player about their answer. This can make the experience more engaging and interactive. I plan to research and experiment with different animation styles and techniques to find the best fit for the quiz game. I am excited to see the final result and know that it will take the game to the next level.

</br>
</br>

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

</br>
</br>


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

### JavaScript
To ensure the highest quality of my JavaScript code, I decided to use JSHint, a static code analysis tool that checks for potential errors, inconsistencies, and anti-patterns in my code. I ran JSHint on my JavaScript file and was pleased to see that there were no problems with my code. This meant that my JavaScript was written correctly and adhered to best practices, which would ensure that the website would function as intended. I was confident that my code would provide a seamless user experience and allow users to interact with the website without any issues.

## Error
I encountered an error while trying to use an image from my local folder as the background for my website in Gitpod. Unfortunately, Gitpod didnt support this local files for background images. To overcome this issue, I went back to the original website where I had found the image and used the direct link to it in my CSS. This allowed me to set the image as the background for my website successfully. In my CSS code, I specified the image URL, set the "background-size" to "cover" so that the image covers the entire element, and set the "background-repeat" to "no-repeat" to ensure that the image wouldn't repeat.

## Bugs
I encountered an error in my JavaScript code while working on the username and score validation for my website. The whitespace validator was not functioning consistently, which was causing problems with allowing scores to be entered. After some debugging, I discovered that the issue was with the way the whitespace validator was implemented, and it was allowing scores to be entered even when the username was empty or consisted solely of whitespaces. I was able to fix the issue by making adjustments to the validator so that it would not allow scores to be entered if the username was empty or consisted solely of whitespaces. The solution ensured that the validation was consistent and prevented any errors with entering scores.


## Lighthouse
I used the Chrome extension Lighthouse to test the performance, accessibility, and best practices of my web page. The results were outstanding as Lighthouse gave my page a 100% pass rate in all departments. This showed that the page was well optimized for speed, user experience, and accessibility, which are all important factors for creating a successful website. Lighthouse provided a comprehensive report of the testing, allowing me to identify any potential issues and make improvements where necessary. I was very satisfied with the results and confident that my website was ready to provide a positive user experience to all visitors.

![lighthouse](/assets/images/lighthouse.png)

</br>
</br>


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
Live link is available here [https://d0nie1998.github.io/Fortnite-Quiz/]
</br>
</br>

# References

</br>
</br>

## Images
https://wallpaperaccess.com/full/113027.jpg for the background image
https://commons.wikimedia.org/wiki/File:Fortnite.png for the logo
I used canva to create the cross-platform validation picture

## Quiz
I ued a YouTube page to s learn and it was extremely helpful and made a significant impact on my growth and understanding
https://www.youtube.com/watch?v=LQGTb112N_c

## Mentor
I want to extend a heartfelt thank you to Jubril for all the support and help he provided me throughout the process. Jubril's guidance and encouragement was invaluable, and I am truly grateful for all the time and energy he dedicated to helping me. The confidence he instilled in me allowed me to tackle any challenges that came my way and made the experience all the more enjoyable. I am so appreciative of everything Jubril did for me and will always remember the positive impact he had on my journey. Thank you, Jubril, for being an amazing mentor.

## Code Institute
I just wanted to express my appreciation for the lessons I learned from Code Institute. Your program provided me with a comprehensive education in coding and technology, and I am grateful for the knowledge and skills I acquired.

## Questions
I used these websites to find some challenging questions on Fortnite!
https://www.ultimatequizquestions.com/fortnite-quiz/
https://bigquizthing.com/trivia-questions-ans/fortnite-30-trivia-questions-and-answers/
https://ponly.com/fortnite-trivia-questions/
https://www.beano.com/categories/fortnite-quizzes

