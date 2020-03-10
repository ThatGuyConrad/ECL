import React from 'react';
import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import './App.css';


function App() {
  return (
    <div className="mainContainer">
      <div>
      <h1 className="heading">Shared Libraries</h1>
      <input className="searchBar" type="text" placeholder="All Libraries"></input>
      </div>

      <ListGroup>
        <ListGroup.Item href="#link1">
          Information Centre
        </ListGroup.Item>
        <ListGroup.Item href="#link2">
          SharePoint Online
        </ListGroup.Item>
        <ListGroup.Item href="#link3">
          Currency
        </ListGroup.Item>
        <ListGroup.Item href="#link4">
          ITS Community - Communaute STI 
        </ListGroup.Item>
        <ListGroup.Item href="#link5">
          CA Developers Forum
        </ListGroup.Item>
        <ListGroup.Item href="#link6">
          CA Portfolio
        </ListGroup.Item>
    </ListGroup>

    <Button className="librariesButton">Libraries</Button>
    </div>
  );
}

export default App;
