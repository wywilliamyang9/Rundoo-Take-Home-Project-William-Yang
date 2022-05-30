import Card from '../ui/Card';
import classes from './SupplierItem.module.css';

function SupplierItem(props) {
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
					<button>Show Details</button>
				</div>
      </Card>
    </li>
  );
}

export default SupplierItem;