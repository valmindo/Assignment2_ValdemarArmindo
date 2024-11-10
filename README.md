# Web Development
# MDM - University of Coimbra
# Assignment 2 — Static Website

Autor: Valdemar Abril Armindo
Nº uc2014236540

Project Name: A personal Portfolio of Valdemar Abril Armindo


# Sinopse:
This project is an interactive and responsive digital portfolio developed to showcase Valdemar Abril Armindo's achievements, skills and experience. Created as a static website, the site organizes information in a clear and professional way, with CSS animations, dynamic interactions in all sections of the website, requesting information from its own github, among other features. Of the various features that the website presents, we can highlight the theme change feature (light/dark) using the button found in the top right corner; images with animations, texts with animations, dynamic text descriptions, access to other websites through links, a button with video on demand, a counter that displays the updated number of projects on Valdemar's GitHub with a button to refresh the web page (a function was developed that allows fetching automatically every 1 minute in order to simulate the update of the meal given in a short time interval), among others. The site is hosted on GitHub Pages, reflecting a commitment to organization and documentation in code development. And the access links are listed below:

#  Links to the git repository:
https://github.com/valmindo/Assignment2_ValdemarArmindo


#  Link to the website:
https://valmindo.github.io/Assignment2_ValdemarArmindo/
 

## Project Structure

In the root the project is composed of the following main files:

Assignment2_ValdemarArmindo/

├── Assignment2.pdf                # Contains the statement of the project
├── css_folder                     # Contains the CSS styles for the website
├── doc_folder                     # Folder with documentation files
├── image_folder                   # Contains images used in the website
├── index.html                     # The main HTML file for the front-end interface
├── js_folder                      # Folder containing JavaScript files for front-end logic
├── Project_description.pdf        # A concise description of the purpose of the website
├── README.md                      # Project README with instructions and details
└── video_folder/                  # Folder containing videos loaded locally by the website


## Project Folder Structure

Below is a brief description of the files in the project folders:

### **css_folder:**

1. **`style_essencial.css`**:  
   Contains essential styles for the layout and structure of the website. This file defines typography, main colors, spacing, hover effects, and styles for animations, etc.

2. **`style_not_essencial.css`**:  
   Includes additional styles that complement the design but are not critical to the basic layout, like responsive layout to ensure the site is visually appealing across different devices size, and other non-essential elements to enhance the user experience.

3. **`swiper_for_slide.css`**:  
   Responsible for styling the slideshow component on the website. This file includes rules for transitions, animations, and positioning of the swiper (image or content carousel), providing an interactive and dynamic experience for the user.


### **js_folder:**

1. **`base_for_webpage.js`**:  
   Contains essential JavaScript for the basic functionality of the website. This includes initializing interactions, manipulating the DOM (Document Object Model), and handling general navigation or content display.

2. **`functions_and_fetch.js`**:  
   Here we have some functions used to creating dynamic iterations as handles dynamic content and  API calls (fetch). It is responsible for fetching external data (like GitHub repository information).

3. **`swipe_for_slide.js`**:  
   Manages the JavaScript functionality for the slideshow component. This file ensures smooth transitions and swipe interactions for the user to navigate through the images or content.



## How to Run the Service:
1- Unzip the project folder
2- Open a terminal
3- Open the index.html file to view the website
4- In the Home section of the website, there is a button called "Watch this Website tutorial" when you click on this button you can watch a video of up to 1 minute demonstrating website interaction.
5- In the About section there is a button called update that you can use to make an updated request for the number of projects on Valdemar's github and refresh the page.



### For an example of use we have:

If you don't have the project zipped, then access the website here: https://valmindo.github.io/Assignment2_ValdemarArmindo/
and follow steps 4 and 5 explained in "How to Run the Service"



### Prerequisites
1- Windows 11
2- Node.js (version 14 or higher).
3- npm i express
4- npm install node-fetch@2
