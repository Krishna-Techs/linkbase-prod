import {v4 as uuidv4} from 'uuid';
import thumb1 from '../../assets/img/linkbase/Press/Press1.png';
import thumb2 from '../../assets/img/linkbase/Press/Press2.webp';
import thumb3 from '../../assets/img/linkbase/Press/Press3.jpg';

const BlogThreeData = [
    {
        id: uuidv4(),
        thumb: thumb1,
        title: 'Meet the Kelowna-based best friends behind the innovative, industry-leading IoT software Linkbase!',
        btnText: 'Read More',
        name: 'Kelowna Now',
        btnLink: 'https://www.kelownanow.com/watercooler/news/news/Cseking_In/Meet_the_Kelowna_based_best_friends_behind_the_innovative_industry_leading_IoT_software_Linkbase/',
        comments: '04 comments',
        date: '21 Apr 2022'
    },

    {
        id: uuidv4(),
        thumb: thumb2,
        title: 'UBCO students create $5.6M tech company',
        btnText: 'Read More',
        name: 'Kelowna Now',
        btnLink: 'https://www.kelownanow.com/watercooler/news/news/UBCO/UBCO_students_create_5_6M_tech_company/',
        comments: '02 comments',
        date: '28 Mar 2022'
    },

    {
        id: uuidv4(),
        thumb: thumb3,
        title: 'UBCO students start tech company valued at $5.6 million',
        btnText: 'Read More',
        name: 'Castanet',
        btnLink: 'https://www.castanet.net/news/Kelowna/363912/UBCO-students-start-tech-company-valued-at-5-6-million',
        comments: '03 comments',
        date: '25 Mar 2022'
    },
]

export default BlogThreeData;