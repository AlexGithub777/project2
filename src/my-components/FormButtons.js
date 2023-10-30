//Import all dependencies, other Components
import { Link } from "react-router-dom";

function FormButtons({ clearUploadedImage, clearSelectedItems }) {
    const handleReset = () => {
        document.getElementById("streetnum").value = "";
        document.getElementById("streetname").value = "";
        document.getElementById("suburb").value = "";
        document.getElementById("city").value = "";
        document.getElementById("postcode").value = "";
        clearUploadedImage();
        clearSelectedItems();
    };

    return (
        <>
            <input
                type="submit"
                className="btn me-3 text-dark bg-white"
                style={{ width: "5em" }}
                value="SUBMIT"
            />
            <input
                type="reset"
                className="btn me-3 text-dark bg-white"
                style={{ width: "5em" }}
                value="RESET"
                onClick={handleReset}
            />
            <Link to="/faq">
                <input
                    type="button"
                    className="btn me-3 text-dark bg-white"
                    style={{ width: "5em" }}
                    value="FAQ"
                />
            </Link>
        </>
    );
}

//Export this component to the entire app, can be re-used or hooked into other Components
export default FormButtons;
