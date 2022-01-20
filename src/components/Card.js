import React, { useState } from "react";
import styled from "styled-components";
import Loader from "./Loader";
const Card = ({ image, title, author, date, description }) => {
  const [readMore, setReadMore] = useState(false);
  const [like, setLike] = useState(false);
  const handleReadMore = () => {
    if (readMore) {
      setReadMore(false);
    } else {
      setReadMore(true);
    }
  };
  const handleLike = () => {
    if (like) {
      setLike(false);
    } else {
      setLike(true);
    }
  };
  return (
    <Container>
      <Image src={image} alt={title} />

      <LikeButton onClick={handleLike}>
        {like ? (
          <i class='fas fa-heart fa-2x'></i>
        ) : (
          <i className='far fa-heart fa-2x '></i>
        )}
      </LikeButton>

      <Caption>
        <Title>
          {title}, <Author>by {author}</Author>
        </Title>
        <Date>{date}</Date>

        <Description>
          {readMore ? description.slice(0, 150) : description}

          <Expand onClick={handleReadMore}>
            {readMore ? "Read less..." : "Read more..."}
          </Expand>
        </Description>
      </Caption>
    </Container>
  );
};

const Container = styled.figure`
  margin: 0;
  color: #fff;
  width: 60%;
  height: 75%;
  border-radius: 15px;
  @media (max-width: 900px) {
    width: 100%;
  }

  margin-bottom: 5rem;
`;

const Title = styled.h2`
  color: #fff;
  font-weight: normal;
  font-size: 1rem;
`;

const Author = styled.cite`
  color: #999;
  font-size: 0.8rem;
`;

const Description = styled.p`
  font-size: 0.8rem;
`;

const Image = styled.img`
  width: 100%;
  height: 60%;
  background: no-repeat center center fixed;
`;
const Caption = styled.figcaption``;

const Expand = styled.span`
  color: #999;
  font-size: 0.8rem;
`;
const Date = styled.p`
  color: #ccc;
  font-size: 0.8rem;
`;

const LikeButton = styled.div`
  padding: 0.5rem;
`;

export default Card;
