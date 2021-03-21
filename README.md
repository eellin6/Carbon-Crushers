# Carbon-Crushers
Compete with your friends to lower carbon footprint and save the world

# Team ACE
Product Owner: Edward Ellington
Scrum Master: Josh Strzeszkowski
Development Team: Austin Vollman, Caity Opelka, Edward Ellington

## Application Walk Through

When a user opens the application they will be prompted to login with their google accounts.

Once accepted, the user will be brought to the homepage where they will see a doughnut graph with an overview of their current stats and any badges they may have earned. These stats are recycling, meat consumption and dining out, water consumption, energy usage, and mileage. The badges you can receive are Water Wizard, Rockin Recycler, Veggie Victor, Power Puncher. The idea is to track your personal stats in these categories to lower your carbon footprint on the planet and if you do exceptionally well, you receive a badge for your efforts.

Located at the bottom of the page there are six icons that will quickly navigate the user to various features of the application. From left to right are the homepage icon, the graph icon that shows the users personal stats on various graphs, the timer icon to record the length of the users shower time, the leader board icon that shows how the users stats rank amongst their friends, a notification icon that notifies users when they have a friend request, lastly the user profile icon will direct the user to the profile page where the user can view and update user information as well as the ability to choose a CVD mode which allows users with color vision deficiency to view the stat charts and graphs in easily distinguishable patterns.

Located at the top left of every page is a navigation menu which contains all the pages mentioned above in addition to a friends finder page and the option to log out.

To start recording stats, the user should navigate to the update stats page where they will be given a tip to improve their weakest stat. There they will be greeted with an accordion style drop-down menu broken into sections by the different categories that the app tracks. In each of these the user will be able to enter their stats throughout the week and then their information will be saved to the database at the weeks end at 11:59pm. When choosing the amount of bottles a user recycled that week, the user is offered the option to include photographic evidence for additional points.

In challenger mode users can search for friends that are also on the app. The friend will receive a notification to accept or decline. If a friend accepts, both users will be able to view each others weekly stats and rankings on the leader board.

## Tech
1. Cloudinary - Image hosting library
2. Chart.js - Excellent charts and graphs library. Sample data can be found in the src folder (https://www.chartjs.org/)
3. React-Router - Router library
4. Mysql - Database
5. Sequelize - ORM
6. React - Framework
7. Axios - http Client
8. TypeScript - javaScript SuperSet
9. Node.js - Runtime Environment
10. Express - Server
11. Husky - Pre-Commit Git Hooks
12. eslint - Linter
13. Webpack - Module Bundler
14. TensorFlow - Machine Learning
15. Material UI - Front-end styling library
16. React Toastify - Notification Library
17. Passport/Google OAuth - Authentication
18. Clever Cloud - Cloud Database
19. Github Actions - Continual Integration
20. IPStack - Geo-Location API
21. WeatherBit IO - Weather API
22. AWS - Deployment


Dev Setup:
## Environment Variables Needed
1. Google Oauth Client Id and Client Secret
2. Cloudinary API, Cloud name, and Cloud secret
3. IPStack - https://ipstack.com/
4. WeatherBit - https://www.weatherbit.io/
5. Clever Cloud - Host, Database, Username, Password

## Google OAuth
Google Oauth requires a google cloud account. First create your account and then navigate to the developer console. Go to google API and create a clientID and clientSecret. This goes inside the .env file.

## Installation/Start-up
1. First fork the repo and clone it to your local machine.
2. Collect all env keys
3. Run npm install to install all dependencies
4. Run npm run dev to start Webpack
5. Run npm start to run the server