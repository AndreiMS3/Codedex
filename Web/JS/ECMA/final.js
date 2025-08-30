
const goodreadsInfo = {
  currentlyReading: [
    {
      title: "The demons",
      author: "Fiodor Dostoievsky"
    }
  ],

  wantToRead: [
    {
      title: "The rebel",
      author: "Albert Camus"
    }
  ]
}

/*Define an addNewBooks() arrow function with the following parameters:

A books array of strings.
An optional additionalBookObjects array.
This function should return a new array that includes all items from books along with any items from the additionalBookObjects array.

Then, use this function on at least one of the lists from the goodreadsInfo object*/

const addNewBooks = (books, additionalBookObjects = []) => [...books, ...additionalBookObjects];

goodreadsInfo.currentlyReading = addNewBooks(goodreadsInfo.currentlyReading,[{title:"The foreigner", author: "Albert Camus"}] );




/*Define a showGoodreadsInfo() function that accepts a single info parameter.

Inside, create two variables representing the reading list arrays from the info parameter.

Then, use a combination of console.log() statements, for...of loops, 
and template literals to output our reading lists to the console.

Lastly, execute the showGoodreadsInfo() function. */

const showGoodreadsInfo = (info) => {
    const currentlyReading = info.currentlyReading;
    const wantToRead = info.wantToRead;

    console.log("Currently Reading: ");
    for (const book of currentlyReading){
        console.log(`${book.title} by ${book.author}`);
    }
    console.log("Want to read: ");
    for (const book of wantToRead){
        console.log(`${book.title} by ${book.author}`);
    }
}

showGoodreadsInfo(goodreadsInfo);