function f(){
        var a = [];
        var i;
        for(i = 0; i < 3; i++){
			(function(b){
				a[b] = function(){
                return b;
            }
			})(i);
            
        }
        return a;
}

    var fun = f();

    console.log(fun[0]());		//output	3
    console.log(fun[1]());		//output	3
    console.log(fun[2]());		//output	3
