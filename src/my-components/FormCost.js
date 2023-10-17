//Function Component
function FormCost(props) {
  //Component UI: HTML Rendering
  return (
    <>
      <h2>Cost</h2>
      <div class="row mt-2  ms-3">
        <label class="col-12 col-md-12 col-lg-4">Bond ($)</label>
        <input
          class="col-12 col-md-12 col-lg-7"
          type="number"
          value={props.sharedPropBond}
          onlyread
        />
      </div>
      <div class="row mt-1  ms-3">
        <label class="col-12 col-md-12 col-lg-4">Service Fee ($)</label>
        <input
          class="col-12 col-md-12 col-lg-7"
          type="number"
          value={85}
          onlyread
        />
      </div>
      <div class="row mt-1  ms-3">
        <label class="col-12 col-md-12 col-lg-4">Total ($)</label>
        <input class="col-12 col-md-12 col-lg-7" type="number" onlyread />
      </div>
      <div class="row mt-1 ms-3">
        <label class="col-12 col-md-12 col-lg-4">GST</label>
        <input class="col-12 col-md-12 col-lg-7" type="gst" onlyread />
      </div>
      <div class="row mt-1 ms-3">
        <label class="col-12 col-md-12 col-lg-4">Total(+GST)</label>
        <input class="col-12 col-md-12 col-lg-7" type="total&gst" onlyread />
      </div>
    </>
  );
}

//Export this component to the entire app, can be re-used or hooked into other Components
export default FormCost;
