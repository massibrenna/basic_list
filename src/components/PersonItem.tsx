import React from "react";
import IProps from "../interfaces/IProps";

interface IItemProps {
  person: IProps["people"];
  handleRemoveClick: (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
}
const PersonItem: React.FC<IItemProps> = ({ person, handleRemoveClick }) => {
  return (
    <li key={`_key_${person.id}`} className="List">
      <div className="List-Header">
        <img alt="" className="List-img" src={person.img} />
        <h2>{person.name}</h2>
      </div>
      <p>{person.age} years old</p>
      <p className="List-note">{person.note}</p>
      <p>
        <button
          onClick={(e) => handleRemoveClick(e, person.id)}
          className="AddToList-btn"
        >
          Toggle
        </button>
      </p>
    </li>
  );
};
export default PersonItem;
