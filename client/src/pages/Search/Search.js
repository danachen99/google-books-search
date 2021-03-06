import React, { useState, useEffect } from "react";
import Jumbotron from "../../components/Jumbotron/";
import API from "../../utils/API";
import CardBody from "../../components/DataBody/DataBody";
import Card from "../../components/Card/Card"
import SaveButton from "../../components/SaveButton"
import ViewButton from "../../components/ViewButton"
import { Col, Row, Container } from "../../components/Grid/";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

function Search() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState("")

  // Updates component state when the user types into the input field
  function handleInputChange(event) {
    const { value } = event.target;
    setSearch( value.replace(/\s/g, '') );
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  function handleSearchSubmit(event) {
    event.preventDefault();
    API.getByTitle(search)
      .then(res => {
        setBooks(res)
        console.log(res)
        }
      )
      .catch(err => console.log(err));
  };

  
  function handleSaveSubmit(bookData) {
    API.saveBook({
      _id : bookData.id,
      title: bookData.title,
      authors: bookData.authors,
      description: bookData.description,
      image: bookData.image,
      link: bookData.link
    })
  };

    return (
      <Container fluid>
        <Row>
          <div className="hero">
              <h1>Google Books</h1>
              <h4>Search by title</h4>
          </div>
          <Col size="md-12">
            <form className="d-flex">
              <Input
                onChange={handleInputChange}
                name="title"
                style={{ textAlign: "center", backgroundColor: "rgb(232,240,254)" }}
                placeholder='For example, "The Giver"'
              />
              <FormBtn
                style={{ textAlign: "center", backgroundColor: "rgb(232,240,254)" }}
                onClick={handleSearchSubmit}
              >
                <i className="fas fa-search"></i>
              </FormBtn>
            </form>
          </Col>
          <Col size="md-12">
            <Card>
              <h4 className="text-center">Search Results</h4>
              {books.length ? (
              <List>
                {books.map(book => (
                  <ListItem key={book.id}>
                      <Card>
                      <SaveButton
                          handleSaveSubmit={handleSaveSubmit}
                          bookData={book}
                        >
                          <i className="far fa-heart"></i>
                        </SaveButton>
                        <ViewButton
                          link={book.link}
                        />
                        <CardBody
                          key={book.id}
                          title={book.title}
                          authors={book.authors}
                          image={book.image}
                          description={book.description}
                        />
                      </Card>
                  </ListItem>
                ))}
              </List>
            ) : (
              <p className="display-message text-center mt-5">No Results to Display</p>
            )}
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }


export default Search;