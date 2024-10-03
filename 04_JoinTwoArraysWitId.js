
var join = function (arr1, arr2) {

    let obj = {};
    arr1.forEach((item) => obj[item.id] = item);

    arr2.forEach((item) => {
        if (obj[item.id] != undefined) {
            obj[item.id] = { ...obj[item.id], ...item };
        }
        else {
            obj[item.id] = item;
        }
    });

    let res = Object.values(obj);

    return res;

};
