let obj = {
    title: "Objetivo",
    content: "Meu objetivo é "
}

export function Objective() {
    return (
        <>
            <h1>{obj.title}</h1>
            <p>{obj.content}</p>
        </>
    )
}