import { Outlet, Link } from "@remix-run/react";


export const meta = () => {
    return [
        { title: "blog" },
        { name: "description", content: "Shopify Developer based in morocco" },
    ];
};
export const blogPosts = [
    {
        id: 1,
        title: 'Introduction to JavaScript',
        content: 'JavaScript is a powerful programming language that allows you to add interactivity to your website. In this post, we will cover the basics of JavaScript, including variables, functions, and control structures.',
        date: '2024-02-16',
        author: 'John Doe'
    },
    {
        id: 2,
        title: 'The Power of CSS',
        content: 'CSS is the language of the web, used to style the appearance of web pages. This post will explore how to use CSS to create visually appealing layouts and designs.',
        date: '2024-02-15',
        author: 'Jane Smith'
    },
    {
        id: 3,
        title: 'Understanding React',
        content: 'React is a popular JavaScript library for building user interfaces, particularly single-page applications. We will delve into the core concepts of React, such as components and state management.',
        date: '2024-02-14',
        author: 'John Doe'
    },
    // ... more blog posts
];

export default function Blog() {
    return (
        <>
            <div className="flex">
                <aside className="w-[300px] ring-1 ring-white  left-0 top-0 bg-gray-900 h-full">
                    <ul>
                        {blogPosts.map(blog => {
                            return <Link key={blog.id} to={`/blog/${blog.title.toLowerCase().replaceAll(' ', '-')}`}>
                                <li className="p-4 border-b border-white rounded ">
                                    <h1> {blog.title} </h1>

                                </li>
                            </Link>
                        })}

                    </ul>
                </aside>
                <div className=" max-w-[800px] py-8 mx-auto min-h-screen">
                    <ul className="flex flex-col gap-8 " >
                        <h2 className="text-5xl">Blog Posts</h2>
                        <div className="transition-fade" id="swup">
                            <Outlet />
                        </div>

                    </ul>



                </div>
            </div>
        </>
    );
}
