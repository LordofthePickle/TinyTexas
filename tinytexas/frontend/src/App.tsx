import { useEffect, useState } from "react";

function App () {
    const [msg, setMsg] = useState<string>("")

    useEffect(() => {
        fetch("/api/hello")
            .then(res => res.text())
            .then(setMsg)
            .catch(err => setMsg("Error: " + err.message));
    }, []);

    return (
        <div style={{padding: 40}}>
            <h1>{msg || "Loading..."}</h1>
        </div>
    );
}

export default App;