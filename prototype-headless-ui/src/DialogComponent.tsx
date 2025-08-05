import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import './Dialog.css'

function DialogComponent() {
    const [isOpen, setIsOpen] = useState(false)

    const handleSubmit = (e: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined }) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        console.log('Form data:', Object.fromEntries(formData));
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
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    )
}

export default DialogComponent;
