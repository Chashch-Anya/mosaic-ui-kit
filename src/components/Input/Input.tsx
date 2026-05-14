import React from 'react';
import { useTheme } from '../../styles/useTheme';
import './Input.css';

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {

    variant?: 'primary' | 'secondary' | 'accent';

    inputSize?: 'small' | 'medium' | 'large';

    fullWidth?: boolean;

    error?: boolean;
}

export const Input: React.FC<InputProps> = ({
    variant = 'primary',
    inputSize = 'medium',
    fullWidth = false,
    error = false,
    className = '',
    ...props
}) => {
    const theme = useTheme();

    const sizeMap = {
        small: {
            padding: theme.spacing.sm,
            fontSize: theme.typography.sizes.sm,
        },

        medium: {
            padding: theme.spacing.md,
            fontSize: theme.typography.sizes.md,
        },

        large: {
            padding: theme.spacing.lg,
            fontSize: theme.typography.sizes.lg,
        },
    };

    const variantMap = {
        primary: {
            background: theme.surfaces.base,
            color: theme.colors.white,
            border: theme.colors.primary[700],
        },

        secondary: {
            background: theme.surfaces.elevated,
            color: theme.colors.white,
            border: theme.colors.gray[700],
        },

        accent: {
            background: theme.colors.accent[600],
            color: theme.colors.black,
            border: theme.colors.gray[500],
        },
    };

    const currentSize = sizeMap[inputSize];
    const currentVariant = variantMap[variant];

    const inputStyle = {
        '--input-bg': currentVariant.background,

        '--input-color': currentVariant.color,

        '--input-border':
            error
                ? '#ff004d'
                : currentVariant.border,

        '--input-padding': currentSize.padding,

        '--input-font-size': currentSize.fontSize,

        '--input-font-family': theme.typography.fonts.body,

        '--input-radius': theme.radius.none,

        '--input-shadow': theme.shadows.input,

        '--input-focus-shadow': theme.shadows.focus,

        '--mosaic-surface': theme.surfaces.pixelTexture,

        '--mosaic-surface-size': theme.surfaces.pixelTextureSize,

        width: fullWidth ? '100%' : 'auto',

    } as React.CSSProperties;

    return (
        <input
            {...props}
            style={inputStyle}
            className={`input ${className}`}
        />
    );
};