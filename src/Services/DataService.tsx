async function GetLoginData(){
    const promise = await fetch('https://taskmasterapi.azurewebsites.net/User/Login/');
    const data = await promise.json();
    console.log(data);
    return data;
};

async function createUserAccount(){
    const promise = await fetch('https://taskmasterapi.azurewebsites.net/User/AddUser/')
    const data = await promise.json();
    console.log(data);
    return data;
}










export {GetLoginData, createUserAccount}