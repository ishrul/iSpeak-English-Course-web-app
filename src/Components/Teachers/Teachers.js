import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import "./Teachers.css";

const Teachers = () => {
  return (
    <div>
      <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            src="https://ld-wt73.template-help.com/tf/ispeak/images/our-team-2-272x197.jpg"
          />
          <Card.Body>
            <Card.Title>SAM JOHNSON</Card.Title>
            <Card.Text>Spanish Teacher</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last 3 years</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://ld-wt73.template-help.com/tf/ispeak/images/our-team-1-272x197.jpg"
          />
          <Card.Body>
            <Card.Title>EMMA WATTSON</Card.Title>
            <Card.Text>German Teacher</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last 4 years</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-s1FMssR_LOeziO8ifw3B8yFbkTP7V3KDSA&usqp=CAU"
          />
          <Card.Body>
            <Card.Title>JHON SMITH</Card.Title>
            <Card.Text>English Teacher</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last 3 years</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Teachers;
