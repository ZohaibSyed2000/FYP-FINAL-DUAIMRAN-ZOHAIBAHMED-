const CarProto = {
  car_name: "string",
  new_car_prices: 0,
  car_model: 0,
  mileage: 0,
  fuel_type: "string",
  transmission: "string",
  registered_in: "string",
  colour: "string",
  car_type: "string",
  engine_displacement: 0,
  body_type: "string",
  price: 0,
  abs: 0,
  am_fm_radio: 0,
  air_bags: 0,
  air_conditioning: 0,
  cd_player: 0,
  dvd_player: 0,
  immobilizer_key: 0,
  keyless_entry: 0,
  navigation_system: 0,
  power_locks: 0,
  power_mirrors: 0,
  power_steering: 0,
  power_windows: 0,
  alloy_rims: 0,
  cruise_control: 0,
  sun_roof: 0,
  cassette_player: 0,
  cool_box: 0,
  climate_control: 0,
  front_speakers: 0,
  rear_camera: 0,
  rear_speakers: 0,
  steering_switches: 0,
  usb_aux_cable: 0,
  rear_ac_vents: 0,
};

const elements = [];
const form = document.getElementById("form");

for (let prop in CarProto) {
  const val = CarProto[prop];

  const input = document.createElement("input");
  input.name = prop;

  if (val == "string") input.type = "text";
  else if (val == 0) input.type = "number";

  const label = document.createElement("label");
  const labelText = document.createElement("span");
  labelText.innerText = prop;

  label.appendChild(labelText);
  label.appendChild(input);

  elements.push(label);
}

elements.forEach((elem) => {
  form.appendChild(elem);
});
