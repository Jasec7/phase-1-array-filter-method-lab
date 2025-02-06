// Code your solution here
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  
function  findMatching(drivers, name){
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
};


    function fuzzyMatch(drivers, letters) {
        return drivers.filter(driver => {
          
          if (typeof driver === "string") {
            return driver.toLowerCase().startsWith(letters.toLowerCase());
          } else if (driver.name) {
            return driver.name.toLowerCase().startsWith(letters.toLowerCase());
          }
        });
    }

 function matchName(drivers, string){
    return drivers.filter(driver => driver.name === string);
 }

 