//Constructor
function Book(title, author, year) {
this.title =title;
this.author =author;
this.year =year;
 
this.getSummary =function(){
    return`${this.title} was written by ${this.author}  in ${this.year}`;
}


}

//Instatiate an object

const book1 =new Book('Book One', 'Sarika', '2020');
const book2 =new Book('Book Two', 'Suma', '1997');
  console.log(book2);
