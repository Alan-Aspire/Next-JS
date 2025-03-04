


export default function DashboardLayout({
    children, 
    notifications, 
    revenues, 
    users }: {
        children: React.ReactNode,
        notifications: React.ReactNode
        revenues: React.ReactNode
        users: React.ReactNode
    }) {
    return (
        <>
           <div>{children}</div>
           <div>{notifications}</div>
           <div>{revenues}</div>
           <div>{users}</div>
        </>
    );

}