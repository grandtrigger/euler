function sum() {
    var i = 1;
    var s = 0;
    
    while(i < 1000) {
        if (i % 3 === 0 || i % 5 === 0) {
            s += i;
        }
        
		i++;
    }
	
	return s;
}