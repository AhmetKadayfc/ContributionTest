import Link from "next/link"


export default function Page() {
    return (
        <div>
            <h2>Website Index</h2>
            <Link href="/dashboard">Go to Dashboard</Link><br/>
            <Link href="/">Go to Home</Link>
        </div>
    )
}