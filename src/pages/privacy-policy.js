import React, { Component } from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"
import HeroBanner from "../components/HeroBanner"
import Helmet from "react-helmet"
import ObserverWrapper from '@emarketeross/simple-react-intersection-observer'
import SEO from "../components/Seo"

export default class PrivacyPolicy extends Component {

  render() {

    return (
      <div>
        <Helmet title="Open Coast | Privacy Policy" />
        <SEO
         title="Privacy Policy"
         description="This is the privacy policy of Open Coast"
         />
        <Header />
        <main className="statement-wrapper">
          <HeroBanner
            isLargeBanner={ false }
            hasOverlay={ true }
            titleBanner="Privacy Policy"
            backgroundImagePath="banner-support.jpg"
          />

          <div className="container-custom">
            <div className="statement">
              <h2>GENERAL</h2>
              <div className="hr-wrapper">
                <hr className="hl" />
              </div>
              <p>All Personal Data Collected From This Site Complies With The Principles Of The EU GDPR Data Protection Act 1995 And May 25, 2018. By Accessing This Site You Agree To The Terms Of This Privacy Policy And Consent To The Collection, Processing, Use Or Transfer Of Data As Set Out In This Policy.</p>
              <p>Personal Data Collected By Open Coast Are Processed In Accordance With The Law On Legal Protection Of Personal Data Of the U.S. Courts And Other Legal Acts. All Employees, Agents OR Partners Of Open Coast Who Know The Secret Of Personal Data Must Keep It Safe Even After Termination Of The Employment Or Contractual Relationship.</p>
              <p>For The Purpose Of The Processing Personal Data, Open Coast May Engage Data Processors And/Or, At Its Sole Discretion, Hire Other Persons To Perform Certain Functions On Behalf Of Open Coast. In Such Cases, Open Coast Shall Take Necessary Measures To Ensure That Such Data Is Processed By The Personal Data Processors In Accordance With Instructions Of Open Coast And Applicable European Union Legislation.  Open Coast Shall Also Require The Personal Data Processors To Implement Appropriate Measures For The Security Of Personal Data. In Such Cases, Open Coast Shall Ensure That Such Persons Will Be Subject To The Non-Disclosure Obligation And Will Not Be Able To Use This Information For Any Other Purpose, Except To The Extent Necessary To Perform The Functions Assigned To Them.</p>
            </div>
            <ObserverWrapper>
              <div className="statement">
                <h2>PRIVACY STATEMENT FOR CUSTOMERS</h2>
                <div className="hr-wrapper">
                  <hr className="hl" />
                </div>
                <p>This privacy statement applies to the processing of personal data of customers who place an order on one of Open Coast’s platforms. Open Coast is responsible for the processing of these personal data and takes your privacy seriously. Open Coast therefore adheres to the requirements of the General Data Protection Regulation (GDPR) when processing personal data.</p>
              </div>

              <div className="statement">
                <h2>ACCEPTANCE</h2>
                <div className="hr-wrapper">
                  <hr className="hl" />
                </div>
                <p>The Open Coast Website is hosted in the USA and is subject to in accordance with the laws of U.S Courts. If you are accessing our Website from other jurisdictions, please be advised that you are transferring your personal information to us in the U.S, and by using our Website; you consent to that transfer and use of your personal information in accordance with this Privacy Policy. You also agree to abide by the applicable laws of applicable states and U.S. law concerning your use of the Open Coast Website and your agreements with us.</p>
                <p>Any persons accessing our Website from any jurisdiction with laws or regulations governing the use of the Internet, including personal data collection, use and disclosure, different from those of the jurisdictions mentioned above may only use the Open Coast Website in a manner lawful in their jurisdiction. If your use of the Open Coast Website would be unlawful in your jurisdiction, please do not use our Website.</p>
                <p>By Using Or Accessing The Open Coast Website, You Are Accepting The Practices Described In This Privacy Policy. Gathering, Use and Disclosure of Non-Personally-Identifying Information</p>
              </div>

              <div className="statement">
                <h2>OVERVIEW</h2>
                <div className="hr-wrapper">
                  <hr className="hl" />
                </div>
                <p>This is the privacy notice of Open Coast or <a href="/" className="link">www.opencoastb2b.com</a> and Open Coast App. In this document, "we", "our", or "us" refer to Open Coast. </p>
                <p>Your privacy is important to us. Open Coast is committed to protecting the privacy of its users and the information that you share in connection with your use of Open Coast’s Services. This Privacy Policy describes how we share and transfer Personal Data that You provide to us (including how we collect, process and manage Your Personal Data) and informs You of Your rights with respect the privacy practices associated with the use and disclosure of Personal Data through the Site and Our Services. This privacy statement discloses what information we gather and how we use it. Open Coast is strongly committed to protecting the privacy of our users. Open Coast is committed to safeguarding your private information.</p>
                <p>Similar to other commercial websites, our website utilizes a standard technology called ‘cookies’ (see explanation below and our cookies policy page for more information) and server logs to collect information about how our site is used. Information gathered through cookies and server logs may include the date and time of visits, the pages viewed, time spent at our site, and the websites visited just before and just after our own, as well as your IP address.</p>
              </div>

              <div className="statement">
                <h2>HOW WE ARE COMPLIANT WITH THE EU GDPR REGULATION </h2>
                <div className="hr-wrapper">
                  <hr className="hl" />
                </div>
                <p>This is to inform you of the Open Coast Data policy about all information that we record about you. It sets out the conditions under which we may process any information that we collect from you, or that you provide to us. It covers information that could identify you (“personal information”) and information that could not. In the context of the law and this notice, “process” means collect, store, transfer, use or otherwise act on information. </p>

                <ol className="statement-ol-list">
                  <li className="statement-item">We regret that if there are one or more points below with which you are not happy, your only recourse is to leave our website immediately. </li>
                  <li className="statement-item">Open Coast takes seriously the protection of your privacy and confidentiality. We understand that all visitors to our website are entitled to know that their personal data will not be used for any purpose unintended by them, and will not accidentally fall into the hands of a third party. </li>
                  <li className="statement-item">Open Coast undertakes to preserve the confidentiality of all information you provide to us, and hope that you reciprocate. </li>
                  <li className="statement-item">Our policy complies with the U.S. laws accordingly implemented, including that required by the European Union General Data Protection Regulation (GDPR). </li>
                  <li className="statement-item">The law requires us to tell you about your rights and our obligations to you in regards to the processing and control of your personal data.  </li>
                  <li className="statement-item">Except as set out below, we do not share, or sell, or disclose to a third party, any information collected through our website. </li>
                </ol>
              </div>

              <div className="statement">
                <h2>PERSONAL INFORMATION WE COLLECT </h2>
                <div className="hr-wrapper">
                  <hr className="hl" />
                </div>
                <p>We collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information”. </p>
                <p>When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information. </p>
              </div>

              <div className="statement">
                <h2>INFORMATION FROM USERS </h2>
                <div className="hr-wrapper">
                  <hr className="hl" />
                </div>
                <p>If you are a user, you agree to be bind by this privacy policy on our website which complies with the laws applicable to this site. You also agree that you gave your consent for the use and access of your Personal Information by Open Coast and other third parties. You agree to grant Open Coast affirmative, express consent regarding your data for the use and access of sensitive Personal Information and other third parties. </p>
              </div>

              <div className="statement">
                <h2>WHAT INFORMATION DO WE COLLECT FROM USERS AND WHY? </h2>
                <div className="hr-wrapper">
                  <hr className="hl" />
                </div>
                <p>We collect Device Information using the following technologies:  </p>

                <ul className="statement-ul-list">
                  <li className="statement-item">“Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.  </li>
                  <li className="statement-item">“Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.</li>
                  <li className="statement-item">“Web beacons”, “tags”, and “pixels” are electronic files used to record information about how you browse the Site. </li>
                </ul>

                <p>Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information, email address, and phone number. We refer to this information as “Order Information”. </p>

                <ol className="statement-ol-list">
                  <li className="statement-item">We collect your name, email address, company name, and address. </li>
                  <li className="statement-item">We need this information to provide you with our Services; for example, to create your account, confirm your identity, contact you, and invoice you. </li>
                  <li className="statement-item">We collect data about the Open Coast -hosted webpages that you visit. We also collect data about how and when you access your account, including information about the device and browser you use, your network connection and your IP address. </li>
                  <li className="statement-item">We need this information to troubleshoot, give you access to and improve our Services. </li>
                  <li className="statement-item">We collect Personal Information about your customers that you share with us or that customers provide during checkout. </li>
                  <li className="statement-item">We use this information to provide you with our Services and so that you can process orders and better serve your customers. </li>
                  <li className="statement-item">We will also use Personal Information in other cases where you have given us your express permission. </li>
                </ol>
              </div>

              <div className="statement">
                <h2>WHAT ADDITIONAL INFORMATION WE COLLECT AND HOW WE USE IT </h2>
                <div className="hr-wrapper">
                  <hr className="hl" />
                </div>
                <p>We may also collect information for billing and transactional purposes, statistics on your usage of the Site or Our Services (including IP, device, geographic, and other specific information about you) as well as other technical data such as cookies, pixel tags, and other similar technology. </p>
                <p>Data that You provide to Us will be made available to other users of the Site and Service, may be shared with other Open Coast Services of which you are not a user, as well as potentially transmitted to third parties as set forth herein. Please do not post any information you do not want revealed to the public or shared across the Open Coast Site, Services, or otherwise. We use this information to provide and enhance our Services (including servicing your account, if applicable), and answer any questions you may have. </p>
              </div>

              <div className="statement">
                <h2>HOW DO WE USE YOUR PERSONAL INFORMATION? </h2>
                <div className="hr-wrapper">
                  <hr className="hl" />
                </div>
                <p>We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to:  </p>

                <ul className="statement-square-list">
                  <li className="statement-item">Communicate with you;  </li>
                  <li className="statement-item">Screen our orders for potential risk or fraud; and</li>
                  <li className="statement-item">When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services. </li>
                </ul>

                <p>We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns). </p>
              </div>

              <div className="statement">
                <h2>HERE ARE SOME EXAMPLES OF HOW WE USE YOUR DATA </h2>
                <div className="hr-wrapper">
                  <hr className="hl" />
                </div>
                <p>We need this information to troubleshoot, give you access to and improve our Services. We also use this information to provide you with our Services and so that you can process orders and better serve your customers. </p>

                <ol className="statement-ol-list">
                  <li className="statement-item">To provide, develop, and enhance the Service </li>
                  <li className="statement-item">To respond to feedback, requests, and monitor security for the Service </li>
                  <li className="statement-item">To provide users with promotional communications, materials, and other third party information </li>
                  <li className="statement-item">To enforce Our terms or rights under any agreement between you and Open Coast </li>
                  <li className="statement-item">To perform any other action deemed necessary by Open Coast in its provision of the Service, interactions with You, or any other third party </li>
                  <li className="statement-item">We need this information to provide you with our Services; for example, to create your account, confirm your identity, contact you, and invoice you. </li>
                  <li className="statement-item">We collect data about the Open Coast -hosted webpages that you visit. We also collect data about how and when you access your account, including information about the device and browser you use, your network connection and your IP address. </li>
                  <li className="statement-item">We will also use Personal Information in other cases where you have given us your express permission. </li>
                </ol>

                <p>Open Coast may also collect and create Anonymous Data about you, which does not identify any personal information about you and may be disclosed in our sole discretion. </p>
              </div>

              <div className="statement">
                <h2>SHARING YOUR PERSONAL INFORMATION </h2>
                <div className="hr-wrapper">
                  <hr className="hl" />
                </div>
                <p>We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Google Analytics to help us understand how our customers use the Site -- you can read more about how Google uses your Personal Information here: https://www.google.com/intl/en/policies/privacy/. You can also opt-out of Google Analytics here: https://tools.google.com/dlpage/gaoptout. </p>
                <p>Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rig</p>
              </div>

              <div className="statement">
                <h2>WHEN DO WE COLLECT INFORMATION? </h2>
                <div className="hr-wrapper">
                  <hr className="hl" />
                </div>
                <p>We collect personal information from you when you place an order or enter information on our website. We need this information to provide users with our Services, including supporting and processing orders, authentication, and processing payments </p>
              </div>

              <div className="statement">
                <h2>BEHAVIOURAL ADVERTISING  </h2>
                <div className="hr-wrapper">
                  <hr className="hl" />
                </div>
                <p>As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. For more information about how targeted advertising works, you can visit the Network Advertising Initiative’s (“NAI”) educational page at http://www.networkadvertising.org/ understanding-online-advertising/how-does-it-work</p>
                <p>You can opt out of targeted advertising by using the links below:</p>

                <ul className="statement-ul-list">
                  <li className="statement-item">- Facebook: https://www.facebook.com/settings/?tab=ads  </li>
                  <li className="statement-item">- Google: https://www.google.com/settings/ads/ anonymous  </li>
                </ul>

                <p>Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance’s opt-out portal at: http://optout.aboutads.info/. </p>
              </div>

              <div className="statement">
                <h2>IP ADDRESSES DATA WE COLLECT UNDER EU GDPR REGULATION </h2>
                <div className="hr-wrapper">
                  <hr className="hl" />
                </div>
                <p>IP addresses are used by your computer every time you are connected to the Internet. Your IP address is a number that is used by computers on the network to identify your computer. IP addresses are automatically collected by our web server as part of demographic and profile data known as “traffic data” so that data (such as the Web pages you request) can be sent to you. </p>
              </div>

              <div className="statement">
                <h2>WE DO NOT SELL, RENT OR LEASE ITS USER LISTS TO THIRD PARTIES </h2>
                <div className="hr-wrapper">
                  <hr className="hl" />
                </div>
                <p>Open Coast may, from time to time, contact you on behalf of external business partners about a particular offering that may be of interest to you. In those cases, your unique personally identifiable information (e-mail, name, address, telephone number) is transferred to the third party. Open Coast may share data with trusted partners to help perform statistical analysis, send you email or postal mail, provide user support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services to Open Coast, and they are required to maintain the confidentiality of your information. </p>
              </div>

              <div className="statement">
                <h2>WHEN WE DISCLOSE YOUR INFORMATION UNDER THE EU GDPR REGULATION </h2>
                <div className="hr-wrapper">
                  <hr className="hl" />
                </div>
                <p>Open Coast will disclose your personal information, without notice, only if required to do so by law or in the good faith belief that such action is necessary to:  </p>

                <ol className="statement-ol-list">
                  <li className="statement-item">Conform to the edicts of the law or comply with legal process served on Open Coast or the site; </li>
                  <li className="statement-item">Protect and defend the rights or property of Open Coast; and,</li>
                  <li className="statement-item">Act under exigent circumstances to protect the personal safety of users of Open Coast, or the public.</li>
                </ol>
              </div>

              <div className="statement">
                <h2>DATA RETENTION </h2>
                <div className="hr-wrapper">
                  <hr className="hl" />
                </div>
                <p>When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information. </p>
              </div>

              <div className="statement">
                <h2>CAN-SPAM ACT UNDER GDPR REGULATION </h2>
                <div className="hr-wrapper">
                  <hr className="hl" />
                </div>
                <p>In compliance with the GDPR CAN-SPAM Act, all e-mail sent from our organization will clearly state who the e-mail is from and provide clear information on how to contact the sender. In addition, all e-mail messages will also contain concise information on how to remove yourself from our mailing list so that you receive no further e-mail communication from us. </p>
              </div>

              <div className="statement">
                <h2>INFORMATION WE PROCESS BECAUSE WE HAVE A CONTRACTUAL OBLIGATION WITH YOU </h2>
                <div className="hr-wrapper">
                  <hr className="hl" />
                </div>
                <p>When you create an account on the Open Coast website, purchase a service from us, or otherwise agree to our terms a contract is formed between you and us.  Information is collected in the Open Coast hosted checkout when a user’s customer an order on our site, or when our users submit various types of information and data into the Service through the Open Coast administration console or through Open Coast’s API. </p>
                <p>In order to carry out our obligations under that contract we must process the information you give us. Some of this information may be personal information. </p>
                <p>We may use it in order to: </p>

                <ol className="statement-ol-list">
                  <li className="statement-item">verify your identity for security purposes </li>
                  <li className="statement-item">introduce new Offers to you </li>
                  <li className="statement-item">provide you with our products and services </li>
                  <li className="statement-item">provide you with suggestions and advice on relevant services and how to obtain the most from using our website </li>
                </ol>

                <p>Open Coast processes this information on the basis there is a contract between us, or that you have requested we use the information before we enter into a legal contract. </p>
                <p>Additionally, we may aggregate this information in a general way and use it to provide class information, for example to monitor our performance with respect to a particular service we provide. If we use it for this purpose, you as an individual will not be personally identifiable. </p>
              </div>

              <div className="statement">
                <h2>USERS OF THE OPEN COAST WEBSITE GENERALLY</h2>
                <div className="hr-wrapper">
                  <hr className="hl" />
                </div>
                <p>“Non-Personally-Identifying Information” is information that, without the aid of additional information, cannot be directly associated with a specific person. “Personally-Identifying Information,” by contrast, is information such as a name or email address that, without more, can be directly associated with a specific person. Like most website operators, Open Coast gathers from users of the Open Coast Website Non-Personally-Identifying Information of the sort that Web browsers, depending on their settings, may make available. That information includes the user’s Internet Protocol (IP) address, operating system, browser type and the locations of the websites the user views right before arriving at, while navigating and immediately after leaving the Website. Although such information is not Personally-Identifying Information, it may be possible for Open Coast to determine from an IP address a user’s Internet service provider and the geographic location of the visitor’s point of connectivity as well as other statistical usage data. Open Coast analyzes Non-Personally-Identifying Information gathered from users of the Website to help Open Coast better understand how the Website is being used. By identifying patterns and trends in usage, Open Coast is able to better design the Website to improve users’ experiences, both in terms of content and ease of use. From time to time, Open Coast may also release the Non-Personally-Identifying Information gathered from Website users in the aggregate, such as by publishing a report on trends in the usage of the Open Coast Website. </p>
              </div>

              <div className="statement">
                <h2>ANALYTICS</h2>
                <div className="hr-wrapper">
                  <hr className="hl" />
                </div>
                <p>We may partner with selected third parties to allow tracking technology on the Open Coast Website, which will enable them to collect data about how you interact with the Open Coast Website and our services over time. This information may be used to, among other things, analyze and track data, determine the popularity of certain content and better understand online activity</p>
              </div>

              <div className="statement">
                <h2>MOBILE DEVICE TERMS </h2>
                <div className="hr-wrapper">
                  <hr className="hl" />
                </div>

                <ul className="statement-ul-list">
                  <li className="statement-item"><span className="policy-title">Mobile Device.</span> If you use a mobile device to access the Website or download any of our mobile applications, we may collect device information (such as your mobile device ID, model and manufacturer), operating system, version information and IP address. </li>
                  <li className="statement-item"><span className="policy-title">Geo-Location Information.</span> Unless we have received your prior consent, we do not access or track any location-based information from your mobile device at any time while downloading or using our mobile application or our services, except that it may be possible for Open Coast to determine from an IP address the geographic location of your point of connectivity, in which case we may gather and use such general location data.</li>
                  <li className="statement-item"><span className="policy-title">Push Notifications.</span> We send you push notifications if you choose to receive them, letting you know when someone has sent you a message or for other service-related matters. If you wish to opt-out from receiving these types of communications, you may turn them off in your device’s settings. </li>
                  <li className="statement-item"><span className="policy-title">Mobile Analytics.</span> We use mobile analytics software to allow us to better understand the functionality of our mobile software on your phone. This software may record information, such as how often you use the application, the events that occur within the application, aggregated usage, and performance data and where the application was downloaded from. We do not link the information we store within the analytics software to any Personally-Identifying Information you submit within the mobile application.</li>
                </ul>
              </div>

              <div className="statement">
                <h2>SOCIAL MEDIA</h2>
                <div className="hr-wrapper">
                  <hr className="hl" />
                </div>
                <p>We may provide you the option to connect your account on the Open Coast Website to your account on some social networking sites for the purpose of logging in, uploading information or enabling certain features on the Website. When logging in using your social network credentials, we may collect the Personally-Identifying Information you have made publicly available on the social networking site, such as your name, profile picture, cover photo, username, gender, friends network, age range, locale, friend list and any other information you have made public. Once connected, other users may also be able to see information about your social network, such as the size of your network and your friends, including common friends.  </p>
                <p>By connecting your account on the Open Coast Website to your account on any social networking site, you hereby consent to the continuous release of information about you to us. We will not send any of your account information to the connected social networking site without first disclosing that to you. Each social network may further allow you to set privacy controls around your information on their system, and our collection of information will always follow such controls and permissions. This feature is subject to continuous change and improvement by us and each social networking site involved, and therefore the available features and shared information are subject to change without notice to you. </p>
              </div>

              <div className="statement">
                <h2>COLLECTION, USE AND DISCLOSURE OF PERSONALLY-IDENTIFYING INFORMATION </h2>
                <div className="hr-wrapper">
                  <hr className="hl" />
                </div>
                <p>As defined above, Personally-Identifying Information is information that can be directly associated with a specific person. Open Coast may collect a range of Personally-Identifying Information from and about Website users. Much of the Personally-Identifying Information collected by Open Coast about users is information provided by users themselves when  </p>

                <ol className="statement-ol-list">
                  <li className="statement-item">Registering for our service,</li>
                  <li className="statement-item">Logging in with social network credentials,</li>
                  <li className="statement-item">participating in polls, contests, surveys or other features of our service, or responding to offers or advertisements,   </li>
                  <li className="statement-item">Communicating with us,   </li>
                  <li className="statement-item">Signing up to receive newsletters. That information may include each user’s name, address, email address and telephone number, and, if you transact business with us, financial information such as your payment method (valid credit card number, type, expiration date or other financial information).  </li>
                </ol>

                <p>We also may request information about your interests and activities, your gender, age, date of birth, username, hometown and other demographic or relevant information as determined by Open Coast from time to time. Users of the Website are under no obligation to provide Open Coast with Personally-Identifying Information of any kind, with the caveat that a user’s refusal to do so may prevent the user from using certain Website features. </p>
                <p>By Registering With Or Using The Open Coast Website, You Consent To The Use And Disclosure Of Your Personally-Identifying Information As Described In This “Collection, Use And Disclosure Of Personally-Identifying Information” Section. </p>
              </div>

              <div className="statement">
                <h2>OPEN COAST COMMUNICATIONS </h2>
                <div className="hr-wrapper">
                  <hr className="hl" />
                </div>
                <p>We may occasionally use your name and email address to send you notifications regarding new services offered by the Open Coast Website that we think you may find valuable. We may also send you service-related announcements from time to time through the general operation of the service. Generally, you may opt out of such emails at the time of registration or through your account settings, though we reserve the right to send you notices about your account, such as service announcements and administrative messages, even if you opt out of all voluntary email notifications. </p>
              </div>

              <div className="statement">
                <h2>OPEN COAST DISCLOSURES </h2>
                <div className="hr-wrapper">
                  <hr className="hl" />
                </div>
                <p>Open Coast will disclose Personally-Identifying Information under the following circumstances: </p>

                <ul className="statement-ul-list">
                  <li className="statement-item"><span className="policy-title">By Law or to Protect Rights.</span>  When we believe disclosure is appropriate, we may disclose Personally-Identifying Information in connection with efforts to investigate, prevent or take other action regarding illegal activity, suspected fraud or other wrongdoing; to protect and defend the rights, property or safety of Open Coast, our users, our employees or others; to comply with applicable law or cooperate with law enforcement; to enforce our Terms of Use or other agreements or policies, in response to a subpoena or similar investigative demand, a court order or a request for cooperation from a law enforcement or other government agency; to establish or exercise our legal rights; to defend against legal claims; or as otherwise required by law. In such cases, we may raise or waive any legal objection or right available to us.</li>
                  <li className="statement-item"><span className="policy-title">Third-Party Service Providers</span> We may share your Personally-Identifying Information, which may include your name and contact information (including email address) with our authorized service providers that perform certain services on our behalf. These services may include fulfilling orders, providing customer service and marketing assistance, performing business and sales analysis, supporting Open Coast Website’s functionality and supporting contests, sweepstakes, surveys and other features offered through the Website. We may also share your name, contact information and credit card information with our authorized service providers who process credit card payments. These service providers may have access to personal information needed to perform their functions but are not permitted to share or use such information for any other purpose.</li>
                  <li className="statement-item"><span className="policy-title">Business Transfers; Bankruptcy.</span> Open Coast reserves the right to transfer all Personally-Identifying Information in its possession to a successor organization in the event of a merger, acquisition, bankruptcy or other sale of all or a portion of Open Coast assets. Other than to the extent ordered by a bankruptcy or other court, the use and disclosure of all transferred Personally-Identifying Information will be subject to this Privacy Policy, or to a new privacy policy if you are given notice of that new privacy policy and are given an opportunity to affirmatively opt-out of it. Personally-Identifying Information submitted or collected after a transfer, however, may be subject to a new privacy policy adopted by the successor organization.</li>
                </ul>
              </div>

              <div className="statement">
                <h2>GENERAL USE </h2>
                <div className="hr-wrapper">
                  <hr className="hl" />
                </div>
                <p>Open Coast uses the Personally-Identifying Information in the file we maintain about you, and other information we obtain from your current and past activities on the Website  </p>

                <ol className="statement-ol-list">
                  <li className="statement-item">To  deliver the products that you have requested;</li>
                  <li className="statement-item">To manage your account and provide you with customer support;  </li>
                  <li className="statement-item">To communicate with you by email, postal mail, telephone and/or mobile devices about products or services that may be of interest to you either from us, our affiliate companies or other third parties;  </li>
                  <li className="statement-item">To develop and display content and advertising tailored to your interests on the Website and other sites;</li>
                  <li className="statement-item">To resolve disputes and troubleshoot problems;  </li>
                  <li className="statement-item">To measure consumer interest in our services;  </li>
                  <li className="statement-item">To inform you of updates;</li>
                  <li className="statement-item">To customize your experience; to </li>
                  <li className="statement-item">Detect and protect us against error, fraud and other criminal activity;  </li>
                  <li className="statement-item">To enforce our Terms of Use; and  </li>
                  <li className="statement-item">To do as otherwise described to you at the time of collection.  </li>
                </ol>

                <p>At times, we may look across multiple users to identify problems. In particular, we may examine your Personally-Identifying Information to identify users using multiple user IDs or aliases. We may compare and review your Personally-Identifying Information for accuracy and to detect errors and omissions. We may use financial information or payment method to process payment for any purchases made on the Website, enroll you in the discount, rebate, and other programs in which you elect to participate, to protect against or identify possible fraudulent transactions and otherwise as needed to manage our business. </p>
              </div>

              <div className="statement">
                <h2>SECURITY </h2>
                <div className="hr-wrapper">
                  <hr className="hl" />
                </div>
                <p>We take the security of your Personally-Identifying Information seriously and use reasonable electronic, personnel and physical measures to protect it from loss, theft, alteration or misuse.  However, please be advised that even the best security measures cannot fully eliminate all risks. We cannot guarantee that only authorized persons will view your information. We are not responsible for third-party circumvention of any privacy settings or security measures. </p>
                <p>We are dedicated to protect all information on the Website as is necessary. However, you are responsible for maintaining the confidentiality of your Personally-Identifying Information by keeping your password confidential. You should change your password immediately if you believe someone has gained unauthorized access to it or your account. If you lose control of your account, you should notify us immediately.  </p>
              </div>

              <div className="statement">
                <h2>YOUR RIGHTS  </h2>
                <div className="hr-wrapper">
                  <hr className="hl" />
                </div>
                <p>If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below. </p>
                <p>Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States. </p>
              </div>

              <div className="statement">
                <h2>PRIVACY POLICY CHANGES </h2>
                <div className="hr-wrapper">
                  <hr className="hl" />
                </div>
                <p>Open Coast may, in its sole discretion, change this Privacy Policy from time to time. Any and all changes to Open Coast Privacy Policy will be reflected on this page and the date new versions are posted will be stated at the top of this Privacy Policy. Unless stated otherwise, our current Privacy Policy applies to all information that we have about you and your account. Users should regularly check this page for any changes to this Privacy Policy. Open Coast will always post new versions of the Privacy Policy on the Website.</p>
                <p>However, Open Coast may, as determined in its discretion, decide to notify users of changes made to this Privacy Policy via email or otherwise. Accordingly, it is important that users always maintain and update their contact information. </p>
              </div>

              <div className="statement">
                <h2>CHILDREN</h2>
                <div className="hr-wrapper">
                  <hr className="hl" />
                </div>
                <p>The Children's Online Privacy Protection Act ("COPPA") protects the online privacy of children under 13 years of age. We do not knowingly collect or maintain Personally-Identifying Information from anyone under the age of 13, unless or except as permitted by law. Any person who provides Personally-Identifying Information through the Website represents to us that he or she is 13 years of age or older. If we learn that Personally-Identifying Information has been collected from a user under 13 years of age on or through the Open Coast Website, then we will take the appropriate steps to cause this information to be deleted. If you are the parent or legal guardian of a child under 13 who has become a member of the Website or has otherwise transferred Personally-Identifying Information to the Website, please contact Open Coast using our contact information below to have that child's account terminated and information deleted.  </p>
              </div>

              <div className="statement">
                <h2>DO-NOT-TRACK POLICY </h2>
                <div className="hr-wrapper">
                  <hr className="hl" />
                </div>
                <p>Most web browsers and some mobile operating systems include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. Because there is not yet a common understanding of how to interpret the DNT signal, the Website currently does not respond to DNT browser signals or mechanisms. </p>
              </div>

              <div className="statement">
                <h2>CONTACT</h2>
                <div className="hr-wrapper">
                  <hr className="hl" />
                </div>
                <p>If you have any questions regarding our Privacy Policy, please contact our Privacy Officer at: </p>
                <p>Open Coast email:  <a href="mailto:Support@opencoastb2b.com" className="link">Support@opencoastb2b.com</a></p>
              </div>
            </ObserverWrapper>
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}
