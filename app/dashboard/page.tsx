import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: 'Dashboard | Index',
}

export default function Page() {
    return (
        <div>
            <h1>Dashboard Index</h1>
            <Link href="/">Go to Home</Link><br/>
            <Link href="/website">Go to Website</Link>
        </div>
    )
}