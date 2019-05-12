import Card from "./Card";
import React, { Component } from "react";
import axios from "axios";
import CardList from "./CardList";

const cardList = props => {
  if (props.items.length == 0) {
    return <h1>loading....</h1>;
  }

  let center, description, url, date;
  const selectedPage = props.itemIndex;
  const start = 6 * (selectedPage - 1);

  const cardItems = new Array(6).fill(1).map((m, i) => {
    const index = start + i;
    const items = props.items[index];

    if (items) {
      url = items.links[0].href;
      center = items.data[0].center;
      description = items.data[0].description;
      date = items.data[0].date_created;

      return (
        <Card
          key={url}
          url={url}
          center={center}
          description={description}
          date={date}
        />
      );
    }
  });

  return (
    <div>
      <div className="row">
        <div className="card-deck">{cardItems}</div>
      </div>
    </div>
  );
};

export default cardList;
