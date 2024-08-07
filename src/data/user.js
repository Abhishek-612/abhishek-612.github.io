import { projectTags, techTags } from "./tags";

const INFO = {
	main: {
		title: "Abhishek's Portfolio",
		name: "Abhishek Revadekar",
		email: "abhirevadekar@gmail.com",
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
		title: "Hey there!",
		description:
			"I'm Abhishek, a passionate student, developer, and dancer. Join me on an exciting journey as we unravel the boundless possibilities of creativity, dive into the depths of technology, and embrace the sheer beauty of life's wonders. Let's embark on an adventure together!",
	},

	articles: {
		title: "Journey Through Time: Unveiling Milestones and Transformative Experiences",
		description:
			"Chronological collection of my most cherished memories and achievements that have been influential in shaping me.",
	},

	research: [
		{
			title: "ARMv8 TEE Security Vulnerabilities and Testing Techniques",
			publishDate: "Ongoing",
			conference: "",
			cites: "",
			description:
				"This is an ongoing research to identify TEE security vulnerabilities and testing techniques in ARMv8 architectures, led by Professor Dongyoon Lee at Stony Brook University. Currently, I have developed an AFL-based fuzzing tool to assess code coverage in the OPTEE kernel. More details soon...",
			ongoing: true,
			linkText: "",
			link: "",
			award: "",

		},
		{
			title: "Bidirectional sign language translation",
			publishDate: "25 June 2021",
			conference: "2021 International Conference on Communication information and Computing Technology (ICCICT)",
			cites: "14",
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
			cites: "7",
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
			cites: "29",
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
			cites: "7",
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
			cites: "3",
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
			// logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/Abhishek-612/DataSurge",
			ongoing: true,
			category: projectTags.APP_DEV,
			tags: [ techTags.PY, techTags.WEB, techTags.FLASK, techTags.REACT, techTags.MONGODB, techTags.KAFKA, techTags.DOCKER ],
		},
		
		{
			title: "EyeCanDo It!",
			description:
				"EyeCanDo is a cutting-edge communication platform that empowers people with motor disabilities to communicate using eye gaze and brain-computer interfaces. It utilizes AI, machine learning, and augmented reality on iOS devices (iPad and iPhone) for an accessible and effective communication experience.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/swift/swift.png",
			linkText: "View Project",
			link: "http://eyecando.org/",
			ongoing: false,
			category: projectTags.APP_DEV,
			tags: [ techTags.IOS, techTags.CV, techTags.C_CPP ],
		},

		{
			title: "LinkedIn Automated Bot",
			description:
				"Trouble finding opportunities with your dream company? Use this LinkedIn Bot to make meaningful connections with recruiters and employees, gain valuable insights quick and easy! (Limited access)",
			logo: "https://cdn.cdnlogo.com/logos/l/66/linkedin-icon.svg",
			linkText: "View Project",
			link: "https://github.com/Abhishek-612/LinkedIn-Automated-Bot-Public-Access",
			ongoing: false,
			category: projectTags.MISC,
			tags: [ techTags.PY, techTags.AUTO ],
		},

		{
			title: "A Lightweight Hypervisor and VM Latency Measurement",
			description:
				"The Lightweight Type 2 Hypervisor is a Linux-based virtualization solution built for Intel VT-x, offering customizable guest code and VM latency measurement capabilities. Explore advanced virtualization techniques and optimize VM performance with this powerful hypervisor.",
			logo: "https://cdn.jsdelivr.net/npm/font-logos@1.0.0/vectors/tux.svg",
			linkText: "View Project",
			link: "https://github.com/Abhishek-612/A-Lightweight-Hypervisor-and-VM-Latency-Measurement",
			ongoing: false,
			category: projectTags.SYSTEMS,
			tags: [ techTags.C_CPP, techTags.LINUX ],
		},

		{
			title: "NeuroLogic Decoding with LTL Semantics",
			description:
				"NeuroLogic Decoding is an innovative approach to constrained text generation, utilizing standard predicate logic at the decode level. This project aimed to enhance the original algorithm by incorporating a subset of Linear Temporal Logic, specifically the \"until\" connective, as constraints, expanding the capabilities of NeuroLogic Decoding.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/Abhishek-612/CSE538-NLP-Neurologic-Decoding",
			ongoing: false,
			category: projectTags.AI_ML,
			tags: [ techTags.PY, techTags.NLP ],
		},
		
		{
			title: "ScribbleNotes",
			description:
				"Don't like typing? No worries, why not write on your phone? You don't even need a stylus, just start scribbling!",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/swift/swift.png",
			linkText: "View Project",
			link: "",
			ongoing: false,
			category: projectTags.APP_DEV,
			tags: [ techTags.IOS, techTags.PY, techTags.CV ],
		},

		{
			title: "Posture Estimation to gauge Online Attention Span",
			description:
				"Harnessing the power of Pose Detection using OpenPose to estimate attention span during online lectures. By analyzing keypoint data, distances, and angles between points, our innovative solution provides valuable insights into individuals' attentivity levels.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/Abhishek-612/PoseDataExtractor",
			ongoing: false,
			category: projectTags.AI_ML,
			tags: [ techTags.PY, techTags.CV ],
		},

		{
			title: "Distributed Movie Ticket Booking System",
			description:
				"A distributed client-server application built using Python, leveraging socket programming and Remote Procedure Call (RPC) mechanism. The system is designed to provide a seamless ticket booking experience for users. It follows a distributed architecture, with multiple servers and a load balancer for efficient handling of user requests. The project utilizes Nginx as the load balancer, ensuring optimal distribution of incoming traffic across three different locations, each equipped with three server ports.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/Abhishek-612/Distributed-Movie-Ticket-Booking-System",
			ongoing: false,
			category: projectTags.APP_DEV,
			tags: [ techTags.PY ],
		},
		
		{
			title: "Viral News Prediction",
			description:
				"A project that utilizes advanced web crawling techniques to retrieve up-to-date news and information from credible online sources. By leveraging social media outreach and news agency coverage, it employs predictive analysis to estimate the potential virality of each headline, providing valuable insights into the expected degree of its spread across platforms.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/Abhishek-612/Viral-News-Prediction",
			ongoing: false,
			category: projectTags.AI_ML,
			tags: [ techTags.PY, techTags.NLP ],
		},
		{
			title: "AFL Fuzzer for OPTEE OS",
			description: "This project is part of the research on fuzzing tools for the Trusted Execution Environment. I have created a fuzz-able version of OPTEE-OS uses the American Fuzzy Lop along with a proxy Trusted Application (TA) for Secure World system call coverage.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/c/c.svg",
			linkText: "View Project",
			link: "https://github.com/SBULeeLab/optee-fuzzer",
			ongoing: false,
			category: projectTags.SYSTEMS,
			tags: [ techTags.C_CPP, techTags.LINUX ],
		},
		{
			title: "OPTEE OS Undefined Behavior Sanitizer Patches",
			description: "An open-source contribution to patch handlers for Undefined Behavior Sanitizer, and 7 other kernel panic bugs!",
			logo: "https://cdn.jsdelivr.net/npm/font-logos@1.0.0/vectors/tux.svg",
			linkText: "View Project",
			link: "https://github.com/Abhishek-612/optee_os",
			ongoing: false,
			category: projectTags.MISC,
			tags: [ techTags.OP_SO, techTags.C_CPP, techTags.LINUX ],
		},
		{
			title: "Few Shot Learning using Vision Transformers to count objects",
			description: "An object counting ML model trained on FSC147 Dataset using Vision Transformers for few-shot learning.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/Abhishek-612",
			ongoing: false,
			category: projectTags.AI_ML,
			tags: [ techTags.PY, techTags.CV ],
		},
		{
			title: "Cyberbully Detection System",
			description: "A web-dashboard with an LSTM backed that analyzez text sentiment in tweets, and classifies if it is a bullying tweet.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/Abhishek-612/Cyberbullying-Detection",
			ongoing: false,
			category: projectTags.APP_DEV,
			tags: [ techTags.PY, techTags.NLP, techTags.WEB ],
		},
		{
			title: "Smart Logistics Optimization with Q Learning",
			description: "A project on  multi-origin, multi-target routing using the custom QORAl algorithm build on Q Learning. The algorithm uses a Q agent in a simulated state space, focusing on penalty reduction in navigational decision-making including adaptability to traffic dynamics.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/Abhishek-612/Delivery-Routing-using-Q-Learning",
			ongoing: false,
			category: projectTags.AI_ML,
			tags: [ techTags.PY, techTags.NLP ],
		},
		{
			title: "OpenCV for iOS",
			description: "A handy tutorial to build OpenCV for iOS, along with a ready-to-use Xcode library (supports iOS 11+).",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/swift/swift.png",
			linkText: "View Project",
			link: "https://github.com/Abhishek-612/OpenCV-for-iOS",
			ongoing: false,
			category: projectTags.MISC,
			tags: [ techTags.OP_SO, techTags.IOS, techTags.CV, techTags.C_CPP ],
		},
		{
			title: "PhraseSwipe Gesture Decoding",
			description: "This is an implementation of PhraseSwipe, a set of BERT and T5 LLMs trained on a simulated phrase-to-gesture dataset for phrase-level gesture typing. The phrase-to-gesture dataset is built from the Yelp Reviews dataset and uses Minimum Jerk Theory to simulate gesture motion on a keyboard.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/Abhishek-612/PhraseSwipe-Gesture-Decoding",
			ongoing: false,
			category: projectTags.AI_ML,
			tags: [ techTags.PY, techTags.NLP ],
		},
		{
			title: "Raft-based Fault Tolerant Key-Value Store",
			description: "A learning project on distributed systems that uses the Raft consensus algorithm in an in-memory key-value store. [ Note - This project was part of the Distributed Systems course, and the repository is kept private in order to avoid plagiarism in future assigments.]",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/cpp/cpp.svg",
			linkText: "View Project",
			link: "https://github.com/Abhishek-612",
			ongoing: false,
			category: projectTags.SYSTEMS,
			tags: [ techTags.C_CPP ],
		},
		{
			title: "Simple Gossip Protocol",
			description: "A simple implementation of the Gossip Protocol, a communication method used in distributed systems to propagate information reliably and efficiently among nodes.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/cpp/cpp.svg",
			linkText: "View Project",
			link: "https://github.com/Abhishek-612/Distributed-Systems/tree/main/gossip-protocol",
			ongoing: false,
			category: projectTags.SYSTEMS,
			tags: [ techTags.C_CPP ],
		},
		{
			title: "Distibuted Hash Tables using Chord Protocol",
			description: "This project is an implementation of a distributed hash table (DHT) using the Chord Protocol. The Chord protocol is a hashing mechanism in structured DHTs that organizes nodes in a circular identifier space and consistent hashing to assign keys to nodes, ensuring balanced load distribution.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/cpp/cpp.svg",
			linkText: "View Project",
			link: "https://github.com/Abhishek-612/Distributed-Systems/tree/main/distributed-hash-tables",
			ongoing: false,
			category: projectTags.SYSTEMS,
			tags: [ techTags.C_CPP ],
		},
		{
			title: "Clock Synchronization in Distributed Network",
			description: "This project is an implementation of the different clock synchronization mechanims in distributed networks. ",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/cpp/cpp.svg",
			linkText: "View Project",
			link: "https://github.com/Abhishek-612/Distributed-Systems/tree/main/clock-synchronization",
			ongoing: false,
			category: projectTags.SYSTEMS,
			tags: [ techTags.C_CPP ],
		},
	],
};

export default INFO;
