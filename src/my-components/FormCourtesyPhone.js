//Function Component
function FormCourtesyPhone() {
  //Component UI: HTML Rendering
  return (
    <>
      <h2>Courtesy Phone</h2>
      {/*Phone item types*/}
      <h4 class="ms-4 mt-2">Choose a phone</h4>
      <div class="row mt-2 ms-3">
        <label class="col-12 col-md-12 col-lg-4">Item Type </label>
        <select class="col-12 col-md-12 col-lg-7" id="phoneList">
          <option value="none" selected>
            None
          </option>
          <option value="iphone">iPhone</option>
          <option value="samsung">Samsung Galaxy</option>
          <option value="nokia">Nokia</option>
        </select>
      </div>
      {/*Charger item types*/}
      <h4 class="ms-4 mt-2">Choose a charger</h4>
      <div class="row mt-2 ms-3">
        <label class="col-12 col-md-12 col-lg-4">Item Type </label>
        <select class="col-12 col-md-12 col-lg-7" id="chargerList">
          <option value="none" selected>
            None
          </option>
          <option value="iphonecharger">iPhone Charger</option>
          <option value="samsungcharger">Samgsung Charger</option>
          <option value="nokiacharger">Nokia Charger</option>
        </select>
      </div>
      {/*Table of added Courtesy items*/}
      <h4 class="ms-4 mt-2">Borrow items</h4>
      <div class="row mt-2 ms-3 me-3 bg-white">
        <table class="table table-bordered" id="borrowItems">
          <tr>
            <td>Item</td>
            <td>Cost</td>
          </tr>
        </table>
      </div>
    </>
  );
}

//Export this component to the entire app, can be re-used or hooked into other Components
export default FormCourtesyPhone;
