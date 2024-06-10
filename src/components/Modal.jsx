import { useState, useEffect } from "react";

// { isOpen, onClose, children}
export default function Modal() {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedValues, setSelectedValues] = useState([])
  // if(!isOpen) return null

  function handleChange(e){
    const {checked, id} = e.target;
    // console.log(checked, id)
    if(checked){
      setSelectedValues((prev) => [...prev, id])
    }else{
      setSelectedValues(prev => prev.filter(value => value !== id))
    }
    // console.log(e.target.id)
  }

  function handleSubmit(e){
    e.preventDefault();

    console.log(selectedValues)
  }

  return (
    <>
    {isOpen && <div className='overlay' />}
    <dialog open={isOpen}>
    <div className='modal-content'>
      <p>Before you leave please help me understand my visitors, are you a:</p>
      <form className="modal-form">
        <div className="modal-form-input-container">
          <label htmlFor="Recruiter">
          <input onChange={handleChange} type="checkbox" id="recruiter" name="checkboxGroup" /> Recruiter 🕵️‍♂️
          </label>
          <label htmlFor="Developer">
          <input onChange={handleChange} type="checkbox" id="developer" name="checkboxGroup" /> Developer 🧑‍💻
          </label>
          <label htmlFor="Other">
          <input onChange={handleChange} type="checkbox" id="Other" name="checkboxGroup" /> Other
          </label>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      </div>
    </dialog>
    </>
  )
}

