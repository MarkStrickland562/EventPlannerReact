## **Mark Strickland**

[<img src="https://avatars1.githubusercontent.com/u/46455727?s=400&v=4" width=100 alt="GitHub avatar for author MarkStrickland562">](https://github.com/MarkStrickland562)

[**MarkStrickland562**](https://github.com/MarkStrickland562)

## **eHappenings Event Planner (React)**

###### Started April 26, 2019. Completed May 3rd, 2019.

----------

## Description
*eHappenings* is a re-development of an Angular-based project that was itself a redevelopment of a C#-based team project from the Epicodus C# class. The C# code was converted to javascript and Angular and the C# Model/View/Controller structure was converted to the Angular Model/View/Component structure. Then for this project, the Angular and Typescript code was converted to React and JSX. Much of the styling has been kept from the C# project and credit for the styling goes to Clara Munro and Micaela Jawor. Credit for the format of this README largely goes to Shawn Lunsford.

The development process in React versus Angular seems more straightforward. More componentized. A somewhat gentler learning curve.

## Notes

* Understanding how and when styling gets applied can be challenging.
* Incorporating bootstrap styling continues to be a bit confusing.
* Lint doesn't seem to handle image files very well.
* So far, React seems less "busy" than Angular. That's a good thing.

## Component Tree

App
<br>
----> Welcome ("/")
<br>
----> About ("/about")
<br>
----> Error404
<br>
----> Main ("/main")
<br>
--------> Header
<br>
--------> SideNav
<br>
--------> Events ("/events") &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<-------- EventData
<br>
----------------> Header
<br>
----------------> SideNav
<br>
----------------> Event
<br>
----------------> AddEventForm
<br>
----------------> EditEventForm
<br>
----------------> DeleteEventForm
<br>
----------------> SearchEvent
<br>
--------> Menus ("/menus") &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<-------- MenuData
<br>
----------------> Header
<br>
----------------> SideNav
<br>
----------------> Menu
<br>
----------------> AddMenuForm
<br>
----------------> EditMenuForm
<br>
----------------> DeleteMenuForm
<br>
----------------> SearchMenu
<br>
--------> Dishes ("/dishes") &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<-------- DishData
<br>
----------------> Header
<br>
----------------> SideNav
<br>
----------------> Dish
<br>
----------------> AddDishForm
<br>
----------------> EditDishForm
<br>
----------------> DeleteDishForm
<br>
----------------> SearchDish
<br>
--------> Foods ("/foods") &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<-------- FoodData
<br>
----------------> Header
<br>
----------------> SideNav
<br>
----------------> Food
<br>
----------------> AddFoodForm
<br>
----------------> EditFoodForm
<br>
----------------> DeleteFoodForm
<br>
----------------> SearchFood
<br>
--------> Stores ("/stores") &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<-------- StoreData
<br>
----------------> Header
<br>
----------------> SideNav
<br>
----------------> Store
<br>
----------------> AddStoreForm
<br>
----------------> EditStoreForm
<br>
----------------> DeleteStoreForm
<br>
----------------> SearchStore
<br>
--------> Tasks ("/tasks") &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<-------- TaskData
<br>
----------------> Header
<br>
----------------> SideNav
<br>
----------------> Task
<br>
----------------> AddTaskForm
<br>
----------------> EditTaskForm
<br>
----------------> DeleteTaskForm
<br>
----------------> SearchTask
<br>
--------> Invitees ("/invitees") &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<-------- InviteeData
<br>
----------------> Header
<br>
----------------> SideNav
<br>
----------------> Invitee
<br>
----------------> AddInviteeForm
<br>
----------------> EditInviteeForm
<br>
----------------> DeleteInviteeForm
<br>
----------------> SearchInvitee
<br>
--------> RecipeSearchForm ("/searchrecipes")
<br>
----------------> Header
<br>
----------------> SideNav
<br>
--------> Recipes ("/recipes") &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<-------- API Call
<br>
----------------> Header
<br>
----------------> SideNav
<br>
----------------> Recipe
<br>
## Technical Features

* Bootstrap
* React
* Eslint

## Known Bugs
No Known Bugs.

## Project Plan

##### 1) Develop technical architecture.
##### 2) Set up the project.
<details>
<summary>Click Here for Details</summary>
This assumes that node is already installed, but verify with "node -v".
<br><br>
1) Setup the project by executing the following commands at the bash prompt:
<br><br>
    $ npm install bootstrap --save
<br><br>
2) Populate .gitignore with:
<br><br>
    node_modules/
<br>
    .DS_Store
<br>
    dist/
<br>
    .env
<br><br>
</details>

##### 3) Develop mock data for the seven models.
##### 4) Create components for showing, adding, editing, deleting and searching for model-related objects.

## Setup and Use

#### Required Packages
<details>
<summary>Click Here for Required Packages</summary>
<ul>
<li>babel-core 6.24.1</li>
<li>babel-loader 7.0.0</li>
<li>babel-preset-es2015 6.24.1</li>
<li>babel-preset-react 6.24.1</li>
<li>bootstrap 4.3.1</li>
<li>eslint 4.13.1</li>
<li>eslint-loader 2.1.2</li>
<li>eslint-plugin-react 7.12.4</li>
<li>file-loader 1.1.6</li>
<li>html-webpack-plugin 2.29.0</li>
<li>prop-types 15.5.10</li>
<li>react 15.5.4</li>
<li>react-dom 15.5.4</li>
<li>react-hot-loader 3.0.0-beta.7</li>
<li>react-router-dom 4.0.0</li>
<li>styled-jsx 3.2.1</li>
<li>url-loader 0.6.2</li>
<li>uuid 3.2.1</li>
<li>webpack 3.4.0</li>
<li>webpack-dev-server 2.5.0
</ul>
</details>

#### Download the Repository
1. Clone [this repository](https://github.com/MarkStrickland562/EventPlannerReact):

       $ git clone https://github.com/MarkStrickland562/EventPlannerReact.git

#### Install, build and run the application
1. Navigate to the application root directory:

       $ cd EventPlannerReact
2. Install the required packages:

       $ npm install
3. Run the application:
    
       $ npm run start

    Then navigate to locahost:8080 in the browser.

4. To lint the code:

       $ npm run lint-fix

## Built With

* Windows 10.1
* iMac OS X El Capitan 10.11.6
* VSCode

## Support and contact details

If you have any feedback or concerns, please contact Mark Strickland.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Copyright (C) 2019 [Mark Strickland](https://github.com/MarkStrickland562). All Rights Reserved.
```
MIT License

Copyright (c) 2019 Mark Strickland

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
