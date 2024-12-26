import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import DisplayData from './display';

export default function DeleteBook(props) {
  const [state, setState] = useState([]);
  let params = useParams();

  useEffect(() => {
    console.log("useEffect delete " + params.id);
    axios.post("http://localhost:5000/deleteBook/" + params.id)
      .then(res => {
        axios.get("http://localhost:5000/allbooks")
          .then(res => {
            setState(res.data);
            console.log("Data set in the state and state length: " + res.data.length);
          })
          .catch(err => {
            console.log("Error occurred while fetching all books: ", err);
          });
      })
      .catch(err => {
        console.log("Error occurred while deleting the book: ", err);
      });
  }, [params.id]);

  return (
    <div>
      <DisplayData Books={state} />
    </div>
  );
}
