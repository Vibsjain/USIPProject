import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { SketchPicker } from "react-color";

const MainForm = () => {
  const [form, setForm] = useState({
    name: "",
    link: "",
    color: "#000000",
    places: [],
  });

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const checkedBoxes = document.querySelectorAll('input[type=checkbox]:checked');
    setForm({...form, places: checkedBoxes});
    console.log(form);
    console.log(JSON.stringify(form));
    let url = "http://localhost:5000/add/link";
    await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((response) => response.json())
    .then((res) => console.log(res))
  };

  const onColorChange = color => {
    setForm({...form, color: color.hex});
  }

  const onCheck = event => {
    let newArray = [...form.places, event.target.id];
    if (form.places.includes(event.target.id)) {
      newArray = newArray.filter(place => place !== event.target.id);
    } 
    setForm({
      ...form,
      places: newArray
    });
  }

  return (
    <div className="row">
      <div className="col-2"></div>
      <div className="col-6">
        <Form>
          <Form.Group controlId="NameBox">
            <Form.Label>Link Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="The name of the link to be displayed"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="UrlBox">
            <Form.Label>URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="The URL to be saved"
              value={form.link}
              onChange={(e) => setForm({ ...form, link: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="AddToBox">
            <Form.Row>
              <Col>
                <Form.Check type="checkbox" id="Notices" label="Notices" onChange={onCheck} />
                <Form.Check type="checkbox" id="Tenders" label="Tenders" onChange={onCheck} />
                <Form.Check type="checkbox" id="Jobs" label="Jobs" onChange={onCheck} />
                <Form.Check
                  type="checkbox"
                  id="First Year Notices"
                  label="First Year Notices"
                  onChange={onCheck}
                />
              </Col>
              <Col>
                <Form.Check
                  type="checkbox"
                  id="Forthcoming Events"
                  label="Forthcoming Events"
                  onChange={onCheck}
                />
                <Form.Check
                  type="checkbox"
                  id="Web Resources"
                  label="Web Resources"
                  onChange={onCheck}
                />
                <Form.Check
                  type="checkbox"
                  id="Important Links"
                  label="Important Links"
                  onChange={onCheck}
                />
              </Col>
            </Form.Row>
          </Form.Group>

          <Button variant="primary" type="submit" onClick={onSubmitHandler}>
            Submit
          </Button>
        </Form>
      </div>

      <div className="col-4">
        <div style={{ marginLeft: "2vw" }}>
          <p>Link Color</p>
          <SketchPicker color={form.color} onChangeComplete={onColorChange} />
        </div>
      </div>
    </div>
  );
};

export default MainForm;
