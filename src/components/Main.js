import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Card from "./Card";
import Loader from "./Loader";
const Main = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const imgs = axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=QoqftE69GyNJQhHCU53A6dP1FL2JsrzB1fKr2nA6",
        {
          params: {
            start_date: "2022-01-5",
          },
        }
      )
      .then((res) => {
        setData(res.data);
      })
      .then((res) => {
        setLoading(false);
      });
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Container>
      {data.map((item) => (
        <Card
          key={item.url}
          image={item.url}
          title={item.title}
          author={item.copyright}
          date={item.date}
          description={item.explanation}
        />
      ))}
      <Card />
    </Container>
  );
};

const Container = styled.section`
  height: 100vh;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Main;
