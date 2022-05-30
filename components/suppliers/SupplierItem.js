import { useRouter } from 'next/router';

import Card from '../ui/Card';
import classes from './SupplierItem.module.css';

function SupplierItem(props) {
	const router = useRouter();
	
	function showDetailHandler(){
		router.push('/' + props.name);
	}
  return (
    <li className={classes.item}>
      <Card>
				<div className={classes.image}>
					<img src={props.logo} alt={props.name} />
				</div>
				<div className={classes.content}>
					<h3>{props.name}</h3>
					<address>{props.address}</address>
				</div>
				<div className={classes.actions}>
					<button onClick={showDetailHandler}>Show Details</button>
				</div>
      </Card>
    </li>
  );
}

export default SupplierItem;