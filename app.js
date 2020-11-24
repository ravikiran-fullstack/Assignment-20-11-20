const header = document.createElement('header');

const headerBg1 = document.createElement('div');
headerBg1.classList.add('headerBg1');

const userImage = document.createElement('div');
userImage.classList.add('userImage');

const userName = document.createElement('div');
userName.classList.add('userName');
const name = document.createTextNode('BRIAN DUDEY');
userName.append(name);

headerBg1.append(userImage, userName);
const headerBg2 = document.createElement('div');
headerBg2.classList.add('headerBg2');

const headerBg3 = document.createElement('div');
headerBg3.classList.add('headerBg3');

const contactDetails = document.createElement('div');
contactDetails.classList.add('contactDetails');

const contact = document.createTextNode('N.Damen Avenue, Chicago 99999|999-999-9999|hello@kickresume.com|www.kickresume.com');
contactDetails.append(contact);

const hr = document.createElement('hr');
const br = document.createElement('br');

header.append(headerBg1,headerBg2, headerBg3, contactDetails, hr);

document.body.append(header);

/*********************End Header***********************/

/*********************Start Section********************/

const section = document.createElement('section');
section.classList.add('resumeBody');

const profileHeading = document.createElement('div');
profileHeading.classList.add('heading1');
const profileImage = document.createElement('div');
profileImage.classList.add('headingImage');

const profileIcon = document.createElement('i');
profileIcon.setAttribute('class', 'fa fa-user-circle iconColor');

profileImage.append(profileIcon);

const profileTitle = document.createElement('p');
profileTitle.setAttribute('class', 'headingTitle');
profileTitle.innerHTML = 'Profile';

const div1 = document.createElement('div');

div1.append(profileHeading, profileImage, profileTitle);
const div1Text = document.createTextNode('Innovative optimized solution seeker. Exited to be at the development phase of my new career as a web developer. I am ambitious, assiduous, animated, and an alliteration advocate.');
div1.append(br, div1Text);
const bodyHalf1 = document.createElement('div');
bodyHalf1.classList.add('bodyHalf1');
bodyHalf1.append(div1);

////////////////

const skillsHeading = document.createElement('div');
skillsHeading.classList.add('heading1');
const skillsImage = document.createElement('div');
skillsImage.classList.add('headingImage');

const skillsIcon = document.createElement('i');
skillsIcon.setAttribute('class', 'fa fa-github iconColor');

skillsImage.append(skillsIcon);

const skillsTitle = document.createElement('p');
skillsTitle.setAttribute('class', 'headingTitle');
skillsTitle.innerHTML = 'Skills';

const div2 = document.createElement('div');
div2.append(skillsHeading, skillsImage, skillsTitle);

const skillsInputTitle1 = document.createElement('div');
skillsInputTitle1.classList.add('skillsInput');

const skillsInputTitle1Para = document.createElement('p');
skillsInputTitle1Para.innerHTML = 'Technical Skills';
skillsInputTitle1.append(skillsInputTitle1Para);

const skillsInputDiv = document.createElement('div');
skillsInputDiv.append(skillsInputTitle1);
div2.append(skillsInputDiv);

//Row1 start
const tr1_td1Text = document.createTextNode('Javascript');
const tr1_td1 = document.createElement('td');
tr1_td1.append(tr1_td1Text);

const tr1_td2Input = document.createElement('input');
tr1_td2Input.setAttribute('type', 'range');
tr1_td2Input.setAttribute('name', 'js');
tr1_td2Input.setAttribute('id', 'js');
tr1_td2Input.setAttribute('min', '0');
tr1_td2Input.setAttribute('max', '10');
tr1_td2Input.setAttribute('value', '8');

const tr1_td2 = document.createElement('td');
tr1_td2.append(tr1_td2Input);

const tr1 = document.createElement('tr');
tr1.append(tr1_td1, tr1_td2);
//Row1 Ends

//Row2 start
const tr2_td1Text = document.createTextNode('CSS');
const tr2_td1 = document.createElement('td');
tr2_td1.append(tr2_td1Text);

const tr2_td2Input = document.createElement('input');
tr2_td2Input.setAttribute('type', 'range');
tr2_td2Input.setAttribute('name', 'js');
tr2_td2Input.setAttribute('id', 'js');
tr2_td2Input.setAttribute('min', '0');
tr2_td2Input.setAttribute('max', '10');
tr2_td2Input.setAttribute('value', '8');

const tr2_td2 = document.createElement('td');
tr2_td2.append(tr2_td2Input);

const tr2 = document.createElement('tr');
tr2.append(tr2_td1, tr2_td2);
//Row2 Ends


//Row3 start
const tr3_td1Text = document.createTextNode('HTML');
const tr3_td1 = document.createElement('td');
tr3_td1.append(tr3_td1Text);

const tr3_td2Input = document.createElement('input');
tr3_td2Input.setAttribute('type', 'range');
tr3_td2Input.setAttribute('name', 'js');
tr3_td2Input.setAttribute('id', 'js');
tr3_td2Input.setAttribute('min', '0');
tr3_td2Input.setAttribute('max', '10');
tr3_td2Input.setAttribute('value', '6');

const tr3_td2 = document.createElement('td');
tr3_td2.append(tr3_td2Input);

const tr3 = document.createElement('tr');
tr3.append(tr3_td1, tr3_td2);
//Row3 Ends


//Row4 start
const tr4_td1Text = document.createTextNode('React');
const tr4_td1 = document.createElement('td');
tr4_td1.append(tr4_td1Text);

const tr4_td2Input = document.createElement('input');
tr4_td2Input.setAttribute('type', 'range');
tr4_td2Input.setAttribute('name', 'js');
tr4_td2Input.setAttribute('id', 'js');
tr4_td2Input.setAttribute('min', '0');
tr4_td2Input.setAttribute('max', '10');
tr4_td2Input.setAttribute('value', '6');

const tr4_td2 = document.createElement('td');
tr4_td2.append(tr4_td2Input);

const tr4 = document.createElement('tr');
tr4.append(tr4_td1, tr4_td2);
//Row4 Ends

//Row5 start
const tr5_td1Text = document.createTextNode('Redux');
const tr5_td1 = document.createElement('td');
tr5_td1.append(tr5_td1Text);

const tr5_td2Input = document.createElement('input');
tr5_td2Input.setAttribute('type', 'range');
tr5_td2Input.setAttribute('name', 'js');
tr5_td2Input.setAttribute('id', 'js');
tr5_td2Input.setAttribute('min', '0');
tr5_td2Input.setAttribute('max', '10');
tr5_td2Input.setAttribute('value', '8');

const tr5_td2 = document.createElement('td');
tr5_td2.append(tr5_td2Input);

const tr5 = document.createElement('tr');
tr5.append(tr5_td1, tr5_td2);
//Row5 Ends

//Row6 start
const tr6_td1Text = document.createTextNode('Mongo');
const tr6_td1 = document.createElement('td');
tr6_td1.append(tr6_td1Text);

const tr6_td2Input = document.createElement('input');
tr6_td2Input.setAttribute('type', 'range');
tr6_td2Input.setAttribute('name', 'js');
tr6_td2Input.setAttribute('id', 'js');
tr6_td2Input.setAttribute('min', '0');
tr6_td2Input.setAttribute('max', '10');
tr6_td2Input.setAttribute('value', '8');

const tr6_td2 = document.createElement('td');
tr6_td2.append(tr6_td2Input);

const tr6 = document.createElement('tr');
tr6.append(tr6_td1, tr6_td2);
//Row6 Ends

//Row7 start
const tr7_td1Text = document.createTextNode('Deployment');
const tr7_td1 = document.createElement('td');
tr7_td1.append(tr7_td1Text);

const tr7_td2Input = document.createElement('input');
tr7_td2Input.setAttribute('type', 'range');
tr7_td2Input.setAttribute('name', 'js');
tr7_td2Input.setAttribute('id', 'js');
tr7_td2Input.setAttribute('min', '0');
tr7_td2Input.setAttribute('max', '10');
tr7_td2Input.setAttribute('value', '10');

const tr7_td2 = document.createElement('td');
tr7_td2.append(tr7_td2Input);

const tr7 = document.createElement('tr');
tr7.append(tr7_td1, tr7_td2);
//Row7 Ends

const techSkillsTable = document.createElement('table');
techSkillsTable.classList.add('skillsTable');
techSkillsTable.append(tr1);
techSkillsTable.append(tr2);
techSkillsTable.append(tr3);
techSkillsTable.append(tr4);
techSkillsTable.append(tr5);
techSkillsTable.append(tr6);
techSkillsTable.append(tr7);

const techSkillsDiv = document.createElement('div');
techSkillsDiv.append(techSkillsTable);
div2.append(techSkillsDiv);

///////////////Additional skills
const skillsInputTitle2 = document.createElement('div');
skillsInputTitle2.classList.add('skillsInput');

const skillsInputTitle2Para = document.createElement('p');
skillsInputTitle2Para.innerHTML = 'Additional Skills';
skillsInputTitle2.append(skillsInputTitle2Para);

const skillsInputAdditionalDiv = document.createElement('div');
skillsInputAdditionalDiv.append(skillsInputTitle2);
div2.append(skillsInputAdditionalDiv);

//Row8 start
const tr8_td1Text = document.createTextNode('Project Management');
const tr8_td1 = document.createElement('td');
tr8_td1.append(tr8_td1Text);

const tr8_td2Input = document.createElement('input');
tr8_td2Input.setAttribute('type', 'range');
tr8_td2Input.setAttribute('name', 'js');
tr8_td2Input.setAttribute('id', 'js');
tr8_td2Input.setAttribute('min', '0');
tr8_td2Input.setAttribute('max', '10');
tr8_td2Input.setAttribute('value', '10');

const tr8_td2 = document.createElement('td');
tr8_td2.append(tr8_td2Input);

const tr8 = document.createElement('tr');
tr8.append(tr8_td1, tr8_td2);
//Row8 Ends

//Row9 start
const tr9_td1Text = document.createTextNode('Recruitment');
const tr9_td1 = document.createElement('td');
tr9_td1.append(tr9_td1Text);

const tr9_td2Input = document.createElement('input');
tr9_td2Input.setAttribute('type', 'range');
tr9_td2Input.setAttribute('name', 'js');
tr9_td2Input.setAttribute('id', 'js');
tr9_td2Input.setAttribute('min', '0');
tr9_td2Input.setAttribute('max', '10');
tr9_td2Input.setAttribute('value', '7');

const tr9_td2 = document.createElement('td');
tr9_td2.append(tr9_td2Input);

const tr9 = document.createElement('tr');
tr9.append(tr9_td1, tr9_td2);
//Row9 Ends


//Row10 start
const tr10_td1Text = document.createTextNode('Business Development');
const tr10_td1 = document.createElement('td');
tr10_td1.append(tr10_td1Text);

const tr10_td2Input = document.createElement('input');
tr10_td2Input.setAttribute('type', 'range');
tr10_td2Input.setAttribute('name', 'js');
tr10_td2Input.setAttribute('id', 'js');
tr10_td2Input.setAttribute('min', '0');
tr10_td2Input.setAttribute('max', '10');
tr10_td2Input.setAttribute('value', '10');

const tr10_td2 = document.createElement('td');
tr10_td2.append(tr10_td2Input);

const tr10 = document.createElement('tr');
tr10.append(tr10_td1, tr10_td2);
//Row10 Ends


//Row11 start
const tr11_td1Text = document.createTextNode('Editing');
const tr11_td1 = document.createElement('td');
tr11_td1.append(tr11_td1Text);

const tr11_td2Input = document.createElement('input');
tr11_td2Input.setAttribute('type', 'range');
tr11_td2Input.setAttribute('name', 'js');
tr11_td2Input.setAttribute('id', 'js');
tr11_td2Input.setAttribute('min', '0');
tr11_td2Input.setAttribute('max', '10');
tr11_td2Input.setAttribute('value', '7');

const tr11_td2 = document.createElement('td');
tr11_td2.append(tr11_td2Input);

const tr11 = document.createElement('tr');
tr11.append(tr11_td1, tr11_td2);
//Row11 Ends


//Row11 start
const tr12_td1Text = document.createTextNode('Fundraising');
const tr12_td1 = document.createElement('td');
tr12_td1.append(tr12_td1Text);

const tr12_td2Input = document.createElement('input');
tr12_td2Input.setAttribute('type', 'range');
tr12_td2Input.setAttribute('name', 'js');
tr12_td2Input.setAttribute('id', 'js');
tr12_td2Input.setAttribute('min', '0');
tr12_td2Input.setAttribute('max', '10');
tr12_td2Input.setAttribute('value', '10');

const tr12_td2 = document.createElement('td');
tr12_td2.append(tr12_td2Input);

const tr12 = document.createElement('tr');
tr12.append(tr12_td1, tr12_td2);
//Row11 Ends


const additionalSkillsTable = document.createElement('table');
additionalSkillsTable.classList.add('skillsTable');
additionalSkillsTable.append(tr8);
additionalSkillsTable.append(tr9);
additionalSkillsTable.append(tr10);
additionalSkillsTable.append(tr11);
additionalSkillsTable.append(tr12);


const additionalSkillsDiv = document.createElement('div');
additionalSkillsDiv.append(additionalSkillsTable);
div2.append(additionalSkillsDiv);


bodyHalf1.append(div2);
////////////////


//Work experience

const div3 = document.createElement('div');
//div3.append(workHeading, workImage, workTitle);


const work1Heading = document.createElement('div');
work1Heading.classList.add('heading1');
const work1Image = document.createElement('div');
work1Image.classList.add('headingImage');
const work1Icon = document.createElement('i');
work1Icon.setAttribute('class', 'fa fa-plus-circle iconColor');
work1Image.append(work1Icon);
const work1Title = document.createElement('p');
work1Title.setAttribute('class', 'headingTitle');
work1Title.innerHTML = 'Work Experience';

// const div3 = document.createElement('div');
div3.append(work1Heading, work1Image, work1Title);
bodyHalf1.append(div3);

const job1TitleDiv = document.createElement('div');
const job1Title = document.createTextNode('Event Manager');
job1TitleDiv.append(job1Title);
job1TitleDiv.classList.add('title1Style');


const job1DateDiv = document.createElement('div');
const job1Date = document.createTextNode('03/2014 - 02/2017');
job1DateDiv.append(job1Date);
job1DateDiv.classList.add('title2Style');

const job1Div = document.createElement('div');
job1Div.append(job1TitleDiv, job1DateDiv);
div3.append(job1Div);
bodyHalf1.append(div3);

const job1Company = document.createElement('div');
const job1CompanyNamePara = document.createElement('para');
const job1CompanyName = document.createTextNode('C3 Presents, Washington DC');

job1CompanyNamePara.append(job1CompanyName);
job1Company.append(job1CompanyNamePara);
div3.append(job1Company);
bodyHalf1.append(div3);

const job1JdDiv = document.createElement('div');
job1JdDiv.classList.add('jobUlLeft');

const job1JdUL = document.createElement('ul');

const job1JdULli1 = document.createElement('li');
const job1JdULli1Text = document.createTextNode('Lead and Execute all phases of event planning and production spanning committee recruitment, training, vendor relationships and on-site facilitation.');
job1JdULli1.append(job1JdULli1Text);
job1JdUL.append(job1JdULli1);


const job1JdULli2 = document.createElement('li');
const job1JdULli2Text = document.createTextNode('Brought new bushiest to the organization through relentless networking and stewardship which helped the company wn the bid for the State Department Summit on the Middle East and, the companies largest civic event to date, the United State of Women');
job1JdULli2.append(job1JdULli2Text);
job1JdUL.append(job1JdULli2);

const job1JdULli3 = document.createElement('li');
const job1JdULli3Text = document.createTextNode('Exercise fiscal control over budget creation, tracking and reporting. Collaborate with employees at all organizational levels to advance cohesive operations.');
job1JdULli3.append(job1JdULli3Text);
job1JdUL.append(job1JdULli3);

job1JdDiv.append(job1JdUL);
div3.append(job1JdDiv);
bodyHalf1.append(div3);
//////////////////////

const bodyHalf2 = document.createElement('div');
bodyHalf2.classList.add('bodyHalf2');

/////////////////////

const workHeading = document.createElement('div');
workHeading.classList.add('heading1');
const workImage = document.createElement('div');
workImage.classList.add('headingImage');

const workIcon = document.createElement('i');
workIcon.setAttribute('class', 'fa fa-plus-circle iconColor');

workImage.append(workIcon);

const workTitle = document.createElement('p');
workTitle.setAttribute('class', 'headingTitle');
workTitle.innerHTML = 'Work Experience';



const bodyHalf3 = document.createElement('div');
bodyHalf3.classList.add('bodyHalf3');

const div4 = document.createElement('div');
div4.append(workHeading, workImage, workTitle);
bodyHalf3.append(div4);


const job2TitleDiv = document.createElement('div');
const job2Title = document.createTextNode('Community Relations');
job2TitleDiv.append(job2Title);
job2TitleDiv.classList.add('title1Style');


const job2DateDiv = document.createElement('div');
const job2Date = document.createTextNode('06/2011 - 01/2014');
job2DateDiv.append(job2Date);
job2DateDiv.classList.add('title2Style');

const job2Div = document.createElement('div');
job2Div.append(job2TitleDiv, job2DateDiv);
div4.append(job2Div);
bodyHalf3.append(div4);

const job2Company = document.createElement('div');
const job2CompanyNamePara = document.createElement('para');
const job2CompanyName = document.createTextNode('Gay & Lesbian Elder Housing, Los Angeles');

job2CompanyNamePara.append(job1CompanyName);
job2Company.append(job2CompanyNamePara);
div4.append(job2Company);
bodyHalf3.append(div4);

const job2JdDiv = document.createElement('div');
job2JdDiv.classList.add('jobUlLeft');

const job2JdUL = document.createElement('ul');

const job2JdULli1 = document.createElement('li');
const job2JdULli1Text = document.createTextNode('Arranging presentations and pitch deck.');
job2JdULli1.append(job2JdULli1Text);
job2JdUL.append(job2JdULli1);


const job2JdULli2 = document.createElement('li');
const job2JdULli2Text = document.createTextNode('Designing a PR plan and establishing important focus points.');
job2JdULli2.append(job2JdULli2Text);
job2JdUL.append(job2JdULli2);

const job2JdULli3 = document.createElement('li');
const job2JdULli3Text = document.createTextNode('Designing, creating and managing content across multiple communication platforms.');
job2JdULli3.append(job2JdULli3Text);
job2JdUL.append(job2JdULli3);

const job2JdULli4 = document.createElement('li');
const job2JdULli4Text = document.createTextNode('Building relationships with key media players.');
job2JdULli4.append(job2JdULli4Text);
job2JdUL.append(job2JdULli4);


job2JdDiv.append(job2JdUL);
div4.append(job2JdDiv);
bodyHalf3.append(div4);


//Education
const educationHeading = document.createElement('div');
educationHeading.classList.add('heading1');
const educationImage = document.createElement('div');
educationImage.classList.add('headingImage');

const educationIcon = document.createElement('i');
educationIcon.setAttribute('class', 'fa fa-graduation-cap iconColor');

educationImage.append(educationIcon);

const educationTitle = document.createElement('p');
educationTitle.setAttribute('class', 'headingTitle');
educationTitle.innerHTML = 'Education';

div4.append(educationHeading, educationImage, educationTitle);
bodyHalf3.append(div4);


const education1TitleDiv = document.createElement('div');
const education1Title = document.createTextNode('Engineering Immersion Program');
education1TitleDiv.append(education1Title);
education1TitleDiv.classList.add('title1Style');


const education1DateDiv = document.createElement('div');
const education1Date = document.createTextNode('11/2018 - 06/2018');
education1DateDiv.append(education1Date);
education1DateDiv.classList.add('title2Style');

const education1Div = document.createElement('div');
education1Div.append(education1TitleDiv, education1DateDiv);
div4.append(education1Div);
bodyHalf3.append(div4);

const  education1Course = document.createElement('div');
const education1CourseNamePara = document.createElement('para');
const education1CourseName = document.createTextNode('Thinkful, Chicago, IL');

education1CourseNamePara.append(education1CourseName);
education1Course.append(education1CourseNamePara);
div4.append(education1Course);
bodyHalf3.append(div4);


const projectDescText = document.createTextNode('Project-focused intensive program with emphasis on Mongo, Express, React, and JavaScript (MERN) technical stack.');
div4.append(projectDescText);
bodyHalf3.append(div4);

const education1DescDiv = document.createElement('div');
education1DescDiv.classList.add('jobUlLeft');

const education1DescUL = document.createElement('ul');

const education1DescULli1 = document.createElement('li');
const education1DescULli1Text = document.createTextNode(' Developed a full•stack web application, "RenewU", using React that allows users to explore various aspects of meditation. User\'s progress is stored on a backend created using Node and MongoDB.');
education1DescULli1.append(education1DescULli1Text);
education1DescUL.append(education1DescULli1);


const education1DescULli2 = document.createElement('li');
const education1DescULli2Text = document.createTextNode('Developed a language learning app, \'Foodie Phonetics" using spaced repetition and a Ihked list data structure. React was used to create the front end components while Node and Mongo were used to create a backend that stores user data.');
education1DescULli2.append(education1DescULli2Text);
education1DescUL.append(education1DescULli2);

const education1DescULli3 = document.createElement('li');
const education1DescULli3Text = document.createTextNode('Developed a concierge app, "Pley", for individuals looking for curated suggestions when visiting a new place. React was used to develop the front end which includes real-time chat, drag and  drop and variety of advanced features. The backend, built using Node, Express, and Mongo, takes advantage of well ¬ developed RESTful API, Geospatial searching, and user authentication with JWT.');
education1DescULli3.append(education1DescULli3Text);
education1DescUL.append(education1DescULli3);

const education1DescULli4 = document.createElement('li');
const education1DescULli4Text = document.createTextNode('Building relationships with key media players.');
education1DescULli4.append(education1DescULli4Text);
education1DescUL.append(education1DescULli4);


education1DescDiv.append(education1DescUL);
div4.append(education1DescDiv);
bodyHalf3.append(div4);


const education1DegreeTitleDiv = document.createElement('div');
const education1DegreeTitle = document.createTextNode('Engineering Immersion Program');
education1DegreeTitleDiv.append(education1DegreeTitle);
education1DegreeTitleDiv.classList.add('title1Style');


const education1DegreeDateDiv = document.createElement('div');
const education1DegreeDate = document.createTextNode('11/2018 - 06/2018');
education1DegreeDateDiv.append(education1DegreeDate);
education1DegreeDateDiv.classList.add('title2Style');

const education1DegreeDiv = document.createElement('div');
education1DegreeDiv.append(education1DegreeTitleDiv, education1DegreeDateDiv);
div4.append(education1DegreeDiv);
bodyHalf3.append(div4);

const  education1Collage = document.createElement('div');
const education1CollageNamePara = document.createElement('para');
const education1CollageName = document.createTextNode('Thinkful, Chicago, IL');

// education1CourseNamePara.append(education1CourseName);
// education1Course.append(education1CourseNamePara);
div4.append(education1CollageName);
bodyHalf3.append(div4);


const fullBody = document.createElement('div');

fullBody.append(bodyHalf1, bodyHalf2, bodyHalf3);

fullBody.classList.add('fullBody');
section.append(fullBody);

document.body.append(section);




/*********************End Section**********************/


