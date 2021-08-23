// function dorongString(s, dorongKiri, dorongKanan) {
//   // Write your code here
//   let res = "";
//   const replaceAll = (string, search, replace) => {
//     return string.split(search).join(replace);
//   };
//   let arr = replaceAll(s, "XYZ", "0").split("");
//   for (let i = 0; i < dorongKiri; i++) {
//     arr.push(arr.shift());
//   }
//   // bcdXYZefgXYZhija
//   arr.reverse()
//   for (let i = 0; i < dorongKanan; i++) {
//     arr.push(arr.shift());
//   }
//   arr.reverse()
//   res = replaceAll(arr.join(), '0', "XYZ")
//   return replaceAll(res, ",", "")
// }
// console.log(dorongString("abcdXYZefgXYZhij", 1, 1));

function cetakMenu(arr) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    arr[i].push(arr[i].shift())
  }

  return arr.sort()
}

/*
Index 0 = id Menu
Index 1 = Parent Menu ( 0 artinya paling atas)
Index 2 = Nama Menu
Index 3 = Ordering Menu
*/

// - Beranda (0)
// - About Us (1)
//   - Contact Us (0)
// - Product (2)
//   - Product 1 (0)
//   - Product 2 (1)
//   - Product 3 (2)
// 	- Product 3.1 (0)
//   - Product 4 (3)

// [1, 0, "Beranda", 0],
// [6, 0, "About Us", 1],
//   [7, 6, "Contact Us", 0],
// [2, 0, "Product", 2],
//   [3, 2, "Product 1", 0],
//   [4, 2, "Product 2", 1],
//   [5, 2, "Product 3", 2],
//      [8, 5, "Product 3.1", 0],
//   [9, 2, "Product 4", 3]

let arr = [
  [1, 0, "Beranda", 0],
  [2, 0, "Product", 2],
  [3, 2, "Product 1", 0],
  [4, 2, "Product 2", 1],
  [5, 2, "Product 3", 2],
  [6, 0, "About Us", 1],
  [7, 6, "Contact Us", 0],
  [8, 5, "Product 3.1", 0],
  [9, 2, "Product 4", 3],
];

console.log(cetakMenu(arr));
