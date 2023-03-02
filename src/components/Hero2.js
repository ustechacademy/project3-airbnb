import React from "react";
import heroImg from "../images/hero-img.png"

 class Hero2 extends React.Component {
    render() {
        const props = this.props;
        console.log("class props", props);
        return (
            <section className="hero">
                <img src={heroImg} alt="hero-img" className="hero-img" />
                <h1 className="hero-header">Online Experiences</h1>
                <p className="hero-text">Join unique interactive activities led by
                    one-of-a-kind hosts—all without leaving home. </p>
            </section>
        )
    }
}
export default Hero2;

/*
 function Hero2(props) {
    return (
        <section className="hero">
            <img src={heroImg} alt="hero-img" className="hero-img" />
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-text">Join unique interactive activities led by
                one-of-a-kind hosts—all without leaving home. </p>
        </section>
    )
}
export default Hero2;
*/
