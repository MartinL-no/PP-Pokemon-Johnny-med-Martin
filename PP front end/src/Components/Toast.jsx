function Toast({ message, className })
{
    return (
        <>
            <p id="toast" className={className}>{message}</p>
        </>
    )
}

export default Toast;