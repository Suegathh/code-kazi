import './Services.css'

function Services() {
    const posts = [
        {
            imageUrl: 'public/images/photo1.avif',
            title: 'Web Development',
            description: 'We craft responsive and scalable websites and progressive web apps with modern technologies such as HTML5, CSS3, JavaScript (ES6+), and frameworks like Django, Rails, Springboot, Next.js, React, Angular, and Vue.js. Our focus is on ensuring cross-browser compatibility and optimal performance across various devices.',
        },
        {
            imageUrl: 'public/images/photo2.avif',
            title: 'Mobile App Development',
            description: 'We develop user-friendly mobile applications for both iOS and Android platforms using native languages (Java, Swift, Kotlin) or cross-platform frameworks (React Native, Flutter, KMM). We prioritize intuitive UI/UX design, smooth performance, and seamless backend integration.',
        },
        {
            imageUrl: 'public/images/photo3.avif',
            title: 'Custom Software Solutions',
            description: 'We create and design bespoke software solutions to meet specific business needs, ranging from enterprise-level applications to niche market products. Our agile methodology ensures timely delivery and adaptability to changing requirements.',
        },
        {
            imageUrl: 'public/images/photo4.avif',
            title: 'Codebase Maintenance, Support, Upgrade, and Feature Addition',
            description: 'We offer ongoing support and maintenance for existing projects, including bug fixes, performance optimization, and regular updates. We incorporate new features based on user feedback and evolving business objectives to maintain competitiveness.',
        },
        {
            imageUrl: 'public/images/photo5.avif',
            title: 'API Creation/Integration',
            description: 'We enhance functionality through the creation/integration of third-party APIs such as payment gateways, social media platforms, geolocation services, and more. We ensure secure and efficient data exchange between systems.',
        },
        {
            imageUrl: 'public/images/photo6.avif',
            title: 'Security Audits',
            description: 'We conduct professional cybersecurity audits, penetration tests, and vulnerability assessments on sensitive assets in web, mobile apps, systems, and corporate networks. We identify and mitigate security risks, ensure compliance with industry standards, and implement best practices for data protection and network security.',
        },
        {
            imageUrl: 'public/images/photo7.avif',
            title: 'Data Science',
            description: 'We leverage data analysis and machine learning techniques to extract valuable insights from large datasets. We develop predictive models, data visualization, and reporting tools to support data-driven decision-making and strategic planning.',
        },
        {
            imageUrl: 'public/images/photo8.avif',
            title: 'Digital Marketing',
            description: 'We execute comprehensive digital marketing strategies to enhance online presence and drive traffic. Our expertise includes SEO, SEM, social media marketing, content creation, email campaigns, and analytics to optimize marketing efforts and achieve business goals.',
        },
        {
            imageUrl: 'public/images/photo9.avif',
            title: 'Hardware Programming',
            description: 'We design and program embedded systems and IoT devices using microcontrollers (e.g., Arduino, STM32), single-board computers (e.g., Raspberry Pi), and specialized hardware (e.g., Zebra FX9600). Our expertise includes firmware development, sensor integration, real-time operating systems (RTOS), and hardware-software interfacing to create robust and efficient embedded solutions.',
        },
        {
            imageUrl: 'public/images/photo10.avif',
            title: 'DevOps',
            description: 'We implement DevOps practices to streamline the software development lifecycle and improve collaboration between development and operations teams. We utilize tools such as Docker, Kubernetes, Jenkins, and Ansible for continuous integration/continuous deployment (CI/CD), infrastructure as code (IaC), automated testing, and monitoring to ensure reliable and scalable software delivery.',
        },
        {
            imageUrl: 'public/images/photo11.avif',
            title: 'Bulk SMS Solutions',
            description: 'We provide bulk SMS solutions for businesses to communicate effectively with their customers. Our services include SMS gateway integration, automated messaging, campaign management, and analytics. We ensure high delivery rates and offer features such as personalized messaging, scheduling, and two-way communication to enhance customer engagement.',
        },
        {
            imageUrl: 'public/images/photo12.avif',
            title: 'UI/UX Design',
            description: 'We create intuitive and engaging user interfaces and experiences for web and mobile applications. Our UI/UX design process involves user research, wireframing, prototyping, and usability testing. We focus on user-centered design principles to create visually appealing and functional interfaces that enhance user satisfaction and drive engagement.',
        },
        {
            imageUrl: 'public/images/photo13.avif',
            title: 'Product Development',
            description: 'Once the design is complete, we prototype and test the product to ensure that it meets customer needs and is technically feasible. This may involve user testing, functionality testing, and quality assurance. The product is then refined based on the feedback received.',
        },
        {
            imageUrl: 'public/images/photo14.avif',
            title: 'Hiring Designers and Developers',
            description: 'Dedicated Development Center model offered to those customers who are looking for a dedicated resource/s to work on their projects onsite/offsite. The resource will work as per customers’ requirements set for a stipulated time frame decided prior with terms and conditions favorable to both ends.',
        },
        {
            imageUrl: 'public/images/photo15.jpg',
            description: 'We help you communicate complex technical information in a clear and concise manner. We use a variety of tools and techniques to create technical documents, such as user manuals, technical reports, whitepapers, and online help systems.',
        }
    ];
    return (<div className="p-6"> <h2 className="text-3xl font-bold mb-4 text-center">SERVICES</h2> <h3 className="text-2xl text-gray-700 mb-8 text-center">What We Do</h3> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {posts.map((post, index) => (<div key={index} className="bg-white shadow-lg rounded-lg p-6"> <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover rounded-t-lg" /> <div className="mt-4"> <h2 className="text-2xl font-semibold text-black">{post.title}</h2> <p className="text-gray-600 mt-2">{post.description}</p> </div> </div>))} </div> </div>);

}
export default Services