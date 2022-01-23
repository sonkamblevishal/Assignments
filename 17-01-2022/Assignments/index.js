// console.log("Starting");



    function higherorderfunc(x, callbyfunc)
    {
        var result = callbyfunc(x);

            return result;
    }


    function mulBy4(n)
    { 
        return n*4;
    }

    function add9(n)
    {
        return n +9;
    }

        x = 10 ;

        var output_1 = higherorderfunc(x,mulBy4);
        var output_2 = higherorderfunc(x, add9);

        console.log(output_1);
        console.log(output_2);