/**
 * This file features and exports all of your calls to the API
 * 
 * You need to replace YOUR_API_KEY in the string associated with KEY with your actual API key
 */
export const BASE_URL = 'https://strangers-things.herokuapp.com/api/2010-LSU-WEB-PT/';
export const KEY = '';
// http://strangers-things.herokuapp.com/api/2010-LSU-WEB-PT/posts

/**
 * This will make a call to the API for a single term and value (e.g. "person", and "unknown"), and return the result
 */

export async function fetchPosts () { 
  fetch('https://strangers-things.herokuapp.com/api/2010-LSU-WEB-PT/posts')
    .then(response => response.json())
    .then(data => {
          return data
    })
  .catch(console.error);}

 


/*
This is all very standard code that can be re-used.
In general, our React apps have a flow of:
      Get data via API.
      Create State manipulation.
      Create templates for the website to render data on.
      Use Map to place the data through templates.
*/