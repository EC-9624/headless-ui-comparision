import { Root, Trigger, Portal, Overlay, Content, Title, Close } from '@radix-ui/react-dialog'
import './RadixUI.css'

export default function RadixDialog() {
    const handleSubmit = (e: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined; }) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        console.log('Radix UI Form data:', Object.fromEntries(formData));
    }

    return (
        <Root>
            <Trigger asChild>
                <button className="modal-trigger">
                    Open Modal (Radix UI)
                </button>
            </Trigger>

            <Portal>
                <Overlay className="dialog-overlay" />
                <Content className="dialog-content">
                    <form onSubmit={handleSubmit}>
                        <Title className="dialog-title">
                            Sign up
                        </Title>

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
                            <Close asChild>
                                <button type="button" className="button-secondary">
                                    Cancel
                                </button>
                            </Close>
                            <button type="submit" className="button-primary">
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <Close asChild>
                        <button className="dialog-close" aria-label="Close">
                            ×
                        </button>
                    </Close>
                </Content>
            </Portal>
        </Root>
    )
}