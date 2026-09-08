import { Avatar } from "@mui/material";

function UserInformation() {

    const user = {
        name: "User Name",
        email: "user@example.com",
        phone: "123-456-7890",
        username: "username135790",
        posts: 10,
        followers: 100,
        following: 50,
        comments: 25,
    };

    const firstName = user.name.split(' ')[0];
    const lastName = user.name.split(' ')[1];

    return (
        <div className="flex flex-col items-center justify-center py-4 mr-6 border border-border-subtle bg-bg-surface rounded-lg">
            <Avatar 
            alt="User Avatar"
            sx={{ width: 55, height: 55 }}
            />

            <div className="text-center" >
                <p className="font-semibold">{firstName} {lastName}</p>
                <p className="text-xs text-text-secondary">@{user.username}</p>
            </div>

            <hr className="w-full border-border-subtle my-5" />

            <div className="flex justify-between w-full px-4 text-sm">
                <p className="font-semibold text-text-primary">Posts</p>
                <p className="text-text-secondary">{user.posts}</p>
            </div>

            <div className="flex justify-between w-full px-4 text-sm">
                <p className="font-semibold text-text-primary">Comentários</p>
                <p className="text-text-secondary">{user.comments}</p>
            </div>
        </div>
    )
}

export default UserInformation