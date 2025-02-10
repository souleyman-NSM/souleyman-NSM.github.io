import React from 'react';
import SocialIcons from '../core/SocialIcons';
import { home, socials } from '../../data';

export default function Main() {
    const domain = home.domain.split('.');

    return (
        <section className="home">
            <div className="sidebar bg-container">
                <div className="domain">
                    {domain.slice(0, 1)[0]}
                    <span>.{domain.slice(1).join('.')}</span>
                </div>

                <div className="intro">
                    <p>
                        Hello, <img src="assets/hi.png" alt="" />
                    </p>
                    <h1>I'm {home.name}</h1>
                    <h5>{home.subtitles}</h5>
                    <a
                        href={'mailto:' + home.email}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button>Diplôme 🌩️ Architecte en Ingénierie Système Réseau</button>
                    </a>
                </div>
                <div className="icons">
                    <SocialIcons
                        link={'https://gitlab.com/yacef_s' + socials.gitlab}
                        icon={'fab fa-gitlab'}
                    />
                    <SocialIcons
                        link={'https://github.com/souleyman-NSM' + socials.github}
                        icon={'fab fa-github'}
                    />
                    <SocialIcons
                        link={'https://www.linkedin.com/in/souleyman-yacef-1071421a1' + socials.linkedin}
                        icon={'fab fa-linkedin'}
                    />
                </div>
            </div>
            <div className="banner">
                <img src="assets/undraw_coding_6mjf.svg" alt="illustration" />
                <p>
                    {home.descs}
                    <br />
                    <button>
                        <a
                            href={home.resumeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Voir CV
                        </a>
                    </button>
                </p>
            </div>
        </section>
    );
}