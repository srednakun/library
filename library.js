//Author: Sredna Kunowski 7/3/2015

//node's file system method is included to support file imports
var fs = require('fs');

//shelf file is imported
eval(fs.readFileSync('shelf.js')+'');

function Library()
{
	this.library = [];

	//adds a shelf to the library
	this.addShelf = function(shelf)
	{
		this.library.push(shelf);
	};

	//removes a shelf from the library
	this.removeShelf = function(shelf)
	{
		//looking through the entire library
		for (var i = 0; i < this.library.length; i++) 
		{
			//current shelf 
            var shelfMatch = this.library[i];

            //shelf is removed 
			if (shelfMatch === shelf) 
			{
				this.library.splice(i,1);	
			}
		}
	};

	this.findBook = function(book)
	{
		var searchBook = book;

		for (i = 0; i < this.library.length; i++ )
		{
			var currentShelf = this.library[i];
			//console.log(currentShelf);
			if(currentShelf.findBook(searchBook))
			{
				//console.log(currentShelf);
				return currentShelf;
			}
		}
		return null;
	};
};




/*//Testing

var myLibrary = new Library();

var shelf1 = new Shelf();
var shelf2 = new Shelf();
var shelf3 = new Shelf();
var shelf4 = new Shelf();
var shelf5 = new Shelf();
var shelf6 = new Shelf();

myLibrary.addShelf(shelf1);
myLibrary.addShelf(shelf2);
myLibrary.addShelf(shelf3);
myLibrary.addShelf(shelf4);
myLibrary.addShelf(shelf5);
myLibrary.addShelf(shelf6);

var book1 = new Book("Harry Potter", "J.K. Rowling");
var book2 = new Book("Wipersnappers", "Florence Machine");
var book3 = new Book("Tired Rose", "The Beast");
var book4 = new Book("Little Big Universe", "Winnie P. Vladsmere");
var book5 = new Book("The Woman and the Sea", "H.H. Pierce McGregar");
var book6 = new Book("How To Kiss Like A Butterfly", "Who Knows");
var book9 = new Book("A Million Wonders", "Walt Disney");


shelf1.addBook(book1);
shelf1.addBook(book2);
shelf2.addBook(book3);
shelf3.addBook(book4);
shelf3.addBook(book5);
shelf6.addBook(book6);

//console.log(shelf3);

console.log(myLibrary.findBook(book6));
console.log(myLibrary.findBook(book5));

*/
