import userAvatar from '../images/profile.jpeg'

export const BACKGROUND_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_small.jpg";

export const PHOTO_URL = {userAvatar};

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWFhODgyZjhkOTJhMGNmY2MxMTkxNmE4ZDgxOGU0ZCIsInN1YiI6IjY1MGY1NjZiMjZkYWMxMDBlYjE5YjA0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a96aHPWvK1KXqB_Q15QafoTp9V7XzWkXEWlj5_wHRkM',
    }
  };


  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

  export const SUPPORTED_LANGUAGES = [{identifier:"en", name:"English"}, {identifier:"hindi", name:"Hindi"}, {identifier:"spanish", name:"Spanish"}]

  export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;