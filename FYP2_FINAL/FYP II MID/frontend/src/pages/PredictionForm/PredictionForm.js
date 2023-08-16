import "./PredictionForm.css";

const API_URL = "http://127.0.0.1:8000/predict";

const PredictionForm = () => {
  const onFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    let data = {};
    for (let [key, val] of formData) {
      data[key] = val;
    }

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error(response.status);

      const json = await response.json();
      alert(json.prediction);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h1 className="p-head1">Predict your used car price</h1>
      <div className="main-white-div2">
        <form id="form" className="prediction-form" onSubmit={onFormSubmit}>
          <div className="col1">
            <label>
              <span>car_name</span>
              <input className="inpclr" name="car_name" type="text" />
            </label>
            <label>
              <span>car_model</span>
              <input
                className="inpclr"
                name="car_model"
                type="number"
                defaultValue="0"
              />
            </label>
            <label>
              <span>mileage</span>
              <input
                className="inpclr"
                name="mileage"
                type="number"
                defaultValue="0"
              />
            </label>
            <label>
              <span>fuel_type</span>
              <input className="inpclr" name="fuel_type" type="text" />
            </label>
            <label>
              <span>transmission</span>
              <input className="inpclr" name="transmission" type="text" />
            </label>
            <label>
              <span>registered_in</span>
              <input className="inpclr" name="registered_in" type="text" />
            </label>
            <label>
              <span>colour</span>
              <input className="inpclr" name="colour" type="text" />
            </label>
            <label>
              <span>car_type</span>
              <input className="inpclr" name="car_type" type="text" />
            </label>
            <label>
              <span>engine_displacement</span>
              <input
                className="inpclr"
                name="engine_displacement"
                type="number"
                defaultValue="0"
              />
            </label>
            <label>
              <span>body_type</span>
              <input className="inpclr" name="body_type" type="text" />
            </label>
            <label>
              <span>price</span>
              <input
                className="inpclr"
                name="price"
                type="number"
                defaultValue="0"
              />
            </label>
            <label>
              <span>abs</span>
              <input
                className="inpclr"
                name="abs"
                type="number"
                defaultValue="0"
              />
            </label>
          </div>
          <div className="col2">
            <label>
              <span>am_fm_radio</span>
              <input
                className="inpclr"
                name="am_fm_radio"
                type="number"
                defaultValue="0"
              />
            </label>
            <label>
              <span>air_bags</span>
              <input
                className="inpclr"
                name="air_bags"
                type="number"
                defaultValue="0"
              />
            </label>
            <label>
              <span>air_conditioning</span>
              <input
                className="inpclr"
                name="air_conditioning"
                type="number"
                defaultValue="0"
              />
            </label>
            <label>
              <span>cd_player</span>
              <input
                className="inpclr"
                name="cd_player"
                type="number"
                defaultValue="0"
              />
            </label>
            <label>
              <span>dvd_player</span>
              <input
                className="inpclr"
                name="dvd_player"
                type="number"
                defaultValue="0"
              />
            </label>
            <label>
              <span>immobilizer_key</span>
              <input
                className="inpclr"
                name="immobilizer_key"
                type="number"
                defaultValue="0"
              />
            </label>
            <label>
              <span>keyless_entry</span>
              <input
                className="inpclr"
                name="keyless_entry"
                type="number"
                defaultValue="0"
              />
            </label>
            <label>
              <span>navigation_system</span>
              <input
                className="inpclr"
                name="navigation_system"
                type="number"
                defaultValue="0"
              />
            </label>
            <label>
              <span>power_locks</span>
              <input
                className="inpclr"
                name="power_locks"
                type="number"
                defaultValue="0"
              />
            </label>
            <label>
              <span>power_mirrors</span>
              <input
                className="inpclr"
                name="power_mirrors"
                type="number"
                defaultValue="0"
              />
            </label>
            <label>
              <span>power_steering</span>
              <input
                className="inpclr"
                name="power_steering"
                type="number"
                defaultValue="0"
              />
            </label>
            <label>
              <span>power_windows</span>
              <input
                className="inpclr"
                name="power_windows"
                type="number"
                defaultValue="0"
              />
            </label>
          </div>
          <div className="col3">
            <label>
              <span>alloy_rims</span>
              <input
                className="inpclr"
                name="alloy_rims"
                type="number"
                defaultValue="0"
              />
            </label>
            <label>
              <span>cruise_control</span>
              <input
                className="inpclr"
                name="cruise_control"
                type="number"
                defaultValue="0"
              />
            </label>
            <label>
              <span>sun_roof</span>
              <input
                className="inpclr"
                name="sun_roof"
                type="number"
                defaultValue="0"
              />
            </label>
            <label>
              <span>cassette_player</span>
              <input
                className="inpclr"
                name="cassette_player"
                type="number"
                defaultValue="0"
              />
            </label>
            <label>
              <span>cool_box</span>
              <input
                className="inpclr"
                name="cool_box"
                type="number"
                defaultValue="0"
              />
            </label>
            <label>
              <span>climate_control</span>
              <input
                className="inpclr"
                name="climate_control"
                type="number"
                defaultValue="0"
              />
            </label>
            <label>
              <span>front_speakers</span>
              <input
                className="inpclr"
                name="front_speakers"
                type="number"
                defaultValue="0"
              />
            </label>
            <label>
              <span>rear_camera</span>
              <input
                className="inpclr"
                name="rear_camera"
                type="number"
                defaultValue="0"
              />
            </label>
            <label>
              <span>rear_speakers</span>
              <input
                className="inpclr"
                name="rear_speakers"
                type="number"
                defaultValue="0"
              />
            </label>
            <label>
              <span>steering_switches</span>
              <input
                className="inpclr"
                name="steering_switches"
                type="number"
                defaultValue="0"
              />
            </label>
            <label>
              <span>usb_aux_cable</span>
              <input
                className="inpclr"
                name="usb_aux_cable"
                type="number"
                defaultValue="0"
              />
            </label>
            <label>
              <span>rear_ac_vents</span>
              <input
                className="inpclr"
                name="rear_ac_vents"
                type="number"
                defaultValue="0"
              />
            </label>
            <label>
              <span>new_car_prices</span>
              <input name="new_car_prices" type="number" defaultValue="0" />
            </label>
          </div>

          <input className="predict-btn" type="submit" defaultValue="Submit" />
        </form>
      </div>
    </div>
  );
};

export default PredictionForm;
