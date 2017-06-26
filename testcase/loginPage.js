/**
 * Created by bindo on 6/26/17.
 */

var BasePage=require('../common/basepage');
var Elements=require('../Elements');
var config=require('../config/config');
var testData=require('../test_data/data');

function inheritPrototype(subType,superType) {
    var prototype=Object(superType.prototype);
    prototype.constructor=subType;
    subType.protoype=prototype;
}


//var loginPage=new BasePage(driver);
function LoginPage(driver) {
    //借用构造函数继承
    BasePage.call(this,driver);
}

//原型式继承
LoginPage.prototype=new BasePage();
//inheritPrototype(LoginPage,BasePage);

LoginPage.prototype.login=function() {
    //loginPage elements
    DyardLoginPage=Elements.DyardLoginPage;
    var loginElements=[DyardLoginPage.email,DyardLoginPage.password,
        DyardLoginPage.signInBtn];
    //input login data
    loginData=testData.LoginData;
    var loginData=[loginData.username,loginData.password];
    //input data and click signin button
    this.submitData(loginElements,loginData);
    //BasePage.prototype.submitData.call(this,loginElements,loginData);
};



module.exports=LoginPage;




