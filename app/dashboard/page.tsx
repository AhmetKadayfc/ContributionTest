import Link from "next/link"

export default function Page() {
    return (
        <main>
            <Link href="/">Go to Home</Link><br/>
            <Link href="/website">Go to Website</Link>
        </main>
    )
}