"use client";
import Link from "next/link";

export default function Home() {


  return (
    <main>
      <nav>
        <ul>
          <Link
          href={'/registration/signup-email'}
          >Login
          </Link>

          <Link
          href={'/registration/signup'}
          >Signup
          </Link>

        </ul>
      </nav>
    </main>
  );
}
