# ScreenDex

You can now view the live site [HERE](https://screendex.onrender.com/)!

## Features

This project uses the [OMDb API](https://www.omdbapi.com/) to support you in finding out more about your favourite movies and TV shows.

To achieve this, the project uses the following technologies and frameworks:

-   HTML
-   CSS
-   JavaScript
-   Node.js and Vite
-   React.js

### Movie and TV Show Search

The application has a page for movie searches (/movies) and a page for TV show searches (/shows).

<table>
    <tr>
        <td>
            <img src="./screenshots/movie search.png" alt="a screenshot of the movies search page" width="100%">
        </td>
        <td>
            <img src="./screenshots/show search.png" alt="a screenshot of the tv shows search page" width="100%">
        </td>
    </tr>
    <tr>
        <td>A screenshot of the /movies page with an example search query for "star wars".</td>
        <td>A screenshot of the /shows page with an example search query for "the expanse".</td>
    </tr>
</table>

The search function is written in the JavaScript for the page and is then passed into the search form component as a prop. This allows the components to be between pages, but to use a different value for the type parameter in the API request.

### Movie and TV Show Details

## Project Background
