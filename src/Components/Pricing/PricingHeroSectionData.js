import {v4 as uuidv4} from 'uuid';
import img1 from '../../assets/img/linkbase/icons/p1.png';
import img2 from '../../assets/img/linkbase/icons/p2.png';
import img3 from '../../assets/img/linkbase/icons/p3.png';


const PricingHeroSectionData = [
    {
        id: uuidv4(),
        img: img1,
        title: 'Pay as you go',
        desc: 'Start for free. Every product has a meaningful free tier so you can sign up and build without friction.',
    },

    {
        id: uuidv4(),
        img: img2,
        title: 'Grow with us',
        desc: "As your usage grows, you'll automatically get volume pricing. No negotiation necessary.",
    },

    {
        id: uuidv4(),
        img: img3,
        title: 'Updates without additional fees',
        desc: "We are working on out software everyday, as we continue to make software enhancement you don't need to pay anything extra.",
    },

    
]

export default PricingHeroSectionData;