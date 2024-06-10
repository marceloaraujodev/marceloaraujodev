import { useState } from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import axios from 'axios';

const Container = styled.div`
  width: 92%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  gap: 20px;
  margin-bottom: 130px;
  border: 2px solid lightgray;
  background-color: #e8e8e8;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Wide = styled(motion.div)`
  width: 75%;
  position: relative;
  padding: 10px 0;

  p {
    text-align: center;
    margin-top: 30px;
    font-weight: 600;
  }

  button {
    display: block;
    margin: 0 auto;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.6);
    transition: all 0.7s ease;
    margin-bottom: 10px;
  }

  button:hover {
    transform: scale(1.1);
  }
`;

const QuizFormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const LabelWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 10px;
  position: relative;
  cursor: pointer; /* Make the entire label clickable */

  /* Hide the browser's default checkbox */
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  span {
    position: absolute;
    top: 0;
    left: -30px;
    height: 25px;
    width: 25px;
    background-color: #ccc;
    border-radius: 3px;
    transition: all .4s ease;
  }

  /* On mouse-over, add a grey background color */
  &:hover input ~ span {
    background-color: #aaa;
  }

  /* When the checkbox is checked, add a blue background */
  input:checked ~ span {
    background-color: #aaa;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  span:after {
    content: '';
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  input:checked ~ span:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  span:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;

const CheckMark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #ccc;
`;

export default function Quiz() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userJob, setUserJob] = useState([]);
  const [clearThankYou, setClearThankyou] = useState(false);

  function handleChange(e) {
    const { checked, id } = e.target;
    if (checked) {
      setUserJob((prev) => [...prev, id]);
    } else {
      setUserJob((prev) => prev.filter((value) => value !== id));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setClearThankyou(true), 5000);

    const res = await axios.post('http://localhost:4000/visitors', { userJob });
    console.log(res.data);
  }

  return (
    <>
      {clearThankYou ? null : isSubmitted ? (
        <Container>
          <Wide>
            <p>Thank you for your input!</p>
          </Wide>
        </Container>
      ) : (
        <Container>
          <Wide>
            <p>
              Before you go, could you take a moment to help me better understand my visitors? Which of the following best describes you?
            </p>
            <form>
              <QuizFormContainer>
                <LabelWrapper htmlFor="recruiter">
                  <input onChange={handleChange} type="checkbox" id="recruiter" name="checkboxGroup" />{' '}
                  Recruiter 🕵️‍♂️
                  <CheckMark />
                </LabelWrapper>
                <LabelWrapper htmlFor="developer">
                  <input onChange={handleChange} type="checkbox" id="developer" name="checkboxGroup" /> Developer 🧑‍💻
                  <CheckMark />
                </LabelWrapper>
                <LabelWrapper htmlFor="other">
                  <input onChange={handleChange} type="checkbox" id="other" name="checkboxGroup" /> Other
                  <CheckMark />
                </LabelWrapper>
              </QuizFormContainer>
              <button onClick={handleSubmit}>Submit</button>
            </form>
          </Wide>
        </Container>
      )}
    </>
  );
}
