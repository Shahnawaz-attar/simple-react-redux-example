import React, { useRef, useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const inputRef = useRef();

  const handleChange = e => {
    setName(e.target.value);
  };

  const handleChangeByRef = e => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <form>
        Name : <input value={name} onChange={handleChange} />
        Last Name : <input ref={inputRef} onChange={handleChangeByRef} />
      </form>
    </div>
  );
};

export default Form;
