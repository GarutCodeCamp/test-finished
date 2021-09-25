/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import style from '../../styles/Header.module.css'
import Img from 'next/image'
import Hero from '../../assets/hero.png'
const HeaderContent = () => (
    <header className={`container ${style.head}`}>
        <div className={style["header-img"]}>
            <Img src={Hero} />
        </div>
        <div className={style.slog}>
            <div className="h1">Start building with the power of GIPHY</div>
            <div className="p mt-4">GIPHY SDK helps you integrate the world's largest GIF library, customize a suite of powerful features, and boost engagement with just a few lines of code.</div>
        </div>
    </header>
);

export default HeaderContent;