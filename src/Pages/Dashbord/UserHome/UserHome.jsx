import useAuth from "../../../Hooks/useAuth";



const UserHome = () => {
    const { user } = useAuth();
    return (
        <div>
            <span>Hi, Welcome back  </span>
            {
                user?.displayName ? user.displayName : "Back"
            }
        </div>
    );
};

export default UserHome;