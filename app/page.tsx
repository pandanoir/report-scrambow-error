'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import { Scrambow } from 'scrambow';

const scrambler = new Scrambow();
const TopPage = () => {
  useEffect(() => {
    console.log();
    console.log(scrambler.setSeed(1).get());
  });
  return (
    <div>
      <main>
        <h1>Top page</h1>
        <Link href="/todo">app page</Link>
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/api/auth/login">login</a>
      </main>
    </div>
  );
};
export default TopPage;
