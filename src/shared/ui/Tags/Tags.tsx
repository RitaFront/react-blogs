import React from 'react';
import './tags.module.scss';
import { Nav } from 'react-bootstrap';

interface ITags {
  arr: string[];
  onClickTags: (index: number) => void;
  tagActive: number;
}

export const Tags = ({ arr, onClickTags, tagActive }: ITags) => {
  // const { tags } = useSelector<RootState, TagsHomeState>(
  //   (state) => state.tagsHome
  // );

  // const [searchParams, setSearchParams] = useSearchParams();
  // const tagActive = searchParams.get('tags');
  // const tagActiveIndex = tags.findIndex((tag) => tag === tagActive);
  // console.log(tagActiveIndex);

  return (
    <Nav
      className="tags-home"
      variant="pills"
      defaultActiveKey={`link-${tagActive}`}
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
