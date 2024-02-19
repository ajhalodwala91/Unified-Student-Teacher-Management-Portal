import React from "react";

function ExpSection() {
  let teacherExp = [
    {
      id: 0,
      expTime: "2005-2007",
      expInstPost: "Asst. Teacher",
      expInstName: "Mount Carmel High School",
      expInstAdd: "Vasai, Maharashtra",
    },
    {
      id: 1,
      expTime: "2008-2011",
      expInstPost: "Senior Teacher",
      expInstName: "Don Bosco High School",
      expInstAdd: "Boisar, Maharashtra",
      key: 1
    },
    {
      id: 2,
      expTime: "2011-2013",
      expInstPost: "HOD",
      expInstName: "Podar International School",
      expInstAdd: "Jaipur, Rajasthan",
      key: 2
    },
  ];

  return (
    <div className="expSection">
      {teacherExp.map((element) => {
        return (
          <div className="expCard" key={element.id}>
            <div className="expTime">{element.expTime}</div>
            <div className="expInstPost">{element.expInstPost}</div>
            <div className="expInstName">{element.expInstName}</div>
            <div className="expInstAdd">
              <i>{element.expInstAdd}</i>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ExpSection;
