import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import CarContext from "../store/car-context";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "./caridcompare.css";
const CarComparisonid = () => {
  const a = useContext(CarContext);
  const getcarsdata = a.getcarsdata;
  const car1data = a.car1data;
  const car2data = a.car2data;
  const { id1, id2 } = useParams();
  useEffect(() => {
    getcarsdata(id1, id2);
  }, []);

  return (
    <div className="mainpagecomparison">
      <div className="white-box">
        <div class="container3">
          <div class="row">
            <div class="col-md-6">
              <h2 class="text-center">
                {car1data?.brand_name} {car1data?.car_name}
              </h2>
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="img-tag1">Image</td>
                    <td>
                      <div className="w-30">
                        <div class="image-slider marging-img-top">
                          <Swiper navigation={true} modules={[Navigation]}>
                            {car1data?.files?.map((file, index) => (
                              <SwiperSlide style={{ alignSelf: "center" }}>
                                <img
                                  className="d-block w-100 h-100 rounded"
                                  src={`http://localhost:3009/${file.filePath}`}
                                  height="65"
                                  alt="First slide"
                                />
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Model</td>
                    <td>{car1data.model}</td>
                  </tr>
                  <tr>
                    <td>Fuel Type</td>
                    <td>{car1data.fuel_type}</td>
                  </tr>
                  <tr>
                    <td>Transmission</td>
                    <td>{car1data.transmission}</td>
                  </tr>
                  <tr>
                    <td>Body type</td>
                    <td>{car1data.body_type}</td>
                  </tr>
                  <tr>
                    <td>Price</td>
                    <td>{car1data.price}</td>
                  </tr>
                  <tr>
                    <td>Mileage</td>
                    <td>{car1data.mileage}</td>
                  </tr>
                  <tr>
                    <td>Seller location</td>
                    <td>{car1data.seller_location}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-6">
              <h2 class="text-center">
                {car2data?.brand_name} {car2data?.car_name}
              </h2>

              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="img-tag1">Image</td>
                    <td>
                      <div className="w-30">
                        <div class="image-slider marging-img-top">
                          <Swiper navigation={true} modules={[Navigation]}>
                            {car2data?.files?.map((file, index) => (
                              <SwiperSlide style={{ alignSelf: "center" }}>
                                <img
                                  className="d-block w-100 h-100 rounded"
                                  src={`http://localhost:3009/${file.filePath}`}
                                  height="65"
                                  alt="First slide"
                                />
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Model</td>
                    <td>{car2data.model}</td>
                  </tr>
                  <tr>
                    <td>Fuel Type</td>
                    <td>{car2data.fuel_type}</td>
                  </tr>
                  <tr>
                    <td>Transmission</td>
                    <td>{car2data.transmission}</td>
                  </tr>
                  <tr>
                    <td>Body type</td>
                    <td>{car2data.body_type}</td>
                  </tr>
                  <tr>
                    <td>Price</td>
                    <td>{car2data.price}</td>
                  </tr>
                  <tr>
                    <td>Mileage</td>
                    <td>{car2data.mileage}</td>
                  </tr>
                  <tr>
                    <td>Seller location</td>
                    <td>{car2data.seller_location}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarComparisonid;
