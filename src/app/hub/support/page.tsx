import {
    ActionButton, Column, Container, Field, Notify, Responsive, SizedBox,
    Text, TextAreaField, Theme, UnderlinedButton, useDesign, Wrap
} from "@serchservice/web-ui-kit";
import { observer } from "mobx-react-lite";
import React from "react";
import Asset from "../../../assets/Asset";
import Connect from "../../../backend/Connect";
import { RouteInterface } from "../../../configuration/Route";
import Layout from "../../../layout/Layout";
import Title from "../../widgets/Title";

export const SupportHubRoute: RouteInterface = {
    path: "/hub/support",
    page: <SupportHubPage />
}

export default function SupportHubPage() {
    const { isMobile, isDesktop } = useDesign()

    const supports: ISupport[] = [
        {
            email: "account@serchservice.com",
            subject: "Account Support - Your Subject Here",
            usages: [
                "Deletion of account", "Opening of account",
                "Report a user or guest", "Report a provider or business",
                "Transaction issues", "Any other account related issues",
            ],
            "information": ""
        },
        {
            email: "career@serchservice.com",
            subject: "Career Support - Your Subject Here",
            usages: ["Application status check", "Open role check"],
            information: "* You can ask the team to put your information in the career pool, incase opportunities that suits your profile comes out."
        },
        {
            email: "sgc@serchservice.com",
            subject: "Safe-Guard Community Support - Your Subject Here",
            usages: [
                "Safety-Guard Community", "Join the safety discussions",
                "Submit a safety suggestion", "Update on safety information",
            ],
            information: ""
        },
        {
            email: "improve@serchservice.com",
            subject: "Product Support - Your Subject Here",
            usages: ["Reporting a broken feature", "Suggesting a feature improvement"],
            information: ""
        },
        {
            email: "ask@serchservice.com",
            subject: "Serch Support - Your Subject Here",
            usages: [],
            information: "For issues you don't find the proper channel for it."
        },
    ]

    return (
        <Layout>
            <Title title="Support Hub" description='Get the help and support you need' />
            {/* FIRST SECTION - HEADER */}
            <Responsive tablet={
                <Container padding="600px 12px 96px 48px" width='100%' height={700} backgroundColor="none" style={{
                    backgroundImage: `url(${Asset.support.background})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}>
                    <Text text="Serch Support" color={Theme.secondary} size={32} weight='bold' />
                    <Text
                        text={[
                            "Feel like contacting us on any matter? Here in Serch support, you can",
                            "find the proper channel to direct your issue to. This ensures that you",
                            "get the assistance you need as soon as possible."
                        ].join(" ")}
                        color={Theme.secondary}
                        size={16}
                    />
                </Container>
            } phone={
                <Container padding="200px 12px 96px 48px" width='100%' height={350} backgroundColor="none" style={{
                    backgroundImage: `url(${Asset.support.background})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}>
                    <Text text="Serch Support" color={Theme.secondary} size={32} weight='bold' />
                    <Text
                        text={[
                            "Feel like contacting us on any matter? Here in Serch support, you can",
                            "find the proper channel to direct your issue to. This ensures that you",
                            "get the assistance you need as soon as possible."
                        ].join(" ")}
                        color={Theme.secondary}
                        size={16}
                    />
                </Container>
            }>
                <Container padding="800px 96px 96px 48px" width='100%' height={1000} backgroundColor="none" style={{
                    backgroundImage: `url(${Asset.support.background})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}>
                    <Text text="Serch Support" color={Theme.secondary} size={54} weight='bold' />
                    <Text
                        text={[
                            "Feel like contacting us on any matter? Here in Serch support, you can",
                            "find the proper channel to direct your issue to. This ensures that you",
                            "get the assistance you need as soon as possible."
                        ].join(" ")}
                        color={Theme.secondary}
                        size={16}
                    />
                </Container>
            </Responsive>
            {/* SECOND SECTION - QUICK ACCOUNTS */}
            <Container backgroundColor={Theme.secondary} padding={isMobile ? "24px" : "36px"} width="100%">
                <Wrap spacing={10} runSpacing={70}crossAxisAlignment="flex-start">
                    {supports.map((support, index) => {
                        return (
                            <React.Fragment key={index}>
                                <Container width={!isDesktop ? "100%" : "30%"}>
                                    <UnderlinedButton
                                        text={support.email}
                                        textColor={Theme.primary}
                                        textSize={isMobile ? 18 : 22}
                                        link={`mailto:${support.email}?subject=${support.subject}`}
                                        withArrow={false}
                                        showLine={false}
                                        isBlank
                                        isBold
                                        styles={{width: "auto"}}
                                        iconSize={1}
                                    />
                                </Container>
                                <Container width={!isDesktop ? "100%" : "65%"}>
                                    <Column>
                                        <Wrap runSpacing={20} spacing={20} crossAxisAlignment="center">
                                            {support.usages.map((usage, i) => {
                                                return (
                                                    <React.Fragment key={i}>
                                                        <Container width="45%">
                                                            <Text
                                                                text={usage}
                                                                color={Theme.primary}
                                                                size={isMobile ? 14 : 16}
                                                            />
                                                        </Container>
                                                    </React.Fragment>
                                                )
                                            })}
                                        </Wrap>
                                        {(support.information && support.usages.length > 0) && (
                                            <React.Fragment>
                                                <SizedBox height={20} />
                                                <Text
                                                    text={support.information}
                                                    color={Theme.primary}
                                                    opacity={0.5}
                                                    size={isMobile ? 14 : 16}
                                                />
                                            </React.Fragment>
                                        )}
                                        {(support.information && support.usages.length === 0) && (
                                            <Text
                                                text={support.information}
                                                color={Theme.primary}
                                                opacity={0.5}
                                                size={isMobile ? 14 : 16}
                                            />
                                        )}
                                    </Column>
                                </Container>
                            </React.Fragment>
                        )
                    })}
                </Wrap>
            </Container>
            {/* MAKE COMPLAINT */}
            <ComplaintForm />
        </Layout>
    )
}

interface ISupport {
    email: string;
    subject?: string;
    usages: string[];
    information?: string;
}

export const ComplaintForm: React.FC = observer(() => {
    const [ isLoading, setIsLoading ] = React.useState(false)
    const [ emailAddress, setEmailAddress ] = React.useState("")
    const [ firstName, setFirstName ] = React.useState("")
    const [ lastName, setLastName ] = React.useState("")
    const [ comment, setComment ] = React.useState("")

    const { isMobile, isDesktop } = useDesign()

    const onSubmitComplaint = async (event: React.FormEvent<HTMLFormElement> | undefined) => {
        if(event !== undefined) {
            event.preventDefault()
        }

        if(isLoading) {
            return;
        } else if(comment === "") {
            Notify.warning("State your complaint")
        } else if(firstName === "" || lastName === "") {
            Notify.warning("Your first name and last name must be present")
        } else {
            setIsLoading(true)
            const response = await Connect.post("/company/complaint/complain", {
                "email_address": emailAddress,
                "first_name": firstName,
                "last_name": lastName,
                "comment": comment
            })
            setIsLoading(false)

            if(response) {
                if(response.isSuccess) {
                    Notify.success(response.message)
                    setEmailAddress("")
                    setFirstName("")
                    setLastName("")
                    setComment("")
                } else {
                    Notify.error(response.message)
                }
            }
        }
    }

    const renderForm = (): JSX.Element => {
        return (
            <form autoComplete="on" method="submit" onSubmit={onSubmitComplaint}>
                <Container width="100%" style={{flexDirection: isMobile ? "column" : "row", display: "flex"}}>
                    <Container width={isMobile? "100%" : "48%"}>
                        <Field
                            needLabel
                            backgroundColor={Theme.secondary}
                            color={Theme.primary}
                            label="First Name"
                            placeHolder="Enter your first name"
                            value={firstName}
                            onChange={v => setFirstName(v)}
                        />
                    </Container>
                    <Container width="4%" />
                    <Container width={isMobile? "100%" : "48%"}>
                        <Field
                            needLabel
                            backgroundColor={Theme.secondary}
                            color={Theme.primary}
                            label="Last Name"
                            placeHolder="Enter your last name"
                            value={lastName}
                            onChange={v => setLastName(v)}
                        />
                    </Container>
                </Container>
                <SizedBox height={20} />
                <Field
                    needLabel
                    backgroundColor={Theme.secondary}
                    color={Theme.primary}
                    label="Email Address where support can contact you"
                    placeHolder="Enter your email address"
                    value={emailAddress}
                    onChange={v => setEmailAddress(v)}
                />
                <SizedBox height={20} />
                <TextAreaField
                    needLabel
                    backgroundColor={Theme.secondary}
                    color={Theme.primary}
                    label="Anything you would like us to know"
                    value={comment}
                    placeHolder="Let your voice be heard and your problem solved"
                    onChange={v => setComment(v)}
                />
                <Text
                    text={[
                        "By submitting this form, you agree and accept Serchservice privacy policy",
                        "and other policies that govern how we use and process data."
                    ].join(" ")}
                    color={Theme.primary}
                    size={isMobile ? 12 : 13}
                />
                <SizedBox height={50} />
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
        )
    }

    return (
        <Container backgroundColor={Theme.appbarLight} padding={isMobile ? "24px" : isDesktop ? "64px" : "32px"} width="100%">
            <Container width="100%" style={{flexDirection: isDesktop ? "row" : "column", display: "flex"}}>
            <Container width={!isDesktop ? "100%" : "40%"}>
                    <Text
                        text="Want to make a complaint?"
                        color={Theme.primary}
                        size={isMobile ? 14 : 16}
                    />
                    <SizedBox height={20} />
                    <Text
                        text="Get in touch"
                        color={Theme.primary}
                        size={isMobile ? 18 : 22}
                        weight='bold'
                    />
                    <SizedBox height={30} />
                    <Text
                        text="Abuja, Nigeria"
                        color={Theme.primary}
                        size={isMobile ? 14 : 16}
                    />
                    <SizedBox height={20} />
                    <UnderlinedButton
                        text="customercomplaints@serchservice.com"
                        textColor={Theme.primary}
                        textSize={isMobile ? 14 : 16}
                        link={`mailto:customercomplaints@serchservice.com`}
                        withArrow={false}
                        showLine
                        isBlank
                        styles={{width: "auto"}}
                        iconSize={1}
                    />
                </Container>
                <Container width="5%" height={isDesktop ? "0" : "40px"} />
                <Container width={!isDesktop ? "100%" : "55%"}>
                    {renderForm()}
                </Container>
            </Container>
        </Container>
    )
})