# Resource_Library
Project 2 Ed O'Connell
-----------------------
A brief synopsis of your project. Should not be longer than a paragraph.

* A resource library app to consolidate all links, videos, tools that we have been using in WDI. This application will be open to anyone and encouraged by others to contribute to the content. 

Wireframes
----------
checkout [this](https://webdesign.tutsplus.com/articles/a-beginners-guide-to-wireframing--webdesign-7399) resource for some ideas about wireframing and some good tools that might help.

Trello:  https://trello.com/b/R7MSTerY

User Stories
------------
here's the [wikipedia](https://en.wikipedia.org/wiki/User_story) entry for user stories.

* user enters web page and reads all previously submited items
* user can scroll down to view resources or use search bar to find specific subject
* user has abiltiy to click links or watch videos
* If resource is helpful, user can either up vote or down vote the item
* user can add resources to the library 
* user can edit the subject of given item
* If resource is currently not on the page and needed by user, custom google search bar for them to use

Pseudocode
----------
Include some pseudocode. It doesn't have to be your entire app. Maybe a crucial function or two. Maybe a high level view of some of the way different parts of your project connect with each other.

* Create form to input data of title, subject, link, (add vote section set to 0 after created)
* Read the data and add to the database
* APIs to be used: Slack (retrieve info from channels), Youtube (needed to watch videos from site), Google custom search
* Add functionality to edit the items (right now only the keyword)
* Add functionality to up/down vote items
* Sort items based on vote count
* Have a search bar for querying between items based on keyword/subject
* Delete functionality to remove item from the list (authentication required)
* Build a database to store all new entries in seed file
* Create tables based on the user input (title, subject, link)
* Install npm and packages
* Have routes defined in index.js


ERD or other visual representation of your database
---
This can be a basic markdown table with some text or a full on ERD. Check [this](https://www.lucidchart.com/pages/how-to-draw-ERD) for a quick intro to how to draw an ERD. They also have a good tool to help you actually draw it.

Technologies used/npm Modules
-----------
List your tech stack. Include all the technologies you used along with a brief description of their functionality. Remember to include npm packages here.

* HTML
* CSS - flexbox/grid
* Javascript
* jQuery
* Node
* Express
* pg-promise
* Nodemon
* Handlebars/Reacts??

Download Project & Install
----------------

This is a very important step and one that you did not need in your first project. When you have a project with a server and a database you need to give instructions to the end user on how to run it. the following is a good example of what this might look like.

1. [Git clone or download this project]('https://github.com/andres-maza/project-2')
2. Create a PostgreSQL database called 'project_2_db'
3. On your terminal, run psql -d project_2_db -f migrations/migrations.sql
4. If you haven't already, install nodemon package (npm install -g nodemon)
5. Run nodemon, app should be available on localhost:3000