//Import all dependencies, other Components
import { useState } from "react";

//Function Component
function FormCourtesyPhone({ passDataToParent }) {
    //"passDataToParent" is a callback function: function passDataToParent(value)
    //The callback function is to change a piece of the state that is a part of the parent component.

    //Assume there is a list of courtesy items as below
    let courtesyList = [
        { id: 0, type: "none", name: "none", bond: 0 },
        { id: 1, type: "phone", name: "iphone", bond: 275 },
        { id: 2, type: "phone", name: "samsung galaxy", bond: 100 },
        { id: 3, type: "phone", name: "nokia", bond: 100 },
        { id: 4, type: "charger", name: "iphone charger", bond: 30 },
        { id: 5, type: "charger", name: "samsung charger", bond: 30 },
        { id: 6, type: "charger", name: "nokia charger", bond: 30 },
    ];

    //Declare "state" variables
    const [phoneBorrow, setPhoneBorrow] = useState(0); // 0 = 'none'. phoneBorrow = "id"
    const [chargerBorrow, setChargerBorrow] = useState(0); // 0 = 'none', ChargerBorrow = "id"

    //Handle "onChange" event
    let addPhone = (selectedOption) => {
        selectedOption === "none"
            ? setPhoneBorrow(0)
            : setPhoneBorrow(Number(selectedOption));
        //Update totalBond
        let updateId = 0;
        selectedOption === "none"
            ? (updateId = 0)
            : (updateId = Number(selectedOption));
        let updateBond =
            courtesyList.filter((item) => {
                return item.id === updateId;
            })[0].bond +
            courtesyList.filter((item) => {
                return item.id === chargerBorrow;
            })[0].bond;
        //Send data upto Parent by calling callback function "passDataToParent"
        passDataToParent(updateBond); //Child1 (FormCourtesyPhone)
    };
    let addCharger = (selectedOption) => {
        selectedOption === "none"
            ? setChargerBorrow(0)
            : setChargerBorrow(Number(selectedOption));
        //Update totalBond
        let updateId = 0;
        selectedOption === "none"
            ? (updateId = 0)
            : (updateId = Number(selectedOption));
        let updateBond =
            courtesyList.filter((item) => {
                return item.id === phoneBorrow;
            })[0].bond +
            courtesyList.filter((item) => {
                return item.id === updateId;
            })[0].bond;
        //Send data upto Parent by calling callback function "passDataToParent"
        passDataToParent(updateBond); //Child1 (FormCourtesyPhone)
    };

    //--------------------------------
    //Component UI: HTML Rendering
    return (
        <>
            <h2>Courtesy Phone</h2>
            {/*Item types*/}
            <h4>Choose a phone: </h4>
            <div class="row mt-2 ms-3">
                <label class="col-12 col-md-12 col-lg-4">Item Type: </label>
                <select
                    class="col-12 col-md-12 col-lg-7"
                    id="phoneList"
                    onChange={(selected) => addPhone(selected.target.value)}
                >
                    <option value="none" selected>
                        None
                    </option>
                    <option value="1">iPhone</option>
                    <option value="2">Samsung Galaxy</option>
                    <option value="3">Nokia</option>
                </select>
            </div>
            <h4>Choose a charger: </h4>
            <div class="row mt-2 ms-3">
                <label class="col-12 col-md-12 col-lg-4">Item Type: </label>
                <select
                    class="col-12 col-md-12 col-lg-7"
                    id="chargerList"
                    onChange={(selected) => addCharger(selected.target.value)}
                >
                    <option value="none" selected>
                        None
                    </option>
                    <option value="4">iPhone Charger</option>
                    <option value="5">Samsung Charger</option>
                    <option value="6">Nokia Charger</option>
                </select>
            </div>

            {/*Table of added Courtesy items*/}
            <div class="row mt-2 ms-3 me-3 bg-white">
                <table class="table table-bordered" id="borrowItems">
                    <tr>
                        <td>Item</td>
                        <td>Cost</td>
                    </tr>

                    {/*Display all items in the state "borrowItems" in the table  */}
                    {phoneBorrow === 0 ? null : (
                        <tr>
                            <td>
                                {
                                    courtesyList.filter((item) => {
                                        return item.id === phoneBorrow;
                                    })[0].name
                                }
                            </td>{" "}
                            <td>
                                {
                                    courtesyList.filter((item) => {
                                        return item.id === phoneBorrow;
                                    })[0].bond
                                }
                            </td>
                        </tr>
                    )}
                    {chargerBorrow === 0 ? null : (
                        <tr>
                            <td>
                                {
                                    courtesyList.filter((item) => {
                                        return item.id === chargerBorrow;
                                    })[0].name
                                }
                            </td>{" "}
                            <td>
                                {
                                    courtesyList.filter((item) => {
                                        return item.id === chargerBorrow;
                                    })[0].bond
                                }
                            </td>
                        </tr>
                    )}
                </table>
            </div>
        </>
    );
}
//Export this component to the entire app, can be re-used or hooked into other Components
export default FormCourtesyPhone;
