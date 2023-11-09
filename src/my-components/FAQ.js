//Import all dependencies, other Components
import Questions from "./faqs.json";
import { useState } from "react";

//Function Component
function FAQ() {
  //Declare a "state" variable: "enteredKeywords"
  const [enteredKeywords, setEnteredKeywords] = useState("");

  //handle event. Read more at https://react.dev/learn#using-hooks
  const inputChange = (event) => {
    //Get entered keywords
    setEnteredKeywords(event.target.value); //enteredKeywords = event.target.value
  };

  //
  let id = 0;
  //Component UI: HTML Rendering
  return (
    <>
      <div style={{ minHeight: "60vh", backgroundColor: "#eefaf3" }}>
        {/*Add search box on top*/}
        <div className="row justify-content-center">
          <input
            className="col-10 col-md-6 m-3"
            type="text"
            name="search"
            onChange={inputChange}
            placeholder="Keywords"
          ></input>
        </div>

        {/*Loop through all questions that “both question and answer” contains keyword and display them*/}
        <div>
          {/*and extract “question” & “answer” */}
          {Questions.filter(
            (question) =>
              question.question
                .toLowerCase()
                .includes(enteredKeywords.toLowerCase()) ||
              question.answer
                .toLowerCase()
                .includes(enteredKeywords.toLowerCase())
          ).map((question) => {
            return (
                <div
                    className="p-3 m-4"
                    style={{ backgroundColor: "#f8ebd6" }}
                    key={id++}
                >
                    <h4>{question.question}</h4>
                    <p>{question.answer}</p>
                </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

//Export this component to the entire app, can be re-used or hooked into other Components
export default FAQ;
