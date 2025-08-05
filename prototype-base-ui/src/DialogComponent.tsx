import { Dialog } from '@base-ui-components/react/dialog';
import './Dialog.css';

export default function DialogComponent() {
    const handleSubmit = (e: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined; }) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        console.log('Form data:', Object.fromEntries(formData));

    };
    return (
        <Dialog.Root>
            <Dialog.Trigger className="modal-trigger">
                Open Modal (Base UI)
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Backdrop className="base-backdrop" />
                <Dialog.Popup className="base-popup">
                    <form onSubmit={handleSubmit}>
                        <Dialog.Title className="base-title">
                            Sign up
                        </Dialog.Title>
                        <Dialog.Description className="base-description">
                            Create your account to get started
                        </Dialog.Description>

                        <div className="form-group">
                            <label className="form-label" htmlFor="firstName">
                                First Name
                            </label>
                            <input
                                id="firstName"
                                name="firstName"
                                className="form-input"
                                required
                                autoFocus
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="lastName">
                                Last Name
                            </label>
                            <input
                                id="lastName"
                                name="lastName"
                                className="form-input"
                                required
                            />
                        </div>

                        <div className="dialog-actions">
                            <Dialog.Close className="button-secondary">
                                Cancel
                            </Dialog.Close>
                            <button type="submit" className="button-primary">
                                Sign Up
                            </button>
                        </div>
                    </form>
                </Dialog.Popup>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
