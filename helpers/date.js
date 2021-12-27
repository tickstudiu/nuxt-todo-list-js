
const config = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  weekday:"long",
  hour: '2-digit',
  hour12: false,
  minute:'2-digit',
  second:'2-digit'
}

export const dateDisplay = (val) => {
  return  new Date(val).toLocaleString(undefined, config)
}
