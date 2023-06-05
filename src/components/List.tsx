import React from "react";
import IProps from "../interfaces/IProps";
import PersonItem from "./PersonItem";

interface IListProps {
  people: IProps["people"][];
  setPeople: React.Dispatch<React.SetStateAction<IProps["people"][]>>;
}

const List: React.FC<IListProps> = ({ people, setPeople }) => {
  //const List = ({ people }: IProps) => {
  const handleRemoveClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    //people.filter()
    console.log(event);
    console.log(id);
    const newPeople = people.filter((p) => p.id !== id);
    setPeople(newPeople);
  };

  const renderList = (): JSX.Element[] => {
    return people.map((p) => (
      <PersonItem person={p} handleRemoveClick={handleRemoveClick} />
    ));
  };

  return <ul>{renderList()}</ul>;
};
export default List;
