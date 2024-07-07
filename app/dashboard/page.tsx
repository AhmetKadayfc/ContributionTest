import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: 'Dashboard | Index',
}

export default function Page() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Dashboard Index</h1>
            <Link href="/website">Go to Website</Link>
            <Link href="/">Go to Home</Link><br/>
        </div>
    )
}