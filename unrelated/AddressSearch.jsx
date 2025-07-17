import { useState } from "react";
import ErorrAlert from "./ErorrAlert";
import { looKUpPostCode, lookupAddress } from "../Helpers/Module";

export default function AddressSearch({
  inpClass,
  inpPlaceHolder,
  register,
  btnId,
  errorMsgs,
  inpAddressDiv
}) {
  const [postCode, setPostCode] = useState();
  const [address, setAddress] = useState([]);
  const [error, setError] = useState("");
  const [addressLook, setAddressLook] = useState({});

  const handleClick = async (post) => {
    let [data, error] = await looKUpPostCode(post);
    // console.log("apidata:", data, "Apierror:", error);
    // console.log("apidata:", typeof data, "Apierror:", typeof error);
    if (data.length == 0 && error != "") {
      setError(error);
      setAddress([]);
    } else {
      setAddress([...data]);
      setError("");
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-12   form-group mb-3">
          <div className="input-group lookup-filed">
            <input
              className={inpClass}
              placeholder={inpPlaceHolder}
              type="text"
              autoComplete="off"
              {...register}
              onChange={(e) => {
                console.log("postacode value", e.target.value);
                setPostCode(e.target.value);
              }}
            />
            <button
              className="com_bnt flex-fill lookup-btn"
              id={btnId}
              onClick={() => handleClick(postCode)}
            >
              Lookup Address
            </button>
          </div>
          {error != "" && <ErorrAlert message={error} />}
          {errorMsgs}
        </div>
      </div>
      {address.length > 0 && (
        <div>
          <select
            className="form-control select-box"
            name="address1"
            // ref={myRef}
            onChange={async (e) => {
              console.log("address:", e.target.value);
              let data = await lookupAddress(e.target.value);
              console.log("lookup:", data);
              setAddressLook(data);
            }}
            id="address1"
          >
            {address.map((addressData, index) => (
              <option value={addressData.id} key={index}>
                {addressData.address}
              </option>
            ))}
          </select>
        </div>
      )}

      {Object.keys(addressLook).length > 0 && (
        <div className="row mb-3">
          <div className={inpAddressDiv}>
            <div className="form-group row">
              <div className="col-md-6 mb-3  ">
                <input
                  type="text"
                  className="form-control  form-style"
                  id="street_number"
                  placeholder="House Name / Number"
                  name="user[address1]"
                  defaultValue={addressLook.line_1}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control  form-style"
                  id="route"
                  placeholder="Street"
                  name="user[address2]"
                  defaultValue={addressLook.line_2}
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-6 mb-3  ">
                <input
                  type="text"
                  className="form-control  form-style"
                  id="locality"
                  placeholder="Town"
                  name="user[town]"
                  defaultValue={addressLook.town}
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control  form-style"
                  id="postal_code"
                  placeholder="Postcode"
                  name="user[postcode]"
                  defaultValue={addressLook.county}
                  required
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
