import React, { useState } from "react";

const Job = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  const handleAddItem = () => {
    if (item.trim() !== "") {
        setList([...list, item]);
        setItem("");
      }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nhập vào đây"
        value={item}
        onChange={handleChange}
      />
      <button onClick={handleAddItem}>Thêm</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Job;