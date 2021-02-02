const ages = [12, 34, 54, 32, 22];
const ages2 = [15, 16, 12];
const ages3 = [51, 61, 42];
const allAges = ages.concat(ages2).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3]
// console.log(allAges2);
const takaPoisa = [590, 489, 680];
const maximumAge = Math.max(...takaPoisa)
console.log(maximumAge)