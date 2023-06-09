async function GetLoginData(userData:object){
    const promise = await fetch('https://taskmasterapi.azurewebsites.net/User/Login/',{
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
};

async function createUserAccount(userData: object){
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

async function GetUserByUsername(Username:string){
    const promise = await fetch(`https://taskmasterapi.azurewebsites.net/User/UserByUserName/${Username}`);
    const data = await promise.json();
    console.log(data);
    return data;

}

async function CreateTask(task: object){
        const result = await fetch('https://taskmasterapi.azurewebsites.net/Task/AddTaskItem', {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(task)
        });
        if (!result.ok) {
            const message = `An Error has Occured ${result.status}`;
            throw new Error(message);
        }
        let data = await result.json();
        console.log(data);
        return data;
    }

async function GetAllUsers(){
    const promise = await fetch("https://taskmasterapi.azurewebsites.net/User/GetAllUsers/");
    const data = await promise.json();
    console.log(data);
    return data;
}










export {GetLoginData, createUserAccount, GetUserByUsername, CreateTask, GetAllUsers}