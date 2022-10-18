import './App.css'
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap'
import axios from 'axios'

const App = () => {
  const [giphy, setGiphy] = useState("");
  const [fetching, setFetching] = useState("false");

  useEffect(() => {
    const fetchData = async () => {
      const apiRoot = "https://api.giphy.com/v1/gifs/"
      const api_key = process.env.REACT_APP_GIPHY_KEY
      const result = await axios(`${apiRoot}trending?api_key=${api_key}`)
      console.log(result)
      const randomIndex = Math.floor(Math.random() * 50)
      setGiphy(`${result.data.data[randomIndex].images.fixed_height.url}`)
    } 
    fetchData()
  }, [fetching])
  return (
    <div>
      <Container style={{marginTop: "10px"}}>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Card style={{  backgroundColor:'powderBlue' }}>
              <Card.Img 
                variant="top"
                style={{height:'450px', width: '100%' }}
                src={giphy} />
                <Card.Body>
                  <Card.Title>Giphy App</Card.Title>
                  <Card.Text>
                    Fetches random giphy images on click
                  </Card.Text>
                  <Button variant="primary"
                  onClick={()=> setFetching(!fetching)}>Next</Button>
                </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>          
    </div>
  )
}

export default App