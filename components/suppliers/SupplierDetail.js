import { Fragment } from 'react'
import classes from './SupplierDetail.module.css';

function MeetingDetail(props){
	return (
		<section className={classes.detail}>
			<img src={props.logo}  alt={props.name} />	
			<h1>{props.name}</h1>
			<address>{props.address}</address>
		</section>
	);
}

export default MeetingDetail