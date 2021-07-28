import {
    ArrowForward as ArrowForwardIcon,
    DragHandle as DragHandleIcon,
} from '@material-ui/icons';
import classnames from 'classnames';

export default function ProfitSection(props) {
    if (props.value === 0) {
        return <DragHandleIcon />;
    } else {
        return (
            <ArrowForwardIcon
                className={classnames(
                    props.increase
                        ? props.classes.profitArrow
                        : props.classes.profitArrowDanger
                )}
            />
        );
    }
}
