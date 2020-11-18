import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
import { Card, Image, Modal, Col, Button } from "react-bootstrap";
import { WatchListContext } from "./WatchList";
import CoinDetailPage from "./CoinDetailPage";

const PopularCoin = ({ coin }) => {
  const { addCoin } = useContext(WatchListContext);
  const padding = { padding: "35px" };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {/* <Link to={`/coins/${coin.id}`}>
        <br />
        <Image src={coin.image} alt={coin.name} height="50px" width="50px" />
        <Card.Title>{coin.name}</Card.Title>
      </Link> */}
      <Col sm onClick={handleShow}>
        <Image src={coin.image} alt={coin.name} height="100px" width="auto" />
      </Col>

      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
        backdrop="static"
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {coin.id}{" "}
            <Image
              src={coin.image}
              alt={coin.name}
              height="50px"
              width="auto"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CoinDetailPage coin={coin} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Card.Body>{coin.current_price}</Card.Body>

      <Card.Text
        className={
          coin.price_change_percentage_24h < 0 ? "text-danger" : "text-success"
        }
        style={padding}
      >
        {" "}
        {coin.price_change_percentage_24h < 0 ? (
          <i className="fas fa-sort-down"></i> // down
        ) : (
          <i className="fas fa-sort-up"></i> //up
        )}
        {coin.price_change_percentage_24h}
      </Card.Text>

      <Card.Footer>
        <a onClick={() => addCoin(coin.id)} href="#">
          <i className="add-icon fas fa-plus-circle text-success">&nbsp;Add</i>
        </a>
      </Card.Footer>
    </>
  );
};

export default PopularCoin;
