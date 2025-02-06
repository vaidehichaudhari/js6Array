function reverseArray(arr){
    let reversed=[];
    for(let i=arr.length-1;i>=0;i--){
        reversed.push(arr[i]);
    }
    return reversed;
}
console.log(reverseArray([1,2,3,4,5]));

function secondLargest(arr){
    let largest = -Infinity,second=-Infinity;
    for(let num of arr){
        if(num>largest){
            second=largest;
            largest=num;
        }else if (num>second && num<largest){
            second=num;
        }
    }
    return second;
}
console.log(secondLargest([10,20,30,40]));

function mergeWithoutDuplicates(arr1,arr2){
    return [...new Set([...arr1,...arr2])];
}
console.log(mergeWithoutDuplicates([1,2,3],[2,3,4]));

function frequencyCount(arr){
    let freq={};
    for (let num of arr){
        freq[num]=(freq[num]|| 0)+1;
    }
    return freq;
}
console.log(frequencyCount([1,2,2,3,3,3]));

function manualIncludes(arr,value){
    for(let item of arr){
        if(item==value)
            return true;
    }
    return false;
}
console.log(manualIncludes([1,2,3],2));
console.log(manualIncludes([1,2,3],4));

function shiftLeft(arr){
    if(arr.length===0)
        return arr;
    let first = arr.shift();
    arr.push(first);
    return arr;
}
console.log(shiftLeft([1,2,3,4]));

function rotateRight(arr,k){
    k%= arr.length;
    return arr.slice(-k).concat(arr.slice(0,-k));
}
console.log(rotateRight([1,2,3,4,5],2));

function multiplicationTable(){
    let table=[];
    for(let i=1; i<=10;i++){
        let row=[];
        for(let j=1; j<=10;j++){
            row.push(i*j);
        }
        table.push(row)
    }
    return table;
}
console.log(multiplicationTable());


function intersection(arr1,arr2){
    return arr1.filter(item=>arr2.includes(item));
}
console.log(intersection([1,2,3],[2,3,4]));