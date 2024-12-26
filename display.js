import { Link } from 'react-router-dom';

// ShowBooks component renders the list of books in a table row
const ShowBooks = (props) => {
  const Data = props.TBooks;
  
  // If there are books, render them in a table row
  if (Data.length > 0) {
    return (
      Data.map((book) => {
        return (
          <tr key={book._id}> {/* Using _id for key */}
            <td>{book.booktitle}</td>
            <td>{book.PubYear}</td>
            <td>{book.author}</td>
            <td>{book.Topic}</td>
            <td>{book.formate}</td>
            <td>
              <Link to={`/edit/${book._id}`} aria-label={`Edit ${book.booktitle}`}>Edit</Link>
            </td>
            <td>
              <Link to={`/Delete/${book._id}`} aria-label={`Delete ${book.booktitle}`}>Delete</Link>
            </td>
          </tr>
        );
      })
    );
  } else {
    // If no books are available, show a message inside the table structure
    return (
      <tr>
        <td colSpan="7">No Data Available</td>
      </tr>
    );
  }
};

// DisplayData component renders the table with the list of books
export default function DisplayData(props) {
  const Books = props.Books; // Receive books as a prop

  return (
    <div>
      <h3>Book List</h3>
      <table className="table table-striped table-hover" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Book Title</th>
            <th>Pub Year</th>
            <th>Author</th>
            <th>Subject</th>
            <th>Format</th>
          </tr>
        </thead>
        <tbody>
          <ShowBooks TBooks={Books} /> {/* Pass books data to ShowBooks component */}
        </tbody>
      </table>
    </div>
  );
}
