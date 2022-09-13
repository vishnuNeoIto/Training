function filterRange(arr, a, b){
    return arr.filter((value)=>{
        console.log(value);
        if(value > a && value < b){
            return false;
        }else {
            return true;
        }
    })
};
alert(filterRange([3,4,5,6,2,1,8,9],1,4));  