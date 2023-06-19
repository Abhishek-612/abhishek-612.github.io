import React from "react";

function bnp_article() {
	return {
		date: "28 June 2022",
		title: "Working at BNP Paribas: A Journey of Innovation and Impact",
		description:
			"Embark on a captivating journey through my experiences as a Software Engineer at BNP Paribas. Discover the key moments that shaped my career and contributed to the success of one of the world's leading financial institutions.",
		style: `
			.article-content {
				display: flex;
				flex-direction: column;
				align-items: left;
				max-width: 800px;
				margin: 0 auto;
				padding: 20px;
				background-color: #fafafa;
				border-radius: 8px;
				box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.3);
			}

			.homepage-image {
				width: 100%;
				border-radius: 8px;
				margin-bottom: 20px;
			}

			h1 {
				font-size: 28px;
				margin-bottom: 20px;
				text-align: center;
			}

			h2 {
				font-size: 20px;
				margin-top: 10px;
				margin-bottom: 5px;
			}

			p {
				font-size: 18px;
				line-height: 1.6;
				margin-bottom: 20px;
			}

			.call-to-action-image {
				width: 100%;
				border-radius: 8px;
				margin-top: 40px;
				margin-bottom: 20px;
			}

			.call-to-action {
				text-align: center;
				font-size: 18px;
				font-weight: bold;
			}
		`,
		keywords: [
			'Software Engineer', 'BNP Paribas', 'Developer', 'Fresher'
		],
		body: (
			<React.Fragment>
				<article className="article-content">
					<img
						src="/bnp-main-pic.jpeg"
						alt="about"
						className="homepage-image"
					/>
					<h1>Unleashing Innovation and Impact: My Journey as an Associate Software Engineer at BNP Paribas</h1>
					<p>Join me on a remarkable voyage as I reflect upon my exhilarating experiences as an Associate Software Engineer at BNP Paribas. Discover how I spearheaded critical initiatives, harnessed cutting-edge technologies, and contributed to the growth and success of one of the world's leading financial institutions. From revolutionizing cash pooling to enhancing business rule logic, every step of this journey has been filled with innovation and impact.</p>
					
					<h2>Making an Impact as a Software Development Intern</h2>
					<p>Before my role as an Associate Software Engineer, I made significant contributions as a Software Development Intern in the ATLAS2 Design and Development Team. I developed Java-based data handling APIs and migration scripts, resulting in improved efficiency and accuracy. Analyzing legacy COBOL code and implementing an automated testing script using Selenium-Java, I elevated the reliability of the JGestab parameterization tool and reduced errors.</p>
					
					<h2>Empowering On-demand Cash Pooling with Lending and Borrowing Limit Constraints</h2>
					<p>During my tenure, I took charge of a crucial feature update for the On-demand Cash Pooling system, where I successfully introduced lending and borrowing limit constraints. Leveraging my expertise in Java, Spring Boot, SQL, Angular, and UNIX jobs, I elevated client satisfaction by an impressive 30%. This transformation allowed clients to exercise greater control over their cash pooling operations and ushered in a new era of efficiency and profitability.</p>
					
					<h2>Automating Client Report Generation for Unprecedented Efficiency</h2>
					<p>Recognizing the need for streamlined operations, I developed an automated client report generation system. By reducing manual effort by a staggering 50% and improving delivery time by 35%, this innovative solution enhanced productivity and allowed teams to focus on higher-value tasks. Our clients benefited from timely and accurate reports, fostering stronger relationships and trust.</p>
					
					<h2>Streamlining Communication and Roadmap Planning for Cash Pooling Projects in China</h2>
					<p>As part of the Liquidity Management team, I played a pivotal role in streamlining communication and planning roadmaps for multiple cash pooling projects in China. By ensuring alignment and reducing miscommunication, we eliminated potential bottlenecks and achieved seamless collaboration. Our efforts resulted in optimized project execution, timely deliverables, and enhanced client satisfaction.</p>
					
					<h2>Level 3 Support and Timely Resolutions for Uninterrupted Operations</h2>
					<p>Delivering outstanding support was paramount to our success. As a Level 3 support resource, I resolved data patch requests within one hour on average, ensuring minimal production failures. Swift and precise resolutions mitigated risks and provided clients with uninterrupted operations. Our commitment to excellence garnered trust and loyalty from our valued partners.</p>
					
					<h2>Integration, Leadership, and Expansion of Responsibilities</h2>
					<p>Beyond Java development, I enthusiastically embraced additional responsibilities in system integration. By developing UNIX jobs and AutoSys job scheduling, I fostered seamless interactions between diverse systems, optimizing performance and enabling greater agility. My leadership role in the development of critical feature updates for the On-demand Cash Pooling application further empowered clients with control and risk management capabilities.</p>
					
					<h2>Final Thoughts...</h2>
					<p>My journey as an Associate Software Engineer at BNP Paribas has been a remarkable blend of innovation, impact, and personal growth. From redefining cash pooling with lending and borrowing limit constraints to automating processes and enhancing communication, each accomplishment has pushed boundaries and created a lasting impact. I am grateful for the opportunities provided by BNP Paribas and the invaluable experiences that have shaped my career. Together, we continue to revolutionize the world of finance through technology and unwavering dedication.</p>

					<img
						src="/BNP-Paribas-Logo.png"
						alt="call-to-action"
						className="call-to-action-image"
					/>
					<p className="call-to-action">Engage with BNP Paribas and witness the future of Banking</p>
				</article>
			</React.Fragment>
		),
	};
}


function spit_article() {
	return {
		date: "21 January 2022",
		title: "Mentoring for Change: Empowering with Technology and Impact",
		description:
			"Discover the transformative power of mentorship in software development as we delve into an inspiring journey of collaboration, learning, and making a positive social impact. Explore the projects, challenges, and lessons learned during a mentoring experience at Sardar Patel Institute of Technology (S.P.I.T) and the Tata Institute of Social Sciences.",
		style: `
			.article-content {
				display: flex;
				flex-direction: column;
				align-items: left;
				max-width: 800px;
				margin: 0 auto;
				padding: 20px;
				background-color: #fafafa;
				border-radius: 8px;
				box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.3);
			}

			.homepage-image {
				width: 100%;
				display: flex;
				flex-direction: row;
				border-radius: 8px;
				margin-bottom: 20px;
				align-items: center;
			}
	
			.homepage-image img {
				width: 45%; 
				height: auto;
				padding: 15px;
			}

			h1 {
				font-size: 28px;
				margin-bottom: 20px;
				text-align: center;
			}

			h2 {
				font-size: 20px;
				margin-top: 10px;
				margin-bottom: 5px;
			}

			p {
				font-size: 18px;
				line-height: 1.6;
				margin-bottom: 20px;
			}

			.call-to-action-image {
				width: 100%;
				border-radius: 8px;
				margin-top: 40px;
				margin-bottom: 20px;
			}

			.call-to-action {
				text-align: center;
				font-size: 18px;
				font-weight: bold;
			}
		`,
		keywords: [
			'Research', 'Machine Learning', 'Data Science', 'Mentor', 'Teaching'
		],
		body: (
			<React.Fragment>
				<article className="article-content">

					<div class="homepage-image">
						<img src="/SPIT.png" alt="Sardar Patel Institute of Technology" />
						<img src="/TISS.png" alt="Tata Institute of Social Sciences" />
					</div>
					
					<h1>Empowering Change Through Mentorship: A Journey of Technology and Social Impact</h1>
					<p>Software development is not just about coding and building applications. It's an opportunity to share knowledge, make a difference, and empower others. In this article, we will embark on a remarkable journey of mentorship at Sardar Patel Institute of Technology (S.P.I.T) and the Tata Institute of Social Sciences, where technology and social impact converge. Join us as we explore the research initiative, the role of mentorship, fostering a research mindset, overcoming challenges, driving social impact, and shaping a brighter future through mentorship.</p>
					
					<h2>Unveiling the Research Initiative</h2>
					<p>In collaboration with the Tata Institute of Social Sciences, S.P.I.T's computer department embarked on two intriguing projects: autism detection and fall-risk prediction in the elderly. Discover how this research initiative aimed to bring social awareness and leverage technology to help communities in need. Learn about the inspiring collaboration between students, NGOs, and social workers dedicated to aiding the underprivileged.</p>
					
					<h2>The Role of Mentorship</h2>
					<p>As a mentor, the opportunity to share knowledge and guide students became a rewarding responsibility. Explore the pivotal role of mentorship in the research initiative, focusing on machine learning and data analysis techniques. Dive into interactive sessions where topics like data preprocessing, feature extraction, and image masking were covered. Experience the joy of igniting curiosity and passion for technology through a side project on creating a simple document scanner using the powerful OpenCV library.</p>
					
					<h2>Fostering a Research Mindset</h2>
					<p>Mentorship goes beyond technical skills. Discover how the mentoring sessions aimed to nurture a research mindset among the students. Encourage critical thinking, analysis, and seeking adequate reasoning behind each step of the process. Witness the enthusiasm as students grapple with data analysis, extrapolating insights, and proposing innovative solutions. Experience the privilege of guiding them to develop not only their technical capabilities but also their ability to approach problems with a holistic perspective.</p>
					
					<h2>Embracing Challenges and Discovering Solutions</h2>
					<p>In every mentoring journey, challenges and obstacles emerge. Explore the resilience and determination of the mentorship team as they overcome hurdles and grow stronger together. Witness how the passion and drive of the students push the boundaries of traditional education. Encourage them to venture into uncharted territories, fueling their curiosity and inspiring them to think outside the box. Discover the symbiotic relationship where the mentor learns as much from the students as they do from the mentor.</p>
					
					<h2>Driving Social Impact</h2>
					<p>The ultimate goal of the research initiatives was to drive social impact. Delve into the critical areas of autism detection and fall-risk prediction, where technology can make a significant difference. Explore how machine learning and data analysis techniques were leveraged to develop tools and models for early diagnosis and intervention for autism, as well as fall prevention among the elderly. Understand the importance of empathy and understanding when developing solutions for the communities in need.</p>
					
					<h2>Explore the resources and presentations from the mentoring sessions</h2>
					<p>Take a step further and explore the valuable resources and presentations from the mentoring sessions. Deepen your understanding of the research initiative and gain insights into the techniques and technologies used. Engage with the materials to broaden your knowledge and contribute to the ongoing journey of technology and social impact.</p>
					
					<p className="call-to-action">Find the resources from the sessions <a href="https://github.com/Abhishek-612/Understanding-Data-for-ML" color="inherit">here</a></p>
				</article>
			</React.Fragment>
		),
	};
}


function oculus_article() {
	return {
		date: "31 March, 2020",
		title: "Igniting Passion, Unleashing Creativity, and Leaving an Impact: The Extravaganza of Oculus 2020",
		description:
		"Step into the vibrant world of Oculus 2020, the annual techno-cultural festival of Sardar Patel Institute of Technology. Join me on a journey through the exhilarating moments and the impact we created.",
		style: `
			.article-content {
				display: flex;
				flex-direction: column;
				align-items: left;
				max-width: 800px;
				margin: 0 auto;
				padding: 20px;
				background-color: #fafafa;
				border-radius: 8px;
				box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.3);
			}

			.homepage-image {
				width: 100%;
				display: flex;
				flex-direction: row;
				border-radius: 8px;
				margin-bottom: 20px;
				align-items: center;
			}

			.homepage-image img {
				width: 45%; 
				height: auto;
				padding: 15px;
			}

			h1 {
				font-size: 28px;
				margin-bottom: 20px;
				text-align: center;
			}

			h2 {
				font-size: 20px;
				margin-top: 10px;
				margin-bottom: 5px;
			}

			p {
				font-size: 18px;
				line-height: 1.6;
				margin-bottom: 20px;
			}

			.call-to-action-image {
				width: 100%;
				border-radius: 8px;
				margin-top: 40px;
				margin-bottom: 20px;
			}

			.call-to-action {
				text-align: center;
				font-size: 18px;
				font-weight: bold;
			}
		`,
		keywords: [
			'Festival', 'College', 'Event Management', 'Vicechairpersor', 'Organiser', 'Donation', 'Fundraiser'
		],
		body: 
		<React.Fragment>
			<article class="article-content">

				<div class="homepage-image">
					<iframe width="100%" src="https://youtu.be/-Xxr4L3M59M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>

				<h1>Igniting Passion, Unleashing Creativity, and Leaving an Impact: The Extravaganza of Oculus 2020</h1>
				<p>Step into the mesmerizing world of Oculus 2020, the annual techno-cultural festival of Sardar Patel Institute of Technology. As the Vice Chairperson, I had the privilege of orchestrating a lineup of captivating events that celebrated diversity, innovation, and community. Join me on a journey through the exhilarating moments and the impact we created.</p>

				<h2>A Tapestry of Enthralling Events</h2>
				<p>Oculus 2020 showcased a diverse range of events that captivated the imagination of our college community. From the glitz and glamour of the dazzling fashion show to the harmonious melodies of Sargam, a captivating singing competition, every event was curated to showcase the talents and passions of our students.</p>

				<h2>Unleashing the Dance Revolution</h2>
				<p>The pulsating dance competition, Aelan-e-jung, set the stage ablaze with mesmerizing moves and breathtaking choreography. Participants pushed their boundaries, leaving the audience spellbound and craving more.</p>

				<h2>The Battle of Wits and Skills</h2>
				<p>Oculus Coding League challenged aspiring programmers to showcase their coding prowess, while Capture the Flag immersed participants in an adrenaline-fueled cybersecurity adventure. These events tested strategic thinking and problem-solving abilities.</p>

				<h2>Thrills and Adrenaline Rush</h2>
				<p>Adventure enthusiasts found their thrill in events like Paintball, where adrenaline-pumping battles took place, and Tech Race, a thrilling scavenger hunt across the vibrant streets of Mumbai. These events fostered teamwork and brought out the competitive spirit in the participants.</p>

				<h2>A Melodic Symphony</h2>
				<p>Sunburn music fest created an electric atmosphere, where pulsating beats and electrifying performances set the stage on fire. The crowd swayed to the rhythm, creating memories that would last a lifetime.</p>

				<h2>Exploring the Financial Frontier</h2>
				<p>The virtual stock market provided an immersive experience in trading, allowing participants to test their investment acumen and learn about financial markets.</p>

				<h2>Star-Studded Encounters</h2>
				<p>Oculus 2020 offered unique opportunities to meet and greet popular stars like Ayushman Khurrana and Jitendra Singh. These interactions not only brought excitement but also raised awareness about important social issues, such as LGBTQ+ rights and acceptance.</p>
				
				<div class="homepage-image">
					<iframe width="100%" src="https://youtu.be/EJdX7qy63yc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>

				<h2>An Evening of Expression</h2>
				<p>The enchanting open-mic night at the amphitheater provided a platform for budding artists to showcase their talents and share their stories. It created a vibrant and inclusive atmosphere where voices were heard and appreciated.</p>

				<h2>Immersive Experiences, Collaboration, and Impact</h2>
				<p>As the Vice Chairperson, I spearheaded the coordination of over 20 captivating events, attracting a footfall of 3000 enthusiastic participants. Oculus 2020 embraced a spirit of social responsibility, organizing a donation drive and fundraiser campaign in collaboration with the Cancer Patients Aid Association (CPAA). Together, we raised approximately Rs. 18,000 to support those battling cancer.</p>
					<div class="homepage-image">
						<iframe width="100%" src="https://youtu.be/JbsFZqm-FPI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					</div>
				<p>Recognizing the power of collaboration, Oculus 2020 joined forces with various college committees, fostering an environment where innovation and creativity flourished. By nurturing partnerships, we curated an unforgettable festival that transcended boundaries and united the college community.</p>

				<h2>The Art of Seamless Execution</h2>
				<p>With a keen eye for detail, I took charge of artist management and ensured the smooth operation of logistical aspects. From curating a captivating lineup to meticulously planning schedules and venue preparations, every aspect of the festival ran seamlessly, providing attendees with a truly immersive experience.</p>

				<h2>Moments to Cherish</h2>
				<p>Oculus 2020 was a whirlwind of unforgettable moments that ignited passion, unleashed creativity, and left a lasting impact. The festival celebrated diversity, showcased talents, and fostered a sense of community. As the Vice Chairperson, I am grateful for the opportunity to have contributed to the legacy of Sardar Patel Institute of Technology's prestigious festival. The memories created during Oculus 2020 will forever remain etched in our hearts, reminding us of the incredible journey we embarked upon together.</p>

				<p class="call-to-action">#OculusSeesAll</p>
				</article>
		</React.Fragment>
		,
	};
}



const myArticles = [bnp_article, spit_article, oculus_article];

export default myArticles;
