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

function makeMaliciousBookmark() {
  const maliciousBookmark = {
    id: 911,
    title: 'Naughty naughty very naughty <script>alert("xss");</script>',
    url: 'https://www.hackers.com',
    description: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`,
    rating: 1,
  }
  const expectedBookmark = {
    ...maliciousBookmark,
    title: 'Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;',
    description: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`
  }
  return {
    maliciousBookmark,
    expectedBookmark,
  }
}
  
module.exports = {
  makeBookmarksArray,
  makeMaliciousBookmark,
}