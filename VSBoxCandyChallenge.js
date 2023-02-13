//Boxes and candy below

var N = Math.round(Math.random() * 30 + 30); //number of boxes -1
var K = Math.round(Math.random() * 300 + 300); //number of candies
var Direction = 1; //1 = right, 0 = left
var i = 0; //box location in the array
var array = [];
var value = 0;
for (j = 0; j <= N; j++) {
    array.push(0);
}
var value = 0;
console.log(array);
console.log("There are " + (N + 1) + " boxes and " + K + " pieces of candy.");
while (K != 0) {
    if (Direction == 1) {
        value = array[i];
        array[i] = value + 1;
        K--;
        console.log("Placed a piece of candy in box " + (i + 1));
        value = array[i+1];
        i++;
        if (i == (N + 1)) {
            Direction = 0;
            i = (N);
        }
    }

    else if (Direction == 0) {
        array[i]++;
        K--;
        console.log("Placed a piece of candy in box " + (i + 1));
        value = array[i+1];
        i--;
        if (i == -1) {
            Direction = 1;
            i = 0;
        }
    }
}
console.log("Last piece of candy went in box " + (i));
array[i] = "**" + value + "**"; //marks the box in the array that the last piece of candy was put in
console.log("Box inventory is:");
console.log(array);