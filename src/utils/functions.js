const removeWhtSpaceAndCap = (value) => {
  let val = value
    .trim()
    .replace(/[\s.]+/g, ' ')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
  return val.toUpperCase()
}
export const getToken = () => localStorage.getItem('token') || ''

export const clearLocalStorage = () => {
  return new Promise((resolve) => {
    localStorage.clear()
    resolve(true)
  })
}

export const getStudentID = () => localStorage.getItem('studentid') || ''
export const getGroupname = () => localStorage.getItem('groupname') || ''
export const getSubject = () => localStorage.getItem('subject') || ''
export const getVersionname = () => localStorage.getItem('versionname') || ''
export const getClassName = () => localStorage.getItem('className') || ''
export const generateReference = (version, className, groupName, examType) => {
  return (
    removeWhtSpaceAndCap(version) +
    '_' +
    removeWhtSpaceAndCap(className) +
    '_' +
    removeWhtSpaceAndCap(groupName) +
    '_' +
    examType
  )
}
const messages = {
  success: 'Payment was Successful',
  cancel: 'User canceled the payment',
  failed: 'Failed to Pay',
}
export const showUserMessage = (message) => {
  return messages[message] ? messages[message] : message
}
