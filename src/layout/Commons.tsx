import {
    ActionButton,
    ActionDialog,
    Center,
    CircularIconButton,
    Column,
    Container,
    Expanded,
    Field,
    Navigate,
    Notify,
    Responsive,
    Row,
    SizedBox,
    Spacer,
    Text,
    TextAreaField,
    Theme,
    useDesign,
    useWidth,
    Wrap
} from "@serchservice/web-ui-kit"
import { observer } from "mobx-react-lite"
import React from "react"
import Connect from "../backend/Connect"
import { LinkConfig } from "../configuration/ButtonView"
import { ModalProps } from "./Interfaces"

export const JoinTheConversation: React.FC = observer(() => {
    return (
        <Responsive
            phone={
                <Container backgroundColor={Theme.appbarDark} padding="24px" borderRadius="16px" width="100%">
                    <Column crossAxis="center">
                        <Text
                            text="Join in the conversation: Share your thoughts on how we can improve security for you and the people you love"
                            color={Theme.secondary}
                        />
                        <SizedBox height={30} />
                        <ActionButton
                            padding="16px"
                            isFullWidth
                            title="Join the SG Community"
                            backgroundColor={Theme.primary}
                            color={Theme.secondary}
                            onClick={() => Navigate.openInNewTab(LinkConfig.instance.sgc)}
                        />
                    </Column>
                </Container>
            }
        >
            <Container backgroundColor={Theme.appbarDark} padding="32px" borderRadius="16px" width="100%">
                <Row crossAxis="center">
                    <Expanded>
                        <Text
                            text="Join in the conversation: Share your thoughts on how we can improve security for you and the people you love"
                            color={Theme.secondary}
                            size={20}
                        />
                    </Expanded>
                    <Spacer />
                    <ActionButton
                        padding="16px"
                        title="Join the SG Community"
                        backgroundColor={Theme.primary}
                        color={Theme.secondary}
                        fontSize={16}
                        borderRadius="30px"
                        onClick={() => Navigate.openInNewTab(LinkConfig.instance.sgc)}
                    />
                </Row>
            </Container>
        </Responsive>
    )
})

export const ConnectWithUs: React.FC = observer(() => {
    return (
        <Center>
            <Column crossAxis="center">
                <Text text="Connect with us" color={Theme.primaryLight} />
                <SizedBox height={10} />
                <Wrap spacing={5} runSpacing={5}>
                    {LinkConfig.instance.social.map((social, index) => {
                        return (
                            <CircularIconButton
                                key={index}
                                icon={social.icon ?? ""}
                                isAwesome
                                title={social.header ?? ""}
                                size={0.5}
                                backgroundColor={Theme.appbarDark}
                                color={Theme.primaryLight}
                                onClick={() => Navigate.openInNewTab(social.path ?? "")}
                            />
                        )
                    })}
                </Wrap>
            </Column>
        </Center>
    )
})

export const ComplaintForm: React.FC<ModalProps> = observer(({isOpen, handleClose}) => {
    const [ isLoading, setIsLoading ] = React.useState(false)
    const [ emailAddress, setEmailAddress ] = React.useState("")
    const [ fullName, setFullName ] = React.useState("")
    const [ comment, setComment ] = React.useState("")

    const { isMobile } = useDesign();
    const width = useWidth()

    const onSubmitComplaint = async (event: React.FormEvent<HTMLFormElement> | undefined) => {
        if(event !== undefined) {
            event.preventDefault()
        }

        if(isLoading) {
            return;
        } else if(comment === "") {
            Notify.warning("State your complaint")
        } else if(fullName.split(" ").length !== 2) {
            Notify.warning("Separate your full name with a space like: John Doe")
        } else {
            setIsLoading(true)
            const response = await Connect.post("/company/complaint/complain", {
                "email_address": emailAddress,
                "first_name": fullName.split(" ")[0],
                "last_name": fullName.split(" ")[1],
                "comment": comment
            })
            setIsLoading(false)

            if(response) {
                if(response.isSuccess) {
                    Notify.success(response.message)
                    setEmailAddress("")
                    setFullName("")
                    setComment("")
                    handleClose()
                } else {
                    Notify.error(response.message)
                }
            }
        }
    }

    return (
        <ActionDialog isOpen={isOpen} handleClose={handleClose} header="Having Issue? Let us know here" bgColor={Theme.secondary} radius={0} height={500} width={isMobile ? width : 400}>
            <Column>
                <Container border={`2px dashed${Theme.primary}`} padding="12px" borderRadius="12px">
                    <form autoComplete="on" method="submit" onSubmit={onSubmitComplaint}>
                        <Field
                            needLabel
                            label="Full Name"
                            placeHolder="Enter your full name"
                            value={fullName}
                            onChange={v => setFullName(v)}
                        />
                        <SizedBox height={20} />
                        <Field
                            needLabel
                            label="Email Address where support can contact you"
                            placeHolder="Enter your email address"
                            value={emailAddress}
                            onChange={v => setEmailAddress(v)}
                        />
                        <SizedBox height={20} />
                        <TextAreaField
                            needLabel
                            label="Anything you would like us to know"
                            value={comment}
                            placeHolder="Let your voice be heard and your problem solved"
                            onChange={v => setComment(v)}
                        />
                        <SizedBox height={20} />
                        <ActionButton
                            padding="16px"
                            isFullWidth
                            state={isLoading}
                            title="Submit your complaint"
                            actionText="Submitting.."
                            backgroundColor={Theme.primary}
                            color={Theme.secondary}
                            onClick={() => onSubmitComplaint(undefined)}
                        />
                    </form>
                </Container>
            </Column>
        </ActionDialog>
    )
})