import TableHeader from "./TableHeader";
import User from "./User.js"

export default function List({ list, onUserListRemove, onUserListEdit }) {

    return (
        <table>
            <TableHeader/>
            <tbody>
            {
                list.map(user => (
                    <User
                        key={user.id}
                        user={user}
                        onUserListRemove={onUserListRemove}
                        onUserListEdit={onUserListEdit}
                    />
                ))
            }
            </tbody>
        </table>
    )
}