import { Injectable, Scope } from "@nestjs/common";

interface User {
    name: string;
    age: number;
    id: number;
}


@Injectable({ scope: Scope.REQUEST }) // request scope, whenever a request comes to this server, instance gets called

export class UsersStore {
    private store = new Map<number, User>();
    constructor() {
        console.log(`users store init`)
    }
    // add user
    addUser(user: User) {
        return this.store.set(user.id, user);
    }
    // get user
    getUser(id: number) {
        return this.store.get(id);
    }
    // get users
    getUsers() {
        return Array.from(this.store).map((_, user) => {
            return user
        })
    }
    // update user
    updateUser(id: number, user: User) {
        this.store.set(id, user);
    }
    // delete user
    deleteUser(id: number) {
        this.store.delete(id);
    }
}