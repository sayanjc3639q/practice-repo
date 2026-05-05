const data = [
  {
    "profile_image": "https://res.cloudinary.com/dvlarpnj9/image/upload/v1739216805/members/ebibodzlq8buxkmj7msm.png",
    "_id": "67aa57a3abdbff3d54431afe",
    "name": "Deepak Kumar",
    "department": "CSE-DS",
    "designation": "Founder",
    "email_id": "deepakjamui26@gmail.com",
    "batch": "2022",
    "bio": "Every line of code is a bridge that connects ideas with reality, creating experiences that inspire and transform",
    "github_url": "https://github.com/deepak-raaaz",
    "linkedin_url": "https://linkedin.com/in/deepak-raaaz"
  },
  {
    "profile_image": "https://res.cloudinary.com/dvlarpnj9/image/upload/v1739358080/members/udfbwul7pg1ram4zmkld.png",
    "_id": "67ac7f7e175c38b6855ed899",
    "name": "Rishabh kumar",
    "department": "ECE",
    "designation": "Founder",
    "email_id": "rishabhgdsc100@gmail.com",
    "batch": "2022",
    "bio": "As GDG On Campus HIT Lead Organizer— always striving to turn ideas into innovation, code into impact, and communities into powerhouses. Let's connect and go on a tech-venture!",
    "github_url": "https://github.com/",
    "linkedin_url": "https://www.linkedin.com/in/rishabh-kumar-5b109a301?trk=contact-info"
  },
  {
    "profile_image": "https://res.cloudinary.com/dvlarpnj9/image/upload/v1739358876/members/lrfcawiul8lobdgpcpgh.png",
    "_id": "67ac829a0ca9f2e0030905f1",
    "name": "Chinmay Verma",
    "department": "ECE",
    "designation": "Founder",
    "email_id": "chinmayverma1605@gmail.com",
    "batch": "2022",
    "bio": "Who needs therapy when you can stare error logs for hours and question your life choices?",
    "github_url": "https://github.com/",
    "linkedin_url": "https://www.linkedin.com/in/chinmay-verma-90353921b"
  },
  {
    "profile_image": "https://res.cloudinary.com/dvlarpnj9/image/upload/v1739385730/members/u5whjuoejrz74v6p5cvw.png",
    "_id": "67aceb7fd6e83d19150bd113",
    "name": "Dipankar Saha",
    "department": "ECE",
    "designation": "Founder",
    "email_id": "deeep@gmail.com",
    "batch": "2022",
    "bio": "As the Video Editor Lead at GDG On Campus HIT, I oversee the creation of engaging video content, showcasing our events and initiatives with creativity and precision.",
    "github_url": "https://github.com/",
    "linkedin_url": "https://www.linkedin.com/in/dipankar-saha-8725b4222/"
  },
  {
    "profile_image": "https://res.cloudinary.com/dvlarpnj9/image/upload/v1739803218/members/yg3nkhzbovx77mbotnak.png",
    "_id": "67adac30061dec872d7e0867",
    "name": "Ankush Panja",
    "department": "CSE-DS",
    "designation": "Founder",
    "email_id": "panjaankush10@gmail.com",
    "batch": "2022",
    "bio": "Leadership in Public Relations and Management is not just about making decisions; it's about inspiring others, fostering collaboration, and creating a lasting impact within and outside the team!",
    "github_url": "https://github.com/Ankushgit-hub",
    "linkedin_url": "https://www.linkedin.com/in/ankush-panja"
  },
  {
    "profile_image": "https://res.cloudinary.com/dvlarpnj9/image/upload/v1739462788/members/a1siupe0gfk4rguskap8.png",
    "_id": "67ae188144fc6d5950c27d3a",
    "name": "Aarohini",
    "department": "ECE",
    "designation": "Founder",
    "email_id": "panjaankush10@gmail.com",
    "batch": "2022",
    "bio": "As the Content Writing Lead at GDG HIT, I craft engaging content and posts that informs and inspires our developer community.",
    "github_url": "https://github.com/Aarohini",
    "linkedin_url": "https://www.linkedin.com/in/aarohini-81b3702ba/"
  },
  {
    "profile_image": "https://res.cloudinary.com/dvlarpnj9/image/upload/v1739463419/members/owmwzofjshxkbhx37krx.png",
    "_id": "67ae1af844fc6d5950c27d3e",
    "name": "Arijit Dutta",
    "department": "ECE",
    "designation": "Founder",
    "email_id": "arijit@gmail.com",
    "batch": "2022",
    "bio": "ECE undergrad | Graphic Design GD Lead @ GDG On Campus HIT | IoT, Robotics & VLSI Enthusiant",
    "github_url": "https://github.com/ArijitDutta96395",
    "linkedin_url": "https://www.linkedin.com/in/arijit-dutta-a1bb1a267/"
  },
  {
    "profile_image": "https://res.cloudinary.com/dvlarpnj9/image/upload/v1739899643/members/b9r9qeafl1dbrxploqwy.png",
    "_id": "67b4c2f9a45822b153e1b822",
    "name": "Rahul Kumar",
    "department": "EE",
    "designation": "Founder",
    "email_id": "rahukkumar@gmail.com",
    "batch": "2022",
    "bio": "FullStack web developer prefer backend web development",
    "github_url": "https://github.com/RahulKumar9988",
    "linkedin_url": "https://www.linkedin.com/in/rahul-kumar-320aaa325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    "profile_image": "https://res.cloudinary.com/dvlarpnj9/image/upload/v1740020404/members/dpolemc6rsnteveibou2.png",
    "_id": "67b69ab2592abd59bf97845d",
    "name": "Aditya Singh",
    "department": "CSE-ai/ml",
    "designation": "Founder",
    "email_id": "adityasingh@gmail.com",
    "batch": "2022",
    "bio": "Grinding in silence, winning in public.",
    "github_url": "https://github.com/adityashanky",
    "linkedin_url": "https://www.linkedin.com/in/aditya-singh-8a9b45244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  }
];

const box = document.getElementById('members-container');
data.forEach(function(i) {
    const member = `
        <div class="card">
            <img src="${i.profile_image}" alt="${i.name}">
            <h3>${i.name}</h3>
            <p><strong>Designation:</strong> ${i.designation}</p>
            <p><strong>Department:</strong> ${i.department}</p>
            <p><strong>Batch:</strong> ${i.batch}</p>
            <p><em>"${i.bio}"</em></p>
            <div class="links">
                <a href="${i.github_url}">GitHub</a>
                <a href="${i.linkedin_url}">LinkedIn</a>
            </div>
        </div>
    `;
    box.innerHTML += member;
});
