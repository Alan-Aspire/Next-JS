

export default function DashboardLayout({
    children, 
    notifications, 
    revenues, 
    users,
    login }: {
        children: React.ReactNode,
        notifications: React.ReactNode
        revenues: React.ReactNode
        users: React.ReactNode
        login: React.ReactNode
    }) {
    const loggedIn = false;
    return loggedIn ? (
        <>
           <div>{children}</div>
           <div>{notifications}</div>
           <div>{revenues}</div>
           <div>{users}</div>
        </>
    ): <div>{login}</div>;

}