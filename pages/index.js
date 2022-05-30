import SupplierList from '../components/suppliers/SupplierList';

const DUMMY_SUPPLIERS = [
	{
		name: 'banana',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg',
		address: '444 banana st'
	},
	{
		name: 'banana1',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg',
		address: '444 banana st'
	},
	{
		name: 'banana2',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg',
		address: '444 banana st'
	},
];

function HomePage() {
	return <SupplierList suppliers={DUMMY_SUPPLIERS} /> 
}

export default HomePage