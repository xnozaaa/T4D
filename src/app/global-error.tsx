"use client";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="en">
      <body>
        <main style={{ margin: "4rem auto", maxWidth: 640, padding: "0 1.5rem" }}>
          <h1>Something went wrong</h1>
          <p>Please try again. If the problem continues, contact Tutoring for the Deaf directly.</p>
          <button type="button" onClick={reset}>Try again</button>
        </main>
      </body>
    </html>
  );
}
