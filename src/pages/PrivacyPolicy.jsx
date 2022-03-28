import React, {Fragment, useEffect} from "react"
import {Statistics} from "@/api"
import {useFetching} from "@/hooks"
import {Loading, Document} from "@/components/UI"

const PrivacyPolicy = () => {
  const [fetchVisit, isLoading, error] = useFetching(async () => {
    await Statistics.visit("privacy-policy")
  })
  useEffect(() => {
    fetchVisit()
  }, [])

  const title = "Privacy Policy"
  const textPP = "At Clario Tech DMCC, we care about privacy. \
Therefore we strictly follow all data protection procedures regarding the full security of your personal data. \
This Privacy Notice does not apply to information about you collected by a third party, including through any content (such as advertising) linked to, or accessible on our Website or through our Product. This shall instead be governed by the third party’s terms and policies. This Privacy Notice contains links to some of the third party’s terms and policies to make accessing this information as easy as possible. \
By using the our Website or Products you are consenting to the collection, use, sharing, transfer, or other processing of your personal data as prescribed by this Privacy Notice. If you do not consent to such processing, then please do not further access or use our products, services, or website. \
Note, you will need to agree to our Terms and Conditions. Please do read the Terms and Conditions carefully as this Notice is a part of them. \
1. Who we are? \
We are Clario Tech DMCC, based at our principal office at Unit No: 3005-D6, Swiss Tower, Plot No: JLT-PH2-Y3A, Jumeirah Lakes Towers, Dubai, UAE (hereinafter  or ). Clario is a data controller and responsible for any personal data processed. In case you have any questions you may reach out to us by emailing support@macupdate.com or you may send a letter to Unit No: 3005-D6, Swiss Tower, Plot No: JLT-PH2-Y3A, Jumeirah Lakes Towers, Dubai, UAE. \
If you are an EU resident, you can contact our EU Representative at hamburg@weitnauer.netor contact them in writing at: Weitnauer Partnerschaft mbB, Rechtsanwälte Steuerberater, Neuer Wall 84, 20354 Hamburg, GERMANY. \
UK residents can contact us at support@macupdate.com or write to us: 7 Stratford Place, Marylebone, London, United Kingdom, W1C 1AY. \
2. What does this Notice apply to? \
This Privacy Notice applies to our products, services and the website (together now known as the “Services”). Namely, it applies to: \
When you use our Services, we process data about you and your online activity. The data we process is divided into several categories. Data listed in this section is necessary for us to provide and maintain our Services. \
Also, we do not knowingly process personal data of anyone below the age of 16 years old. If you are a parent and your child uses Clario’s Services without your consent, please let us know at support@macupdate.com. \
Account registration data. You may access our Websites without providing any of your data. However, to use the full range of Services you will be required to create an Account (). To create an Account you will need to provide us with: \
Please note we will scan your device to identify the apps you use to provide you with our Product functionality after the Product installation and Account creation process is complete. \
You can create the Account using sign-in services such as Facebook or Google. These platforms will authenticate your identity and provide you with an option to share certain personal data such as: \
Data we receive automatically. When you enter our Website, in addition to the data you enter yourself, we may automatically collect some information to optimize your experience when using and improving our products, including: \
Data collected via Product. When you use our Product, we may collect different types of data, for example: \
Third-party data. Some of your personal data, like your name and email address, type of subscription, software name, it's price, currency, etc., may be processed and provided to us by third parties, such as PayPro Global. \
Please note we don't process information related to your credit card number or other payment data. Your credit card is passed directly to our payment processor so these details don’t go through our servers. \
We would like to provide you with the links to PayPro Global Compliance & Data Privacy to make finding information about their data privacy easier. \
Children’s data. We don’t process personal data of anyone below the age of 13 without prior parental consent. If you are under 13 years of age or the equivalent age as specified by law in your jurisdiction, then please do not use or access our Services. We will delete the personal data of a child under 13 processed without parental consent. If you are a parent or guardian and discover your child is using our Services, then you may contact us at support@macupdate.com and request the child’s personal data be deleted. \
4. Why do we process your data? \
We use data to ensure the fast and efficient rendering of the Services to you. The main purpose of processing your data is to provide you with our Services. Also, we use your data for other reasons such as safety and security, customer support, communications and marketing, compliance with legal obligations, also for research and development. \
Providing you with Services. We process data to provide you with a personalized experience and to maintain and improve our Services. This includes using data to: \
Communications. We may use any data we process to communicate with you about our Services. For example, we will send you purchase receipts, invoices, satisfaction surveys or other Product related communications. \
Marketing. If we receive your prior opt-in consent, we will contact you via email to tell you about special offers, promotions, and update you on our Product or Services. You may opt out of future contact from us at any time by using the method provided in the email (such as clicking on an unsubscribe link), or emailing support@macupdate.com.\
We may use first-party and third-party cookies to deliver advertisements relevant to your interests. By learning your preferences, these cookies enable us to display ads tailored to you and simplify your browsing experience. \
Copliance with legal obligations. We collect your data to comply with our legal obligations. Also, we may use your data to investigate or address claims or disputes in relation to the usage of our Services or as otherwise allowed by applicable law, or as requested by regulators or government entities.\
Research and development. We may use the data we collect for the purpose of testing, analysis, research, statistics and overall development of the Product and Services. This also allows us to enhance safety and security as well as develop new features or improve the Product.\
We may anonymize your personal data when you stop using our Services. Anonymous data does not relate to a particular person, so it does not allow us to re-identify you. However, anonymous data allows us to improve Clario Services. \
5. What are the grounds for data processing? \
Before proceeding to the processing of your personal data (as described in Section 4) we evaluate the data we collect, then determine the legal basis of processing. We use the following basis to collect and process your data: performance of a contract, compliance with legal obligations, our legitimate interest, and your consent."

  return (
    <Fragment>
      <Loading />
      <Document
        title={title}
        text={textPP}
      />
    </Fragment>
  )
}

export default PrivacyPolicy
