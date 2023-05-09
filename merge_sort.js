function mergeSort(array) {
    if (array.length < 2) {
        return array; 
    } else {
        let sortedArray = []; 

        // Sort the left side
        let arrayLeft = mergeSort(array.slice(0, Math.floor((array.length)/2)));

        // Sort the right side 
        let arrayRight = mergeSort(array.slice(Math.floor((array.length)/2), array.length));

        let pointerLeft = 0; 
        let pointerRight = 0;


        // merge the two halves
        for (i = 0; i < array.length; i++) {
            if (arrayLeft[pointerLeft] < arrayRight[pointerRight] || arrayRight[pointerRight] === undefined) {
                sortedArray[i] = arrayLeft[pointerLeft];
                pointerLeft++;
            } else {
                sortedArray[i] = arrayRight[pointerRight];
                pointerRight++;
            }
        }
        return sortedArray; 
    }
}

console.log(mergeSort([2, 4, 123, 1, 3, 5, 8, 12, 11])); // [1, 2, 3, 4, 5, 8, 11, 12, 123]