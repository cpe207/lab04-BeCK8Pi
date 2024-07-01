function arrayStringify(a) {
  let x = "";
  for(let k in a){
    x+=a[k];
  }
  return x;
}

const c1 = [1, 2, 3];
const c2 = [10, 9, 8, 7, 6, 5];
const c3 = [];

console.log(arrayStringify(c1));
console.log(arrayStringify(c2));
console.log(arrayStringify(c3));

module.exports = arrayStringify;

//กฤษฏิ์ศรัล กันติ๊บ 660610740