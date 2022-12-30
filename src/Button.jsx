import classNames from "classnames"




function Button({
    children,
    primary, 
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded
}) {
    return(
        <button className='text-white bg-blue-500 rounded-md hover:bg-blue-600 py-2 px-4 m-2'>{children}</button>
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