import { BASE_URL } from '../../page/global'
import {
  deleteData,
  fetchData,
  patchData,
  postData,
  putData,
} from '../commonAxiosFunctions'

export const getPackagePrice = (params) => {
  const url = `${BASE_URL}/getPackagePrice`
  return fetchData(url, params)
}

export const getToken = (params) => {
  const url = `${BASE_URL}/getToken`
  return fetchData(url, params)
}

export const getRefreshToken = (params) => {
  const url = `${BASE_URL}/getRefreshToken`
  return fetchData(url, params)
}

export const createPayment = (data) => {
  return postData(`${BASE_URL}/createPayment`, data)
}

export const executePayment = (data) => {
  return postData(`${BASE_URL}/executePayment`, data)
}

export const savePaymentInfo = (data) => {
  return postData(`${BASE_URL}/bkashpayment`, data)
}

export const checkPaymentStatus = (params) => {
  const url = `${BASE_URL}/checkUserPayment`
  return fetchData(url, params)
}

export const getExamTypes = (params) => {
  const url = `${BASE_URL}/getExamTypes`
  return fetchData(url, params)
}

export const deleteExamType = (id) => {
  const url = `${BASE_URL}/deleteExamType/` + id
  return deleteData(url)
}

export const addExamType = (data) => {
  return postData(`${BASE_URL}/addexamtype`, data)
}

export const getPackages = (params) => {
  const url = `${BASE_URL}/getPackages`
  return fetchData(url, params)
}

export const getPackage = (param) => {
  const url = `${BASE_URL}/package/` + param
  return fetchData(url)
}

export const addPackage = (data) => {
  return postData(`${BASE_URL}/addPackage`, data)
}

export const updatePackage = (data, param) => {
  return putData(`${BASE_URL}/updatePackage/` + param, data)
}

export const deletePackage = (id) => {
  const url = `${BASE_URL}/deletePackage/` + id
  return deleteData(url)
}

export const checkPaymentOld = (params) => {
  const url = `${BASE_URL}/getDatacheckpayment/` + params
  return fetchData(url)
}

export const updateChannel = (data, id) => {
  return patchData(`${BASE_URL}/channels/${id}`, data)
}
