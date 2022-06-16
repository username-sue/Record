//对每一个表单进行验证的构造函数

    class FieldValidator {
        /**
         * 构造器
         * @param {*} textId 文本框id
         * @param {*} validatorFunc 验证规则函数，当需要对改文本框进行验证时，会调用改函数
         * 函数的参数为当前文本框的值，函数的返回值为验证错误的消息，若没有返回，则表示没有错误
         */
        constructor(textId, validatorFunc) {
            this.input = $('#' + textId);//拿到文本框的dom元素
            this.p = this.input.nextElementSibling;//拿到input下面的兄弟元素p；
            this.validatorFunc = validatorFunc;
            //当鼠标失去焦点时，和点击注册按钮时触发事件
            this.input.onblur = () => {
                this.validate();//调用验证器
            }
        }
        /**
         * 验证器，成功返回true，失败返回false;
         */
        async validate () {
            //在这里调用函数，把文本框的值传进去
           const err = await this.validatorFunc(this.input.value);
           //判断是否有错，有错则把p标签文本内容设置为错误信息，返回false,否则返回ture;
           if (err) {
               this.p.innerHTML = err;
               return false;
           }else{
            this.p.innerHTML = '';
            return true;
           }
        }

        /**
         * 静态方法，自带验证所有的文本框，并把结果返回
         * @param {*validators} 所有的验证器
         * 对所有的验证器统一进行验证，如果成功就返回ture，否则返回false
         */
        static async validate(...validators) {
            // debugger
            //map循环拿到每一项并调用验证器
            const proms = validators.map((v)=>v.validate());
            //all 方法判断 所有的验证都通过就为true，否则为false
            const result = await Promise.all(proms);
            //最后every 方法，判断，必须所有的都为true，否则为false
            return result.every((r) =>r);
        }
    }

//     var login = new FieldValidator('txtLoginId', async function (val) {
//             if (!val){
//                 return '请填写账号'
//             }
//             const resp = await API.exists(val);
//             //判断账号是否存在
//             if(resp.data){
//                 //账号已存在
//                 return '账号已存在，请重新输入账号';
//             }
//     })
//     var txtNicknameLogin = new FieldValidator('txtNickname', async function (val) {
//         if (!val){
//             return '请填写昵称'
//         }
// })