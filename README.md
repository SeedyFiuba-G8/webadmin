# [Backoffice Web](https://seedyfiuba-g8.github.io/)

Written in JavaScript (React.js).

Visit our project page [_here_](https://seedyfiuba-g8.github.io/).

## DISCLAIMER: ¡Currently offline! :broken_heart:

Since we used **Heroku** to host our microservices, as they offer a limited number of free applications, we decided to remove them. CI/CD has been manually disabled.

If you were to deploy this application (from Heroku), you should:

-   Create your Heroku app to host the `main` (or other) branch of our project.
-   Add the following buildpacks for your app (from the Settings tab):
  -   heroku/nodejs
  -   https://buildpack-registry.s3.amazonaws.com/buildpacks/mars/create-react-app.tgz
-   Enable automatic deploys (from the Deploy tab) connecting to the desired branch on your forked repository.
-   **Happy coding!**
