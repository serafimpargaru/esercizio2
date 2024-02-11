import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import CardItem from "../card/CardItem";
import { nanoid } from "nanoid";

const AllTheBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await fetch("https://epibooks.onrender.com/");
        const data = await response.json();
        const randomizeBooks = data.sort(() => Math.random() - 0.5);
        setBooks(randomizeBooks);
      } catch (error) {
        console.log(error);
      }
    };
    getBooks();
  }, []);

  return (
    <Container className="mt-4">
      <Row xs={1} md={2} lg={4} className="g-4">
        {books.map((book) => (
          <CardItem
            key={nanoid()}
            img={book.img}
            title={book.title}
            price={book.price}
            category={book.category}
          />
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
