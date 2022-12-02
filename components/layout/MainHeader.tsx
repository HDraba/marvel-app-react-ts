import Link from 'next/link';

export const MainHeader = () => {
  return (
    <header>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/characters">Characters</Link>
        </li>
        <li>
          <Link href="/characters/add-character">Add Character</Link>
        </li>
      </ul>
    </header>
  );
};
