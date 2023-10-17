//Function Component
function FormCustomerDetail() {
  //Component UI: HTML Rendering
  return (
    <>
      <h2>Customer Details</h2>
      {/*Customer type*/}
      <div class="row">
        <fieldset class="border border-primary col-12 col-lg-11 ms-2 me-4">
          <legend class="col-11 float-none w-auto">Customer type *</legend>
          <div>
            <label class="col-12 col-md-12 col-lg-4">Customer</label>
            <input
              type="radio"
              id="customerType"
              name="customer-type"
              value="customer"
              checked
            />
          </div>
          <div>
            <label class="col-12 col-md-12 col-lg-4">Business</label>
            <input
              type="radio"
              id="businessType"
              name="customer-type"
              value="business"
            />
          </div>
        </fieldset>
      </div>

      {/*Details*/}
      <div class="row mt-2">
        <label class="col-12 col-md-12 col-lg-4">Title *</label>
        <select class="col-12 col-md-12 col-lg-7">
          <option value="Mr" selected>
            Mr
          </option>
          <option value="Mrs">Mrs</option>
          <option value="Ms">Ms</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>
      </div>
      <div class="row mt-1">
        <label class="col-12 col-md-12 col-lg-4">First Name *</label>
        <input
          class="col-12 col-md-12 col-lg-7"
          type="text"
          id="fname"
          required
        />
      </div>
      <div class="row mt-1">
        <label class="col-12 col-md-12 col-lg-4">Last Name *</label>
        <input
          class="col-12 col-md-12 col-lg-7"
          type="text"
          id="lname"
          required
        />
      </div>
      <div class="row mt-1">
        <label class="col-12 col-md-12 col-lg-4">Street *</label>
        <input
          class="col-12 col-md-12 col-lg-7"
          type="text"
          id="street"
          required
        />
      </div>
      <div class="row mt-1">
        <label class="col-12 col-md-12 col-lg-4">Suburb</label>
        <input class="col-12 col-md-12 col-lg-7" type="text" id="suburb" />
      </div>
      <div class="row mt-1">
        <label class="col-12 col-md-12 col-lg-4">City *</label>
        <input
          class="col-12 col-md-12 col-lg-7"
          type="text"
          id="city"
          required
        />
      </div>
      <div class="row mt-1">
        <label class="col-12 col-md-12 col-lg-4">Post Code</label>
        <input class="col-12 col-md-12 col-lg-7" type="text" id="postcode" />
      </div>
      <div class="row mt-1">
        <label class="col-12 col-md-12 col-lg-4">Phone Number *</label>
        <input
          class="col-12 col-md-12 col-lg-7"
          type="text"
          id="phonenumber"
          required
        />
      </div>
      <div class="row mt-1">
        <label class="col-12 col-md-12 col-lg-4">Email *</label>
        <input
          class="col-12 col-md-12 col-lg-7"
          type="text"
          id="email"
          required
        />
      </div>
    </>
  );
}

//Export this component to the entire app, can be re-used or hooked into other Components
export default FormCustomerDetail;
