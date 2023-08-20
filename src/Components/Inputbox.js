import { useState } from "react";
import  "./Register.css";
export function Inputbox(props){
    const {lable,id,errorMessage,onChange, ...inputprops } = props;
    const [foucsed,setfocesd] = useState(false);
    const handlefocused = (e) => {
        setfocesd(true);
    };
    return (
        <div id="inputsbox">
            <input 
            {...inputprops}
            onChange={onChange}
            className="input"
            onBlur={handlefocused}
            foucsed={foucsed.toString()}
            />
                    <span className="span">{errorMessage}</span>

        </div>

    );

}