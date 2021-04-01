import PsButton from "./components/PsButton";
import './ps_common.scss';
import './PhotosnapApp.scss';
import createImg from './assets/img/home/desktop/create-and-share.jpg';
import beautifulImg from './assets/img/home/desktop/beautiful-stories.jpg';
import designedImg from './assets/img/home/desktop/designed-for-everyone.jpg';
import mountainImg from './assets/img/stories/desktop/mountains.jpg';
import cityscapesImg from './assets/img/stories/desktop/cityscapes.jpg';
import eighteendaysImg from './assets/img/stories/desktop/18-days-voyage.jpg';
import architecturalsImg from './assets/img/stories/desktop/architecturals.jpg';
import { create } from "domain";

export default function PhotosnapApp() {
    return (
        <div id='ps-app'>
            <header>
                <a href="/" id='ps-app-title'>Photosnap</a>
                <nav>
                    <ul>
                        <li className="ps-nav-link">Stories</li>
                        <li className="ps-nav-link">Features</li>
                        <li className="ps-nav-link">Pricing</li>
                    </ul>
                </nav>
                <PsButton text='Get an Invite' type='primary' />
            </header>
            <section id="ps-highlights">
                <section className="highlights-row">
                    <section className="highlight-card">
                        <section className="highlight-text">
                            <h1>Create and share your photo Stories.</h1>
                            <p>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>
                            <PsButton text='Get an Invite' type='secondary' light={true} />
                        </section>
                    </section>
                    <img srcSet={`${createImg} 830w`} width="830" height="600" alt="Create and Share" />
                </section>
                <section className="highlights-row">
                    <img srcSet={`${beautifulImg} 830w`} width="830" height="600" alt=" Beautiful Stories" />
                    <section className="highlight-card">
                        <span className="highlight-text">
                            <h1>Beautiful Stories Every Time.</h1>
                            <p>We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.</p>
                            <PsButton text='View the stories' type='secondary' light={false} />
                        </span>
                    </section>
                </section>
                <section className="highlights-row">
                    <section className="highlight-card">
                        <span className="highlight-text">
                            <h1>Designed for everyone.</h1>
                            <p>Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.</p>
                            <PsButton text='View the stories' type='secondary' light={true} />
                        </span>
                    </section>
                    <img srcSet={`${designedImg} 830w`} width="830" height="600" alt="Designed for Everyone" />
                </section>
            </section>
            <section id="ps-stories">
                <section className="story-card">
                    <img srcSet={`${mountainImg} 830w`} width="360" height="500" alt="The Mountains" />
                    <section className="story-content">
                        <p className="story-title">The Mountains</p>
                        <p className="story-author">by John Appleseed</p>
                        <div className="story-cta">
                            <PsButton text='Read Story' type='secondary' light={true} />
                        </div>
                    </section>
                </section>
                <section className="story-card">
                    <img srcSet={`${cityscapesImg} 830w`} width="360" height="500" alt="Sunset Cityscapes" />
                    <section className="story-content">
                        <p className="story-title">Sunset Cityscapes</p>
                        <p className="story-author">by Benjamin Cruz</p>
                        <div className="story-cta">
                            <PsButton text='Read Story' type='secondary' light={true} />
                        </div>
                    </section>
                </section>
                <section className="story-card">
                    <img srcSet={`${eighteendaysImg} 830w`} width="360" height="500" alt="18 Days Voyage" />
                    <section className="story-content">
                        <p className="story-title">18 Days Voyage</p>
                        <p className="story-author">by Alexei Borodin</p>
                        <div className="story-cta">
                            <PsButton text='Read Story' type='secondary' light={true} />
                        </div>
                    </section>
                </section>
                <section className="story-card">
                    <img srcSet={`${architecturalsImg} 830w`} width="360" height="500" alt="Architecturals" />
                        <section className="story-content">
                        <p className="story-title">Architecturals</p>
                        <p className="story-author">by Samantha Brooke</p>
                        <div className="story-cta">
                            <PsButton text='Read Story' type='secondary' light={true} />
                        </div>
                    </section>
                </section>
            </section>
            <section id="ps-features">
                Features
            </section>
            <footer></footer>
        </div>
    );
}