// arraymethods

const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];


function getBook(id) {
  return data.find((d) => d.id === id);
}

const book = getBook(2);
book;
const { genres, titles, author } = book;
// rest operator 
const [primary, secondary, ...ohter] = genres
console.log(genres)
console.log(primary, secondary, ohter)

const newarray  = ["horror", genres]
newarray
// spread operator
const secondnew = ["fun", ...genres]
secondnew
//overriding existing property using spread
const updatedbook = {...book, genres: ["horror"],overridedby : "vb"}

updatedbook
const title = data.map(book=>book.title);
title

// sort
const list = [1,3,9,5,5,6,7,8]
const odlist = list.slice().sort((a,b) => a-b)
list
odlist

sortpage = data.slice().sort((a,b)=> a.pages-b.pages)
sortpage
data.forEach(book=> console.log(book.author));

const topR = data.filter(book => book.hasMovieAdaptation == true)
topR 

let totalpages = data.reduce((acu,book) => acu+book.pages,0)
totalpages

let longTitle = data.reduceRight((acu,book) => acu+book.title,"")
longTitle

// let genres = data.some((book)=> book.genres.includes("Horror") == false);
// genres

let pages = data.every(book=> book.pages > 223 )
pages

console.log( data.length) 

// iteration method
// find
// foreach
// map
// filter
// reduce
// reduceRight
// some
// every

//transform method
//map
//flatmap
//includes
// slice
//splice
// push 
// pop
// unshift
// shift
// join

const arrays = [[1, 2], [3, 4], [5, 6]];

let joinarr = arrays.join()
joinarr

const fruits = ['apple', 'banana', 'orange'];
let ente = fruits.entries()
for (const en of ente){
  console.log(en)
}

const arra = arrays.flat()
arra

const flattenedArray = arrays.flatMap(function(array) {
  return array.map(function(element) {
    return element * 2;
  });
});
flattenedArray

console.log(flattenedArray); // Output: [2, 4, 6, 8, 10, 12]
 const arr = [3,3,1,4,3]
function add(a,b){
  return a+b;
}
 let ss = arr.flatMap(x => add(x,9))
 console.log(ss)
