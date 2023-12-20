import React, { useState } from "react";

const Job = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  // const handleAddItem = () => {
  //   if (item.trim() !== "") {
  //       setList([...list, item]);
  //       setItem("");
  //     }
  // };
  // Nếu thay đổi state dựa trên state cũ thì nên sử dụng arrow function    
// Vì có sự bất đồng bộ khi dùng set lai state

// sử dụng ở đoạn này
  const handleAddItem = () => {
    if (item.trim() !== "") {
      setList((prevList) => [...prevList, item]); 
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