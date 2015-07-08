//Author: Sredna Kunowski 7/3/2015

//This is the Book class. It returns information about books, like the title and author.

function Book (title, author) 
{
	this.bookAuthor = author;
	this.bookTitle = title;

	this.getBookAuthor = function() 
	{
		return this.bookAuthor;
	};

	this.getBookTitle = function()
	{
		return this.bookTitle;
	};
};
