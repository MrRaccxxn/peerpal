import { forwardRef } from 'react';

import classNames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	variant?: ButtonVariant;
	fullWidth?: boolean;
}

export type ButtonVariant = 'primary' | 'secondary' | 'text';

export const Button: React.FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
	({ variant = 'primary', fullWidth = false, ...props }, ref) => {
		const variantMap: { [key in ButtonVariant]: string } = {
			primary: 'bg-primary-fush',
			secondary: 'bg-transparent border border-primary-fush',
			text: '',
		};

		return (
			<button
				ref={ref}
				type="submit"
				className={classNames([
					'cursor-pointer text-white px-4 py-[10px] rounded-lg ',
					variantMap[variant],
					fullWidth ? 'w-full' : 'w-fit',
				])}
				{...props}
			/>
		);
	},
);

Button.displayName = 'Button';