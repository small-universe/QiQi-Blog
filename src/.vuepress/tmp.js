module.exports = {
    blog: [
        { text: "主页", link: "/", icon: "home" },
        { text: "首页", link: "/blog/home", icon: "blog" },
        {
            text: "基础",
            icon: "basic",
            prefix: "/blog/basic/",
            items: [
                {
                    text: '算法',
                    items: [
                        { text: '快速导航', link: 'algorithm/index' },
                        { text: 'LeetCode', link: 'algorithm/LeetCode/solution' },
                        { text: '剑指offer', link: 'algorithm/剑指offer/solution' },

                    ]
                },
        {
            text: '数据结构',
            items: [
                { text: '快速导航', link: '/structure/' },
            ]
        },
        {
            text: '计算机网络',
            items: [
                { text: '快速导航', link: '/network/' },
            ]
        },
        {
            text: '计算机组成原理',
            items: [
                { text: '快速导航', link: '/composition/' },
            ]
        }
            ],
        },
        {
            text: '后端',
            icon:"",
            items:[
                {
                    text: '编程语言',
                    items: [
                        // { text: 'C/C++', link: '/language/C&C++/' },
                        { text: 'Java', link: '/language/Java/' },
                        { text: 'Python', link: '/language/Python/' },
                        // { text: 'Golang', link: '/language/Golang/' }
                    ]
                },
                {
                    text: 'Spring系列框架',
                    items: [
                        { text: 'Spring Framework', link: '/backframe/Spring Framework/' },
                        { text: 'Spring MVC', link: '/backframe/Spring MVC/' },
                        { text: 'Spring Boot', link: '/backframe/Spring Boot/' },
                        { text: 'Spring Security', link: '/backframe/Spring Security/' }
                    ]
                },
                {
                    text: 'ORM框架',
                    items: [
                        // { text: 'JPA', link: '/backframe/JPA/' },
                        { text: 'MyBatis', link: '/backframe/MyBatis/' },
                        { text: 'MyBatis-Plus', link: '/backframe/MyBatis-Plus/' },
                        // { text: 'Hibernate', link: '/backframe/Hibernate/' }
                    ]
                },
                {
                    text: '生态',
                    items: [
                        // { text: 'Spring Cloud', link: '/ecology/Spring Cloud/' },
                        // { text: 'Hadoop', link: '/ecology/Hadoop/' }
                    ]
                },

            ]
        },
        {
            text: '前端',
            ariaLabel: '了解前端一些知识',
            items: [
                {
                    text: '基础',
                    items: [
                        { text: 'HTML', link: '/language/HTML/' },
                        { text: 'JavaScript', link: '/language/JavaScript/' },
                        { text: 'CSS', link: '/language/CSS/' }
                    ]
                },
                {
                    text: '框架',
                    items: [
                        { text: 'Vue', link: '/webframe/Vue/' },
                        { text: 'React', link: '/webframe/React/' },
                        { text: 'Angular', link: '/webframe/Angular/' }
                    ]
                }
            ]

        },
        {
            text: '数据库',
            ariaLabel: '常用关系和非关系型数据库',
            items: [
                { text: '快速导航', link: '/database/' },
                {
                    text: '关系型数据库',
                    link: '/database/SQL/',
                    items: [
                        { text: 'MySQL', link: '/database/SQL/MySQL/' },
                        { text: 'Oracle', link: '/database/SQL/Oracle/' },
                        // { text: 'SQL Server', link: '/database/SQL/SQL Server/' },
                        // { text: 'PostgreSQL', link: '/database/SQL/PostgreSQL/' },
                    ]
                },
                {
                    text: '非关系型数据库',
                    link: '/database/NoSQL/',
                    items: [
                        { text: 'Redis', link: '/database/NoSQL/Redis/' },
                        // { text: 'MongoDB', link: '/database/NoSQL/MongoDB/' },
                        // { text: 'Druid', link: '/database/NoSQL/Druid/' }
                    ]
                }
            ]
        },
        { text: "开源项目", link: "/docs/home", icon: "opensource" },
    ],
};
