import pickle
import numpy as np
from pydantic import BaseModel
import pandas as pd
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn   
# python integration with web app , pydantic -> json data -> validation and usage  thats why we use pydantic
#fast api -> for building apis with python
# cors -> helps to integrate different domains like python with node 

model = pickle.load(open(".\\models\\rfr.sav", "rb"))
app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Car (BaseModel):
    car_name: str
    new_car_prices: int
    car_model: int
    mileage: int
    fuel_type: str
    transmission: str
    registered_in: str
    colour: str
    car_type: str
    engine_displacement: int
    body_type: str
    price: int
    abs: int
    am_fm_radio: int
    air_bags: int
    air_conditioning: int
    cd_player: int
    dvd_player: int
    immobilizer_key: int
    keyless_entry: int
    navigation_system: int
    power_locks: int
    power_mirrors: int
    power_steering: int
    power_windows: int
    alloy_rims: int
    cruise_control: int
    sun_roof: int
    cassette_player: int
    cool_box: int
    climate_control: int
    front_speakers: int
    rear_camera: int
    rear_speakers: int
    steering_switches: int
    usb_aux_cable: int
    rear_ac_vents: int

    def to_dataframe(self) -> pd.DataFrame:
        data = {'Car Name': [self.car_name], 'New car prices': [self.new_car_prices], 'Model': [self.car_model], 'Mileage': [self.mileage],
                'Fuel Type': [self.fuel_type], 'Transmission': [self.transmission], 'Registerd In': [self.registered_in], 'Colour': [self.colour],
                'Car Type': [self.car_type], 'Engine Displacxement': [self.engine_displacement], 'Body Type': [self.body_type], 'Price': [self.price],
                'ABS': [self.abs], 'AM/FM Radio': [self.am_fm_radio], 'Air Bags': [self.air_bags], 'Air Conditioning': [self.air_conditioning],
                'CD Player': [self.cd_player], 'DVD Player': [self.dvd_player], 'Immobilizer Key': [self.immobilizer_key],
                ' Keyless Entry': [self.keyless_entry], 'Navigation System': [self.navigation_system], ' Power Locks': [self.power_locks],
                'Power Mirrors': [self.power_mirrors], ' Power Steering': [self.power_steering], ' Power Windows': [self.power_windows],
                'Alloy Rims': [self.alloy_rims], 'Cruise Control': [self.cruise_control], 'Sun Roof': [self.sun_roof],    'Cassette Player': [self.cassette_player],
                'CoolBox': [self.cool_box], 'Climate Control': [self.climate_control], 'Front Speakers': [self.front_speakers], 'Rear Camera': [self.rear_camera],
                'Rear speakers': [self.rear_speakers], ' Steering Switches': [self.steering_switches], 'USB and Auxillary Cable': [self.usb_aux_cable],
                'Rear AC Vents': [self.rear_ac_vents]
                }

        return pd.DataFrame(data)

    def apply_label_encoder(self, df: pd.DataFrame) -> pd.DataFrame:
        # Apply the saved LabelEncoder objects to the testing data
        for i in ['Car Name', 'Fuel Type', 'Transmission', 'Registerd In', 'Colour', 'Car Type', 'Body Type']:
            # Load the LabelEncoder object from a file
            with open(f".\\label-encoders\\{i}_label_encoder.pkl", "rb") as file:
                le = pickle.load(file)
            # Get the unique values in the column
            unique_values = df[i].unique()
            # Check if there are any new values in the column
            new_values = set(unique_values) - set(le.classes_)
            if new_values:
                print(f"Found new values in column {i}: {new_values}")
                # Add the new values to the LabelEncoder object
                le.classes_ = np.append(le.classes_, list(new_values))
            # Apply the LabelEncoder object to encode the data
            df[i] = le.transform(df[i])

        return df


@app.get("/")
async def index():
    return {"message": "Hello World"}


@app.post("/predict")
async def predict(car: Car):
    print(car)

    df = car.to_dataframe()
    df = car.apply_label_encoder(df)

    y = df['Price']
    x = df.drop(columns=['Price'], axis=1)

    print(x)

    prediction = model.predict(x)
    return {"prediction": prediction.tolist()}

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
