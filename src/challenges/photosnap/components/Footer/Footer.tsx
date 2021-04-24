import React from 'react';
import {ReactComponent as Facebook} from '../../assets/img/shared/desktop/facebook.svg';
import {ReactComponent as Youtube} from '../../assets/img/shared/desktop/youtube.svg';
import {ReactComponent as Twitter} from '../../assets/img/shared/desktop/twitter.svg';
import {ReactComponent as Pinterest} from '../../assets/img/shared/desktop/pinterest.svg';
import {ReactComponent as Instagram} from '../../assets/img/shared/desktop/instagram.svg';
import PsButton from '../PsButton';
import Logo from '../Logo';
import './Footer.scss';

export default function Footer(props: any) {
    
    return (
        <footer>
                <a href="/" className='ps-app-title'><Logo />Photosnap</a>
                <div className='social-icons'>
                    <Facebook/>
                    <Youtube />
                    <Twitter />
                    <Pinterest />
                    <Instagram />
                </div>
                <nav>
                    <ul>
                        <li className="ps-nav-link">Home</li>
                        <li className="ps-nav-link">Stories</li>
                        <li className="ps-nav-link">Features</li>
                        <li className="ps-nav-link">Pricing</li>
                    </ul>
                </nav>
                <PsButton text='Get an Invite' type='primary' />
            </footer>
    );
}