import { FC } from "react"
import * as jss from './jss';
import IInputUiProps from "./props";

const InputUi: FC<IInputUiProps>  = (props) => {
    const { name, label, width, minWidth, maxWidth, onChange} = props;

    const containerProps = { width, minWidth, maxWidth};

    return (<jss.container {...containerProps} >
        <jss.label>{label}</jss.label>
        <jss.default name={name} onChange={onChange}/>
    </jss.container>)
}

export default InputUi;
