async function GetLoginData(){
    const promise = await fetch('https://taskmasterapi.azurewebsites.net/User/Login/');
    const data = await promise.json();
    console.log(data);
    return data;
};

async function createUserAccount(userData: any){
    const promise = await fetch('https://taskmasterapi.azurewebsites.net/User/AddUser/',{
        method: 'POST',
        headers : {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    if(!promise.ok){
        const message = `An Error has Occured ${promise.status}`;
        throw new Error(message)
    }
    const data = await promise.json();
    console.log(data);
    return data;
}










export {GetLoginData, createUserAccount}