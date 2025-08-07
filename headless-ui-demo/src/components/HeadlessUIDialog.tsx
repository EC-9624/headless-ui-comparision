import { Dialog, DialogPanel, DialogTitle, Fieldset, Field, Label, Input } from '@headlessui/react'
import { useState } from 'react'
import './HeadlessUI.css'

export default function HeadlessUIDialog() {
    const [isOpen, setIsOpen] = useState(false)

    const handleSubmit = (e: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined }) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        console.log('Headless UI Form data:', Object.fromEntries(formData));
        setIsOpen(false);
    }

    return (
        <>
            <button className="modal-trigger" onClick={() => setIsOpen(true)}>
                Open Modal (Headless UI)
            </button>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="headless-dialog">
                <div className="headless-backdrop" />
                <div className="headless-container">
                    <DialogPanel className="headless-panel">
                        <form onSubmit={handleSubmit}>
                            <DialogTitle className="headless-title">
                                Sign up
                            </DialogTitle>

                            <Fieldset>
                                <Field className="form-group">
                                    <Label className="form-label">First Name</Label>
                                    <Input
                                        name="firstName"
                                        className="form-input"
                                        required
                                        autoFocus
                                    />
                                </Field>

                                <Field className="form-group">
                                    <Label className="form-label">Last Name</Label>
                                    <Input
                                        name="lastName"
                                        className="form-input"
                                        required
                                    />
                                </Field>
                            </Fieldset>

                            <div className="dialog-actions">
                                <button
                                    type="button"
                                    className="button-secondary"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="button-primary">
                                    Sign Up
                                </button>
                            </div>
                        </form>
                        <button className="dialog-close" aria-label="Close" onClick={() => setIsOpen(false)}>
                            x
                        </button>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    )
}
