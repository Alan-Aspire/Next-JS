import Card from "../../../../components/cards";
import Link from "next/link";

export default function ArchivedNotification() {
    return (
        <Card>
            <div>Archived Notifications</div>
            <Link href="/dashboard">Default</Link>
        </Card>
    );
}