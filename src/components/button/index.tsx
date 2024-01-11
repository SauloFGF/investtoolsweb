import { FC } from "react"
import { IButtonProps } from "./props"
import * as jss from "./jss"


const ButtonUi: FC<IButtonProps> = (props) => {
    return (<jss.button>
        {props.content}
    </jss.button>
    )
}

export default ButtonUi;