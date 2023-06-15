import React from "react";

const List = () => {
  const name = [
    {
      name: "sonali",
      age: 25,
      profile: "software developer",
    },
    {
      name: "sonal",
      age: 20,
      profile: " developer",
    },
    {
      name: "sona",
      age: 22,
      profile: "Frontend developer",
    },
  ];
  return (
    <div>
      <h1 className="text-center text-success">Array Handle with list</h1>
      {name.map((data) => (
        <h5 className="text-center text-warning">name:{data.name}</h5>
      ))}
    </div>
  );
};

export default List;
