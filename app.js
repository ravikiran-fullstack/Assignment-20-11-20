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




const bodyHalf2 = document.createElement('div');
bodyHalf2.classList.add('bodyHalf2');

const bodyHalf3 = document.createElement('div');
bodyHalf3.classList.add('bodyHalf3');

const fullBody = document.createElement('div');

fullBody.append(bodyHalf1, bodyHalf2, bodyHalf3);

fullBody.classList.add('fullBody');
section.append(fullBody);

document.body.append(section);




/*********************End Section**********************/


