# friendFinder

This project contains the "FriendFinder" application -- basically a dating app. This full-stack site takes in results from a users' surveys, then compares their answers with those from other users. The app then displays the name and picture of the user with the best overall match.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
1. Node.js must be installed on local machine or host. See https://nodejs.org/en/download/ for instructions.
  
### Overview
1. The app folder structure is as shown below.

  ```
  FriendFinder
    - .gitignore
    - app
      - data
        - friends.js
      - javascript
        - survey.js
      - public
        - home.html
        - survey.html
      - routing
        - apiRoutes.js
        - htmlRoutes.js
    - node_modules
    - package.json
    - server.js
  ```

2. The file `home.html` is the home page.
3. The file `survey.html` contains the user survey.
4. The server is created by the script `server.js` and it is designated as the start script. It requires the npm packages `express` and `path`.
5. The `htmlRoutes.js` file include two routes:
   * A GET Route to `/survey` which displays the survey page.
   * A default, catch-all route that leads to `home.html` which displays the home page.
6. The `apiRoutes.js` file contains two routes:
   * A GET route with the url `/api/friends`. This is used to display a JSON of all possible friends.
   * A POST routes `/api/friends`. This is used to handle incoming survey results. This route will also be used to handle the compatibility logic.
7. The `survey.js` file contains the event handing and POST routes to the apiRoutes.js.

### Installing

1. To install source files use git to clone files from https://github.com/ckaoki/friendFinder.
2. In a bash terminal or Visual Code terminal navigate to the directory that you downloaded the files from github.
3. Install the Node package (express) by entering the following in the terminal:   
    *npm install* 
4. (optional) If deploying to to a host such as Heroku perform the following:
   1. Navigate to the root project folder in a terminal.
   2. Enter the following command in the terminal:
   *git push heroku master*

### Operation
To view friendFinder navigate to https://cullanheroku.herokuapp.com/.
The friendFinder app can be operated on the local host as instructed below.
1. Using a browser navigate to the main page:   
    *localhost:3000*  
2. Click the button *Go to Survey* to begin the survey.  
3. Answer all questions and the click the *Submit* button to find a friend.
4. A window will appear showing you a friend with the closest compatibility.
5. Click the link *API Friends List* to show all friends in the database.
6. Click the link *GitHub Repo* to go to the source files. 


## Running the tests

Validation of friendFinder was perform using a chrome browser. FriendFinder was run as directed in the previous section - **Operation**.  
Extensive unit testing was also performed on all routes and the compatibility algorithm.


### Break down into end to end tests

Source files have been extensively tested by displaying pages in Visual Code.

### And coding style tests

I'm starting to get some style.

## Deployment

Navigate to https://github.com/ckaoki/friendFinder to clone.

## Built With

* [Visual Studio Code](https://code.visualstudio.com/)

## Contributing

Please read our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use github for version control (https://github.com/your/project/tags). 

## In development
Implementing textual hints.

## Authors

* **Cullan Aoki** - *Initial work* - https://github.com/ckaoki/friendFinder

## License

This project is not licensed.

## Acknowledgments
* Joe Rehfuss
* Trae Shanks
* Lan Truong

