// 删除数组中的所有字符串
var nums = [1, 1, '1', 'a', 'b', 'a', 3, 5, 3, 7];

    for(var i = 0; i < nums.length; i++){
        if( typeof nums[i] === 'string'){
            nums.splice(i,1);
            i--;
        }
    }

    console.log(nums);

    /**
     * 第一步，for循环遍历数组每一项。
     * 第二步，判断数组下标第i位是不是字符串类型，typeof类型判断
     * 第三步，如果是字符串类型那就删除属性，
     * .splice(i,1);删除属性，删除第几位属性，里面填i译为，
     * 循环到第几位符合if条件判断时是字符串就删除，每次循环删除1位；
     * 注：这里为什么要i--?
     * 因为；.splice(i,1)删除属性时，数组里面的下标会随之移动，所有要i--;
     */