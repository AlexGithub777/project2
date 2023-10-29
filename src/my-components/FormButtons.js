//Import all dependencies, other Components
import { Link } from "react-router-dom";

//Function Component
function FormButtons() {
    //Component UI: HTML Rendering
    return (
        <>
            <input
                type="submit"
                class="btn me-3 text-dark bg-white"
                style={{ width: "5em" }}
                value="SUBMIT"
            />
            <input
                type="reset"
                class="btn me-3 text-dark bg-white"
                style={{ width: "5em" }}
                value="RESET"
            />
            <Link to="/faq">
                <input
                    type="button"
                    class="btn me-3 text-dark bg-white"
                    style={{ width: "5em" }}
                    value="FAQ"
                />
            </Link>
        </>
    );
}

//Export this component to the entire app, can be re-used or hooked into other Components
export default FormButtons;
