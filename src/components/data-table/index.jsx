import React from 'react';
import PropTypes from 'prop-types';

// Components
import Row from './row';

const DataTable = ({ theadItems, tbodyItems, hideTableBody=false, noItemMsg='Please Add Some Item' }) => {
	return (
		<table className='table__table'>
			<thead className='table__thead'>
				<Row components={theadItems} />
			</thead>

			<tbody
				className={hideTableBody ? 'table__tbody hide' : 'table__tbody'}
			>
				{tbodyItems.map((items, i) => (
					<Row key={i} components={items} />
				))}

				{tbodyItems.length === 0 && (
					<tr className='no-item text-secondary'>
						<td colSpan='4'>{noItemMsg}</td>
					</tr>
				)}
			</tbody>
		</table>
	);
};

DataTable.propTypes = {
	hideTableBody: PropTypes.bool,
	theadItems: PropTypes.array.isRequired,
	tbodyItems: PropTypes.array.isRequired,
	noItemMsg: PropTypes.string,
};

export default DataTable;
