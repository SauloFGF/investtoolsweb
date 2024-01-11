import { FC } from "react"
import * as jss from './jss';
import IInputUiProps from "./props";

const InputUi: FC<IInputUiProps>  = (props) => {
    const { name, label, width, minWidth, maxWidth, onChange} = props;

    const containerProps = { width, minWidth, maxWidth};

    const id = `input.fc.${name}`;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(event);
    }


    return (<jss.container {...containerProps}>
        <jss.label>{label}</jss.label>
        <jss.default key={id} id={id}
            onChange={handleChange}
        />
    </jss.container>)
}

export default InputUi;