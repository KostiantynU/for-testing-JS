// // // const books = [
// // //   {
// // //     title: 'The Last Kingdom',
// // //     author: 'Bernard Cornwell',
// // //     rating: 8.38,
// // //   },
// // //   {
// // //     title: 'Beside Still Waters',
// // //     author: 'Robert Sheckley',
// // //     rating: 8.51,
// // //   },
// // //   {
// // //     title: 'The Dream of a Ridiculous Man',
// // //     author: 'Fyodor Dostoevsky',
// // //     rating: 7.75,
// // //   },
// // //   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// // // ];
// // // const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// // // const AUTHOR = 'Robert Sheckley';
// // // // Change code below this line

// // // const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// // // const bookByAuthor = books.find(book => book.author === AUTHOR);
// // // console.log(bookWithTitle);
// // // console.log(bookByAuthor);

// // const tweets = [
// //   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
// //   { id: '001', likes: 2, tags: ['html', 'css'] },
// //   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
// //   { id: '003', likes: 8, tags: ['css', 'react'] },
// //   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// // ];
// // // const totalLikes = tweets.reduce((likes, tweet) => {
// // //   return (likes += tweet.likes);
// // // }, 0);
// // // console.log('TotalLikes:', totalLikes);
// // // const avarageTotal = totalLikes / tweets.length;
// // // console.log('Avarage likes:', avarageTotal);

// // const countLikes = tweets => {
// //   return tweets.reduce((totalLikes, tweet) => (totalLikes += tweet.likes), 0);
// // };
// // console.log(countLikes(tweets));
// // // const tags = tweets.reduce((allTags, tweet) => {
// // //   allTags.push(...tweet.tags);
// // //   return allTags;
// // // }, []);
// // // console.log('tags:', tags);

// // const getTags = tweets => {
// //   return tweets.reduce((allTags, tweet) => {
// //     allTags.push(...tweet.tags);
// //     return allTags;
// //   }, []);
// // };
// // console.log('getTags:', getTags(tweets)); // чому віддає андефайнд, якщо не має ретьорна перед твітс.ред'юс?
// // // Тому що стоять дужки, тіло функції, явне повернення. А самого "повернення" і не має?
// // const tags = getTags(tweets);
// // console.log('const tags', tags);

// // const getTagsStats = (acc, tag) => {
// //   if (!acc.hasOwnProperty(tag)) {
// //     acc[tag] = 0;
// //   }
// //   acc[tag] += 1;
// //   return acc;
// // };
// // console.log('getTagsStats: ', getTagsStats(tweets));
// // const countTags = tags => tags.reduce(getTagsStats, {});
// // const tagCount = countTags(tags);
// // console.log(tagCount);
// // console.log(tagCount.hasOwnProperty('js'));

const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
  },
];

// Change code below this line
const getTotalFriendCount = users => {
   users.reduce((accuum, element) => 
               accuum += element.)
};
// Change code above this line
