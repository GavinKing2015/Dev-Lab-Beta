CIS-486 Dev Lab Beta Story Card 

 # User Story (Story Points = Med👕)
**As a** end user of a `NodeJs` applications  

**I want** use the `NodeJs` application on the web [like this one]https:(//dev-lab-beta.herokuapp.com/) 👍

**So That** I don't have to download the code, select a coding envorment, input code into evniorment, write/complile/test code, and then upload the code to a hosting site.

## Comments/Steps to implement 🥇

### Setup Nodejs and Express:
1. Refer to [Dev-Training-Lab-Alpha](https://gist.github.com/barrycumbie/1537cc2bfbfd57dca2c2f4d8d5818358) to install and configure `NodeJS` and `Express`.
1. Use the steps in Dev-Training-Lab Alpha to install and configure a repo to create a web application.        
    * There are many command 🩳cuts for vsCode.  Below is a short list for reference.
        * `ctl + shift + ~` = Open new terminal
        * `npm init -y` = Accept all defualt package.json configuration file.
        *  `ctl + n` = New file.
        *  `ctl + shift + p` = Open command pallet.
        *  There are numerous others, this is just a small example.
    

### Create Project in Visual Code(vsCode)
1. Refer to [Dev-Traing-Lab-Alpha](https://gist.github.com/barrycumbie/1537cc2bfbfd57dca2c2f4d8d5818358) **`"Create Project in vsCode"`** section.  
2. Use the touch/echo commands and other `CLI` tools and techniques for your terminal enviorment to create and save your files. [Click here for bash](https://hbctraining.github.io/Intro-to-shell-flipped/lessons/extra_bash_tools.html) tools and command line examples. 💻
3.  To make the application lighter create a `.gitignore` file to exclude unnecessary dependancies and modules.
    * `CTL + N` or `echo node_modules >> .gitignore` from CLI.  This will exclude libararies/modules or files syncing with GitHub.
4.  Edit `package.json` file to include script to start `nodejs` automaticly.
    * From CLI `nano package.json`.  Uses 🔽 🔼 ▶️ ◀️ to move to scripts, see below.
 
 ```diff
"scripts": {
 -    "test": "echo \"Error: no test specified\" && exit 1",
 +    "start": "node index.js" 
 },
 ```
 5. `CTL + X`, **save Y**, `press enter` to save with same filename or type new filename to save as new filename.
          
### Code the app
1. Refer to [Dev-Traing-Lab-Alpha](https://gist.github.com/barrycumbie/1537cc2bfbfd57dca2c2f4d8d5818358) `"App coding"` to start coding the `NodeJS` app.
1. Copy 📋 below code into `index.js` file or appropriate filename.
1. Change `HTML` section to meet your requirements.

```JavaScript
const express = require('express');
const app = express();

app.get('/', function(req, res){

    res.send('<h3>Hello NodeJs on Heroku</h3>');
});
app.listen(process.env.PORT || 3000);
```

## Test app locally
1. Refer to [Dev-Traing-Lab-Alpha](https://gist.github.com/barrycumbie/1537cc2bfbfd57dca2c2f4d8d5818358) `Testing App` section.
1. Make sure application is working locally before deploying app to persistent URL. 👍

## Deploy App to persistent URL
1. Create [Heroku account](https://www.heroku.com/) it's free.
2. Create new app.
 
![image](https://user-images.githubusercontent.com/54637063/131909776-cd229c1b-7784-4e3f-8a4c-9b6faf951d4c.png)

3. Input app name.  Name must be unique and not taken.  It might be necesary to put lastname or other unique identifying string of characters.  **ONLY LOWER CASE LETTERS, NUMBERS, or DASHES**  see below

    ![image](https://user-images.githubusercontent.com/54637063/131909993-b767be12-6f47-464a-b355-06cd465a10a5.png)

4. Select appropriate region, click purple **`"Create App"`** button.
5. Click **`"Connect with GitHub"`**
6. Enter GitHub `repo name` to connect to repro.
7. Click **`"Automatic Deploy"`** and **`"Deploy Branch"`** to deploy app to Heroku.  The automatic deploy option will automaticly receive updates from GitHub when pushed from vsCode.

# How to know when you are done. Acceptance Criteria 
- [ ] navigate to a URL: _______ (heroku): 0 | 5 | 10
- [ ] link back to ghyt repo w/target: 0 | 5 | 10
- [ ] file directory and naming, ghty link to herok: 0 | 5 | 10 
- [ ] clear instructions (w/shortcuts), in m/d, on readme to <del>spin up</del> tell about the project, how to build on: 0 | 5 | 10 
- [ ] code quality: logical, readable, functional: 0 | 5 | 10 
