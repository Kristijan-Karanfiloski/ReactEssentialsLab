import { useState } from "react";

const OnChangeEventHandler = () => {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  ////////////////////////////////////////////////////////////////

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  // const handlePaymentChange = (event) => {
  //   setPayment(event.target.value);
  // };

  return (
    <>
      <div>
        <h1>On Change Event Handler</h1>
        <div>
          <input onChange={handleNameChange} value={name} />
          <p>Name :{name}</p>

          <input
            onChange={handleQuantityChange}
            type="number"
            value={quantity}
          />
          <p>Quantity :{quantity}</p>

          <textarea
            onChange={handleCommentChange}
            value={comment}
            placeholder="Enter delivery instructions"
          />
          <p>Comment : {comment}</p>

          <select
            value={payment}
            // onChange={handlePaymentChange}
            onChange={(e) => setPayment(e.target.value)}
          >
            <option value="">Select an option</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Giftcard">Giftcard</option>
          </select>
        </div>
        <p>Payment :{payment}</p>

        <label>
          <input
            type="radio"
            value="Pick up"
            checked={shipping === "Pick up"}
            onChange={(e) => setShipping(e.target.value)}
          />
          Pick Up
        </label>
        <label>
          <input
            type="radio"
            value="Delivery"
            checked={shipping === "Delivery"}
            onChange={(e) => setShipping(e.target.value)}
          />
          Delivery
        </label>
        <p>Shipping :{shipping}</p>
      </div>
    </>
  );
};

export default OnChangeEventHandler;
