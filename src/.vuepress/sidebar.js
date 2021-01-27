module.exports = {
    blog: {
        "/blog/basic/": [
            {
                title: "算法",
                icon: "info",
                prefix: "algorithm/",
                collapsable: false,
                children: [
                    "",
                    {
                        title: "剑指offer",
                        path: "剑指offer/solution",
                    },
                    {
                        title: "LeetCode",
                        path: "LeetCode/solution",
                    },
                ],
            },
        ],

        // 扫描指定文件夹下的文件
        "/blog/": ["","basic/"],
    },
};
