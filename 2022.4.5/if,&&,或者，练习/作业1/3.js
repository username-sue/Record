/* 
  不使用if
  根据身高、体重，计算健康状况

  健康状况取决于BMI   BMI=体重÷身高的平方。（体重单位：千克；身高单位：米。）
  BMI的正常值在20~25之间，少于20偏瘦，高于25偏胖
      a>20 && a<25           a<20     a>25
  输出 正常、偏瘦、偏胖
*/
var height = 163, // 身高（厘米）
  weight = 50; // 体重（千克）
  
  var BMI = weight / ((height/100) * (height/100)); //BMI=体重÷身高的平方（体重单位：千克；身高单位：米。）
  console.log(BMI);
  BMI >20 && BMI<25 ? console.log('正常') : BMI <20 ? console.log('偏瘦') : console.log('偏胖');

