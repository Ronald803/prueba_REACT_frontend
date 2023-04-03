export function dateLimits (){
    const today = new Date();
    today.setDate(today.getDate() + 2);
    const todayDate = {
      day:    today.getDate(),
      month:  today.getMonth()+1,
      year:   today.getFullYear(),
    }
    let limits = {
        min: "",
        max: ""
    }
    if(todayDate.month<10){ todayDate.month = `0${todayDate.month}`}
    if(todayDate.day<10){ todayDate.day = `0${todayDate.day}`}
    limits.min = `${todayDate.year}-${todayDate.month}-${todayDate.day}`

    const fecha = new Date();
    const dias = 550;
    fecha.setDate(fecha.getDate() + dias);
    const futureDate = {
        day:    fecha.getDate(),
        month:  fecha.getMonth()+1,
        year:   fecha.getFullYear(),
      }
    if(futureDate.month<10){ futureDate.month = `0${futureDate.month}`}
    if(futureDate.day<10){ futureDate.day = `0${futureDate.day}`}
    limits.max = `${futureDate.year}-${futureDate.month}-${futureDate.day}`
    return limits
}


