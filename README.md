# MovieBox
Android or IOS App which fetches the now playing and the upcoming movie information.

The Movies are streamed from the URL: website: https://developers.themoviedb.org/4/getting-started/authorization

Configuration Setup:
1.) Navigate into the project folder MovieBox which contains package.json and run npm install.
2.) run the command npm install --save axios
3.) Open Android Studio and open this project as an existing android project.
4.) Under the Tools option in android studio choose android emulator.
Note:- If you are using windows the variable for installing Sdk\platform-tools needs to be set.
5.) Play the app from the emulator under tools option in android studio.
6.) in Command prompt inside the MovieBox folder run the command npm run start.
7.) App will start running in the emulator.

Functionalities that can be seen in the app.
Following Application requirements have been met:
 1 central page with two tabs at the top
 1 tab titled “Now Playing”
 1 tab titled “Upcoming movies”
   Each tab shows a list of movies according to the tab selected:
   Each row item has:
   Movie name
   Movie popularity

  Movie Detail page:
  Click movie in the list should go to movie detail page
  Movie details page should contain reasonable content

Following Extra features have been included:
  Added a Spinner
  Show at least 1 associated image for each movie row item
  Pagination mechanism
  Error retry handling (eg. No internet)
  Configuration change
