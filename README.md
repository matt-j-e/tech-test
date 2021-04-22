# NASA image lookup tech test

## TECH TEST REQUIREMENTS

You are expected to build a React web application that allows users to search for images based on a query relating to space. You are provided the NASA API endpoint for image search.
We want you to consider and add anything to your repository that should be included was this to be a live website.

The following functionalities need to be implemented:
* A Search page which allows users to search for images by keyword
* Images must be returned upon a successful search

The styling is up to you but will be taken into consideration when evaluating your application.

We estimate this task to take ​​10 hours​​.


**Relevant API endpoints:**

image search:
`GET​​ ​​https://images-api.nasa.gov/search` ​Params: `​​q`

**Assets**

You may use this asset for your application: `https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg`


## TECHNOLOGIES USED

* The app is built in React
* Testing is carried out with Jest & React Testing Library
* Additional packages installed: Axios & PropTypes


## HOW TO RUN THE APP

After cloning the repo to your own machine, run `npm install` to ensure that all necessary packages are installed.
Then run `npm start`. If the app doesn't open in your browser automatically, open a new tab and navigate to `http://localhost:3000`

Simply type a search term into the search box and the app will display a collection of up to 100 photos related to your search term using data pulled from the NASA API.

## CREATED BY

**Matt Edwards** in April 2021 as part of the Manchester Codes Software Engineer FastTrack course.

## IF I HAD MORE TIME I WOULD
Style the app better than it currently is. In the time available I couldn't come up with a way to tidy up the presentation of the images when they are all of different aspect ratios and you don't know ahead of time what you are going to get so the spacing is a little random. The flexbox `justify-items: space-between` CSS setting does a good job of keeping the edges tidy; it's just the rest of the display configuration that's in a bit of a pickle!

The images provided are thumbnails. It would be good if clicking a thumbnail opened a larger version of the image. 