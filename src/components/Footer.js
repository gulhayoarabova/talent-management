import React from 'react'
import classes from "../styles/Footer.module.scss"
import face from "../images/face.png"
import linkedin from "../images/Linkedin.png"
import telegram from "../images/telegram-24.png"
import twitter from "../images/twitter.png"
import Link from "next/link"
import Image from "next/image";

const Footer = () => {
    return (
        <div className={classes.footer_wrapper}>
            <div className={classes.inner_wrap}>
            <p className={classes.lrg_txt}>Talent Management!</p>
            <p className={classes.sml_txt}>Discover the hidden talents with us</p>
            <div className={classes.icon_wrap}>
                <div>
                
                    <Image src={ face} alt=""/>
                </div>
                <div>
                 
                    <Image src={twitter } alt=""/>
                    
                </div>
                <div>
                 
                    <Image src={telegram } alt=""/>
                </div>
                <div>
                 
                    <Image src={linkedin } alt=""/>
                </div>
            </div>
            </div>
            <div className={classes.inner2_wrap}>
                <ul>
                    <li>About us</li>
                    <li>For companies</li>
                    <li>For individuals</li>
                    <li>Home</li>
                </ul>
                <Link href="gulhayoarabova@gmail.com" passHref>
                <p className={classes.email}>1600 Mountain View, CA 94043, United States</p>
                </Link>
            </div>

        </div>
    )
}

export default Footer