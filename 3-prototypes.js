//Constructor
function Book(title, author, year) {
    this.title =title;
    this.author =author;
    this.year =year;
}
//Getsummary 
    Book.prototype.getSummary =function(){
        return`${this.title} was written by ${this.author}  in ${this.year}`;
    };
    
// getage
  Book.prototype.getAge=function(){
      const years = new Date().getFullYear() - this.year;
      return`${this.title} is ${years} years old`;
  };

//Revise  / change year
  Book.prototype.revise=function(newYear){
      this.year=newYear;
      this.revised=true;
  };
    
//Instatiate an object
const book1 =new Book('Book One', 'Sarika', '2020');
const book2 =new Book('Book Two', 'Suma', '1997');
console.log(book2);
book2.revise('2020');
console.log(book2);