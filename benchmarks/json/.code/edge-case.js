/**
 * the code in this file will be available
 * to all snippets during "edge case" benchmark measurments
 * 
 * the code itself won't be measured during the benchmark
 */
let object = {
    name: "foo_bar",
    fullName: "Foo Bar",
    email: "foo@bar",
    notifications: [
        { 
            id: "foo",
            status: 14,
            message: "a new foo was added"
        },
        { 
            id: "bar",
            status: 14,
            message: "a new bar was added"
        },
        { 
            id: "foo",
            status: 14,
            message: "a new foo was added"
        },
        { 
            id: "bar",
            status: 14,
            message: "a new bar was added"
        },
        { 
            id: "foo",
            status: 14,
            message: "a new foo was added"
        },
        { 
            id: "bar",
            status: 14,
            message: "a new bar was added"
        },
                { 
            id: "bar",
            status: 14,
            message: "a new bar was added"
        },
        { 
            id: "foo",
            status: 14,
            message: "a new foo was added"
        },
        { 
            id: "bar",
            status: 14,
            message: "a new bar was added"
        },
    ]
}

let json = JSON.stringify(object)