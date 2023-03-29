export function dateLimits (){
    const today = new Date();
    const todayDate = {
      day:    today.getDate(),
      month:  today.getMonth()+1,
      year:   today.getFullYear(),
    }
    let limits = {
        min: "",
        max: ""
    }
    if(todayDate.month<10){
        limits.min = `${todayDate.year}-0${todayDate.month}-${todayDate.day}`
    } else {
        limits.min = `${todayDate.year}-${todayDate.month}-${todayDate.day}`
    }


    const fecha = new Date();
    const dias = 365;
    fecha.setDate(fecha.getDate() + dias);
    const futureDate = {
        day:    fecha.getDate(),
        month:  fecha.getMonth()+1,
        year:   fecha.getFullYear(),
      }
    console.log({futureDate});

    if(futureDate.month<10){
        limits.max = `${futureDate.year}-0${futureDate.month}-${futureDate.day}`
    } else {
        limits.max = `${futureDate.year}-${futureDate.month}-${futureDate.day}`
    }
    return limits
}


