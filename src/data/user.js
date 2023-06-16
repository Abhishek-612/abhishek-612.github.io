const INFO = {
	main: {
		title: "Abhishek's Portfolio",
		name: "Abhishek Revadekar",
		email: "arevadekar@cs.stonybrook.edu",
		logo: "../logo.png",
	},

	socials: {
		github: "https://github.com/Abhishek-612",
		linkedin: "https://linkedin.com/in/abhishek-revadekar",
		instagram: "https://instagram.com/abhi__06",
		scholar: "https://tinyurl.com/AbhiR-GScholar",
	},

	resume: {
		sde: "../resume_sde.html",
		ds: "../resume_ds.html",
	},

	homepage: {
		title: "Unleashing Creativity in Code and Movement 8 bits at a time!",
		description:
			"Hello there! I'm Abhishek Revadekar, a passionate software developer, enthusiastic dancer, and a firm believer in the power of creativity. I find joy in exploring the realms of both code and movement, as they fuel my curiosity and inspire me to think outside the box. With a love for the arts and a deep appreciation for the world of technology, I embrace the unique blend of these passions. Join me as I embark on a journey of discovery, pushing boundaries, and uncovering new possibilities. Let's celebrate the harmony of creativity and innovation, one step at a time!",
	},

	about: {
		title: "Hey, I'm Abhishek, a student, a developer, a dancer and I am here to figure how the universe works!",
		description:
			"I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.",
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	research: [
		{
			title: "ARMv8 TEE Security Vulnerabilities and Testing Techniques",
			publishDate: "Ongoing",
			conference: "",
			cites: "",
			description:
				"This is an ongoing research to identify TEE security vulnerabilities and testing techniques in ARMv8 architectures, led by Professor Dongyoon Lee at Stony Brook University. More details soon...",
			ongoing: true,
			linkText: "",
			link: "",
			award: "",

		},
		{
			title: "Bidirectional sign language translation",
			publishDate: "25 June 2021",
			conference: "2021 International Conference on Communication information and Computing Technology (ICCICT)",
			cites: "7",
			description:
				"This research work aims to address communication challenges faced by individuals with hearing and speech impairment. It proposes a portable smartphone application that offers bidirectional translation between sign language and speech, enabling real-time communication without the need for additional hardware. The system leverages machine learning techniques, including pre-trained models and Unity3D, to provide speech output as audio and text, as well as sign language output in the form of a 3D animated video sequence, enhancing social engagement and inclusivity.",
			ongoing: false,
			linkText: "View Publication",
			link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=FnJTMswAAAAJ&citation_for_view=FnJTMswAAAAJ:9yKSN-GCB0IC",
			award: "Best Paper Presentation",
		},
		{
			title: "Pothole detection using accelerometer and computer vision with automated complaint redressal",
			publishDate: "13 May 2021",
			conference: "2021 3rd International Conference on Signal Processing and Communication (ICPSC)",
			cites: "1",
			description:
				"This paper addresses the critical issue of road safety by presenting a solution that leverages mobile sensors and image-based techniques to detect potholes in real-time using Machine Learning. By involving civilians in the detection process, authorities can be promptly notified through a web-based portal for necessary action. The solution also includes complaint management, location tagging, prioritization, and provides a forecast of potential pothole-related issues based on continuously updated time series data of various locations.",
			ongoing: false,
			linkText: "View Publication",
			link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=FnJTMswAAAAJ&citation_for_view=FnJTMswAAAAJ:d1gkVwhDpl0C",
			award: "Best Paper of the Session",
		},
		{
			title: "Gauging attention of students in an e-learning environment",
			publishDate: "3 December 2020",
			conference: "2020 IEEE 4th Conference on Information & Communication Technology (CICT)",
			cites: "24",
			description:
				"This paper tackles the issue of monitoring student attentiveness in virtual classrooms, considering the challenges posed by the shift to online education during the COVID-19 pandemic. The proposed solution offers a three-fold approach, including a posture-based attentiveness detection model, drowsiness measurement, and emotion analysis. By utilizing these methods, the aim is to enhance the effectiveness of online pedagogy and improve student engagement and understanding in virtual learning environments.",
			ongoing: false,
			linkText: "View Publication",
			link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=FnJTMswAAAAJ&citation_for_view=FnJTMswAAAAJ:u-x6o8ySG0sC",
			award: "",
		},
		{
			title: "QORAl: Q Learning Based Delivery Optimization for Pharmacies",
			publishDate: "1 July 2020",
			conference: "2020 11th International conference on computing, communication and networking technologies (ICCCNT)",
			cites: "6",
			description:
				"This research work focuses on optimizing home delivery systems in the pharmacy industry, addressing the challenges of order accuracy, delivery speed, and route optimization in a multi-source, multi-destination scenario. It introduces the QORAl algorithm, based on Q-Learning, to efficiently optimize routes with minimal computation time. Additionally, the paper addresses complexities related to the application of e-commerce in healthcare through the implementation of the PharmaQuick ecosystem.",
			ongoing: false,
			linkText: "View Publication",
			link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=FnJTMswAAAAJ&citation_for_view=FnJTMswAAAAJ:u5HHmVD_uO8C",
			award: "",
		},
		{
			title: "MMAP: A Multi-Modal Automated Online Proctor",
			publishDate: "30 September 2021",
			conference: "2021 Machine Learning and Big Data Analytics (ICMLBDA)",
			cites: "0",
			description:
				"This paper addresses the challenge of monitoring students during online examinations in the context of the growing popularity of online education. It proposes a comprehensive five-fold proctoring mechanism based on computer vision techniques, including authentication, head movement, eye motion tracking, speech detection, and object detection. The solution achieves an impressive overall accuracy of 91%, offering a robust approach to mitigate malpractices in online tests.",
			ongoing: false,
			linkText: "View Publication",
			link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=FnJTMswAAAAJ&citation_for_view=FnJTMswAAAAJ:zYLM7Y9cAGgC",
			award: "",
		},
	],

	projects: [
		{
			title: "DataSurge: A Distributed, Real-Time Data Pipeline",
			description:
				"A powerful application for real-time distributed data pipelines. With modular data input and processing utilities, it simplifies handling data from multiple sources seamlessly. Experience the transformative capabilities of streamlined data processing and unlock valuable insights in real-time. Stay tuned for ongoing developments in this project!",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png",
			linkText: "View Project",
			link: "https://github.com/Abhishek-612/Scalable-Real-time-Data-Pipeline",
			ongoing: true,
		},
		
		{
			title: "EyeCanDo It!",
			description:
				"EyeCanDo is a cutting-edge communication platform that empowers people with motor disabilities to communicate using eye gaze and brain-computer interfaces. It utilizes AI, machine learning, and augmented reality on iOS devices (iPad and iPhone) for an accessible and effective communication experience.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/swift/swift.png",
			linkText: "View Project",
			link: "http://eyecando.org/",
			ongoing: true,
		},

		{
			title: "LinkedIn Automated Bot",
			description:
				"Trouble finding opportunities with your dream company? Use this LinkedIn Bot to make meaningful connections with recruiters and employees, gain valuable insights quick and easy! (Limited access)",
			logo: "https://cdn.cdnlogo.com/logos/l/66/linkedin-icon.svg",
			linkText: "View Project",
			link: "https://github.com/Abhishek-612/LinkedIn-Automated-Bot-Public-Access",
			ongoing: false,
		},

		{
			title: "A Lightweight Hypervisor and VM Latency Measurement",
			description:
				"The Lightweight Type 2 Hypervisor is a Linux-based virtualization solution built for Intel VT-x, offering customizable guest code and VM latency measurement capabilities. Explore advanced virtualization techniques and optimize VM performance with this powerful hypervisor.",
			logo: "https://cdn.jsdelivr.net/npm/font-logos@1.0.0/vectors/tux.svg",
			linkText: "View Project",
			link: "https://github.com/Abhishek-612/A-Lightweight-Hypervisor-and-VM-Latency-Measurement",
			ongoing: false,
		},

		{
			title: "NeuroLogic Decoding with LTL Semantics",
			description:
				"NeuroLogic Decoding is an innovative approach to constrained text generation, utilizing standard predicate logic at the decode level. This project aimed to enhance the original algorithm by incorporating a subset of Linear Temporal Logic, specifically the \"until\" connective, as constraints, expanding the capabilities of NeuroLogic Decoding.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/Abhishek-612/CSE538-NLP-Neurologic-Decoding",
			ongoing: false,
		},

		{
			title: "Posture Estimation to gauge Online Attention Span",
			description:
				"Harnessing the power of Pose Detection using OpenPose to estimate attention span during online lectures. By analyzing keypoint data, distances, and angles between points, our innovative solution provides valuable insights into individuals' attentivity levels.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/Abhishek-612/PoseDataExtractor",
			ongoing: false,
		},

		{
			title: "Viral News Prediction",
			description:
				"A project that utilizes advanced web crawling techniques to retrieve up-to-date news and information from credible online sources. By leveraging social media outreach and news agency coverage, it employs predictive analysis to estimate the potential virality of each headline, providing valuable insights into the expected degree of its spread across platforms.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/Abhishek-612/Viral-News-Prediction",
			ongoing: false,
		},
	],
};

export default INFO;
