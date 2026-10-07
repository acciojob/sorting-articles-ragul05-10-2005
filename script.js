//your JS code here. If required.
const bands = [
  'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil',
  'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State',
  'We Came as Romans', 'Counterparts', 'Oh, Sleeper',
  'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

// Function to strip 'a', 'an', 'the' from start
function strip(article) {
  return article.replace(/^(a |an |the )/i, '').trim();
}

// Sort ignoring 'a', 'an', 'the'
const sortedBands = bands.sort((a, b) => {
  return strip(a).localeCompare(strip(b));
});

// Display in the list
document.getElementById('band').innerHTML =
  sortedBands.map(band => `<li>${band}</li>`).join('');
