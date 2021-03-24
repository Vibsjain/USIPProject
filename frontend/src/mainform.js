import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import {SketchPicker} from 'react-color';

const MainForm = () => {
  return (
    <div className = "row">
      <div className = "col-2"></div>
      <div className = "col-6">
      <Form>
        <Form.Group controlId="NameBox">
          <Form.Label>Link Name</Form.Label>
          <Form.Control type="text" placeholder="The name of the link to be displayed" />
        </Form.Group>

        <Form.Group controlId="UrlBox">
          <Form.Label>URL</Form.Label>
          <Form.Control type="text" placeholder="The URL to be saved" />
        </Form.Group>

        <Form.Group controlId="AddToBox">
          <Form.Row>
            <Col>
              <Form.Check type="checkbox" id = "Notices" label="Notices" />
              <Form.Check type="checkbox" id = "Tenders" label="Tenders" />
              <Form.Check type="checkbox" id = "Jobs" label="Jobs" />
              <Form.Check type="checkbox" id = "Frist Year Notices" label="First Year Notices" />
            </Col>
            <Col>
              <Form.Check type="checkbox" id = "Forthcoming Events" label="Forthcoming Events" />
              <Form.Check type="checkbox" id = "Web Resources" label="Web Resources" />
              <Form.Check type="checkbox" id = "Important Links" label="Important Links" />
            </Col>
          </Form.Row>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>

      </Form>
      </div>

      <div className = "col-4">
        <div style = {{marginLeft: "2vw"}}>
          <p>Link Color</p>
          <SketchPicker 
            color = { {r: 0, g: 0, b: 0} }
          />
        </div>
      </div>

    </div>
  );
};

export default MainForm;