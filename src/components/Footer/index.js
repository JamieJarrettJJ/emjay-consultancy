import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Route } from "react-router";
import { Fireworks } from "../Navbar/NavbarElements";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterLink2,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  StyledPopup,
  EmjayLogo,
} from "./FooterElements";
import logo from "../../images/logo.png";
import Realistic from "../Fireworks";
import { openPopupWidget } from "react-calendly";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const onClick = () =>
  openPopupWidget({ url: "https://calendly.com/marcjarrett" });

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Sitemap</FooterLinkTitle>
              <FooterLink
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About Us
              </FooterLink>
              <FooterLink
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Our Services
              </FooterLink>
              <FooterLink
                to="articles"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Articles
              </FooterLink>
              <FooterLink
                to="testimonials"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Testimonials
              </FooterLink>
              <FooterLink
                to="team"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Meet the Team
              </FooterLink>
              <FooterLink2
                to={{
                  pathname: "https://chatwith.io/s/from-emjayconsultancy-com",
                }}
                target="_blank"
              >
                WhatsApp
              </FooterLink2>
              <FooterLink2 onClick={onClick}>Book a Call</FooterLink2>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Legal</FooterLinkTitle>
              <StyledPopup
                trigger={<FooterLink2>Terms & Conditions</FooterLink2>}
                modal
              >
                <EmjayLogo src={logo} alt="Emjay Consultancy Logo" />
                <h1>Terms of Service</h1>
                <p>
                  Marc Jarrett of Emjay Consultancy Ltd. 17 Barttelot Road,
                  Horsham, West Sussex RH12 1DW, United Kingdom (“we” or “us”)
                  provides professional individuals and companies (“you”,
                  “Members”) with access to dedicated WhatsApp groups that are
                  operated and managed by us (“WhatsApp Services”) for the
                  purpose of business networking between group members and the
                  opportunity to meeting new people to further your business
                  goals.
                </p>

                <br />

                <h2>General Provisions</h2>
                <p>
                  By using the WhatsApp Services, you agree to these Terms of
                  Service. We may change these Terms of Service from time to
                  time, at our sole discretion. Your continued use of the
                  WhatsApp Services following the sending of such changes to you
                  will constitute your assent to all such changes. If you do not
                  agree to these Terms Of Service then we respectfully suggest
                  that you no longer use the Whatsapp services.
                </p>

                <br />

                <h2>Restricted Use</h2>
                <p>
                  You must access and use the WhatsApp Services only for legal,
                  authorized, and acceptable purposes. You will not use (or
                  assist others in using) the WhatsApp Services and data in ways
                  that: (a) violate, misappropriate, or infringe the rights of
                  Emjay Consultancy Ltd., our users, or others, including
                  privacy, publicity, intellectual property, or other
                  proprietary rights; (b) are illegal, obscene, defamatory,
                  threatening, intimidating, harassing, hateful, racially, or
                  ethnically offensive, or instigate or encourage conduct that
                  would be illegal, or otherwise inappropriate, including
                  promoting violent crimes; (c) involve publishing falsehoods,
                  misrepresentations, or misleading statements; (d) impersonate
                  someone; (e) involve sending illegal or impermissible
                  communications. You also agree that we have the right to
                  restrict admission, remove, or ban you to any of the WhatsApp
                  Services without any notification.
                </p>

                <br />

                <h2>Commission Payable, Non-Circumvention </h2>
                <p>
                  Our WhatsApp Services are commission based professional
                  services.
                  <br />
                  <br />
                  Members are permitted to contact each other directly by means
                  of Direct Messaging (DM) in order to negotiate terms for any
                  given deal or commercial Transaction (the “Transaction”) on
                  the understanding that the Beneficiary to said Transaction
                  that arise as a consequence of the existence of the WhatsApp
                  Services (the “Beneficiary”) is obliged to pay a commission to
                  Emjay Consultancy Ltd. for our provision of the WhatsApp
                  Services (the “Transaction Provision”). The Transaction
                  Provision will be derived as a percentage of the net proceeds
                  of the Transaction. The Beneficiary may contact us prior to
                  closing the Transaction to agree on a different Transaction
                  Provision.
                  <br />
                  <br />
                  We are a trust based Virtual Networking group and as such we
                  rely on the honesty and integrity of those in this group to
                  acknowledge Marc Jarrett of Emjay Consultancy Ltd when
                  business is generated by way of commission.
                </p>

                <br />

                <h2>Non-Disclosure:</h2>
                <p>
                  The WhatsApp Services are ‘closed’ (non-public) WhatsApp
                  groups. All information shared therein together with other
                  Members’ telephone numbers are to be treated as confidential
                  unless said information is already in the public domain.
                  Sources and confidential information of any party shall remain
                  the exclusive property of such party. Neither party (nor any
                  of such parties' affiliates) will disclose to any third party
                  any confidential information of the other party obtained in
                  the transaction of the subject business.
                </p>

                <br />

                <h2>Term/Jurisdiction:</h2>
                <p>
                  This Agreement shall be binding upon the parties for the
                  entire period that you are a Member of one of our WhatsApp
                  groups and for a period of three (3) years thereafter.
                  <br />
                  <br />
                  This Agreement shall be deemed to have been made in England
                  and shall be construed and interpreted in accordance with the
                  laws of the United Kingdom without reference to such law's
                  conflict of law principles.
                </p>

                <br />

                <h2>Protocol</h2>
                <ol>
                  <li>
                    When entering a group, introduce yourself with your full
                    name outlining what you do, who you would like to meet and
                    something personal such as family or hobbies to show your
                    human side. Include your LinkedIn profile.
                  </li>
                  <li>
                    Each group has a guest list under ‘Description’. Add
                    yourself to it.
                  </li>
                  <li>
                    When someone new enters a group, welcome them and include
                    your LinkedIn profile.
                  </li>
                  <li>
                    Courteousness and respect are a given. Abuse or offensive
                    language will not be tolerated.
                  </li>
                  <li>
                    Post videos with contextual text so that members can decide
                    whether or not to view it.
                  </li>
                  <li>
                    Avoid talking about politics or religion as these can be
                    binary and divisive.
                  </li>
                </ol>

                <br />

                <h2>DO:</h2>

                <br />

                <ol>
                  <li>
                    When entering a group, introduce yourself with your full
                    name outlining what you do, who you would like to meet and
                    something personal such as family or hobbies to show your
                    human side. Include your LinkedIn profile.
                  </li>
                  <li>
                    Each group has a guest list under ‘Description’. Add
                    yourself to it.
                  </li>
                  <li>
                    When someone new enters a group, welcome them and include
                    your LinkedIn profile.
                  </li>
                  <li>Post regularly / be active / show up.</li>
                  <li>Post thoughtful / beneficial / value add posts.</li>
                  <li>Acknowledge new members.</li>
                  <li>Engage with your network / comment positively.</li>
                  <li>Provide solutions/entertain and inform your audience.</li>
                  <li>
                    Gain trust & establish relationship/s BEFORE you try
                    selling.
                  </li>
                  <li>
                    If you can connect members with those in your network be
                    proactive – matching the right people with the right people.
                  </li>
                  <li>Give credit where credit is due.</li>
                  <li>
                    Be respectful /courteous at all times / Respect others time
                    and bandwidth.
                  </li>
                  <li>Share your expertise.</li>
                  <li>
                    Respect others unique points of view – healthy debate
                    welcomed only.
                  </li>
                  <li>Respect people’s privacy.</li>
                  <li>
                    Always report any concerning issues immediately to the
                    administrator/host of the group.
                  </li>
                  <li>
                    Post videos with contextual text so that members can decide
                    whether or not to view it.
                  </li>
                </ol>

                <br />

                <h2>DON'T:</h2>

                <br />

                <ol>
                  <li>Don’t SPAM.</li>
                  <li>
                    Don’t complain – if there is an issue raise with the group
                    administrator/host.
                  </li>
                  <li>Don’t blatantly elicit business with no enrolment.</li>
                  <li>
                    Don’t post anything of an abusive and or sexually explicit
                    nature.
                  </li>
                  <li>
                    Don’t post when you are angry or use the platform as a
                    political medium.
                  </li>
                  <li>If you don’t do it real-life don’t do it online.</li>
                  <li>Don’t blatantly tag without prior permission.</li>
                  <li>
                    Don’t directly/privately approach and try selling with no
                    prior permission.
                  </li>
                  <li>Don’t share without researching the facts.</li>
                  <li>Don’t post with bad spelling/grammar/write in CAPS.</li>
                  <li>
                    Don’t be argumentative or engage with intention to offend.
                  </li>
                  <li>
                    Avoid talking about politics or religion as these are binary
                    and divisive.
                  </li>
                  <li>Abuse or offensive language will not be tolerated.</li>
                </ol>
              </StyledPopup>
              <StyledPopup
                trigger={<FooterLink2>Privacy Policy</FooterLink2>}
                modal
              >
                <EmjayLogo src={logo} alt="Emjay Consultancy Logo" />
                <h1>Privacy Policy</h1>

                <p>
                  At Emjay Consultancy, accessible from
                  www.emjayconsultancy.com, one of our main priorities is the
                  privacy of our visitors. This Privacy Policy document contains
                  types of information that is collected and recorded by Emjay
                  Consultancy and how we use it.
                </p>

                <p>
                  If you have additional questions or require more information
                  about our Privacy Policy, do not hesitate to contact us.
                </p>

                <p>
                  This Privacy Policy applies only to our online activities and
                  is valid for visitors to our website with regards to the
                  information that they shared and/or collect in Emjay
                  Consultancy. This policy is not applicable to any information
                  collected offline or via channels other than this website. Our
                  Privacy Policy was created with the help of the{" "}
                  <a href="https://www.privacypolicygenerator.info/">
                    Privacy Policy Generator
                  </a>
                  .
                </p>

                <br />

                <h2>Consent</h2>

                <p>
                  By using our website, you hereby consent to our Privacy Policy
                  and agree to its terms.
                </p>

                <br />

                <h2>Information we collect</h2>

                <p>
                  The personal information that you are asked to provide, and
                  the reasons why you are asked to provide it, will be made
                  clear to you at the point we ask you to provide your personal
                  information.
                </p>
                <p>
                  If you contact us directly, we may receive additional
                  information about you such as your name, email address, phone
                  number, the contents of the message and/or attachments you may
                  send us, and any other information you may choose to provide.
                </p>
                <p>
                  When you register for an Account, we may ask for your contact
                  information, including items such as name, company name,
                  address, email address, and telephone number.
                </p>

                <br />

                <h2>How we use your information</h2>

                <p>
                  We use the information we collect in various ways, including
                  to:
                </p>

                <ul>
                  <li>Provide, operate, and maintain our website</li>
                  <li>Improve, personalize, and expand our website</li>
                  <li>Understand and analyze how you use our website</li>
                  <li>
                    Develop new products, services, features, and functionality
                  </li>
                  <li>
                    Communicate with you, either directly or through one of our
                    partners, including for customer service, to provide you
                    with updates and other information relating to the website,
                    and for marketing and promotional purposes
                  </li>
                  <li>Send you emails</li>
                  <li>Find and prevent fraud</li>
                </ul>

                <br />

                <h2>Log Files</h2>

                <p>
                  Emjay Consultancy follows a standard procedure of using log
                  files. These files log visitors when they visit websites. All
                  hosting companies do this and a part of hosting services'
                  analytics. The information collected by log files include
                  internet protocol (IP) addresses, browser type, Internet
                  Service Provider (ISP), date and time stamp, referring/exit
                  pages, and possibly the number of clicks. These are not linked
                  to any information that is personally identifiable. The
                  purpose of the information is for analyzing trends,
                  administering the site, tracking users' movement on the
                  website, and gathering demographic information.
                </p>

                <br />

                <h2>Advertising Partners Privacy Policies</h2>

                <p>
                  You may consult this list to find the Privacy Policy for each
                  of the advertising partners of Emjay Consultancy.
                </p>

                <p>
                  Third-party ad servers or ad networks uses technologies like
                  cookies, JavaScript, or Web Beacons that are used in their
                  respective advertisements and links that appear on Emjay
                  Consultancy, which are sent directly to users' browser. They
                  automatically receive your IP address when this occurs. These
                  technologies are used to measure the effectiveness of their
                  advertising campaigns and/or to personalize the advertising
                  content that you see on websites that you visit.
                </p>

                <p>
                  Note that Emjay Consultancy has no access to or control over
                  these cookies that are used by third-party advertisers.
                </p>

                <br />

                <h2>Third Party Privacy Policies</h2>

                <p>
                  Emjay Consultancy's Privacy Policy does not apply to other
                  advertisers or websites. Thus, we are advising you to consult
                  the respective Privacy Policies of these third-party ad
                  servers for more detailed information. It may include their
                  practices and instructions about how to opt-out of certain
                  options.{" "}
                </p>

                <p>
                  You can choose to disable cookies through your individual
                  browser options. To know more detailed information about
                  cookie management with specific web browsers, it can be found
                  at the browsers' respective websites.
                </p>

                <br />

                <h2>
                  CCPA Privacy Rights (Do Not Sell My Personal Information)
                </h2>

                <p>
                  Under the CCPA, among other rights, California consumers have
                  the right to:
                </p>
                <p>
                  Request that a business that collects a consumer's personal
                  data disclose the categories and specific pieces of personal
                  data that a business has collected about consumers.
                </p>
                <p>
                  Request that a business delete any personal data about the
                  consumer that a business has collected.
                </p>
                <p>
                  Request that a business that sells a consumer's personal data,
                  not sell the consumer's personal data.
                </p>
                <p>
                  If you make a request, we have one month to respond to you. If
                  you would like to exercise any of these rights, please contact
                  us.
                </p>

                <br />

                <h2>GDPR Data Protection Rights</h2>

                <p>
                  We would like to make sure you are fully aware of all of your
                  data protection rights. Every user is entitled to the
                  following:
                </p>
                <p>
                  The right to access – You have the right to request copies of
                  your personal data. We may charge you a small fee for this
                  service.
                </p>
                <p>
                  The right to rectification – You have the right to request
                  that we correct any information you believe is inaccurate. You
                  also have the right to request that we complete the
                  information you believe is incomplete.
                </p>
                <p>
                  The right to erasure – You have the right to request that we
                  erase your personal data, under certain conditions.
                </p>
                <p>
                  The right to restrict processing – You have the right to
                  request that we restrict the processing of your personal data,
                  under certain conditions.
                </p>
                <p>
                  The right to object to processing – You have the right to
                  object to our processing of your personal data, under certain
                  conditions.
                </p>
                <p>
                  The right to data portability – You have the right to request
                  that we transfer the data that we have collected to another
                  organization, or directly to you, under certain conditions.
                </p>
                <p>
                  If you make a request, we have one month to respond to you. If
                  you would like to exercise any of these rights, please contact
                  us.
                </p>

                <br />

                <h2>Children's Information</h2>

                <p>
                  Another part of our priority is adding protection for children
                  while using the internet. We encourage parents and guardians
                  to observe, participate in, and/or monitor and guide their
                  online activity.
                </p>

                <p>
                  Emjay Consultancy does not knowingly collect any Personal
                  Identifiable Information from children under the age of 13. If
                  you think that your child provided this kind of information on
                  our website, we strongly encourage you to contact us
                  immediately and we will do our best efforts to promptly remove
                  such information from our records.
                </p>
              </StyledPopup>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              <Realistic />
            </SocialLogo>
            <WebsiteRights>
              Emjay Consultancy Ltd. © {new Date().getFullYear()} All rights
              reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://twitter.com/power_connector"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/theglobalguy/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/in/marcjarrett/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
