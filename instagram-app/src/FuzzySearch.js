import Fuse from 'fuse.js';

const options = {
  tokenize: true,
  matchAllTokens: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
    "username",
  ]
};

export default function FuzzySearch(list, term) {
  const fuse = new Fuse(list, options);
  return fuse.search(term);
}
