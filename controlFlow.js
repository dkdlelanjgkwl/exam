var x = 25;
if(x>=10 && x<=20){
    console.log(x);
}
console.log('=======================');
for(let i =0; i<10; i++){
    if(!(i%2)){
        console.log(i);
    }
}
console.log('=======================');
let result = "0";
for(let i = 1; i < 10; i++){
    if( !(i%2) ){
        result = result+i;
    }
}
console.log(result);
console.log('=======================');
for(let i = 10; i > 0; i--){
    if(i%2){
        console.log(i);
    }
}
console.log('=======================');
let a = 0;
const b = 10;
while(a<b){
    if(!(a%2)){
        console.log(a);
    }
    a = a + 1;
}
a = 0;
console.log('=======================');
while(a < b){
  if(a%2) {console.log(a);}
  a = a + 1;
}
console.log('=======================');
let sum = 0;
for(let i = 0; i < 10; i++){
    sum = sum + i;
}
console.log(sum);
console.log('=======================');
sum = 0;
for(let i = 0; i < 20; i++){
    if(!(i%2===0) && !(i%3===0)){
        sum = sum + i;
    }
}
console.log(sum);
console.log('=======================');
sum = 0;
for(let i = 0; i < 20; i++){
    if((i%2===0 || i%3===0)){
        sum = sum + i;
    }
}
console.log(sum);
console.log('=======================');
const dice = {
    first : [1,2,3,4,5,6],
    second : [1,2,3,4,5,6]
};
for(let i = 0; i < dice.first.length; i++){
    for(let j = 0; j < dice.second.length; j++ ){
        if( dice.first[i] + dice.second[j] === 6) console.log(`[${dice.first[i]},${dice.second[j]}]`);
    }
}
console.log('=======================');
let count = 1;
const star = '*';
for(let i = 0; i < 5; i++){
    let stars = '';
    for(let j = 0; j < count; j++){
        stars = stars.concat(star);
    }
    console.log(stars);
    count = count+1;
}
console.log('=======================');
count = 5;
for(let i = 0; i < 5; i++){
    let stars = '';
    for(let j = 0; j < count; j++ ){
        stars = stars.concat(star);
    }
    console.log(stars);
    count = count -1;
}
console.log('=======================');
let spaceCounter = 0;
const space = ' ';
count = 5;
for(let i = 0; i < 5; i++){
    let stars = '';
    for(let k = 0; k < spaceCounter; k++){
        stars = stars.concat(space);
    }
    for(let j = 0; j < count; j++){
        stars = stars.concat(star);
    }
    console.log(stars);
    count = count - 1;
    spaceCounter = spaceCounter + 1;
}
console.log('=======================');
count = 5;
for(let i = 0; i < 5; i++){
    let stars = '';
    for(let j = 0; j < count; j++){
        stars = stars.concat(star);
    }
    console.log(stars);
    count = count - 1;
}
console.log('=======================');
count = 1;
spaceCounter = 4;
for(let i = 0; i < 5; i++){
    let stars = '';
    for(let j = 0; j < spaceCounter; j++){
        stars = stars.concat(space);
    }
    for(let k = 0; k < count; k++){
        stars = stars.concat(star);
    }
    console.log(stars);
    count = count + 2;
    spaceCounter = spaceCounter - 1;
}
console.log('=======================');
spaceCounter = 0;
count = 9;
for(let i = 0; i < 5; i++){
    stars = '';
    for (let j = 0; j < spaceCounter; j++){
        stars = stars.concat(space);
    }
    for (let k = 0; k < count; k++){
        stars = stars.concat(star);
    }
    console.log(stars);
    spaceCounter = spaceCounter + 1;
    count = count - 2;
}
console.log('=======================');