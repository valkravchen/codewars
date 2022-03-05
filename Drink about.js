function peopleWithAgeDrink(age){
    if(age < 14)
      drink = 'toddy';
    else if(age < 18)
      drink = 'coke'
    else if(age < 21)
      drink = 'beer';
    else if(age => 21)
      drink = 'whisky';
  
    return 'drink ' + drink;
  }