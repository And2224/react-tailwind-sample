import {useState} from 'react';
import RadioButtonGroup from './components/RadioButtonGroup'
import DiscountComponent from './components/DiscountInput';
function App() {
  const [radioState, setRadioState] = useState("OptionA");
  const [noteState, setNoteState] = useState("");
  const [generatedDisCount, setGeneratedDisCount] = useState("");

  const handleOnChange = (e) => {
    setRadioState(e.target.value);
    console.log(e.target.value)
    console.log(radioState)
  }

  const handleEditChanged = (e) => {
    setNoteState(()=>e.target.value)
  }

  const rand = (length, ranges) => {
    var str = '';
    while (length--) {
      var ind = Math.floor(Math.random() * ranges.length);
      var min = ranges[ind][0].charCodeAt(0),
        max = ranges[ind][1].charCodeAt(0);
      var c = Math.floor(Math.random() * (max - min + 1)) + min;
      str += String.fromCharCode(c);
    }
    return str;
  };

  const generateDisCount = () => {
    console.log("dd");
    const val = `${rand(Math.floor(Math.random())%5 + 3 , [['A', 'Z'],['a', 'z']])}${rand(Math.floor(Math.random())%3 + 3, [['0','9'],['0','9']])}`;
    setGeneratedDisCount(()=>val)
    // console.log(val)
  }

  return (
    <div className="p-20 grid-col-1">
      
      <RadioButtonGroup current={radioState} onChange={handleOnChange}
      options={[
        {value: "OptionA", text: "OptionA"},
        {value: "OptionB", text: "OptionB"},
        {value: "OptionC", text: "OptionC"}]} ></RadioButtonGroup>

        <DiscountComponent></DiscountComponent>

        <div>
          <textarea className='h-[60px] w-full form-input border-2 border-slate-600 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200' value={noteState} onChange={handleEditChanged}>

          </textarea>
        </div>
        <button className='btn btn-info mt-2 bg-blue-500 text-white py-2 px-4 rounded' type='button' onClick={generateDisCount}> Generate Discount Code</button>
        <p>{generatedDisCount}</p>
    </div>
  );
}

export default App;
