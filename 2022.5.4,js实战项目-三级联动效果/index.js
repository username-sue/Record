//创建数据
//创建省会数据
var provincialObj = {
    '10':'贵州省',
    '11':'云南省',
    '12':'四川省',
}
//创建城市数据
var cityObj = {
    '10':{
        '01':'贵阳市',
        '02':'安顺市',
        '03':'遵义市',
    },
    '11':{
        '04':'昆明市',
        '05':'曲靖市',
        '06':'大理市',
    },
    '12':{
        '07':'成都市',
        '08':'乐山市',
        '09':'巴中市',
    }
}
//创建学校数据
var schoolObj = {
    '01':[
        '贵州大学',
        '贵州财经大学',
        '贵州师范大学',
        '贵州医科大学'
    ],
    '02':[
        '安顺学院',
        '安顺职业技术学院',
        '贵州民用航空职业学院'
    ],
    '03':[
        '遵义医科大学',
        '遵义师范学院',
        '遵义医药高等专科学校'
    ],
    '04':[
        '昆明理工大学',
        '云南大学',
        '云南名族大学',
        '云南师范大学',
        '云南农业大学',
    ],
    '05':[
        '曲靖师范学院',
        '曲靖医学高等专科学校',
        '云南能源职业技术学院',
        '曲靖职业技术学院'
    ],
    '06':[
        '大理大学'
    ],
    '07':[
        '四川大学',
        '电子科技大学',
        '西南财经大学'
    ],
    '08':[
        '乐山师范学院',
        '乐山职业技术学院',
    ],
    '09':[
        '巴中职业技术学院'
    ]
}

//选中dom 元素
var provincial = document.querySelector('#provincial');
// var option = document.querySelectorAll('#list1 option');
var city = document.querySelector('#city');
var school = document.querySelector('#school');


//遍历对象
for (var prop in provincialObj) {
    //prop 省会编号名，provincialObj[prop]省会名
    var option = document.createElement('option');
        option.value = prop;//把编号赋给option的value值
        option.innerText = provincialObj[prop]; //把键值对赋给option标签
        provincial.appendChild(option);
}


//给省会注册onchange事件，当文本框发生改变或者失去焦点时触发事件
provincial.onchange = function(){
    //由于当省会文本框改变后，city它的value已经有值了，
    //如果要再次选择其他的省份时选择不了，所以这里在一开始就要给它的值清除
    city.innerText = '';
    school.innerText = '';
    //获取省会编号值
    var num = provincial.value;
    //判断省会的值为undefined的时候啥也不做
    if(num === undefined){
        return;
    }
    //获取城市下面的省会编号
    var cityList = cityObj[num];
    //拿到对应的编号后，给城市对象数据进行遍历
    //由于已经把cityObj城市对象数据赋给了cityList这个变量，
    //所以这里就直接遍历cityList就可以了
    for (var prop in cityList) {
        var option = document.createElement('option');
            option.value = prop;
            option.innerText = cityList[prop];
            city.appendChild(option);
    }

    //接下来获取城市对应编号
    var cityNum = city.value;
    //获取学校下面的城市编号
    var schoolList = schoolObj[cityNum];
    //接下来for循环遍历
    for ( var i = 0; i < schoolList.length; i++) {
        var option1 = document.createElement('option');
            option1.value = i;
            option1.innerText = schoolList[i];
            school.appendChild(option1);
    }
}

//给城市注册onchange事件，当城市文本框发生改变时触发事件
city.onchange =function(){
    //清空城市的内容
     school.innerText = '';
     //接下来获取城市对应编号
     var cityNum = city.value;
     //获取学校下面的城市编号
     var schoolList = schoolObj[cityNum];
     //接下来for循环遍历
     for ( var i = 0; i < schoolList.length; i++) {
         var option1 = document.createElement('option');
             option1.value = i;
             option1.innerText = schoolList[i];
             school.appendChild(option1);
     }
}