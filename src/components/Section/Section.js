import React from "react";
import './Section.css';
import avatar from '../../images/vrk.png';
import item1 from '../../images/italian-soda.jpg';
import item2 from '../../images/boba.jpg';
import item3 from '../../images/coho-coffee.jpg';
import item4 from '../../images/nexus-cafe.jpg';

class Section extends React.Component {
    render() {
        return (
            <section>
                <div className="profile">
                    <div className="image-vrk">
                        <img src={avatar} alt="vrk"/>
                    </div>
                    <div className="author">
                        Victoria Kirst
                    </div>
                    <div className="last-updated">
                        Last updated Apr 7, 2017
                    </div>
                    <div className="line">
                        <hr />
                    </div>
                </div>

                <div className="blank-space"></div>

                <div className="container">
                    <div className="element">
                        <div className="number">
                            1.
                        </div>
                        <div className="content">
                            <div className="heading">
                                <div className="title">
                                    Italian soda at Bytes
                                </div>
                                <div className="address">
                                    <a href="https://goo.gl/maps/EjneHBEPksw">350 Serra Mall, Stanford, CA</a>
                                </div>
                            </div>
                            <div className="paragraph">
                                When's the last time you've had an Italian soda? 
                                It had been a while for me, but I wanted to join 
                                my friend for a non-caffeinated beverage at Bytes 
                                and I became reaquainted with the combination of 
                                fizzy water and artificial fruit syrup. Italian 
                                sodas are not so sweet as a normal soda and not 
                                so boring as a flavored carbonated water. 
                                The Italian sodas at Bytes also have no cream in 
                                them (or maybe they do if you ask; I haven't tried), 
                                which makes it a nice coffee shop alternative for 
                                the times when you're feeling a refreshing drink 
                                that doesn't have caffeine or milk.
                            </div>
                            <div className="recommendation">
                                <span>Recommendation:
                                </span>
                                Raspberry Italian soda
                            </div>
                            <div className="image-element">
                                <img src={item1} alt="italian-soda" />
                            </div>
                        </div>
                    </div>

                    <div className="element">
                        <div className="number">
                            2.
                        </div>
                        <div className="content">
                            <div className="heading">
                                <div className="title">
                                    Bubble tea at Pop Tea Bar
                                </div>
                                <div className="address">
                                    <a href="https://goo.gl/maps/3jHRC2umZCy">456 Cambridge Ave, Palo Alto, CA</a>
                                </div>
                            </div>
                            <div className="paragraph">
                                When your boba craving strikes, head over to Pop Tea Bar, a cute little bubble tea shop on Cambridge Avenue. 
                                The menu is your standard bubble tea fare with nothing too adventurous on the menu -- no bubble tea floats, 
                                for example -- but the tapioca is fresh, the service is fast, and the tea is smooth and delicious! 
                                They have little bites to eat too, like popcorn chicken and eggrolls, in perfect snack-size portions. 
                                There's not too much seating, but there's a cute outdoor area in the back for warmer days.
                                
                                Pop Tea Bar isn't exactly on campus, but the Marguerite has got you covered. 
                                Ride the 1050A to California and El Camino and it's a short walk from there. 
                                (11 minutes total from the Gates Computer Science Building!)
                            </div>
                            <div className="recommendation">
                                <span>Recommendation:
                                </span>
                                Classic Milk Tea with tapioca + an order of popcorn chicken.
                            </div>
                            <div className="image-element">
                                <img src={item2} alt="italian-soda" />
                            </div>
                        </div>
                    </div>

                    <div className="element">
                        <div className="number">
                            3.
                        </div>
                        <div className="content">
                            <div className="heading">
                                <div className="title">
                                    Latte at CoHo
                                </div>
                                <div className="address">
                                    <a href="https://goo.gl/maps/jaov5FhK5852">459 Lagunita Dr, Stanford, CA</a>
                                </div>
                            </div>
                            <div className="paragraph">
                                I can't tell you whether CoHo has a particularly amazing Vanilla Bean Latte, 
                                only because CoHo is the only place I've ever ordered a Vanilla Bean Latte from. 
                                I'm not even totally sure I know what a Vanilla Bean Latte is supposed to taste like. 
                                What I do know is the Vanilla Bean Latte I ordered on a whim from CoHo was delicious.
                            </div>
                            <div className="recommendation">
                                <span>Recommendation:
                                </span>
                                Vanilla Bean Latte
                            </div>
                            <div className="image-element">
                                <img src={item3} alt="coho-coffee" />
                            </div>
                        </div>
                    </div>

                    <div className="element">
                        <div className="number">
                            4.
                        </div>
                        <div className="content">
                            <div className="heading">
                                <div className="title">
                                    Agua Fresca at Nexus Cafe
                                </div>
                                <div className="address">
                                    <a href="https://goo.gl/maps/WzJZx183auA2">318 Campus Drive, Stanford, CA</a>
                                </div>
                            </div>
                            <div className="paragraph">
                                Nexus Cafe has a lot of tasty things packed into its cafeteria space, 
                                including agua fresca! Grab a cup of this fresh and fruity beverage before you head to the check out line.
                                Nexus Cafe has plenty of indoor and outdoor seating, too, so on the next sunny day, take a break on the patio with a cup of agua fresca, and maybe a burrito.
                            </div>
                            <div className="recommendation">
                                <span>Recommendation:
                                </span>
                                Agua Fresca
                            </div>
                            <div className="image-element">
                                <img src={item4} alt="nexus-cafe" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Section
