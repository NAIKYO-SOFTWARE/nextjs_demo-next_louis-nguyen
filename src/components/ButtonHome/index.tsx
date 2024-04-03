import { Button } from '@mui/base/';

interface IProps {
    children?: React.ReactNode;
}

function ButtonHome({ children }: IProps) {
    return <Button>{children}</Button>;
}

export default ButtonHome;
