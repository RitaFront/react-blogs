import React from 'react';
import './tags.module.scss';
import { Nav } from 'react-bootstrap';

interface ITags {
  arr: string[];
  onClickTags: (index: number) => void;
}

export const Tags = ({ arr, onClickTags }: ITags) => {
  return (
    <Nav
      className="tags-home"
      variant="pills"
      defaultActiveKey="link-1"
    >
      {arr.map((el, i) => (
        <Nav.Item key={i}>
          <Nav.Link
            onClick={() => onClickTags(i)}
            eventKey={`link-${i + 1}`}
          >
            {el}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};
