import Link from 'next/link';

function NavigationBar() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/cources">Cources</Link>
        </li>
        <li>
          <Link href="/apply-job">Apply Jobs</Link>
        </li>
        <li>
          <Link href="/resources">Resources</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/sign-up">Sign up</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavigationBar;
