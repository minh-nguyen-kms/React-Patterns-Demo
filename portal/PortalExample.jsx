export const ContentComponent = ({ children }) => {
    const [isShow, setIsShow] = useState(false);
    const clickHandler = () => setIsShow(true);

    return (<div>
        <button onClick={clickHandler} />
        {isShow && <Portal>
            {/* portal content */}
        </Portal>}
        {/* other content here */}
    </div>)
}

/**

<!DOCTYPE html>
<html>
    <head>
        .....
    </head>

    <body>
        <!-- ContentComponent's DOM here -->
        <!-- Other ContentComponent's DOM here -->
        <!-- Portal content's DOM here -->
    </body>
</html>


*/