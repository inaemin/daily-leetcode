/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(a, b) {
     let stack = [];
        let out = [];
        let count = 0 ; 
        
        for ( let i = 0 ; i < a.length ; i ++)
        {
            const item1 = a[i];
            const item2 = b[i];

            if(!stack.length)
            {
                if(item1 === item2)
                {
                    count++;
                    out.push(count);
                }
                else
                {
                    out.push(count)
                    stack.push(item1);
                    stack.push(item2);
                }
            }
            else
            {
                count = 0 ;
                if(item1 === item2)
                {
                    count++;
                    out.push(count + out[out.length-1]);
                    stack.push(item1)
                }
                else
                {
                    if(stack.includes(item1))count++;
                    if(stack.includes(item2))count++;

                    stack.push(item1);
                    stack.push( item2);
                     out.push(count + out[out.length-1]);
                }
            }
        }
    
    return out;
};