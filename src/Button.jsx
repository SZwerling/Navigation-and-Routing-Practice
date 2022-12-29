// 'children' is a special name and prop. taken from what's placed between custom component tags.


function Button({children}) {
    return(
        <button>{children}</button>
    )
}


export default Button;