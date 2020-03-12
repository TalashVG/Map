var map_a = new Map();
map_a.set('f1', 'tovar');
map_a.set('f2', 'tovar');
map_a.set('f3', 'tovar');
map_a.set('f4', 'tovar2');
map_a.set('f5', 'tovar2');
map_a.set('f6', 'tovar3');
map_a.set('f7', 'tovar3');

var map_b = new Map();
map_b.set(11, 'f1');
map_b.set(111, 'f2');
map_b.set(1111, 'f3');
map_b.set(1, 'f4');
map_b.set(111111, 'f5');
map_b.set(11111, 'f6');
map_b.set(11111111, 'f7')

var map_c = new Map();
map_c.set(2,'f1');
map_c.set(22, 'f2');
map_c.set(222, 'f3');
map_c.set(2222, 'f4');
map_c.set(22222, 'f5');
map_c.set(222222, 'f6');
map_c.set(2222222, 'f7');

var minprice = map_b.keys().next().value;
var maxprice = map_c.keys().next().value;

for(let price of map_b.keys()){
    if (price < minprice){
        minprice = price;
    }
}

for(let price of map_b.keys()){
    if (price > maxprice){
        maxprice = price;
    }
}

var mindel = map_c.keys().next().value;
var maxdel = map_c.keys().next().value;

for(let del of map_c.keys()){
    if (del < mindel){
        mindel = del;
    }
}

for(let del of map_c.keys()){
    if (del > maxdel){
        maxdel = del;
    }
}

function getByValue(map, searchValue) {
    for (let [key, value] of map.entries()) {
      if (value === searchValue)
        return key;
    }
  }


console.log(`${map_a.get(map_b.get(minprice))}: ${minprice} ${map_b.get(minprice)} ${getByValue(map_c, map_b.get(minprice))}`);
console.log(`${map_a.get(map_b.get(maxprice))}: ${maxprice} ${map_b.get(maxprice)} ${getByValue(map_c, map_b.get(maxprice))}`);

console.log(`${map_a.get(map_c.get(mindel))}: ${mindel} ${map_c.get(mindel)} ${getByValue(map_b, map_c.get(mindel))}`);
console.log(`${map_a.get(map_c.get(maxdel))}: ${maxdel} ${map_c.get(maxdel)} ${getByValue(map_b, map_c.get(maxdel))}`);
