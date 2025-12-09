import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import BackgroundPattern from '../components/BackgroundPattern';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen">
      {/* Dark Blue Background Section (Header + Terms and Conditions Heading) */}
      <div className="bg-[#0a1929] relative overflow-hidden">
        {/* Background Wavy Pattern */}
        <BackgroundPattern />
        
        {/* Header/Navbar */}
        <Header />
        
        {/* Terms and Conditions Heading Section */}
        <div className="relative z-10 px-6 md:px-12 py-20 md:py-32 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white text-center">
            Terms and Conditions
          </h1>
        </div>
      </div>
      
      {/* Terms and Conditions Content Section */}
      <section 
        className="py-16 md:py-20 lg:py-24 bg-white" 
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="bg-gray-50 rounded-lg shadow-md p-6 md:p-8 lg:p-10">
            <div className="space-y-8 text-gray-700 text-base md:text-lg leading-relaxed">
              
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">TERMS AND CONDITIONS</h2>
                <p className="mb-4">
                  Welcome to TNS Services!
                </p>
                <p>
                  By continuing to access the TNS Services website (collectively, the "website" or "service"), you agree to comply with the following Terms of Use (the "Agreement" or "Terms"). The terms "TNS Services", "we," "us," and "our" refer to TNS Services. The term "You", "you" or "your" refers to the entity or individual who is accessing the service under this agreement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Acceptance of Agreement</h2>
                <p className="mb-4">
                  By using this website you agree to accept and comply to these terms and conditions and to any modifications of these terms whether you are a visitor of the site or a registered member. If you wish to become a registered member of TNS Services you must read this agreement and agree to it prior to confirming your registration. We may revise these terms at any time by updating this page on our website. It is your responsibility to check back regularly for any updates to the terms of use of TNS Services. You may not propose any terms and conditions that will directly conflict with those set forth by TNS Services.
                </p>
                <p>
                  This agreement also constitutes the entire and sole agreement between us and you, and supersedes all prior or contemporaneous agreements, representations, warranties and understandings with respect to the website and the content, products or services provided by or through the website and the subject matter of this agreement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Eligibility and Registration</h2>
                <p className="mb-4">
                  Registration for TNS Services is void where prohibited. Upon registering you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Be at least 13 years of age or older to use the service. The Service is not intended for those under the age of 13.</li>
                  <li>Provide accurate, current and complete information about yourself during registration process;</li>
                  <li>Maintain the security of your password and identification;</li>
                  <li>Maintain and promptly update the registration information, and any other information you provide to TNS Services, to keep it accurate, current and complete;</li>
                  <li>Be fully responsible for all use of your account and for any actions that take place using your account.</li>
                  <li>Use the service without violating any applicable law or regulation.</li>
                  <li>Represent and warrant that you are fully able and competent to enter into, and abide by this agreement.</li>
                  <li>Receive information from relevant Indices brokers and service providers.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Service Limitations</h2>
                <p className="mb-4">
                  The services and content on TNS Services are for your personal and non-commercial use, unless specifically endorsed or approved by TNS Services. As a condition of your use of the Website, you will not use the Website for any purpose that is unlawful or prohibited by this Agreement. You may not use the Service to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Post or transmit any content that is disruptive, uncivil, abusive, vulgar, profane, obscene, hateful, fraudulent, threatening, harassing, defamatory, which discloses private or personal matters concerning any person, or in the sole judgment of TNS Services, is objectionable or which restricts or inhibits any other person from using or enjoying the site, or which may expose TNS Services or its users to any harm or liability of any type;</li>
                  <li>Post or transmit any material that you don't have legal rights to transmit (such as copyrighted materials or trade secrets) or under contractual or fiduciary relationships (such as nondisclosure agreements);</li>
                  <li>Post, transmit, or link to sexually explicit material;</li>
                  <li>Impersonate any person, or falsely state or otherwise misrepresent your affiliation with a person or entity;</li>
                  <li>Impersonate another member or person;</li>
                  <li>Use the account, username, or password of another member at any time or provide your password to any third party or permitting any third party to access your account;</li>
                  <li>Sell or otherwise transfer your profile;</li>
                  <li>Use any information obtained from our website in order to harass, abuse, or harm another person;</li>
                  <li>Post or transmit any advertising, promotional materials, or other forms of solicitation, whether personal or commercial, including chain letters, pyramid schemes, and links or URLs to third party websites deemed as commercial;</li>
                  <li>Violate any applicable law or regulation while accessing and using our sites, including, without limitation, the rules and regulations of the U.S. Securities and Exchange Commission and the national or other securities exchanges (especially and including the rule against making false or misleading statements to manipulate the price of any security);</li>
                  <li>Post or transmit any file that contains viruses, corrupted files, "Trojan Horses," or any other contaminating or harmful files that may damage or corrupt someone else's computer;</li>
                  <li>Use any automated means, including without limitation, agents, robots, scripts, or spiders, to access, monitor, copy or harvest data from any part of our sites;</li>
                  <li>Use any automated means, including without limitation, agents, robots, scripts, or spiders, to post content to any part of our website;</li>
                  <li>Attempt to gain unauthorized access to services, materials, other accounts, computer systems or networks connected to any TNS Services or to the website, through hacking, password mining or any other means not intentionally made available through the Website;</li>
                  <li>Take any action that imposes an unreasonably or disproportionately large load on our infrastructure or disrupts the functioning of our systems or Service; and</li>
                  <li>Take any action that damages or disrupts the functioning of our systems or service.</li>
                </ul>
                <p className="mt-4">
                  We reserve the right to investigate complaints or reported violations of this Agreement and to take any action we deem appropriate, including but not limited to reporting any suspected unlawful activity to law enforcement officials, regulators, or other third-parties and disclosing any information necessary or appropriate to such persons or entities relating to your profile, email address, usage history, posted materials, IP addresses and traffic information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Copyright Information</h2>
                <p className="mb-4">
                  All materials contained in the Website are the sole property of TNS Services. All trademarks, service marks, and trade names are proprietary to TNS Services. Unless otherwise specified, the materials and services on this website are for your personal and non-commercial use, and you may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information, software, products or services obtained from the website without the written permission from TNS Services.
                </p>
                <p className="mb-4">
                  We respect the intellectual property rights of others. We do not accept posts or dissemination of material on TNS Services unless done shared directly from the property owner or with express permission. When we receive proper Notification of Alleged Copyright Infringement as described below, we promptly remove or disable access to the allegedly infringing material and terminate the accounts of repeat infringers in accordance with the Digital Millennium Copyright Act.
                </p>
                <p className="mb-4">
                  If you believe that your work has been copied and posted on our website in a way that constitutes copyright infringement, please provide our Copyright Agent with the following information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>An electronic or physical signature of the person authorized to act on behalf of the owner of the copyright interest;</li>
                  <li>A description of the copyrighted work that you claim has been infringed;</li>
                  <li>A description of where the material that you claim is infringing is located on our website;</li>
                  <li>Your address, telephone number, and email address;</li>
                  <li>A written statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law;</li>
                  <li>A statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner's behalf.</li>
                </ul>
                <p>
                  To obtain permission to use TNS Services's proprietary materials, please refer to Rights and Permissions below.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Rights and Permissions</h2>
                <p>
                  If you have any questions concerning the usage or licensing of TNS Services's proprietary materials, such as images, text, quizzes or videos, please submit your detailed request in writing. Please be sure to include any surrounding copy or text as desired. Requests can be send to info@tnsservices.com.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">The Sensible Guide to Indices Raffle</h2>
                <p>
                  By registering for the raffle, applicants understand that they may be contacted by the TNS Services regarding future offers or promotions. TNS Services will be raffling off a limited number of ebooks. Winners will be chosen at random and will be contacted privately. First names of winners may be published to help the winner claim his or her prize.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Disclaimer of Warranties and Liabilities</h2>
                <p className="mb-4">
                  TNS Services will not be held liable for any loss or damage resulting from reliance on the information contained within this website including market news, analysis, trading signals and Indices broker information. The data contained in this website is not necessarily real-time nor accurate, and analyses are the opinions of the authors and do not represent the recommendations of TNS Services or its employees. Currency trading on margin involves high risk, and is not suitable for all investors. Before deciding to trade Indices or any other financial instrument you should carefully consider your investment objectives, level of experience, and risk appetite.
                </p>
                <p className="mb-4 font-semibold">
                  TNS Services ASSUMES NO RESPONSIBILITY FOR ANY ERROR, OMISSION, INTERRUPTION, DELETION, DEFECT, DELAY IN OPERATION OR TRANSMISSION, COMMUNICATIONS LINE FAILURE, THEFT OR DESTRUCTION OR UNAUTHORIZED ACCESS TO, OR ALTERATION OF, ANY USER OR MEMBER COMMUNICATION. YOU UNDERSTAND AND AGREE THAT YOU DOWNLOAD OR OTHERWISE OBTAIN CONTENT, MATERIAL OR DATA FROM OR THROUGH THE SERVICE AT YOUR OWN DISCRETION AND RISK AND THAT YOU WILL BE SOLELY RESPONSIBLE FOR YOUR USE THEREOF AND ANY DAMAGES TO YOUR MOBILE DEVICE OR COMPUTER SYSTEM, LOSS OF DATA OR OTHER HARM OF ANY KIND THAT MAY RESULT. UNDER NO CIRCUMSTANCES SHALL TNS Services BE RESPONSIBLE FOR ANY LOSS OR DAMAGE, INCLUDING PERSONAL INJURY OR DEATH, RESULTING FROM USE OF THE TNS Services SERVICES, FROM ANY CONTENT POSTED ON OR THROUGH THE SERVICE, OR FROM THE CONDUCT OF ANY USERS OF TNS Services, WHETHER ONLINE OR OFFLINE. TNS Services IS NOT RESPONSIBLE FOR THE CONDUCT, WHETHER ONLINE OR OFFLINE, OF ANY USER OF THE TNS Services SERVICES.
                </p>
                <p className="mb-4 font-semibold">
                  IN NO EVENT WILL TNS Services OR ITS DIRECTORS, EMPLOYEES OR AGENTS BE LIABLE TO YOU OR ANY THIRD PERSON FOR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL OR PUNITIVE DAMAGES, INCLUDING FOR ANY LOST PROFITS OR LOST DATA ARISING FROM YOUR USE OF THE SITE OR THE SERVICE, OR ANY OF THE SITE CONTENT OR OTHER MATERIALS ON, ACCESSED THROUGH OR DOWNLOADED FROM THE SITE, EVEN IF TNS Services IS AWARE OR HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. YOU EXPRESSLY AGREE THAT YOU WILL ASSUME THE ENTIRE RISK AS TO THE QUALITY AND THE PERFORMANCE OF OUR SERIVCES AND THE ACCURACY OR COMPLETENESS OF OUR CONTENT.
                </p>
                <p>
                  CERTAIN STATE LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS, EXCLUSIONS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS. REFERENCE TO ANY PRODUCTS, SERVICES, PROCESSES OR OTHER INFORMATION, BY TRADE NAME, TRADEMARK, MANUFACTURER, AND SUPPLIER OR OTHERWISE DOES NOT CONSTITUTE OR IMPLY ENDORSEMENT, SPONSORSHIP OR RECOMMENDATION THEREOF, OR ANY AFFILIATION THEREWITH, BY TNS Services.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default TermsAndConditions;

