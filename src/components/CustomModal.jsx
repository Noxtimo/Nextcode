import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SignIn from "./sign-in.component.jsx";
import { auth } from "firebase/auth";

function CustomModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var user = firebase.auth().currentUser;
  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("User signed out successfully.");
        // Optionally, you can add additional logic after logout
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  return (
    <>
      <div
        className="nav-link hover"
        onClick={user ? handleLogout : handleShow}
      >
        {user ? "Logout" : "Login"}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <SignIn />
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomModal;
