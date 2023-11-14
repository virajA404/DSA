const mergeSortedArray = (arr1,arr2) => {
    if(!Array.isArray(arr1) || !Array.isArray(arr2)){
        console.log("Please enter 2 arrays")
    }else{
        const mergeArr = []
        
        arr1.forEach((val) => {
            mergeArr.push(val)
        })
        
        arr2.forEach((val) => {
            mergeArr.push(val)
        })
    
        mergeArr.sort((a,b) => {return a-b})
        console.log(mergeArr);
    }
}

mergeSortedArray([0,3,8,4,1],[89,33,65,9])
