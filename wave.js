function wave(str){
    let result = [];
    
    str.split("").forEach((char, index) => {
        if (char != ' ') {
            result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
        }
    });
    
    return result;
}
