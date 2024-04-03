import {renderTree} from "../render"

type MassageType = {
    id: number
    message: string
}

type DialogType = {
    id: number
    name: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

type ProfilePageType = {
    messageForNewPost: string
    posts: Array<PostType>
}
type DialogPageType = {
    dialogsData: Array<DialogType>
    messageData: MassageType
}
type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "It's my first comment?", likesCount: 23},
                {id: 3, message: "Blabla", likesCount: 24},
                {id: 4, message: "YO", likesCount: 1},
            ],
            newPostText: 'it'
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
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log("state changed")
    }

}

export const addPost = (postText: string) => {
        const newPost: PostType = {
            id: new Date(),
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText: string) {
    this._state.profilePage.newPostText = newText
    this._callSubscriber(this._state)
},
subscribe(observer: () => void) {
    this._callSubscriber = observer
}

export default store;
window.store = store;
