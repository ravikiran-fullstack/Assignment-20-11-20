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


const techSkillsTable = document.createElement('table');
techSkillsTable.classList.add('skillsTable');
techSkillsTable.append(tr1);
techSkillsTable.append(tr2);
techSkillsTable.append(tr3);

const techSkillsDiv = document.createElement('div');
techSkillsDiv.append(techSkillsTable);
div2.append(techSkillsDiv);
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


