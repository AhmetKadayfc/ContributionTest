import Link from "next/link"

export default function Page() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <Link href="/website">Go to Website</Link>
            <Link href="/">Go to Home</Link><br/>
        </div>
    )
}