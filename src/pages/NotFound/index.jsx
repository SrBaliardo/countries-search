import React, { useContext } from "react";
import Error from "../../components/Error";
import { DataContext } from "../../context";

const NotFound = () => {
    const { darkMode } = useContext(DataContext);
    return (
        <div
            style={{
                height: "100vh",
                background: darkMode ? "hsl(271.304, 45%, 10%)" : "hsl(0, 0%, 98%)",
                transition: 'easy 0.3s'
            }}
        >
            <Error error={"404 Page not found"} />
        </div>
    );
};

export default NotFound;
