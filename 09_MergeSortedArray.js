var merge = function (nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;

    let index = m + n - 1;

    while (i >= 0 && j >= 0) {
        if (nums1[i] >= nums2[j]) {
            nums1[index] = nums1[i];
            i--;
            index--;
        }
        else {
            nums1[index] = nums2[j];
            j--;
            index--;
        }
    }

    while (i >= 0) {
        nums1[index] = nums1[i];
        i--;
        index--;
    }
    while (j >= 0) {
        nums1[index] = nums2[j];
        j--;
        index--;
    }

};
