'use strict';

const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

// 1.1
// const [firstBook, secondBook] = books;
// console.log(firstBook, secondBook);
// 1.2
// const [, , thirdbook] = books;
// console.log(thirdbook);
// 1.3
// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];
// const [[, rating], [, ratingCount]] = ratings;
// console.log(rating, ratingCount);
// 1.4
// const ratingStars = [63405, 1808];
// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

// 2.1
// const [{ title, author, ISBN }] = books;
// console.log(title, author, ISBN);
// 2.2
// const [{ keywords: tags }] = books;
// console.log(tags);
// 2.3
// const { language, programmingLanguage = 'unknown' } = books[6];
// console.log(language, programmingLanguage);
// 2.4
// let bookTitle = 'unknown';
// let bookAuthor = 'unknown';
// ({ title: bookTitle, author: bookAuthor } = books[0]);
// console.log(bookTitle, bookAuthor);
// 2.5
// const {
//   thirdParty: {
//     goodreads: { rating: bookRating },
//   },
// } = books[0];
// console.log(bookRating);
// 2.6
// const printBookInfo = function ({ title, author, year = 'year unknown' }) {
//   console.log(`${title} by ${author}, ${year}`);
// };
// printBookInfo({
//   title: 'Algorithms',
//   author: 'Robert Sedgewick',
//   year: '2011',
// });
// printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick' });

// 3.1
// const bookAuthors = [...books[0].author, ...books[1].author];
// console.log(bookAuthors);
// 3.2
// const spellWord = function (str) {
//   console.log(...str);
// };
// spellWord('Javascript');

// 4.1
// const [mainKeyword, ...rest] = books[0].keywords;
// console.log(mainKeyword, rest);
// 4.2
// const { publisher: bookPublisher, ...restOfTheBook } = books[1];
// console.log(bookPublisher, restOfTheBook);
// 4.3
// const printBookAuthorsCount = function (title, ...authors) {
//   console.log(`The book ${title} has ${authors.length} authors`);
// };
// printBookAuthorsCount(books[0].title, ...books[0].author);

// 5.1
// const hasExamplesInJava = function (book) {
//   const result = book.programmingLanguage === 'Java' || 'no data available';
//   console.log(result);
// };
// 5.2
// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent &&
//     console.log(`${books[i].title} provides online content.`);
// }

// 6.1
// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent ??
//     console.log(
//       `${books[i].title}" provides no data about its online content.`,
//     );
// }

// 7.1
// for (let i = 0; i < books.length; i++) {
//   books[i].edition ||= 1;
//   console.log(books[i].edition);
// }
// 7.2
// for (let i = 0; i < books.length; i++) {
//   books[i].highlighted &&= books[i].thirdParty.goodreads.rating >= 4.2;
//   console.log(books[i]);
// }

// Challenge #1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// const [players1, players2] = game.players;
// const [gk, ...fieldPlayers] = players1;
// const allPlayers = [...players1, ...players2];
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// const { team1, x: draw, team2 } = game.odds;
// const printGoals = function (...names) {
//   for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
//   }
//   console.log(`${names.length} goals were scored in total.`);
// };
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// 8.1
// let pageSum = 0;
// for (const book of books) {
//   pageSum += book.pages;
// }
// console.log(pageSum);
// 8.2
// const allAuthors = [];
// for (const book of books) {
//   if (typeof book.author === 'string') allAuthors.push(book.author);
//   else allAuthors.push(...book.author);
// }
// console.log(allAuthors);
// 8.3
// for (const [i, author] of allAuthors.entries()) {
//   console.log(`${i + 1}. ${author}`);
// }

// 9.1
// const bookData = [
//   ['title', 'Computer Networking: A Top-Down Approach'],
//   ['author', ['James F. Kurose', 'Keith W. Ross']],
//   ['publisher', 'Addison Wesley'],
// ];
// const newBook = {
//   [bookData[0][0]]: bookData[0][1],
//   [bookData[1][0]]: bookData[1][1],
//   [bookData[2][0]]: bookData[2][1],
// };
// 9.2
// const pages = 880;
// const newBook2 = {
//   title: 'The C Programming Language',
//   author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
//   pages,
// };
// console.log(newBook2);

// 10.1
// function getFirstKeyword(book) {
//   const keyword = book.keywords?.[0];
//   console.log(keyword);
// }
// getFirstKeyword(books[0]);

// 11.1
// const entries = [];
// for (const key of Object.keys(books[0].thirdParty.goodreads)) {
//   entries.push([key]);
// }
// 11.2
// for (const [i, value] of Object.values(
//   books[0].thirdParty.goodreads,
// ).entries()) {
//   entries[i].push(value);
// }
// 11.3
// const entries2 = Object.entries(books[0].thirdParty.goodreads);
// 11.4
// console.log(entries);
// console.log(entries2);

// Challenge #2
// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }
// let sum = 0;
// for (const odd of Object.values(game.odds)) {
//   sum += odd;
// }
// console.log(sum / Object.values(game.odds).length);
// for (const [k, v] of Object.entries(game.odds)) {
//   game[k]
//     ? console.log(`Odd of victory ${game[k]}: ${v}`)
//     : console.log(`Odd of draw: ${v}`);
// }
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] = scorers[player] + 1 || 1;
// }
// console.log(scorers);

// 12.1
// const allKeywords = [];
// for (const book of books) {
//   allKeywords.push(...book.keywords);
// }
// console.log(allKeywords);
// 12.2
// const uniqueKeywords = new Set(allKeywords);
// console.log(uniqueKeywords);
// 12.3
// uniqueKeywords.add('coding');
// uniqueKeywords.add('science');
// console.log(uniqueKeywords);
// 12.4
// uniqueKeywords.delete('business');
// console.log(uniqueKeywords);
// 12.5
// const uniqueKeywordsArr = [...uniqueKeywords];
// console.log(uniqueKeywordsArr);
// 12.6
// uniqueKeywords.clear();
// console.log(uniqueKeywords);

// 13.1
// const bookMap = new Map([
//   ['title', 'Clean Code'],
//   ['author', 'Robert C. Martin'],
// ]);
// 13.2
// bookMap.set('pages', 464);
// 13.3
// console.log(`${bookMap.get('title')} by ${bookMap.get('author')}`);
// 13.4
// console.log(bookMap.size);
// 13.5
// if (bookMap.has('author')) console.log('The author of the book is known');

// 14.1
// const firstBookMap = new Map(Object.entries(books[0]));
// console.log(firstBookMap);
// 14.2
// for (const [k, v] of firstBookMap) {
//   if (typeof v === 'number') console.log(k);
// }

// Challenge #3
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
// const events = [...new Set(gameEvents.values())];
// console.log(events);
// gameEvents.delete(64);
// console.log(gameEvents);
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes.`,
// );
// for (const [k, v] of gameEvents) {
//   console.log(`[${k <= 45 ? 'FIRST' : 'SECOND'} HALF] ${k}: ${v}`);
// }

// 15.1
// const bookISBN = books[0].ISBN;
// console.log(bookISBN[6], bookISBN[4], bookISBN[9], bookISBN[8]);
// 15.2
// const quote =
//   'A computer once beat me at chess, but it was no match for me at kick boxing';
// console.log(quote.indexOf('chess'));
// 15.3
// console.log(quote.slice(quote.indexOf('boxing')));
// 15.4
// const isContributor = function (author) {
//   return author.indexOf('Contributor') > -1;
// };
// console.log(isContributor('Julie Sussman (Contributor)'));

// 16.1
// function normalizeAuthorName(author) {
//   const basicName = author.toLowerCase().trim().replace('(contributor)', '');
//   const firstname =
//     basicName[0].toUpperCase() + basicName.slice(1, basicName.indexOf(' '));
//   const lastname =
//     basicName[basicName.indexOf(' ') + 1].toUpperCase() +
//     basicName.slice(basicName.indexOf(' ') + 2);
//   console.log(`${firstname} ${lastname}`);
// }
// normalizeAuthorName('  JuliE sussMan (Contributor)');
// 16.2
// const title = books[1].title;
// const newBookTitle = title.replace('Programs', 'Software');
// console.log(title, newBookTitle);
// 16.3
// function logBookTheme(title) {
//   const lowerTitle = title.toLowerCase();
//   if (lowerTitle.startsWith('computer'))
//     console.log('This book is about computers');
//   else if (
//     lowerTitle.includes('algorithms') &&
//     lowerTitle.includes('structures')
//   )
//     console.log('This book is about algorithms and data structures');
//   else if (
//     (lowerTitle.endsWith('system') || lowerTitle.endsWith('systems')) &&
//     !lowerTitle.includes('operating')
//   )
//     console.log(
//       'This book is about some systems, but definitely not about operating systems',
//     );
// }
// logBookTheme('asdfsa algorithms operating sadfasd system');

// 17.1
// function logBookCategories(categories) {
//   const categoriesArray = categories.split(';');
//   for (const category of categoriesArray) console.log(category);
// }
// const bookCategories =
//   'science;computing;computer science;algorithms;business;operating systems;networking;electronics';
// logBookCategories(bookCategories);
// 17.2
// function getKeywordsAsString(books) {
//   const keywordsArray = [];
//   for (const book of books) {
//     keywordsArray.push(...book.keywords);
//   }
//   const keywordsUnique = [...new Set(keywordsArray)];
//   console.log(keywordsUnique.join(';'));
// }
// getKeywordsAsString(books);
// 17.3
// const bookChapters = [
//   ['The Basics', 14],
//   ['Sorting', 254],
//   ['Searching', 372],
//   ['Graphs', 526],
//   ['Strings', 706],
// ];
// function logBookChapters(chapters) {
//   for (const [title, page] of chapters) {
//     console.log(`${title.padEnd(25, '_')} ${page}`);
//   }
// }
// logBookChapters(bookChapters);

// Challenge 4
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
// document.querySelector('button').addEventListener('click', parseText);
// function parseText() {
//   const text = document.querySelector('textarea').value;
//   const textArr = text.split('\n');
//   for (const [i, word] of textArr.entries()) {
//     let [first, second] = word.trim().toLowerCase().split('_');
//     second = second[0].toUpperCase() + second.slice(1);
//     const fullWord = first + second;
//     console.log(`${fullWord.padEnd(20, ' ')}${'✅'.repeat(i + 1)}`);
//   }
// }
