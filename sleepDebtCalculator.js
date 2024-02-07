const getSleepHours = Day =>{
  if (Day ==='Monday'){
    return 8;
  } else if (Day==='Tueday'){
    return 7;
  } 
  ....
  else{
  }

  switch(Day){
    case 'Monday':
      return 8
      break;
    case 'Tueday':
      return 7
      break;
    case'Wednesday':
     return 6
     break;
    case 'Thurday':
     return 6
     break;
    case 'Firday':
     return 8
     break;
    case'Saturday':
      return 7
      break;
    case 'Sunday':
      return 8
      break;
    default:
      return "Error!"
  }
};

const getActualSleepHours =()=>
   getSleepHours('Monday')+
  getSleepHours('Tueday')+
  getSleepHours('Wednesday')+
  getSleepHours('Thurday')+
  getSleepHours('Firday')+
  getSleepHours('Saturday')+
  getSleepHours('Sunday');


console.log(getSleepHours('monday'));

