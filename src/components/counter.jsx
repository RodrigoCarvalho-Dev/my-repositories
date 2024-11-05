import { useState } from "react";

// novoUsuarios = [...allUsers , 'rafacamarda'];

export function Counter() {

    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Button</h1>
            <button
            onClick={() => setCount(count + 1)}
            >
                increment - { count }
            </button>
        </>
    );
}