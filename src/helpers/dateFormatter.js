const dateFormatter = ( date ) => {

  const event = new Date(date*1000)
  const options = { weekday: 'short', day: 'numeric', month: 'short', }

  const dateFormated = event.toLocaleDateString("en-GB", options)

  return dateFormated
}

export default dateFormatter