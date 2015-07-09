//Author: Sredna Kunowski 7/3/2015

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
