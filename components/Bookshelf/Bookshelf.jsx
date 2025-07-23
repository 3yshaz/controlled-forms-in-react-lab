import React, { useState } from "react";

function BookShelf() {
  // State to store the list of books
  const [books, setBooks] = useState([]);

  // State to handle form inputs for a new book
  const [newBook, setNewBook] = useState({
    title: "",
    author: ""

  });
// Function to handle input changes
const handleInputChange = (event) => {
    const { name, value } = event.target;
  
    // Update the corresponding field in newBook while keeping the rest unchanged
    setNewBook({
      ...newBook,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Stop the page from refreshing
  
    // Add the newBook object to the books array
    setBooks([...books, newBook]);
  
    // Reset newBook to clear the form fields
    setNewBook({ title: "", author: "" });
  };
  
  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        {
            <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={newBook.title}
                onChange={handleInputChange}
                required
              />
            </div>
          
            <div>
              <label htmlFor="author">Author:</label>
              <input
                type="text"
                id="author"
                name="author"
                value={newBook.author}
                onChange={handleInputChange}
                required
              />
            </div>
          
            <button type="submit">Add Book</button>
          </form>
          
    
        }
      </div>
      <div className="bookCardsDiv">
        {
            <div className="bookCardsDiv">
            {books.map((book, index) => (
              <div key={index} className="bookCard">
                <h4>{book.title}</h4>
                <p>by {book.author}</p>
              </div>
            ))}
          </div>
          
        }
      </div>
    </div>
  );



  
}


export default BookShelf;