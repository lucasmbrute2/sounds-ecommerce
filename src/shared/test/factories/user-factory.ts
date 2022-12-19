import { User } from "../../../entities/User";

type Override = Partial<User>

export function makeUser(override? :Override): User {
    const user = new User();
    const overriderUser = { 
        ...user,
        first_name: 'Lucas',
        last_name: 'Dantas',
        password: 'Adkad!34231',
        phone: '3131313131',
        username: 'lucasj@gmail.com',
    }
    return {
        ...overriderUser,
        ...override
    }
}