import Link from "next/link"
import NotFoundBuddy from "@/components/not-found-buddy"
import styles from "./globals.css"

export default function NotFound() {
  return (
    <div className="container">
        <div className="flex">
            <h2>Not Found</h2>
            <p>error 404</p>
            <div className="face">
                <NotFoundBuddy/>
            </div>
            <Link href="/">Return Home</Link>
        </div>
    </div>
    )
}