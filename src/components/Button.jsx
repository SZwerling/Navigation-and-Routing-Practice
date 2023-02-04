import classNames from "classnames"


function Button({
    children,
    primary, 
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}) {
    const classes = classNames(rest.className, 'px-3 py-1.5 flex items-center border m-1 text-white', {
        'bg-sky-400 border-sky-400 text-white': primary,
        'bg-slate-300 border-slate-300': secondary,
        'bg-green-500 border-green-500': success,
        'bg-yellow-300 border-yellow-300 text-white': warning,
        'bg-red-600 border-red-600': danger,
        'bg-white': outline,
        'text-sky-400': outline && primary,
        'text-slate-300': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-300': outline && warning,
        'text-red-600': outline && danger,
        'rounded-full': rounded,
    })

    return(
        <button {...rest} className={classes}>{children}</button>
    )
}

Button.propTypes = {
    checkForDuplicateColors: ({primary, secondary, success, warning, danger}) => {
        const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger) 
        if(count > 1){
            return new Error('invalid duplicate props')
        }
    }
}


export default Button;

// 'children' is a special name and prop. taken from what's placed between custom component tags.

// Number(true) equals 1.
// !!undefined equals false. So Number(!!undefined) is 0.