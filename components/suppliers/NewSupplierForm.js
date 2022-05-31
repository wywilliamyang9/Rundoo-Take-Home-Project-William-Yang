import { useRef } from 'react';
import { useRouter } from 'next/router';
import Card from '../ui/Card';
import classes from './NewSupplierForm.module.css';

function NewSupplierForm(props) {
  const router = useRouter();
	
	const nameInputRef = useRef();
  const logoInputRef = useRef();
  const addressInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredLogo = logoInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;

    const supplierData = {
      name: enteredName,
      logo: enteredLogo,
      address: enteredAddress,
    };

    props.onAddSupplier(supplierData);

		router.push('/');
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='name'>Supplier Name</label>
          <input type='text' required id='name' ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='logo'>Supplier Logo Link</label>
          <input type='url' required id='logo' ref={logoInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={addressInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Add Supplier</button>
        </div>
      </form>
    </Card>
  );
}

export default NewSupplierForm;