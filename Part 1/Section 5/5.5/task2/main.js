function filterRange(arr, a, b){
    return arr.filter((value)=>{
        console.log(value);
        if(value >= a && value >= b){
            return false;
        }else {
            return true;
        }
    })
};
alert(filterRange([5,3,8,1],1,4));  