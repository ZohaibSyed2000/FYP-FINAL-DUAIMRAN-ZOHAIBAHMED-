import axios from "axios";
import { useState } from "react";
const apiUrl = "http://localhost:3009/api/ad/";

export const multipleFilesUpload = async (data) => {
  try {
    await axios.post(apiUrl + "multipleFileUpload", data);
  } catch (error) {
    throw error;
  }
};

const apiUrl2 = "http://localhost:3009/api/featuredad/";

export const multipleFilesUpload2 = async (data) => {
  try {
    await axios.post(apiUrl2 + "multipleFileUpload", data);
  } catch (error) {
    throw error;
  }
};

// const apiUrl3 = "http://localhost:3009/api/inspect/";

// export const bookInspections = async (data) => {
//   try {
//     await axios.post(apiUrl3 + `inspections/${id}`, data);
//   } catch (error) {
//     throw error;
//   }
//};
