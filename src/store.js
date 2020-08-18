const { v4: uuid } = require('uuid')

const bookmarks = [
    {     
        id: uuid(),
        title: 'Buzzfeed',
        url: 'https://www.buzzfeed.com/',
        description: 'Millenial dumpster-fire',
        rating: 3 
    },

    { 
        id: uuid(),
        title: 'Them',
        url: 'https://www.them.us/',
        description: 'She said gay rights!',
        rating: 5 
    },
    {
        id:  uuid(),
        title: 'MDN',
        url: 'https://developer.mozilla.org',
        description: 'The only place to find web documentation',
        rating: 5,
      },
]

module.exports = { bookmarks }