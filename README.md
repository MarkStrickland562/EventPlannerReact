## **Mark Strickland**

[<img src="https://avatars1.githubusercontent.com/u/46455727?s=400&v=4" width=100 alt="GitHub avatar for author MarkStrickland562">](https://github.com/MarkStrickland562)

[**MarkStrickland562**](https://github.com/MarkStrickland562)

## **eHappenings Event Planner (React)**

###### Created April 26, 2019. Finalized May 3rd, 2019.

----------

## Description
This project is a re-development of an Angular-based project that was itself a redevelopment of a C#-based team project from the Epicodus C# class called *eHappenings*. The C# code was converted to javascript and Angular and the C# Model/View/Controller structure was converted to the Angular Model/View/Component structure. Then for this
project, the Angular and Typescript code was converted to React and JSX. Much of the styling has been kept from the C# project and credit for the styling goes to Clara Munro and Micaela Jawor. Credit for the format of this README largely goes to Shawn Lunsford.

The development process in React versus Angular seems more straightforward. More componentized. Somewhat gentler learning curve.

## Notes

* Understanding how and when styling gets applied can be challenging.
* Incorporating bootstrap styling continues to be a bit confusing.
* Lint doesn't seem to handle image files very well.
* So far, React seems less "busy" than Angular. That's a good thing.

## Component Structure

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
--------> Menus ("/menus")
<br>
----------------> Header
<br>
----------------> SideNav
<br>
----------------> Menu
<br>
--------> Dishes ("/dishes")
<br>
----------------> Header
<br>
----------------> SideNav
<br>
----------------> Dish
<br>
--------> Foods ("/foods")
<br>
----------------> Header
<br>
----------------> SideNav
<br>
----------------> Food
<br>
--------> Stores ("/stores")
<br>
----------------> Header
<br>
----------------> SideNav
<br>
----------------> Store
<br>
--------> Tasks ("/tasks")
<br>
----------------> Header
<br>
----------------> SideNav
<br>
----------------> Task
<br>
--------> Invitees ("/invitees")
<br>
----------------> Header
<br>
----------------> SideNav
<br>
----------------> Invitee
<br>
--------> Recipes ("/recipes")
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

## Known Bugs
No Known Bugs.

## Project Plan

### Part One (Week #1)
###### 1) Develop technical architecture.
###### 2) Set up the project.
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
3) Point Angular to the installed Bootstrap node module by adding the following to .angular-cli.json in the styles array so that it looks like this:
<br><br>
  "styles": [
<br>
  "../node_modules/bootstrap/dist/css/bootstrap.min.css",
  <br>
  "styles.css"
  <br>
  ],
<br><br>
4) Add the Forms Module to app.module.ts. In the top section of imports add "import { FormsModule } from '@angular/forms'". In the @ngModule section in the imports array, add ", FormsModule" after "BrowserModule".
</details>

###### 3) Create model classes for the data.
<details>
<summary>Click Here for Details</summary>
</details>

###### 4) Develop mock data for each class.

###### 5) Create components for showing, adding, editing, deleting and searching for model-related objects.
<details>
<summary>Click Here for Details</summary>
</details>

## Technical Architecture

<details>
  <summary>Click Here for an Overview of the Data Model</summary>
  <table>
    <tr>
      <th>Model</th>
      <th>Properties</th>
      <th>Typescript Data Types</th>
    </tr>
    <tr>
      <td>Event</td>
      <td>eventName<br>eventLocation<br>menusId</td>
      <td>string<br>string<br>number</td>
    </tr>    
    <tr>
      <td>Menu</td>
      <td>menuTheme</td>
      <td>string</td>
    </tr>   
    <tr>
      <td>Task</td>
      <td>taskDescription<br>taskPlannedStartDateTime</td>
      <td>string<br>Date</td>
    </tr>
    <tr>
      <td>Menu Item</td>
      <td>menuItemDescription</td>
      <td>string</td>
    </tr>
    <tr>
      <td>Menu Item Ingredient</td>
      <td>ingredientDescription<br>menuItemsId<br>storeId</td>
      <td>string<br>number<br>number</td>
    </tr>
    <tr>
      <td>Store</td>
      <td>storeName</td>
      <td>string</td>
    </tr>
    <tr>
      <td>Invitee</td>
      <td>inviteeName<br>inviteeEmailAddress</td>
      <td>string<br>string</td>
    </tr>
  </table>
</details>

<details>
  <summary>Click Here for an Overview of the Components and Routes</summary>
</details>

## Setup and Use

#### Required Packages
<details>
<summary>Click Here for Required Packages</summary>
<ul>
<li>bootstrap 4.3.1</li>
<li>core-js 2.4.1</li>

<li>codelyzer 4.0.1</li>
<li>jasmine-core 2.8.0</li>
<li>jasmine-spec-reporter 4.2.1</li>
<li>karma 2.0.0</li>
<li>karma-chrome-launcher 2.2.0</li>
<li>karma-coverage-istanbul-reporter 1.2.1</li>
<li>karma-jasmine 1.1.0</li>
<li>karma-jasmine-html-reporter 0.2.2</li>
<li>protractor 5.1.2</li>
<li>rxjs 5.5.6</li>
<li>ts-node 4.1.0</li>
<li>tslint 5.9.1</li>
<li>@types/jasmine 2.8.3</li>
<li>@types/jasminewd2 2.0.2</li>
<li>@types/node 6.0.60</li>
<li>typescript 2.5.3</li>
<li>zone.js 0.8.19</li>
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

#### Test the application
1. Execute the tests with Jasmine and Karma:

       $ npm run test

## Built With

* Windows 10.1
* iMac OS X El Capitan 10.11.6
* Atom (IDE)

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
