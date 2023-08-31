
// You should implement your task here.
module.exports = function towelSort (matrix) {
    if (!matrix) {
        return [];
    }
    
    const a = matrix;

    const b = [];  

        for ( i = 0; i < a.length ; i++) {

            let reversed = i % 2;   

            if(reversed > 0) {

             a[i].reverse();

            } 

         };

         for ( z = 0; z < a.length ; ++z) {

                    for (j = 0; j < a[z].length; j++ ) {

                        b.push(a[z][j])

                    };
    
                 };

                
    return b;
    
};


