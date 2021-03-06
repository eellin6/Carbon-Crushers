# Carbon-Crushers
Compete with your friends to lower carbon footprint and save the world

# Team ACE
Product Owner: Edward Ellington
Scrum Master: Josh Strzeszkowski
Development Team: Austin Vollman, Caity Opelka, Edward Ellington

## Application Walk Through

When a user opens the application they will be prompted to login with their google accounts.

Once accepted, the user will be brought to the homepage where they will see a doughnut graph with an overview of their current stats. These stats are recycling, meat consumption and dining out, water consumption, energy usage, and mileage. The idea is to track your personal stats in these categories to lower your carbon footprint on the planet.

Located at the bottom of the page there are six icons that will quickly navigate the user to various features of the application. From left to right are the homepage icon, the graph icon that shows the users personal stats on various graphs, the timer icon to record the length of the users shower time, the leader board icon that shows how the users stats rank amongst their friends, a notification icon that notifies users when they have a friend or if they earned a new badge, lastly the user profile icon will direct the user to the profile page where the user can view and update user information.

Located at the top left of every page is a navigation menu which contains all the pages mentioned above in addition to a friends finder page, a resources page where users can find resources to help cut their carbon footprint, lastly is the CVD mode which allows users with color vision deficiency to view the app in colors more suited to their needs.

To start recording stats, the user should navigate to the update stats page. There they will be greeted with an accordion style drop-down menu broken into sections by the different categories that the app tracks. In each of these the user will be able to enter their stats throughout the week and then their information will be saved to the database at the weeks end at 11:59pm.

In challenger mode users can search for friends that are also on the app. The friend will receive a notification to accept or decline. If friend accepts, both users will be able to view each others weekly stats and rankings on the leader board.

## Tech
1. Cloudinary - Image hosting library
2. Chart.js - Excellent charts and graphs library. Sample data can be found in the src folder (https://www.chartjs.org/)
3. React-Router - Router library
4. Mysql - database
5. Sequelize - ORM
6. React - framework
7. Axios - http client
8. TypeScript - javaScript SuperSet
9. Node.js - Runtime Environment
10. Express - Server
11. Husky - pre-commit git hooks
12. eslint - Linter
13. Webpack - Module Bundler

Dev Setup:
## Environment Variables Needed
1. Google Oauth Client Id and Client Secret
2. Cloudinary API, Cloud name, and Cloud secret
3.
4.
5.

## Google OAuth
Google Oauth requires a google cloud account. First create your account and then navigate to the developer console. Go to google API and create a clientID and clientSecret. This goes inside the .env file.

## Installation/Start-up
1. First fork the repo and clone it to your local machine.
2. Collect all env keys
3. Run npm install to install all dependencies
4. Run npm run dev to start Webpack
5. Run npm start to run the server