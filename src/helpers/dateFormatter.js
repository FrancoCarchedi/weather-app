const dateFormatter = ( date ) => {

  const event = new Date(date*1000)
  const options = { weekday: 'short', month: 'short', day: 'numeric' }

  const dateFormated = event.toLocaleDateString(undefined, options)

  return dateFormated
}

export default dateFormatter