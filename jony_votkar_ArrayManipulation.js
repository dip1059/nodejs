let x =[
        [10, 15, 16, 18, 19, 20],
        [15, 20, 30, 45, 55],
        [18, 30, 31, 33, 35]
    ];

result = jonyVotkarArray(x);
console.log(result);

function jonyVotkarArray(x) {
    let result = [];
    let maxLength = 0;
    try {
        if (x.length > 0) {
            maxLength = x[0].length;
        }
    } catch (e) {
        console.log(e.message);
        return;
    }
    for (let i = 1; i < x.length; i++) {
        maxLength = Math.max(maxLength, x[i].length)
    }

    let i=0;
    let j=1;
    while(true) {
        result.push(x[i][j-1]);
        if(j % 2 === 0) {
            j++;
            if(j>maxLength && i===x.length-1) {
                break;
            } else if(i===x.length-1) {
                i=0;
                continue;
            } else {
                j-=2;
            }
            i++;
            continue;
        }
        j++;
    }
    return result;
}
