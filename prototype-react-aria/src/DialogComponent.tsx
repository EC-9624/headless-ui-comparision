import './Dialog.css'
import { Button, Dialog, DialogTrigger, Heading, Input, Label, Modal, TextField, Form } from "react-aria-components";

function DialogComponent() {
  const handleSubmit = (e: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined; }) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log('Form data:', Object.fromEntries(formData));

  };
  return (
    <>
      <div>
        <DialogTrigger>
          <Button className="modal-trigger">
            Open Modal (React Aria)
          </Button>
          <Modal>
            <Dialog>
              {({ close }) => (
                <Form onSubmit={(e) => {
                  handleSubmit(e)
                  close();
                }}>
                  <Heading slot="title">Sign up</Heading>
                  <TextField autoFocus>
                    <Label>First Name</Label>
                    <Input name="firstName" required />
                  </TextField>
                  <TextField>
                    <Label>Last Name</Label>
                    <Input name="lastName" required />
                  </TextField>
                  <div className="dialog-actions">
                    <Button className="button-secondary" onPress={close}>
                      Cancel
                    </Button>
                    <Button type="submit" className="button-primary">
                      Sign Up
                    </Button>
                  </div>
                </Form>
              )}
            </Dialog>
          </Modal>
        </DialogTrigger>
      </div>
    </>
  );
}

export default DialogComponent;
