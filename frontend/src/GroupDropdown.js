import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import employeeData from './employeeData';

function GroupDropdown(props) {

    const dropDownItems = employeeData.map(employee => <Dropdown.Item href="#/action-1">{employee.name}</Dropdown.Item>)

    return(
        <div>
            <Dropdown >
                <Dropdown.Toggle className="groupDropdownButton" id="dropdown-basic">
                    ITS-ALL
                </Dropdown.Toggle>
                <Dropdown.Menu className="groupDropdownButton">
                   {dropDownItems}
                </Dropdown.Menu>
            </Dropdown>

        </div>
    );
}

export default GroupDropdown;