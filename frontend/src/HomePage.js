import React from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import './css/HomePage.css';
import GroupDropdown from './GroupDropdown.js';
import employeeData from './employeeData.js';

function HomePage() {
 //const dropDownItems = employeeData.map(employee => <GroupDropdown key={employee.id} employee={employee} />)

  return (
    <div className="mainContainer">
      <div className="headerstrip">
      <h4 className="heading">User Name</h4>
      <input className="searchBar" type="text" placeholder="All Libraries"></input>
      </div>
      <ListGroup className="listGroup">
        <ListGroup.Item href="#link1">
          <GroupDropdown />  
        </ListGroup.Item>
        <ListGroup.Item href="#link2">
          <GroupDropdown />
        </ListGroup.Item>
        <ListGroup.Item href="#link3">
          <GroupDropdown />
        </ListGroup.Item>
        <ListGroup.Item href="#link4">
          <GroupDropdown />
        </ListGroup.Item>
        <ListGroup.Item href="#link5">
          <GroupDropdown />
        </ListGroup.Item>
        <ListGroup.Item href="#link6">
          <GroupDropdown />
        </ListGroup.Item>
    </ListGroup>
    </div>
  );
}
export default HomePage;