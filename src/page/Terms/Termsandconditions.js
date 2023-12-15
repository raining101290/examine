import React, { Component, useEffect } from 'react'
import { Link } from 'react-router-dom';

import { Redirect } from 'react-router';
import axios from 'axios';



import 'bootstrap/dist/css/bootstrap.min.css';
import Toast from 'react-bootstrap/Toast';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRunning, faFlag, faManatSign } from '@fortawesome/free-solid-svg-icons'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Header from '../Header';
import Footer from '../Footer';
//import languagesconfigureation from './languages/languagesconfigureation';

import './index.css'

const Termsandconditions = () => {
 const { t } = useTranslation();

 useEffect(() =>{
  window.scroll(0,0)
 })

 return (
  <div>
   <Header />
   <div className='main'>
    <h3 style={{ marginTop: 110 }}>Terms and Conditions of Use</h3>
    <div className='par'>
     The Examamine website (&quot;Service&quot;) is a hosted service operated by Examamine (referred to as
     &quot; Examamine&quot;). Any use of the Service is subject to the following Terms and Conditions of Use
     (&quot;Terms and Conditions&quot;), as well as to Examamine&#39;s Privacy Policy, all of which are
     incorporated by reference into these Terms and Conditions. Your use of the Service will
     constitute your acceptance of these terms and conditions.
    </div>
    <div className='par'>
     1. Eligibility: Use of the Service is void where prohibited. The Service is for users of all ages.
     For children younger than 10, Examamine offers a limited feature set and does not require
     Examamine to obtain parental consent. We designed our system to permit children to use
     Examamine without Examamine collecting personally identifiable information other than
     persistent identifiers that recognize the Examamine user as a repeat visitor. By using the
     Service, you represent and warrant that: (a) all registration information you submit is truthful
     and accurate; (b) you will maintain the accuracy of such information; and, (c) your use of
     the Service does not violate any applicable law or regulation.
    </div>

    <div className='par'>
     2. Your Examamine Account and Data: If you create an account on the Service, you are
     responsible for maintaining the security of your account and data, and you are fully
     responsible for all activities that occur under the account. You must immediately notify
     Examamine of any unauthorized uses of your data, your account or any other breaches of
     security. Examamine will not be liable for any acts or omissions by you, including any
     damages of any kind incurred as a result of such acts or omissions. Examamine may from
     time to time set storage limits for your data, or take any other measures Examamine
     considers appropriate to manage the Service. Examamine may also from time to time
     change its policies on offering commercial content or displaying advertising, and it may do
     this without notice.
    </div>

    <div className='par'>
     3. Prohibited Content and Activities, and Responsibility of Contributors: If you create
     quizzes, comment via the discussion boxes, post material to the Service, post links on the
     Service, or otherwise make material available by means of the Service (any such material,
     &quot;Content&quot;), you are entirely responsible for the content of, and any harm resulting from, that
     Content. That is the case regardless of whether the Content in question constitutes text,
     graphics, an audio file, computer software or any other format in which Examamine stores
     data. You are also entirely responsible for ensuring that you are lawfully entitled to use any
     information and content. Examamine does not assume any responsibility for damage
     caused by your acts, errors, omissions or negligence with respect to the content you post to
     Examamine.
    </div>


    <div className='par'>
     4. The Examamine Service is intended to be educational. The following are examples of the
     kind of Content that is illegal or prohibited to post on or through the Service. Examamine
     reserves the right to suspend or terminate your ability to access Examamine if you post
     illegal or prohibited content on Examamine. Examamine further may investigate and take
     appropriate legal action against anyone who, in Examamine&#39;s sole discretion, violates this
     provision, including without limitation, removing the offending Content from the Service and
     terminating the accounts of such violators. Prohibited Content includes, but is not limited to,
     Content that, in the sole discretion of Examamine:
    </div>


    <div className='par'>
     is patently offensive and promotes racism, bigotry, hatred or physical harm of any
     kind against any class or individual;
     o harasses or advocates harassment of another person;
     o exploits or encourages the exploitation of people in a sexual or violent manner;
     o contains anything sexually suggestive, nudity not related to the study of art,
     medicine or another bonafide educational field, portrays or glorifies excessive
     violence without educational merit, or constitutes offensive subject matter;

     o solicits personal information from anyone under 18;
     o publicly posts information that poses or creates a privacy or security risk to any
     person;
     o includes information about another person that you have posted without that
     person&#39;s consent;
     o violates the privacy rights, publicity rights, copyrights, trademark rights, contract
     rights or any other rights of any person;
     o constitutes or promotes information that you know is false or misleading or
     promotes illegal activities or conduct that is abusive, threatening, obscene,
     defamatory or libelous;
     o constitutes or promotes an illegal or unauthorized copy of another person&#39;s
     copyrighted work;
     o solicits passwords or personal identifying information for commercial or unlawful
     purposes from other Users;
     o involves the transmission of &quot;junk mail,&quot; &quot;chain letters,&quot; or unsolicited mass mailing,
     instant messaging, or &quot;spamming&quot;;
     o furthers or promotes any criminal activity or enterprise or provides instructional
     information about illegal activities including, but not limited to making or buying
     illegal weapons, violating someone&#39;s privacy, or providing or creating computer
     viruses; or
     o involves commercial activities and/or sales without prior written consent from
     Examamine such as contests, sweepstakes, barter, advertising, or pyramid
     schemes.
    </div>

    <div className='par'>
     5. The following are examples of the kind of activity that is illegal or prohibited on the Service.
     Examamine reserves the right to investigate and take appropriate legal action against
     anyone who, in Examamine&#39;s sole discretion, violates this provision, including without
     limitation, reporting you to law enforcement or national security authorities. Prohibited
     activity includes, but is not limited to:
     o criminal or tortious activity, including child pornography, fraud, trafficking in obscene
     material, drug dealing, gambling, harassment, stalking, spamming, sending of
     viruses or other harmful files, copyright infringement, patent infringement, or theft of
     trade secrets;
     o circumventing or modifying, attempting to circumvent or modify, or encouraging or
     assisting any other person in circumventing or modifying any security technology or
     software that is part of the Service;
     o organizing or encouraging acts of violence;
     o impersonating or attempting to impersonate another user, person or entity;
     o using the account, username, or password of another user at any time or disclosing
     your password to any third party or permitting any third party to access your
     account;
     o using any information obtained from the Service in order to harass, abuse, or harm
     another person or entity, or attempting to do the same;
     o activity that involves the use of viruses, bots, worms, or any other computer code,
     files or programs that interrupt, destroy or limit the functionality of any computer
     software or hardware, or otherwise permit the unauthorized use of or access to a
     computer or a computer network;
     o any automated use of the system, such as, but not limited to, using scripts to create
     or post Content;
     o interfering with, disrupting, or creating an undue burden on the Service or the
     networks or services connected to the Service;
     o displaying an unauthorized commercial advertisement on the Service, or accepting
     payment or anything of value from a third person in exchange for your performing
     any commercial activity through the unauthorized or impermissible use of the
     Service on behalf of that person;

     o using the Service in a manner inconsistent with any and all applicable laws and
     regulations; or
     o reproduces, duplicates, copies, sells, trades, resells, or exploits for any commercial
     purposes, any portion or use of, or access to, the Content and/or services offered
     throughout this Service (unless you have been specifically allowed to do so in a
     separate agreement).
    </div>
    <div className='par'>
     6. By making Content available, you represent and warrant that:
     o the downloading, copying and use of the Content will not infringe the proprietary
     rights, including but not limited to the copyright, patent, trademark or trade secret
     rights, of any third party;
     o if your employer has rights to intellectual property you create, you have either: (i)
     received permission from your employer to post or make available the Content,
     including but not limited to any software; or (ii) secured from your employer a waiver
     as to all rights in or to the Content;
     o you have fully complied with any third-party licenses relating to the Content, and
     have done all things necessary to successfully pass through to end users any
     required terms;
     o content does not contain or install any viruses, worms, malware, Trojan horses or
     other harmful or destructive content;
     o content is not spam, and does not contain unethical or unwanted commercial
     content designed to drive traffic to third party sites or boost the search engine
     rankings of third party sites, or to further unlawful acts (such as phishing) or mislead
     recipients as to the source of the material (such as spoofing);
     o content is not obscene or libelous, and does not violate the privacy or publicity
     rights of any third party; and
     o have, in the case of Content that includes computer code, accurately categorized
     and/or described the type, nature, uses and effects of the materials, whether
     requested to do so by Examamine or otherwise.

    </div>

    <div className='par'>

     7. Users that are not customers of the Examamine for Work professional plans and submit
     content to Examamine for inclusion on the Service (by publishing a quiz for example) grant
     Examamine a world-wide, perpetual, royalty-free license (with right to sublicense) to use,
     copy, reproduce, process, adapt, modify, publish, transmit, display, and distribute such
     Content in any and all media or distribution methods (now or later developed). Such
     additional uses by Examamine, or other companies or individuals who partner with
     Examamine, may be made with no compensation paid to you with respect to the Content
     that you submit, post, or otherwise make available through the Service.
    </div>


    <div className='par'>

     8. Customers who have purchased a Examamine for Work professional plan and the users of
     those paid accounts who access Examamine due to a paid, Examamine for Work
     professional plan are not deemed to have granted Examamine any such license. All other
     terms of this Agreement apply to those customers and their users unless explicitly stated
     otherwise.
    </div>


    <div className='par'>
     9. Responsibility of Service Visitors: Examamine has not reviewed, and cannot review, all
     of the material posted to the Service, and cannot therefore be responsible for that material&#39;s
     content, use or effects. By operating the Service, Examamine does not represent or imply
     that it endorses the material there posted, or that it believes such material to be accurate,
     useful or non-harmful. You are responsible for taking precautions as necessary to protect
     yourself and your computer systems from viruses, worms, Trojan horses, and other harmful
     or destructive content. The Service may contain content that is offensive, indecent, or
     otherwise objectionable, as well as content containing technical inaccuracies, typographical

     mistakes, and other errors. The Service may also contain material that violates the privacy
     or publicity rights, or infringes the intellectual property and other proprietary rights, of third
     parties, or the downloading, copying or use of which is subject to additional terms and
     conditions, stated or unstated. Examamine disclaims any responsibility for any harm
     resulting from the use by visitors of the Service, or from any downloading by those visitors
     of content there posted.

    </div>
   </div>


   <Footer />
  </div>
 )
}

export default Termsandconditions