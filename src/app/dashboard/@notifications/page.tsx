import Card from "../../../components/cards";
import Link from "next/link";

export default function Notification() {
    return (
        <Card>
            <div>Notifications</div>
            <Link href="/dashboard/archived">Archived</Link>
        </Card>
    );
}