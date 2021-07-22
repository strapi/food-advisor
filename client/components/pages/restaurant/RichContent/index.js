import delve from 'dlv';

import ReactMarkdown from 'react-markdown';

import { getStrapiMedia } from '../../../../utils';

import Container from '../../../shared/Container';

import 'github-markdown-css';

const gfm = require('remark-gfm');

const RestaurantCard = ({
  content
}) => {
  return (
    <Container>
      <div className="markdown-body rounded-xl w-full md:p-12 p-6 mt-2 bg-white">
        <ReactMarkdown
          children={content}
          remarkPlugins={[gfm]}
          linkTarget="_blank"
          components={{
            img: ({ node, ...props }) => (
              <img src={getStrapiMedia(delve(props, 'src'))} />
            ),
          }}
        ></ReactMarkdown>
      </div>
    </Container>
  );
};

export default RestaurantCard;
