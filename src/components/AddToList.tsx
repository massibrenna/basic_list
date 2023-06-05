import React, { useState } from "react";
import IProps from "../interfaces/IProps";

interface IAddProps {
  people: IProps["people"][];
  setPeople: React.Dispatch<React.SetStateAction<IProps["people"][]>>;
}

const AddToList: React.FC<IAddProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    id: 0,
    name: "",
    age: "",
    note: "",
    img: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    if (!input.name || !input.age) return;

    setPeople([
      ...people,
      {
        id: input.id,
        name: input.name,
        age: parseInt(input.age),
        img: input.img,
        note: input.note,
      },
    ]);

    setInput({
      id: 0,
      name: "",
      age: "",
      img: "",
      note: "",
    });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        onChange={handleChange}
        className="AddToList-input"
        name="id"
        value={input.id}
        placeholder="Id"
      />
      <input
        type="text"
        onChange={handleChange}
        className="AddToList-input"
        name="name"
        value={input.name}
        placeholder="Name"
      />
      <input
        type="text"
        onChange={handleChange}
        className="AddToList-input"
        name="age"
        value={input.age}
        placeholder="Age"
      />
      <input
        type="text"
        onChange={handleChange}
        className="AddToList-input"
        name="img"
        value={input.img}
        placeholder="Image Url"
      />
      <textarea
        onChange={handleChange}
        className="AddToList-input"
        name="note"
        value={input.note}
        placeholder="Note"
      />
      <button onClick={handleClick} className="AddToList-btn">
        Add to List
      </button>
    </div>
  );
};

export default AddToList;
