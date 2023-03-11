import React from 'react';
import { Autocomplete, TextField } from '@mui/material';

interface SelectProps {
	value: any;
	handleChange?: any;
	className?: any;
	label?: string;
	height?: string;
	options?: any;
	width?: string;
	variant?: any;
	dfvalue?: any;
	disableUnderline?: any;
	placeholder?: string;
}

const FilterComponent: React.FC<any> = (props: SelectProps) => {
	const {
		value,
		label,
		handleChange,
		options,
		width = '197.12px',
		height = '40px',
		variant = 'outlined',
		disableUnderline = false,
		placeholder,
		className,
	} = props;

	return (
		<div style={{ width: width, height: height }}>
			<Autocomplete
				className={className}
				ListboxProps={{ style: { maxHeight: '10rem' } }}
				defaultValue={value}
				value={value}
				disablePortal
				options={options}
				getOptionLabel={(option) => option}
				onChange={handleChange}
				renderInput={(params) => (
					<TextField
						{...params}
						label={label}
						placeholder={placeholder}
						variant={variant}
						InputProps={{
							...params.InputProps,
							disableUnderline: disableUnderline,
						}}
					/>
				)}
			/>
		</div>
	);
};

export default FilterComponent;
