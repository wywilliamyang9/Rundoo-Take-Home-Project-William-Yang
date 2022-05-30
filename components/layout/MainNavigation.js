import Link from 'next/link';
import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Suppliers</div>
      <nav>
        <ul>
          <li>
            <Link href='/'><a>All Suppliers</a></Link>
          </li>
          <li>
            <Link href='/create-supplier'><a>Add New Supplier</a></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;