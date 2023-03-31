export default (error) => {
  let message
  if( error && error.response && error.response.data.error) {
    message = error.response.data.error.message
  } else if(error.request && error.request.statusText) {
    message = error.request.statusText
  } else {
    message = error.message
  }
  return message
}
