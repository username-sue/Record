 //封装一个函数
function inherit(origin,target){
  Object.getPrototypeOf(origin.prototype,target.prototype);
}

// 普通会员的构造函数
function User(username, password){
    this.username = username;
    this.password = password;
  }
  User.prototype.playFreeVideo = function(){
    console.log('观看免费视频')
  }
  
  // VIP会员的构造函数
  //这里的的重复代码，用call，
  function VIPUser(username, password, expires){
    User.call(this,username,password);
    this.expires = expires;
  }
  // VIPUser.prototype.playFreeVideo = function(){
  //   console.log('观看免费视频')
  // }
  VIPUser.prototype.playPayVideo = function(){
    console.log('观看付费视频')
  }

  inherit(VIPUser,User);
  var vip = new VIPUser('ABC','123','2022.1.3');
vip.playPayVideo();


  /**需求1：解决重复代码
   * 需求2：让vip会员继承普通会员
   */
 
 