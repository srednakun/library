//Author: Sredna Kunowski 7/3/2015

//The Shelf class stores books. It can add, remove, and search for a book.

//node's file system method is included to support file imports
var fss = require('fs');

//book file is imported
eval(fss.readFileSync('book.js')+'');

function Shelf()
{
	//empty list to store books
	this.books = [];

	//adds a book to the shelf
	this.addBook = function(book)
	{
		//adds a book to the end of the shelf
		this.books.push(book);
	};

	//removes a book from the shelf
	this.removeBook = function(book)
	{
		//looking through the entire shelf
		for (var i = 0; i < this.books.length; i++) 
		{
			//current book 
            var bookMatch = this.books[i];

            //book is removed 
			if (bookMatch === book) 
			{
				this.books.splice(i,1);	
			}
		}
	};

	//finds a book
	this.findBook = function(book)
	{
		for (var i = 0; i < this.books.length; i++)
		{
			var bookMatch = this.books[i];

			if (bookMatch === book)
			{
				return true;
			}
		} 
		return false;
	}
};
