/**
 * 
 * this code will be available to all code snippets
 * and will not be measured during the benchmark
 * 
 */
let obj = {
    foo: "bar",
}

let json_obj = JSON.stringify(obj)

let user = {
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
    ]
}

let json_user = JSON.stringify(user)
