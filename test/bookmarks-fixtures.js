function makeBookmarksArray() {
  return [
    {     
      id: 1,
      title: 'Buzzfeed',
      url: 'https://www.buzzfeed.com/',
      description: 'Millenial dumpster-fire',
      rating: 3 
    },

    { 
      id: 2,
      title: 'Them',
      url: 'https://www.them.us/',
      description: 'She said gay rights!',
      rating: 5 
    },
    {
      id: 3,
      title: 'MDN',
      url: 'https://developer.mozilla.org',
      description: 'The only place to find web documentation',
      rating: 5,
    },
  ]
}
  
module.exports = {
  makeBookmarksArray,
}