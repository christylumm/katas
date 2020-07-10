/*
KATA 6 - SmartParking

We need to write a function called whereCanIPark() that returns the coordinates of an available parking spot for the vehicle, or returns false if there is no available spot. Our function receives an array of arrays representing parking spots, and a string with type of the vehicle that is looking for a parking spot.


Regular cars can only park in R spots
Small cars can park in R or S spots
Motorcycles can park in R, S, or M spots

In the array of parking spots, spots are written in both lower-case and upper-case. An upper-case letter means that the particular spot is AVAILABLE, while the lower-case letters mean that the spot is UNAVAILABLE.

Return an [x, y] cooordinator for the available parking spot.
If no spots, return false.

*/

const whereCanIPark = function (spots, vehicle) {
  for(let y = 0; y < spots.length; y++) {
    for (let x = 0; x < spots[y].length; x++) {

      const spot = spots[y][x];

      //The if-statements check if the type of vehicle's conditions will fit a spot within the array of spots
      if (vehicle === 'regular') {
        if (spot === 'R') {
          return [x, y];
        }
      } else if (vehicle === 'small') {
        if (spot === 'R' || spot === 'S') {
          return [x, y];
        }
      } else if (vehicle === 'motorcycle') {
        if (spot === 'R' || spot === 'S' || spot === 'M') {
          return [x, y];
        }
      }
    }
  }
  return false;
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));


console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))
