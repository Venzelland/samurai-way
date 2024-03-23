let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "It's my first comment?", likesCount: 23},
            {id: 1, message: "Blabla", likesCount: 24},
            {id: 2, message: "YO", likesCount: 1},
        ],
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: "Pol"},
            {id: 2, name: "John"},
            {id: 3, name: "Katy"},
            {id: 4, name: "Sveta"},
            {id: 5, name: "Victor"},
            {id: 6, name: "Kosty"},
        ],
        messageData: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "YO"},
            {id: 4, message: "Hi"},
            {id: 5, message: "Hi"},
            {id: 6, message: "Hi"},
        ],
    },
    sidebar: {}
}

export let addPost = (postMassage: any) => {
    let newPost = {
        id: 5,
        message: postMassage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost)
}

export default state