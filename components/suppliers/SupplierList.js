import SupplierItem from './SupplierItem';
import classes from './SupplierList.module.css';

function SupplierList(props) {
  return (
    <ul className={classes.list}>
      {props.suppliers.map((supplier) => (
        <SupplierItem
        	name={supplier.name}
          logo={supplier.logo}
          address={supplier.address}
        />
      ))}
    </ul>
  );
}

export default SupplierList;