import { Dialog } from '@base-ui-components/react/dialog';
import { Field } from '@base-ui-components/react/field';
import './BaseUI.css';

export default function BaseUIDialog() {
    const handleSubmit = (e: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined; }) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        console.log('Base UI Form data:', Object.fromEntries(formData));
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

                        <Field.Root className="form-group">
                            <Field.Label className="form-label">
                                First Name
                            </Field.Label>
                            <Field.Control
                                render={<input />}
                                id="firstName"
                                name="firstName"
                                className="form-input"
                                required
                                autoFocus
                            />
                        </Field.Root>

                        <Field.Root className="form-group">
                            <Field.Label className="form-label">
                                Last Name
                            </Field.Label>
                            <Field.Control
                                render={<input />}
                                id="lastName"
                                name="lastName"
                                className="form-input"
                                required
                            />
                        </Field.Root>

                        <div className="dialog-actions">
                            <Dialog.Close className="button-secondary">
                                Cancel
                            </Dialog.Close>
                            <button type="submit" className="button-primary">
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <Dialog.Close className="dialog-close" aria-label="Close">
                        ×
                    </Dialog.Close >
                </Dialog.Popup>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
