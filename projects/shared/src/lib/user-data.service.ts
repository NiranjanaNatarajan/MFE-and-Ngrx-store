
// import {User} from './user-data';
//import { Details } from './ProductDetails';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UserFetch } from './user-fetch';
import { Product } from './product';
import { LoginData } from './logi-data';

export class UserData implements InMemoryDbService {
    createDb() {
        const users: Product[] =
            [
                {
                    "id": 1,
                    "name": "Hermoine",
                    "designation": "Module Leader",
                    // "link": "",
                    "empId": "ACE10801",
                    "description": "Development",
                    "project": "JLM Project",
                    "manager": "Arun"
                },
                {
                    "id": 2,
                    "name": "Seetha",
                    "designation": "Tester",
                    // "link": "",
                    "empId": "ACE10802",
                    "description": "Testing",
                    "project": "JLM Project",
                    "manager": "Arun"
                },
                {
                    "id": 3,
                    "name": "Vineetha",
                    "designation": "Project Leader",
                    // "link": "",
                    "empId": "ACE10803",
                    "description": "Development",
                    "project": "JLM Project",
                    "manager": "Arun"
                },
                {
                    "id": 4,
                    "name": "Sandhiya",
                    "designation": "HR Manager",
                    // "link": "",
                    "empId": "ACE10804",
                    "description": "Human Resource",
                    "project": "JLM Project",
                    "manager": "Arun"
                },
                {
                    "id": 5,
                    "name": "Janani",
                    "designation": "Engineer",
                    // "link": "",
                    "empId": "ACE10805",
                    "description": "Development",
                    "project": "JLM Project",
                    "manager": "Arun"
                },
                {
                    "id": 6,
                    "name": "Preethi",
                    "designation": "Sales Executive",
                    // "link": "",
                    "empId": "ACE10806",
                    "description": "Marketing",
                    "project": "JLM Project",
                    "manager": "Arun"
                },
                {
                    "id": 7,
                    "name": "Chandra",
                    "designation": "Technical Leader",
                    // "link": "",
                    "empId": "ACE10807",
                    "description": "Development",
                    "project": "JLM Project",
                    "manager": "Arun"
                },
                {
                    "id": 8,
                    "name": "Dhiya",
                    "designation": "Senior Engineer",
                    // "link": "",
                    "empId": "ACE10808",
                    "description": "Development",
                    "project": "JLM Project",
                    "manager": "Arun"
                },
                {
                    "id": 9,
                    "name": "Tharun",
                    "designation": "Senior Tester",
                    // "link": "",
                    "empId": "ACE10809",
                    "description": "Testing",
                    "project": "JLM Project",
                    "manager": "Arun"
                }
            ];
        const user: UserFetch[] = [
            {
                "id": 77,
                "name": "Preethi",
                "designation": "Sales Executive",
                // "link": "",
                "empId": "ACE10806",
                "description": "Marketing",
                "project": "JLM Project",
                "manager": "Arun"
            },
        ];
        const loginData: LoginData[] = [
            { "id": 1, "token": "", "username": "niranjana.natarajan@aspiresys.com", "password": "Abcd@123"}];
        return { users, user, loginData };
    }
}
