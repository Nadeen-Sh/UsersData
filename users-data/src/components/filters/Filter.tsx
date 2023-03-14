import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';

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
	color?: any;
	fontSize?: any;
}

const FilterComponent: React.FC<any> = (props: SelectProps) => {
	const theme = useTheme();
	const {
		value,
		label,
		handleChange,
		options,
		width = '197.12px',
		height = '60px',
		variant = 'outlined',
		disableUnderline = false,
		placeholder,
		className,
		color = theme.palette.secondary.light,
		fontSize = '14px',
	} = props;

	return (
		<div style={{ width: width, height: height }}>
			<Autocomplete
				className={className}
				ListboxProps={{
					style: { maxHeight: '10rem' },
				}}
				sx={{
					'& .MuiInputBase-input ': {
						height: '18px',
						color: { color },
					},
				}}
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
						sx={{
							'& .MuiFormLabel-root': {
								fontStyle: 'normal',
								fontWeight: '600',
								fontSize: { fontSize },
								lineHeight: '20px',
								letterSpacing: '0.2px',
								color: { color },
							},
						}}
					/>
				)}
			/>
		</div>
	);
};

export default FilterComponent;
