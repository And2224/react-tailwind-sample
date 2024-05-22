import React, { useState } from 'react';

const DiscountComponent = () => {
  const [values, setValues] = useState({ discount: '' });
  const [acceptable, setAcceptable] =  useState(true);

  const handleChange = (e) => {
    const { id, value } = e.target;
    const regex = /^[A-Za-z]+[0-9]+$/;
    setAcceptable(regex.test(value))
    
    setValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  return (
    <div>
      <label htmlFor="discount" className='mr-5'>Discount Code</label>
      <input
        type="text"
        className="form-input border-2 border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200  w-full h-[35px]"
        id="discount"
        value={values.discount}
        onChange={handleChange}
      />
      <span className={`text-red-500 text-xs mt-1 ${acceptable?"hidden":""}`}>
       discount error
      </span>
    </div>
  );
};

export default DiscountComponent;
