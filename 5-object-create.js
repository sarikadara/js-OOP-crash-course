//Object of protos
const bookProtos = {
    getSummary: function() {
        return `${this.title} wa wiiten by ${this.author} in${this.year}`;
    },
    getAge:function() {
        const years = new Date().getFullYear() - this.year;
        return`${this.title} is ${years} years old`;
  
    }
}

//Create Object
//const book1 =Object.create(bookProtos);
//book1.title ='Book One';
//book1.author ='sarika';
//book1.year ='2020';

const book1 =Object.create(bookProtos,{
    title:{value:'Book One'},
    author:{value:'Sarika'},
    year:{value:'20220'}
} ); 
console.log(book1);