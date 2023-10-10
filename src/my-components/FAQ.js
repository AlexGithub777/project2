//Import all dependencies, other Components
import Questions from "./faqs.json";

//Function Component
function FAQ() {
  let id = 0;

  //Component UI: HTML Rendering
  return (
    <>
      <div style={{ minHeight: "60vh" }}>
        <h1>Frequently Asked Questions</h1>

        {/*Loop through all questions and display them*/}
        <div>
          {/*nd extract “question” & “answer” */}
          {Questions.map((question) => {
            return (
              <div className="bg-warning p-3 m-2" key={id++}>
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
