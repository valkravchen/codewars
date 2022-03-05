function ageInDays(year, month, day){
    let a=new Date(year, month-1, day)
    let b=new Date()
    return 'You are '+Math.floor((b.getTime()-a.getTime())/(1000*60*60*24))+' days old'
  
  }