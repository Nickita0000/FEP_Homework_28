export default function User({ user, onUserListRemove, onUserListEdit }) {
    function onDeleteBtnClick() {
        onUserListRemove(user.id)
    }

    function onEditBtnClick() {
        onUserListEdit(user)
    }

    return(
        <tr>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>{user.phone}</td>
            <td>
                <button onClick={onEditBtnClick}>Edit</button>
                <button onClick={onDeleteBtnClick}>Delete</button>
            </td>
        </tr>
    )
}