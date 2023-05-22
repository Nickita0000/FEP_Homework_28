import Form from './Form.js';
import List from './List.js'
import { useState } from "react";

const initialList = [
    {
        "name":"Ольга",
        "surname":"Профатилова",
        "phone":"1",
        "id":"42"
    },
    {
        "name":"Ольга"
        ,"surname":"Профатилова"
        ,"phone":"5667"
        ,"id":"43"
    },
    {
        "name":"Ольга",
        "surname":"Профатилова"
        ,"phone":"8",
        "id":"44"
    },
]

function App() {
    const [list, setList] = useState(initialList)
    const [userEdit, setUserEdit] = useState({})

    function onFormSubmit(user) {
        if(user.id){
            const newUserList = list.map(userItem => userItem.id === user.id ? user : userItem)
            setList(newUserList)
        } else {
            const userListFromServer = {
                ...user,
                id: Math.random()
            }

            setList([...list, userListFromServer])
        }
    }

    function onUserListRemove(id) {
        const updatedList = list.filter(user => user.id !== id)

        setList(updatedList)
    }

    function onUserListEdit(user) {
        setUserEdit(user)
    }

    return (
      <div>
        <Form
            userEdit={userEdit}
            onFormSubmit={onFormSubmit}
        />
        <List
            list = {list}
            onUserListRemove={onUserListRemove}
            onUserListEdit={onUserListEdit}
        />
      </div>
    );
}

export default App;
