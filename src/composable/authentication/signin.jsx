import { baseAxios } from "../axios";

async function signin(formData){
    const response = await baseAxios.get(
        '/users/',
        formData,
        {
            headers: {'Content-Type': 'application/json'},
        }
    );

    console.log(response?.data);

}

export { signin }