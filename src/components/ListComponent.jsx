import React from "react";
import "../styles/ListStyles.css";

export const List = props =>
  props.tasks.map(item => (
    <div className="list-background" key={item.id}>
      <p className="list__items">
        <strong>{item.value}</strong>
      </p>
      <i
        className="fa fa-times list__delete-icon"
        onClick={() => props.deleteItem(item.id)}
      />
    </div>
  ));
