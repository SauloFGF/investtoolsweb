import { ChangeEvent } from "react";

interface IInputUiProps {
    name: string;
    label?: string | number;

    width?: string | number;
    minWidth: string | number;
    maxWidth: string | number;

    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default IInputUiProps;