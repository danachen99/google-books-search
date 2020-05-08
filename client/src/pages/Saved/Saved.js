import React, { useEffect, useState } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import CardBody from "../../components/DataBody/DataBody";
import Card from "../../components/Card/Card";
import DeleteBtn from "../../components/DeleteBtn"
import ViewButton from "../../components/ViewButton"

function Saved() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    API.getBooks()
    .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  }, [])

  function handleDeleteSubmit(id) {
    API.deleteBook(id)
    setBooks(books.filter((book) => {
        return book._id != id;
    }))
  }

    return (
      <Container fluid>
        <Row>
          <div>
              <h1>Saved Books</h1>
          </div>
          <Col size="md-12">
            <Card>
              {books.length >0? (
              <List> 
                {books.map(book => (
                  <ListItem key={book.id}>
                      <Card>
                      <DeleteBtn
                          handleDeleteSubmit={handleDeleteSubmit}
                          id={book._id}
                        />
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
              <p className="display-message text-center mt-5">Nothing Saved Yet</p>
            )}
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }

export default Saved;