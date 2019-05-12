import React, { Component } from "react";

const PaginationBar = props => {
  const pageSize = Math.ceil(props.items.length / 6);
  console.log(props.items.length + "$$");
  let page;

  if (pageSize <= 1) {
    page = (
      <a
        onClick={e => {
          props.changePageIndex(1);
        }}
      />
    );
  } else {
    page = new Array(pageSize).fill(1).map((value, index) => {
      return (
        <a
          key={index}
          onClick={e => {
            props.changePageIndex(index + 1);
          }}
        >
          {index + 1}
        </a>
      );
    });
  }

  return <div style={{ margin: "auto", marginTop: 15 }}>{page}</div>;
};
export default PaginationBar;
