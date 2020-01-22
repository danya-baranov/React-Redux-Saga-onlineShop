import React from "react";
import { connect } from "react-redux";
import { Book } from "../../types";
import { BookState } from "../../redux/admin/book/types";
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import { Button } from "@material-ui/core";
import { ConfirmModalState } from "../../redux/modals/confirmModal/types";
import { RootState } from "../../redux/rootReducer";
import { doConfirm } from "../../redux/admin/book/actions";

type Props = {
    value: boolean;
    doConfirm(value: boolean): void;
};
export const ConfirmModal = ({ value, doConfirm }: Props) => {
    return (
        <div>
            <Dialog open={value} onClose={ () => doConfirm(false)} aria-labelledby="responsive-dialog-title">
                <DialogTitle id="responsive-dialog-title">{"Confirmation"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Do you sure?
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => doConfirm(false)} color="primary">
                        Disagree
                </Button>
                    <Button onClick={() => doConfirm(true)} color="primary" autoFocus>
                        Agree
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

// export interface ConfirmModalProps {
//     isOpenModal: boolean;
//     action: string;
//     value: string;
//     doConfirm: (value: string, action: string) => void;
//     updateState: (value: boolean, bookId: string, action: string) => void;
// }

// export class ConfirmModal extends React.Component<ConfirmModalProps, ConfirmModalState> {
//     constructor(props: ConfirmModalProps) {
//         super(props)
//         const { updateState } = this.props;
//         // updateState(props.isOpenModal);
//     }

//     state: ConfirmModalState = {
//         error: "",
//         isOpenModal: false,
//         action: "",
//         value: ""
//     };

//     agree() {
//         const { doConfirm } = this.props;
//         doConfirm(this.props.value, this.props.action);
//         this.handleClose();
//     }

//     handleClose() {
//         this.state.isOpenModal = false;
//         const { updateState } = this.props;
//         updateState(false, this.props.value, this.props.action);
//     }

//     render() {
//         if (this.props.isOpenModal && !this.state.isOpenModal) {
//             const { updateState } = this.props;
//             updateState(this.props.isOpenModal, this.props.value, this.props.action);
//             this.state.isOpenModal = true;
//             this.setState(this.state);
//         }
//         return (
//             <div>
//                 <Dialog open={value} onClose={() => this.handleClose()} aria-labelledby="responsive-dialog-title">
//                     <DialogTitle id="responsive-dialog-title">{"Confirmation"}</DialogTitle>
//                     <DialogContent>
//                         <DialogContentText>
//                             Do you sure?
//                         </DialogContentText>
//                     </DialogContent>
//                     <DialogActions>
//                         <Button onClick={() => this.handleClose()} color="primary">
//                             Disagree
//                         </Button>
//                         <Button onClick={() => this.agree()} color="primary" autoFocus>
//                             Agree
//                         </Button>
//                     </DialogActions>
//                 </Dialog>
//             </div>
//         );
//     }

//     async componentDidMount() {

//     }
// }


