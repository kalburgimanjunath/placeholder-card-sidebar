import React from "react";
export default function Card({ title, description }) {
  const SingleCard = ({ itemtitle, itemdescription }) => {
    return (
      <div className="card">
        <div className="picture">
          <img src="https://picsum.photos/200/300" />
        </div>
        <div>{itemtitle}</div>
        <div>{itemdescription}</div>
      </div>
    );
  };
  return (
    <div className="cards">
      <SingleCard itemtitle={title} itemdescription={description} />
      <SingleCard itemtitle={title} itemdescription={description} />
      <SingleCard itemtitle={title} itemdescription={description} />
    </div>
  );
}
