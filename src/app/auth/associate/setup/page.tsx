import { width } from "@fortawesome/free-brands-svg-icons/fa42Group"
import { ActionButton, Container, Notify, PasswordField, SizedBox, Text, Theme, useDesign, useRedirect, Wrap } from "@serchservice/web-ui-kit"
import React from "react"
import { useSearchParams } from "react-router-dom"
import Connect from "../../../../backend/Connect"
import AsyncOperation from "../../../../backend/functions/AsyncOperation"
import Device from "../../../../backend/models/Device"
import Routing from "../../../../configuration/Routing"
import Layout from "../../../../layout/Layout"
import Title from "../../../widgets/Title"
import { RouteInterface } from "../../../../configuration/Route"

export const AuthAssociateSetupRoute: RouteInterface = {
    path: "/auth/associate/setup",
    pathView: ({scope, emailAddress, name}) => `/auth/associate/setup?scope=${scope}&email_address=${emailAddress}&name=${name}`,
    page: <AuthAssociateSetupPage />
}

export default function AuthAssociateSetupPage() {
    const [name, setName] = React.useState("")
    const [scope, setScope] = React.useState("")
    const [emailAddress, setEmailAddress] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [confirmPassword, setConfirmPassword] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(false)
    const [ searchParams ] = useSearchParams()
    const isMounted = React.useRef(false);
    const [deviceDetails, setDeviceDetails] = React.useState<Device | undefined>();

    const redirect = useRedirect()
    const { isMobile, isDesktop } = useDesign()

    /// DEFINITIONS
    const generalPadding = isMobile ? "28px" : isDesktop ? `120px ${width <= 1110 ? '100px' : '140px'}` : "120px 56px";

    const fetchDeviceDetails = React.useCallback(async () => {
        const details = await AsyncOperation.getDevice();
        setDeviceDetails(details);
    }, []);

    React.useEffect(() => {
        var name = searchParams.get("name");
        var scope = searchParams.get("scope");
        var emailAddress = searchParams.get("email_address");
        if(!isMounted.current) {
            if(name != null) {
                setName(name)
            }
            if(scope != null) {
                setScope(scope)
            }
            if(emailAddress != null) {
                setEmailAddress(emailAddress)
            }
            isMounted.current = true;
        }
        fetchDeviceDetails()
    }, [redirect, searchParams, fetchDeviceDetails ])

    async function setup() {
        if(password === "" || confirmPassword === "") {
            Notify.warning("Set your password")
        } else if(password !== confirmPassword) {
            Notify.warning("Password does not match")
        } else {
            setIsLoading(true)
            const response = await Connect.post("/auth/associate", {
                "email_address": emailAddress,
                "password": password,
                "scope": scope,
                "device": deviceDetails
            });

            setIsLoading(false)
            if(response && response.isSuccess) {
                setEmailAddress("")
                redirect(Routing.instance.home.path)
            }
        }
    }

    const renderForm = (): JSX.Element => {
        return (
            <form autoComplete="on" method="submit" onSubmit={setup}>
                <PasswordField
                    header="Create password"
                    color={Theme.primary}
                    borderColor={Theme.appbarDark}
                    spacer="20px"
                    onPasswordEntered={v => setPassword(v)}
                />
                <PasswordField
                    header="Confirm password"
                    color={Theme.primary}
                    borderColor={Theme.appbarDark}
                    spacer="20px"
                    onPasswordEntered={v => setConfirmPassword(v)}
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
                    title="Setup account"
                    actionText="Setting up your account.."
                    backgroundColor={Theme.primary}
                    color={Theme.secondary}
                    onClick={() => setup()}
                />
            </form>
        )
    }

    return (
        <Layout>
            <Title
                title="Setup your associate account"
                description='Join the Serch platform as an associate provider and increase your earnings'
            />
            <Container padding={generalPadding} width="100%">
                <Text
                    color={Theme.primary}
                    size={isMobile ? 18 : 20}
                    weight='bold'
                    text={`Welcome ${name}`}
                />
                <SizedBox height={10} />
                <Text
                    color={Theme.primary}
                    opacity={0.8}
                    size={isMobile ? 14 : 16}
                    text="Create a strong and unique password you can remember"
                />
                <SizedBox height={10} />
                <Container height={2} backgroundColor={Theme.primaryDark} width="95%" />
                <SizedBox height={40} />
                <Wrap runSpacing={30} spacing={30}>
                    <Container width={!isDesktop ? "100%" : "40%"}>
                        <Text
                            text="..."
                            color={Theme.primary}
                            size={isMobile ? 14 : 16}
                        />
                        <SizedBox height={20} />
                        <Container width="100%" padding="24px" backgroundColor={Theme.appbarLight}>
                            <Text
                                text={[
                                    "Password must contain special characters like *!@ etc, numbers,",
                                    "uppercase and lowercase characters."
                                ].join(" ")}
                                color={Theme.primary}
                                size={isMobile ? 14 : 16}
                            />
                        </Container>
                    </Container>
                    <Container width={!isDesktop ? "100%" : "55%"}>
                        {renderForm()}
                    </Container>
                </Wrap>
            </Container>
        </Layout>
    )
}