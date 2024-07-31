import React, { useEffect } from 'react'
import ContentMainComponent from '@/components/ContentMainComponent'

import Head from 'next/head'
import Link from 'next/link'
import { motion } from "framer-motion"
import Globals from '@/modules/Globals'
import JsLoader from '@/modules/JsLoader'



export default function ContactUs() {

    useEffect(() => {
        JsLoader.loadFile(
            `${Globals.BASE_URL}assets/js/contact-us.js`
        );
    }, [])


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Head>
                <title>Contact-Us</title>
                <meta name='title' content='Contact Creation House - Premium Event and Exhibition Stand Builders' />
                <meta name="description" content="Get in touch with Creation House for expert assistance with your event or exhibition stand needs. Our team is ready to help you from planning to execution, ensuring your project is a success." />
            </Head>

            <ContentMainComponent title="Contact Us">
                <section className='contact-us-wrapper'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <div className="left-container">
                                    <p className='section-heading'>Get in <strong>Touch with Creation House</strong></p>
                                    <p className='description'>Looking for professional event services? Fill out the form to inquire about our exhibition stands, event production, furniture rental, and audio-visual services. We're ready to assist you with your event needs.</p>
                                    <Link href="/about-us" className="read-more">Read More</Link>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="right-container">
                                    <div className="col-12 mb-3">
                                        <h3 id='enter-your-details-heading'>Enter Your Details:</h3>
                                    </div>
                                    <form
                                        method="POST" action="https://strategic31677.activehosted.com/proc.php" id="_form_488_" className="_form _form_488 _inline-form  _dark" noValidate data-styles-version="5"
                                    >
                                        <input type="hidden" name="u" value="488" />
                                        <input type="hidden" name="f" value="488" />
                                        <input type="hidden" name="s" />
                                        <input type="hidden" name="c" value="0" />
                                        <input type="hidden" name="m" value="0" />
                                        <input type="hidden" name="act" value="sub" />
                                        <input type="hidden" name="v" value="2" />
                                        <input type="hidden" name="or" value="2d98bbc1069c8c684e13ba2dd5e5ca3a" />
                                        <input type="hidden" name="field[38]" value="Creation House 2025 - Contact Us" />

                                        <div className="_form-content">

                                            <div className="row g-lg-2">
                                                <div className="col-md-6 mb-2">
                                                    <input type="text" id="firstname" name='firstname' placeholder='First Name' className='form-control w-100' required />
                                                </div>
                                                <div className="col-md-6 mb-2">
                                                    <input type="text" id="lastname" name="lastname" placeholder='Last Name' className='form-control w-100' required />
                                                </div>

                                            </div>

                                            <div className="row g-lg-2">
                                                <div className="col-md-6 mb-2">
                                                    <input type="text" id="email" name="email" placeholder='Email Address' className='form-control w-100' required />
                                                </div>
                                                <div className="col-md-6 mb-2">
                                                    <input type="text" id="phone" name="phone" placeholder='Phone Number' className='form-control w-100' required />
                                                </div>
                                            </div>



                                            <div className="row g-lg-2">
                                                <div className="col-md-6 mb-2">
                                                    <input type="text" id="customer_account" name="customer_account" placeholder='Company Name' className='form-control w-100' required />

                                                </div>
                                                <div className="col-md-6 mb-2">
                                                    <select name="field[3]" id="field[3]" className='select-control' required>
                                                        <option selected>
                                                            Country
                                                        </option>
                                                        <option value="Afghanistan" >
                                                            Afghanistan
                                                        </option>
                                                        <option value="Aland Islands" >
                                                            Aland Islands
                                                        </option>
                                                        <option value="Albania" >
                                                            Albania
                                                        </option>
                                                        <option value="Algeria" >
                                                            Algeria
                                                        </option>
                                                        <option value="American Samoa" >
                                                            American Samoa
                                                        </option>
                                                        <option value="Andorra" >
                                                            Andorra
                                                        </option>
                                                        <option value="Angola" >
                                                            Angola
                                                        </option>
                                                        <option value="Anguilla" >
                                                            Anguilla
                                                        </option>
                                                        <option value="Antigua and Barbuda" >
                                                            Antigua and Barbuda
                                                        </option>
                                                        <option value="Argentina" >
                                                            Argentina
                                                        </option>
                                                        <option value="Armenia" >
                                                            Armenia
                                                        </option>
                                                        <option value="Aruba" >
                                                            Aruba
                                                        </option>
                                                        <option value="Australia" >
                                                            Australia
                                                        </option>
                                                        <option value="Austria" >
                                                            Austria
                                                        </option>
                                                        <option value="Azerbaijan" >
                                                            Azerbaijan
                                                        </option>
                                                        <option value="Bahamas" >
                                                            Bahamas
                                                        </option>
                                                        <option value="Bahrain" >
                                                            Bahrain
                                                        </option>
                                                        <option value="Bangladesh" >
                                                            Bangladesh
                                                        </option>
                                                        <option value="Barbados" >
                                                            Barbados
                                                        </option>
                                                        <option value="Belarus" >
                                                            Belarus
                                                        </option>
                                                        <option value="Belgium" >
                                                            Belgium
                                                        </option>
                                                        <option value="Belize" >
                                                            Belize
                                                        </option>
                                                        <option value="Benin" >
                                                            Benin
                                                        </option>
                                                        <option value="Bermuda" >
                                                            Bermuda
                                                        </option>
                                                        <option value="Bhutan" >
                                                            Bhutan
                                                        </option>
                                                        <option value="Bolivia" >
                                                            Bolivia
                                                        </option>
                                                        <option value="Bosnia and Herzegovina" >
                                                            Bosnia and Herzegovina
                                                        </option>
                                                        <option value="Botswana" >
                                                            Botswana
                                                        </option>
                                                        <option value="Bouvet Island" >
                                                            Bouvet Island
                                                        </option>
                                                        <option value="Brazil" >
                                                            Brazil
                                                        </option>
                                                        <option value="British Indian Ocean Territory" >
                                                            British Indian Ocean Territory
                                                        </option>
                                                        <option value="Brunei Darussalam" >
                                                            Brunei Darussalam
                                                        </option>
                                                        <option value="Bulgaria" >
                                                            Bulgaria
                                                        </option>
                                                        <option value="Burkina Faso" >
                                                            Burkina Faso
                                                        </option>
                                                        <option value="Burundi" >
                                                            Burundi
                                                        </option>
                                                        <option value="Cambodia" >
                                                            Cambodia
                                                        </option>
                                                        <option value="Cameroon" >
                                                            Cameroon
                                                        </option>
                                                        <option value="Canada" >
                                                            Canada
                                                        </option>
                                                        <option value="Cape Verde" >
                                                            Cape Verde
                                                        </option>
                                                        <option value="Cayman Islands" >
                                                            Cayman Islands
                                                        </option>
                                                        <option value="Central African Republic" >
                                                            Central African Republic
                                                        </option>
                                                        <option value="Chad" >
                                                            Chad
                                                        </option>
                                                        <option value="Chile" >
                                                            Chile
                                                        </option>
                                                        <option value="China" >
                                                            China
                                                        </option>
                                                        <option value="Christmas Island" >
                                                            Christmas Island
                                                        </option>
                                                        <option value="Cocos (Keeling) Islands" >
                                                            Cocos (Keeling) Islands
                                                        </option>
                                                        <option value="Colombia" >
                                                            Colombia
                                                        </option>
                                                        <option value="Comoros" >
                                                            Comoros
                                                        </option>
                                                        <option value="Congo" >
                                                            Congo
                                                        </option>
                                                        <option value="Cook Islands" >
                                                            Cook Islands
                                                        </option>
                                                        <option value="Costa Rica" >
                                                            Costa Rica
                                                        </option>
                                                        <option value="Cote D&#039;Ivoire" >
                                                            Cote D&#039;Ivoire
                                                        </option>
                                                        <option value="Croatia" >
                                                            Croatia
                                                        </option>
                                                        <option value="Cuba" >
                                                            Cuba
                                                        </option>
                                                        <option value="Cyprus" >
                                                            Cyprus
                                                        </option>
                                                        <option value="Czech Republic" >
                                                            Czech Republic
                                                        </option>
                                                        <option value="Democratic Republic of the Congo" >
                                                            Democratic Republic of the Congo
                                                        </option>
                                                        <option value="Denmark" >
                                                            Denmark
                                                        </option>
                                                        <option value="Djibouti" >
                                                            Djibouti
                                                        </option>
                                                        <option value="Dominica" >
                                                            Dominica
                                                        </option>
                                                        <option value="Dominican Republic" >
                                                            Dominican Republic
                                                        </option>
                                                        <option value="Ecuador" >
                                                            Ecuador
                                                        </option>
                                                        <option value="Egypt" >
                                                            Egypt
                                                        </option>
                                                        <option value="El Salvador" >
                                                            El Salvador
                                                        </option>
                                                        <option value="Equatorial Guinea" >
                                                            Equatorial Guinea
                                                        </option>
                                                        <option value="Eritrea" >
                                                            Eritrea
                                                        </option>
                                                        <option value="Estonia" >
                                                            Estonia
                                                        </option>
                                                        <option value="Eswatini" >
                                                            Eswatini
                                                        </option>
                                                        <option value="Ethiopia" >
                                                            Ethiopia
                                                        </option>
                                                        <option value="Falkland Islands (Malvinas)" >
                                                            Falkland Islands (Malvinas)
                                                        </option>
                                                        <option value="Faroe Islands" >
                                                            Faroe Islands
                                                        </option>
                                                        <option value="Fiji" >
                                                            Fiji
                                                        </option>
                                                        <option value="Finland" >
                                                            Finland
                                                        </option>
                                                        <option value="France" >
                                                            France
                                                        </option>
                                                        <option value="French Guiana" >
                                                            French Guiana
                                                        </option>
                                                        <option value="French Polynesia" >
                                                            French Polynesia
                                                        </option>
                                                        <option value="French Southern Territories" >
                                                            French Southern Territories
                                                        </option>
                                                        <option value="Gabon" >
                                                            Gabon
                                                        </option>
                                                        <option value="Gambia" >
                                                            Gambia
                                                        </option>
                                                        <option value="Georgia" >
                                                            Georgia
                                                        </option>
                                                        <option value="Germany" >
                                                            Germany
                                                        </option>
                                                        <option value="Ghana" >
                                                            Ghana
                                                        </option>
                                                        <option value="Gibraltar" >
                                                            Gibraltar
                                                        </option>
                                                        <option value="Greece" >
                                                            Greece
                                                        </option>
                                                        <option value="Greenland" >
                                                            Greenland
                                                        </option>
                                                        <option value="Grenada" >
                                                            Grenada
                                                        </option>
                                                        <option value="Guadeloupe" >
                                                            Guadeloupe
                                                        </option>
                                                        <option value="Guam" >
                                                            Guam
                                                        </option>
                                                        <option value="Guatemala" >
                                                            Guatemala
                                                        </option>
                                                        <option value="Guinea" >
                                                            Guinea
                                                        </option>
                                                        <option value="Guinea-Bissau" >
                                                            Guinea-Bissau
                                                        </option>
                                                        <option value="Guyana" >
                                                            Guyana
                                                        </option>
                                                        <option value="Haiti" >
                                                            Haiti
                                                        </option>
                                                        <option value="Heard Island and Mcdonald Islands" >
                                                            Heard Island and Mcdonald Islands
                                                        </option>
                                                        <option value="Holy See (Vatican City State)" >
                                                            Holy See (Vatican City State)
                                                        </option>
                                                        <option value="Honduras" >
                                                            Honduras
                                                        </option>
                                                        <option value="Hong Kong" >
                                                            Hong Kong
                                                        </option>
                                                        <option value="Hungary" >
                                                            Hungary
                                                        </option>
                                                        <option value="Iceland" >
                                                            Iceland
                                                        </option>
                                                        <option value="India" >
                                                            India
                                                        </option>
                                                        <option value="Indonesia" >
                                                            Indonesia
                                                        </option>
                                                        <option value="Iran, Islamic Republic of" >
                                                            Iran, Islamic Republic of
                                                        </option>
                                                        <option value="Iraq" >
                                                            Iraq
                                                        </option>
                                                        <option value="Ireland" >
                                                            Ireland
                                                        </option>
                                                        <option value="Isle of Man" >
                                                            Isle of Man
                                                        </option>
                                                        <option value="Israel" >
                                                            Israel
                                                        </option>
                                                        <option value="Italy" >
                                                            Italy
                                                        </option>
                                                        <option value="Jamaica" >
                                                            Jamaica
                                                        </option>
                                                        <option value="Japan" >
                                                            Japan
                                                        </option>
                                                        <option value="Jordan" >
                                                            Jordan
                                                        </option>
                                                        <option value="Kazakhstan" >
                                                            Kazakhstan
                                                        </option>
                                                        <option value="Kenya" >
                                                            Kenya
                                                        </option>
                                                        <option value="Kiribati" >
                                                            Kiribati
                                                        </option>
                                                        <option value="Korea, Democratic People&#039;s Republic of" >
                                                            Korea, Democratic People&#039;s Republic of
                                                        </option>
                                                        <option value="Korea, Republic of" >
                                                            Korea, Republic of
                                                        </option>
                                                        <option value="Kosovo" >
                                                            Kosovo
                                                        </option>
                                                        <option value="Kuwait" >
                                                            Kuwait
                                                        </option>
                                                        <option value="Kyrgyzstan" >
                                                            Kyrgyzstan
                                                        </option>
                                                        <option value="Lao People&#039;s Democratic Republic" >
                                                            Lao People&#039;s Democratic Republic
                                                        </option>
                                                        <option value="Latvia" >
                                                            Latvia
                                                        </option>
                                                        <option value="Lebanon" >
                                                            Lebanon
                                                        </option>
                                                        <option value="Lesotho" >
                                                            Lesotho
                                                        </option>
                                                        <option value="Liberia" >
                                                            Liberia
                                                        </option>
                                                        <option value="Libyan Arab Jamahiriya" >
                                                            Libyan Arab Jamahiriya
                                                        </option>
                                                        <option value="Liechtenstein" >
                                                            Liechtenstein
                                                        </option>
                                                        <option value="Lithuania" >
                                                            Lithuania
                                                        </option>
                                                        <option value="Luxembourg" >
                                                            Luxembourg
                                                        </option>
                                                        <option value="Macao" >
                                                            Macao
                                                        </option>
                                                        <option value="Madagascar" >
                                                            Madagascar
                                                        </option>
                                                        <option value="Malawi" >
                                                            Malawi
                                                        </option>
                                                        <option value="Malaysia" >
                                                            Malaysia
                                                        </option>
                                                        <option value="Maldives" >
                                                            Maldives
                                                        </option>
                                                        <option value="Mali" >
                                                            Mali
                                                        </option>
                                                        <option value="Malta" >
                                                            Malta
                                                        </option>
                                                        <option value="Marshall Islands" >
                                                            Marshall Islands
                                                        </option>
                                                        <option value="Martinique" >
                                                            Martinique
                                                        </option>
                                                        <option value="Mauritania" >
                                                            Mauritania
                                                        </option>
                                                        <option value="Mauritius" >
                                                            Mauritius
                                                        </option>
                                                        <option value="Mayotte" >
                                                            Mayotte
                                                        </option>
                                                        <option value="Mexico" >
                                                            Mexico
                                                        </option>
                                                        <option value="Micronesia, Federated States of" >
                                                            Micronesia, Federated States of
                                                        </option>
                                                        <option value="Moldova, Republic of" >
                                                            Moldova, Republic of
                                                        </option>
                                                        <option value="Monaco" >
                                                            Monaco
                                                        </option>
                                                        <option value="Mongolia" >
                                                            Mongolia
                                                        </option>
                                                        <option value="Montenegro" >
                                                            Montenegro
                                                        </option>
                                                        <option value="Montserrat" >
                                                            Montserrat
                                                        </option>
                                                        <option value="Morocco" >
                                                            Morocco
                                                        </option>
                                                        <option value="Mozambique" >
                                                            Mozambique
                                                        </option>
                                                        <option value="Myanmar" >
                                                            Myanmar
                                                        </option>
                                                        <option value="Namibia" >
                                                            Namibia
                                                        </option>
                                                        <option value="Nauru" >
                                                            Nauru
                                                        </option>
                                                        <option value="Nepal" >
                                                            Nepal
                                                        </option>
                                                        <option value="Netherlands" >
                                                            Netherlands
                                                        </option>
                                                        <option value="Netherlands Antilles" >
                                                            Netherlands Antilles
                                                        </option>
                                                        <option value="New Caledonia" >
                                                            New Caledonia
                                                        </option>
                                                        <option value="New Zealand" >
                                                            New Zealand
                                                        </option>
                                                        <option value="Nicaragua" >
                                                            Nicaragua
                                                        </option>
                                                        <option value="Niger" >
                                                            Niger
                                                        </option>
                                                        <option value="Nigeria" >
                                                            Nigeria
                                                        </option>
                                                        <option value="Niue" >
                                                            Niue
                                                        </option>
                                                        <option value="Norfolk Island" >
                                                            Norfolk Island
                                                        </option>
                                                        <option value="North Macedonia" >
                                                            North Macedonia
                                                        </option>
                                                        <option value="Northern Mariana Islands" >
                                                            Northern Mariana Islands
                                                        </option>
                                                        <option value="Norway" >
                                                            Norway
                                                        </option>
                                                        <option value="Oman" >
                                                            Oman
                                                        </option>
                                                        <option value="Pakistan" >
                                                            Pakistan
                                                        </option>
                                                        <option value="Palau" >
                                                            Palau
                                                        </option>
                                                        <option value="Palestinian Territory, Occupied" >
                                                            Palestinian Territory, Occupied
                                                        </option>
                                                        <option value="Panama" >
                                                            Panama
                                                        </option>
                                                        <option value="Papua New Guinea" >
                                                            Papua New Guinea
                                                        </option>
                                                        <option value="Paraguay" >
                                                            Paraguay
                                                        </option>
                                                        <option value="Peru" >
                                                            Peru
                                                        </option>
                                                        <option value="Philippines" >
                                                            Philippines
                                                        </option>
                                                        <option value="Pitcairn" >
                                                            Pitcairn
                                                        </option>
                                                        <option value="Poland" >
                                                            Poland
                                                        </option>
                                                        <option value="Portugal" >
                                                            Portugal
                                                        </option>
                                                        <option value="Puerto Rico" >
                                                            Puerto Rico
                                                        </option>
                                                        <option value="Qatar" >
                                                            Qatar
                                                        </option>
                                                        <option value="Reunion" >
                                                            Reunion
                                                        </option>
                                                        <option value="Romania" >
                                                            Romania
                                                        </option>
                                                        <option value="Russian Federation" >
                                                            Russian Federation
                                                        </option>
                                                        <option value="Rwanda" >
                                                            Rwanda
                                                        </option>
                                                        <option value="Saint Helena" >
                                                            Saint Helena
                                                        </option>
                                                        <option value="Saint Kitts and Nevis" >
                                                            Saint Kitts and Nevis
                                                        </option>
                                                        <option value="Saint Lucia" >
                                                            Saint Lucia
                                                        </option>
                                                        <option value="Saint Pierre and Miquelon" >
                                                            Saint Pierre and Miquelon
                                                        </option>
                                                        <option value="Saint Vincent and the Grenadines" >
                                                            Saint Vincent and the Grenadines
                                                        </option>
                                                        <option value="Samoa" >
                                                            Samoa
                                                        </option>
                                                        <option value="San Marino" >
                                                            San Marino
                                                        </option>
                                                        <option value="Sao Tome and Principe" >
                                                            Sao Tome and Principe
                                                        </option>
                                                        <option value="Saudi Arabia" >
                                                            Saudi Arabia
                                                        </option>
                                                        <option value="Senegal" >
                                                            Senegal
                                                        </option>
                                                        <option value="Serbia" >
                                                            Serbia
                                                        </option>
                                                        <option value="Seychelles" >
                                                            Seychelles
                                                        </option>
                                                        <option value="Sierra Leone" >
                                                            Sierra Leone
                                                        </option>
                                                        <option value="Singapore" >
                                                            Singapore
                                                        </option>
                                                        <option value="Slovakia" >
                                                            Slovakia
                                                        </option>
                                                        <option value="Slovenia" >
                                                            Slovenia
                                                        </option>
                                                        <option value="Solomon Islands" >
                                                            Solomon Islands
                                                        </option>
                                                        <option value="Somalia" >
                                                            Somalia
                                                        </option>
                                                        <option value="Somaliland" >
                                                            Somaliland
                                                        </option>
                                                        <option value="South Africa" >
                                                            South Africa
                                                        </option>
                                                        <option value="South Georgia and the South Sandwich Islands" >
                                                            South Georgia and the South Sandwich Islands
                                                        </option>
                                                        <option value="South Sudan" >
                                                            South Sudan
                                                        </option>
                                                        <option value="Spain" >
                                                            Spain
                                                        </option>
                                                        <option value="Sri Lanka" >
                                                            Sri Lanka
                                                        </option>
                                                        <option value="Sudan" >
                                                            Sudan
                                                        </option>
                                                        <option value="Suriname" >
                                                            Suriname
                                                        </option>
                                                        <option value="Svalbard and Jan Mayen" >
                                                            Svalbard and Jan Mayen
                                                        </option>
                                                        <option value="Sweden" >
                                                            Sweden
                                                        </option>
                                                        <option value="Switzerland" >
                                                            Switzerland
                                                        </option>
                                                        <option value="Syrian Arab Republic" >
                                                            Syrian Arab Republic
                                                        </option>
                                                        <option value="Taiwan, Province of China" >
                                                            Taiwan, Province of China
                                                        </option>
                                                        <option value="Tajikistan" >
                                                            Tajikistan
                                                        </option>
                                                        <option value="Tanzania, United Republic of" >
                                                            Tanzania, United Republic of
                                                        </option>
                                                        <option value="Thailand" >
                                                            Thailand
                                                        </option>
                                                        <option value="Timor-Leste" >
                                                            Timor-Leste
                                                        </option>
                                                        <option value="Togo" >
                                                            Togo
                                                        </option>
                                                        <option value="Tokelau" >
                                                            Tokelau
                                                        </option>
                                                        <option value="Tonga" >
                                                            Tonga
                                                        </option>
                                                        <option value="Trinidad and Tobago" >
                                                            Trinidad and Tobago
                                                        </option>
                                                        <option value="Tunisia" >
                                                            Tunisia
                                                        </option>
                                                        <option value="Turkey" >
                                                            Turkey
                                                        </option>
                                                        <option value="Turkmenistan" >
                                                            Turkmenistan
                                                        </option>
                                                        <option value="Turks and Caicos Islands" >
                                                            Turks and Caicos Islands
                                                        </option>
                                                        <option value="Tuvalu" >
                                                            Tuvalu
                                                        </option>
                                                        <option value="Uganda" >
                                                            Uganda
                                                        </option>
                                                        <option value="Ukraine" >
                                                            Ukraine
                                                        </option>
                                                        <option value="United Arab Emirates" >
                                                            United Arab Emirates
                                                        </option>
                                                        <option value="United Kingdom" >
                                                            United Kingdom
                                                        </option>
                                                        <option value="United States" >
                                                            United States
                                                        </option>
                                                        <option value="United States Minor Outlying Islands" >
                                                            United States Minor Outlying Islands
                                                        </option>
                                                        <option value="Uruguay" >
                                                            Uruguay
                                                        </option>
                                                        <option value="Uzbekistan" >
                                                            Uzbekistan
                                                        </option>
                                                        <option value="Vanuatu" >
                                                            Vanuatu
                                                        </option>
                                                        <option value="Venezuela" >
                                                            Venezuela
                                                        </option>
                                                        <option value="Viet Nam" >
                                                            Viet Nam
                                                        </option>
                                                        <option value="Virgin Islands, British" >
                                                            Virgin Islands, British
                                                        </option>
                                                        <option value="Virgin Islands, U.S." >
                                                            Virgin Islands, U.S.
                                                        </option>
                                                        <option value="Wallis and Futuna" >
                                                            Wallis and Futuna
                                                        </option>
                                                        <option value="Western Sahara" >
                                                            Western Sahara
                                                        </option>
                                                        <option value="Yemen" >
                                                            Yemen
                                                        </option>
                                                        <option value="Zambia" >
                                                            Zambia
                                                        </option>
                                                        <option value="Zimbabwe" >
                                                            Zimbabwe
                                                        </option>
                                                        <option value="Serbia and Montenegro" >
                                                            Serbia and Montenegro
                                                        </option>
                                                        <option value="Macedonia, the Former Yugoslav Republic of" >
                                                            Macedonia, the Former Yugoslav Republic of
                                                        </option>
                                                        <option value="Antarctica" >
                                                            Antarctica
                                                        </option>
                                                        <option value="UNITED ARAB EMIRATES" >
                                                            UNITED ARAB EMIRATES
                                                        </option>
                                                        <option value="CHINA" >
                                                            CHINA
                                                        </option>
                                                        <option value="INDIA" >
                                                            INDIA
                                                        </option>
                                                        <option value="Albania, Albania" >
                                                            Albania, Albania
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-12 mb-2">
                                                    <select name="field[360]" id="field[360]" className='select-control' required>
                                                        <option value="" disabled selected>What service do you need?</option>
                                                        <option value="Customized Stand Booking" >
                                                            Customized Stand Booking
                                                        </option>
                                                        <option value="Event Services" >
                                                            Event Services
                                                        </option>
                                                        <option value="Audio Visual Service" >
                                                            Audio Visual Service
                                                        </option>
                                                        <option value="Furniture Rental" >
                                                            Furniture Rental
                                                        </option>
                                                        <option value="Official Contractor" >
                                                            Official Contractor
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-12">

                                                    <textarea id="field[6]" name="field[6]" placeholder='Tell us more about your event' className='w-100' ></textarea>
                                                </div>
                                            </div>



                                            <div className="_form_element _x47013005 _full_width mt-3" >
                                                <label htmlFor="ls" className="_form-label text-secondary" >
                                                    Please verify your request.*
                                                </label>
                                                <div className="g-recaptcha" data-sitekey="6LcwIw8TAAAAACP1ysM08EhCgzd6q5JAOUR1a0Go">
                                                </div>
                                            </div>

                                            <div className="row mt-2 ">
                                                <div className="col-12 d-flex justify-content-center">
                                                    <button className='submit-btn w-100 _submit' id="_form_488_submit" type="submit">Submit Inquiry</button>
                                                </div>
                                            </div>
                                        </div>


                                        <div
                                            className="_form-thank-you"
                                            style={{ display: "none" }}

                                        >
                                            
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>


                    </div>

                  
                </section>


            </ContentMainComponent>



        </motion.div>
    )
}
