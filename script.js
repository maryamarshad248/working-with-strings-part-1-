'use strict';
const airline = 'TAP Air Portugal';
console.log(airline[0]);
console.log(airline[1]);
console.log(airline[5]);
console.log(airline.length);
console.log(airline.indexOf('A'));
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.lastIndexOf('A'));
console.log(airline.indexOf('Portugal'));

const plane = 'B737';
console.log('B737'[0]);
console.log(plane[1]);
console.log(plane.length);
console.log('B737'.length);
console.log(plane.indexOf('B'));
console.log(plane.indexOf('3'));
console.log(plane.indexOf('7'));
console.log(plane.lastIndexOf('7'));
console.log(plane.indexOf('B737'));

// slice method
console.log(airline.slice(4));
console.log(airline.slice(8));
console.log(airline.slice(9));
console.log(airline.slice(12));
console.log(airline.slice(-3));
console.log(airline.slice(-9));
console.log(airline.slice(2, -7));

console.log(airline.slice(4, 7));
console.log(airline.slice(3, 8));
console.log(airline.slice(2, 9));
console.log(airline.slice(5, 10));

console.log(airline.slice(1, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(0, airline.indexOf('i')));
console.log(airline.slice(1, airline.indexOf('A')));
console.log(airline.slice(1, airline.indexOf('Portugal')));

const checkMiddleSeat = function (seat) {
  // B and E are the middle seats
  const S = seat.slice(-1);
  if (S === 'B' || S === 'E') console.log('You got the middle seat...');
  else console.log('you are lucky!!!');
};

checkMiddleSeat('112B');
checkMiddleSeat('222E');
checkMiddleSeat('222C');
