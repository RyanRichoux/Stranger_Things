

export async function fetchPosts () { 
  fetch('https://strangers-things.herokuapp.com/api/2010-LSU-WEB-PT/posts')
    .then(response => response.json())
    .then(data => {
          return data
    })
  .catch(console.error);}
