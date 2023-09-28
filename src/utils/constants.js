import userAvatar from '../images/profile.jpeg'

export const BACKGROUND_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_small.jpg";

export const PHOTO_URL = {userAvatar};

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer'+process.env.REACT_APP_TMDB_KEY ,
    }
  };


  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

  export const SUPPORTED_LANGUAGES = [{identifier:"en", name:"English"}, {identifier:"hindi", name:"Hindi"}, {identifier:"spanish", name:"Spanish"}]

  export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;