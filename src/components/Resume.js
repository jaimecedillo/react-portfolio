import React from 'react';
import myResume from '../assets/Resume.pdf'


function Resume() {

    return (
        <article>
            <h1 className="title">Resume</h1>
            <a href={myResume} download="Jaime's Resume" target='_blank'>
            <button className= 'btn-resume'>Download Resume</button>
            </a>
            <h3>PROFESSIONAL SUMMARY:</h3>
            <p>
                Positive attitude and respectful.<br />
            Able to learn new tasks quickly.<br />
            Proficient in growing key customer relationships.<br />
            Represent establishment with friendly, professional demeanor at all times<br />
            Willing to do anything it takes in any job that I have and give my 100%. Never let any employee down.<br />
            Very punctual and time managed.<br />
            Proficient in team centered work duties.<br />
            </p>
            <h3>SKILLS:</h3>
            <ul>
                <li>Critical Thinking</li>
                <li>Mathematics</li>
                <li>Active Learning</li>
                <li>Computers and Electronics</li>
                <li>Foreign Language</li>
                <li>Complex Problem Solving</li>
                <li>Strong ability to multi-task under pressure.</li>
                <li>Type 35 wpm</li>
                <li>Strong verbal and oral communication skills.</li>
                <li>HTML, CSS, Git, JavaScript, React.js, Node.js, jQuery, AJAX, Moongose, Express.js.</li>
            </ul>


            <h3>EXPERIENCE:</h3>
            <p>
                CAD Estimator Jun 2017 – Present<br />
            TRA Snow and Sun American Fork, UT<br />
                <ul>
                    <li>Perform snow retention and solar mounting take-offs, including quantities & weights and design layouts
                    for
                sales to assist in providing accurate quotes for our customers.</li>
                    <li>Ability to read drawings including but not limited to; roof plans, elevations, and specifications.</li>
                    <li>Design or re-design parts as requested by engineering, sales, and management.</li>
                    <li> Perform product testing, record results, and input data and format as requested by engineering, sales,
                and management.</li>

                </ul>
            </p>
            <p>
                Quality Control Technician Jan 2017- May 2017<br />
            Vivint Solar Lehi, UT<br />
                <ul>
                    <li>Audit CAD designs before it reaches the customer to ensure quality and customer preference.</li>
                    <li> Answer call from installers to assist them when a deviation needs to take place on site.</li>
                    <li> Verify that each design complies with the office requirements of the specific utility company.</li>
                    <li>Contact sales representative to inform them that the design is ready to be presented to the customer.
            </li>
                </ul>
            </p>
            <p>
                CAD Technician Jun 2015 – Jan 2017<br />
            Vivint Solar Orem, UT<br />
                <ul>
                    <li>Designing site plans for residential solar installation using AutoCAD</li>
                    <li>Create pick list of inventory for each job</li>
                    <li>Prepare permit documents and send to local office</li>
                    <li>Perform other duties and assignments as given by management</li>
                    <li>Work tight deadlines</li>
                    <li>Cobblestone Experience</li>
                </ul>
            </p>
            <p>
                Cook April 2012 – May 2015<br />
            El Torazo Long Beach, CA<br />
                <ul>
                    <li>Leadership over five people.</li>
                    <li>Maintain sanitation, health, and safety standards in work areas.</li>
                    <li>Clean food preparation areas, cooking surfaces, and utensils.</li>
                    <li>Verify that prepared food meets requirements for quality and quantity.</li>
                    <li> Measure ingredients required for specific food items being prepared.</li>
                    <li> Take food and drink orders and receive payment from customers.</li>
                    <li> Wash, cut, and prepare foods designated for cooking.</li>
                    <li> Pre-cook items such as bacon, to prepare them for later use.</li>
                    <li> Mix ingredients such as pancake or waffle batters.</li>
                    <li>Order of supplies.</li>
                </ul>
            </p>
            <p>
                Fiber Optic Technician May 2009-Sep 2009<br />
            Verizon Fios Long Beach, CA<br />
                <ul>
                    <li> Travel to customers' premises to install fiber optic cable.</li>
                    <li>String cables between structures and lines from poles, towers, or trenches and pull lines to proper
                    tension.
            </li>
                </ul>
            </p>
            <p>
                Cashier, stocker, sales floor Jun 2008 -Mar 2009<br />
            Food 4 Less Hawaiian Gardens, CA<br />
                <ul>
                    <li>Assist customers by providing information and resolving their complaints.</li>
                    <li>Count money in cash drawers at the beginning of shifts to ensure that amounts are correct and that there
                is adequate change.</li>
                    <li>Establish or identify prices of goods, services or admission, and tabulate bills using calculators, cash
                registers, or optical price scanners.</li>
                    <li>Maintain clean and orderly checkout areas and complete other general cleaning duties, such as mopping
                floors and emptying trash cans.</li>
                    <li>Sort, count, and wrap currency and coins. Issue trading stamps, and redeem food stamps and coupons.</li>
                    <li>Pack and unpack items to be stocked on shelves in stockrooms, warehouses, or storage yards.</li>
                </ul>
            </p>
            <h3>EDUCATION:</h3>
            <p>
                High School Diploma Jun 2006<br />
            Paramount High School Paramount, CA<br />
                <br />
            Chemistry<br />
            Fullerton College, CA<br /><br />
            Web Developer Bootcamp, Expected Completion June 2021 <br />
            University of Utah, UT

        </p>
            <h3>COMMUNITY SERVICE:</h3>
            <p>Mentor 2015<br />
            Boy Scout Master<br />
            2008 – 2009 and 2015 – 2018<br /><br />
            Soccer Coach 3-6 year old<br />
            March 2017 - June 2018</p>
            <h3>LANGUAGES:</h3>
            <p>Spanish</p>
        </article>
    );
}

export default Resume;