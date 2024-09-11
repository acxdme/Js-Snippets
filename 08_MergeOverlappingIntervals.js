var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let n = intervals.length;

    let result = [];
    let currentInterval = intervals[0];
    for (let i = 1; i < n; i++) {
        if (currentInterval[1] >= intervals[i][0]) {
            currentInterval = [currentInterval[0], Math.max(intervals[i][1], currentInterval[1])];
        }
        else {
            result.push(currentInterval);
            currentInterval = intervals[i];
        }

    }

    result.push(currentInterval);

    return result;
};
