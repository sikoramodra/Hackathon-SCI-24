import { useEffect, useState } from "react";
import checkDay from "../logic/checkDay";
import CurrentTask from "./CurrentTask";

export default function EndDay({ finishedTasks, money, setMoney }) {
    const [a, setA] = useState([]);  

    useEffect(() => {
        const result = checkDay(finishedTasks);
        console.log(result);
        setMoney(money + result[0])
        
        setA(result);  
    }, [finishedTasks]);  

    return (
        <>
            <div>
                {a.length === 1 ? 
                    <div>Div with 1</div>  //wszystko poprawnie a[0] money
                 : 
                    <div></div>  //a[0] money jest blad a[1] task a[2] agent
                }
            </div>
        </>
    );
}
