var array = [1,5,10,-2];
function swap (a) {
    var l = a.length-1;
    [a[0],a[l]]= [a[l],a[0]];
    console.log (a);
};
swap(array);