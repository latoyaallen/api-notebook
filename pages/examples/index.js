import Link from 'next/link';
import { Fragment } from 'react';

function ExampleListPage() {
  return (
    <Fragment>
    <h1>The Example List Page</h1>
    <ul>
      <li>
        <Link href='/examples/github'>
          GitHub Example
        </Link>
       </li>
       <li>
        <Link href='/examples/metmuseum'>
          Met Museum Example
        </Link>
      </li>
    </ul>
    </Fragment>
  )
}

export default ExampleListPage;

