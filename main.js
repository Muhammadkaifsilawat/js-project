
let items = [];

function add(item) {
    if (!items.indexOf(item)) {
        items.push(item);
    }
}


function remove(item) {
    const index = items.indexOf(item);
    if (index !== -1) {
        items.splice(index, 1);
    }
}
function lastChar(kaif) {
    if (kaif.length === 0) return null; 
    return kaif[kaif.length - 1];
}
function reverse(kaif) {
    return kaif.split('').reverse().join('');
}
add('grapes');
add('mango');

console.log(items); 

remove('grapes');
console.log(items);



console.log(lastChar('Development'));






console.log(reverse('Development')); 

console.log(reverse(reverse('Development'))); 