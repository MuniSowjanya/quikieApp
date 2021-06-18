import React, { useState, useCallback } from "react";
import Modal from "react-modal";
import "./styles.css";

function More(props) {
  console.log(props.item);
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);
  return (
    <div>
      <input
        className="btn btn-success"
        type="button"
        value="More Details"
        onClick={openModal}
      />
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        Active Cryptocurencies:<h3>{props.item.active_cryptocurrencies}</h3>
        Active Exchanges:<h3>{props.item.active_exchanges}</h3>
        Total Market Cap:<h3>{props.item.quote.USD.total_market_cap}</h3>
        <input
          className="btn btn-danger"
          type="button"
          value="Close"
          onClick={closeModal}
        />
      </Modal>
    </div>
  );
}
export default More;
