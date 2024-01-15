import { Injectable } from "@nestjs/common";

interface User {
    name: string;
    age: number;
    id: number;
}


@Injectable()
export class UsersStore {
    private store = new Map<number, User>();
    // add user
    addUser(user: User){
        return this.store.set(user.id, user);
    }
    // get user
    getUser(id: number){
        return this.store.get(id);
    }
    // get users
    getUsers(){
        return Array.from(this.store).map((_, user)=>{
            return user
        })
    }
    // update user
    updateUser(id: number, user:User){
        this.store.set(id, user);
    }
    // delete user
    deleteUser(id: number){
        this.store.delete(id);
    }
}