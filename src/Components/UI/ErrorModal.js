import React from "react";
import ReactDom from 'react-dom';
import Button from "./Button";
import Card from "./Card";
import Classes from './ErrorModal.module.css';


const Backdrop = (props) => {
  return <div className={Classes.backdrop} onClick={props.onConfirm} />;
       
}

const ModalOvelay = (props) => {
  return (
    <Card className={Classes.modal}>
      <header className={Classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={Classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={Classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
}

const ErrorModal = (props) => {
    return (
      <React.Fragment>
        {ReactDom.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById('backdrop-root'))}

        {ReactDom.createPortal(<ModalOvelay title={props.title} message={props.message} onConfirm={props.onConfirm} />,
        document.getElementById('overlay-root')  )} 
      </React.Fragment>
    );
}

export default ErrorModal;
