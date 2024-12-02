import { useState, useEffect } from 'react';
import { useStoreState, useStoreActions, useStoreRehydrated } from 'easy-peasy';
import { ThreeDots } from 'react-loader-spinner';

// Components
import Nav from '../../components/nav';
import AddBucket from './add-bucket';
import BucketTable from './bucket-table';

// Assets
import { brand } from '../../assets';

const BucketList = () => {
	// States
	const [bucketName, setBucketName] = useState('');
	const buckets = useStoreState((state) => state.buckets.items);
	const isRehydrated = useStoreRehydrated();

	// Actions
	const createBucket = useStoreActions((actions) => actions.buckets.create);
	const removeBucket = useStoreActions((actions) => actions.buckets.remove);
	const renameBucket = useStoreActions((actions) => actions.buckets.rename);
	const changeSearchTerm = useStoreActions(
		(actions) => actions.suggestions.changeSearchTerm
	);

	// Effects
	useEffect(() => {
		changeSearchTerm('');
	}, [changeSearchTerm]);

	return (
		<>
			<Nav brandLogo={brand.brandLogo} name='Shopping Bucket' />
			<main className='container __margin--ylg'>
				{isRehydrated ? (
					<>
						{' '}
						<AddBucket
							bucketName={bucketName}
							setBucketName={setBucketName}
							createBucket={createBucket}
						/>
						<BucketTable
							buckets={Object.values(buckets)}
							renameBucket={renameBucket}
							removeBucket={removeBucket}
						/>{' '}
					</>
				) : (
					<ThreeDots
						visible={true}
						height="80"
						width="80"
						color="#111111"
						radius="9"
						ariaLabel="three-dots-loading"
					/>
				)}
			</main>
		</>
	);
};

export default BucketList;
