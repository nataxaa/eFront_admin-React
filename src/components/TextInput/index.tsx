import { Input } from "./styles";

interface inputProps{
    placeholder:string;

}


export function TextInput({placeholder}:inputProps){
    return(
        <Input placeholder={placeholder} />
    )
}