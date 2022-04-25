// 完成表单验证

function validateHelper(id, callback) {
  var div = document.getElementById(id);
  var inp = div.querySelector('input');
  var msg = div.querySelector('.msg');

  var value = inp.value.trim();
  var err = callback(value); // 错误消息
  msg.innerText = err; // 设置错误消息到p元素中
  // 判断是否有错误
  div.className = err ? 'form-item err' : 'form-item';

  return !err;
}

/**
 * 验证邮箱
 */
function validateEmail() {
  return validateHelper('email', function (value) {
    // 验证邮箱，返回错误消息，value为邮箱文本框的值
    if(!value){
      return '邮箱不能为空';
    }

    var reg = /^.+@[^\s\.]+(\.[^\s\.]+){1,2}$/
      //开始.任意字符+出现1次或多次匹配到@符号
      //中括号^开始\s匹配空格，回车，换行，.后跟任意字符
      //+出现一次或多次，括号.任意字符中括号^开始\s匹配空格，回车，换行，.后跟任意字符
      //+出现一次或多次{1，2}出现一次或2两次，$结束
    if(!reg.test(value)){
      return '邮箱字符不匹配';
    }

  });
}

/**
 * 验证库存
 */
function validateStock() {
  return validateHelper('stock', function (value) {
    // 验证库存，返回错误消息，value为库存文本框的值
    if(!value){
      return '库存不能为空';
    }
      var reg = /^[1-9]\d*$/
      if(!reg.test(value)){
        return '库存不正确';
      }
  });
}

/**
 * 验证价格
 */
function validatePrice() {
  return validateHelper('price', function (value) {
    // 验证价格，返回错误消息，value为价格文本框的值
    if(!value){
      return '单价不能为空';
    }
    var reg = /^([1-9]\d*|0)\.\d{2}$/;
    ///^[1-9]\d*|0$/
    if(!reg.test(value)){
      return '单价输入错误';
    }
  });
}

/**
 * 验证整个表单，设置元素内容和状态
 * @return {boolean} 验证通过返回true，不通过返回false
 */
function validateForm() {
  var r1 = validateEmail();
  var r2 = validateStock();
  var r3 = validatePrice();
  return r1 && r2 && r3;
}

// 注册事件

var email = document.querySelector('#email input');
var stock = document.querySelector('#stock input');
var price = document.querySelector('#price input');

email.addEventListener('input', validateEmail);
stock.addEventListener('input', validateStock);
price.addEventListener('input', validatePrice);

var form = document.querySelector('.form-container');

form.addEventListener('submit', function (e) {
  var result = validateForm();
  if (!result) {
    // 验证未通过，阻止提交
    e.preventDefault();
  }
});
