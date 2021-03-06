import React from 'react';
import { Typography as TypographyBase } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';

// styles

function Typography({
    children,
    weight,
    size,
    colorBrightness,
    color,
    ...props
}) {
    var theme = useTheme();

    return (
        <TypographyBase
            style={{
                color: getColor(color, theme, colorBrightness),
                fontWeight: getFontWeight(weight),
                fontSize: getFontSize(size, props.variant, theme),
            }}
            {...props}
        >
            {children}
        </TypographyBase>
    );
}

export { Typography };

// ########################################################################

function getColor(color, theme, brigtness = 'main') {
    if (color && theme.palette[color] && theme.palette[color][brigtness]) {
        return theme.palette[color][brigtness];
    }
}

function getFontWeight(style) {
    switch (style) {
        case 'light':
            return 300;
        case 'medium':
            return 500;
        case 'bold':
            return 600;
        default:
            return 400;
    }
}

function getFontSize(size, variant = '', theme) {
    var multiplier;

    switch (size) {
        case 'sm':
            multiplier = 1;
            break;
        case 'md':
            multiplier = 1.5;
            break;
        case 'xl':
            multiplier = 2;
            break;
        case 'xxl':
            multiplier = 3;
            break;
        default:
            multiplier = 1;
            break;
    }

    var defaultSize =
        variant && theme.typography[variant]
            ? theme.typography[variant].fontSize
            : theme.typography.fontSize + 'px';

    return `calc(${defaultSize} * ${multiplier})`;
}
