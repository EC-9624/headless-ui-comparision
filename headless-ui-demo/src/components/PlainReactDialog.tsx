import { useState, useEffect, useRef } from 'react'
import './PlainReact.css'

export default function PlainReactDialog() {
    const [isOpen, setIsOpen] = useState(false)
    const [isClosing, setIsClosing] = useState(false)
    const dialogRef = useRef<HTMLDivElement>(null)
    const firstInputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (isOpen) {
            firstInputRef.current?.focus()
        }
    }, [isOpen])

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                closeModal()
            }
        }

        const handleClickOutside = (e: MouseEvent) => {
            if (dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
                closeModal()
            }
        }

        if (isOpen) {
            document.addEventListener('keydown', handleEscape)
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen])

    const closeModal = () => {
        setIsClosing(true)
        setTimeout(() => {
            setIsOpen(false)
            setIsClosing(false)
        }, 200)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        console.log('Plain React Form data:', Object.fromEntries(formData))
        closeModal()
    }

    return (
        <>
            <button className="modal-trigger" onClick={() => setIsOpen(true)}>
                Open Modal (Plain React)
            </button>

            {isOpen && (
                <div className={`plain-dialog ${isClosing ? 'closing' : ''}`} role="dialog" aria-modal="true" aria-labelledby="dialog-title">
                    <div className={`plain-backdrop ${isClosing ? 'closing' : ''}`} />
                    <div className="plain-container">
                        <div className={`plain-panel ${isClosing ? 'closing' : ''}`} ref={dialogRef}>
                            <form onSubmit={handleSubmit}>
                                <h2 className="plain-title" id="dialog-title">
                                    Sign up
                                </h2>

                                <div className="form-fields">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="firstName">
                                            First Name
                                        </label>
                                        <input
                                            id="firstName"
                                            name="firstName"
                                            className="form-input"
                                            required
                                            ref={firstInputRef}
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
                                </div>

                                <div className="dialog-actions">
                                    <button type="button" className="button-secondary" onClick={closeModal}>
                                        Cancel
                                    </button>
                                    <button type="submit" className="button-primary">
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                            <button
                                className="dialog-close"
                                aria-label="Close"
                                onClick={closeModal}
                            >
                                ×
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
