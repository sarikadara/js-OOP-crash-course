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
 
//Magazine Constructor
function Magazine(title,author,year,month) {
    Book.call(this,title,author,year);
    this.month =month;
}
//Inherit prototype
Magazine.prototype =Object.create(Book.prototype);
//Intantiate Magazine Object
const mag1 =new Magazine('map one', 'sarika', '2020','march');

// Use Magazine Constructor
Magazine.prototype.constructor =Magazine; 
console.log(mag1);
