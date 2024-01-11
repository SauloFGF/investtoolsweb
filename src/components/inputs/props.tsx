interface IInputUiProps {
    name: string;
    label?: string | number;

    width?: string | number;
    minWidth: string | number;
    maxWidth: string | number;

    onChange?: (event?: React.ChangeEvent<HTMLInputElement>) => void;
}

export default IInputUiProps;