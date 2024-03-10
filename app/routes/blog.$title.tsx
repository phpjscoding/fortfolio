import { blogPosts } from "./blog.js"
import { useLoaderData } from "@remix-run/react";

export const loader = ({ params }) => {
    return params.title
}
export default function BlogPost() {
    const title = useLoaderData()
    let post = blogPosts.find(post => post?.title.toLowerCase().replaceAll(' ', '-') == title)
    return (
        <>
            <h4> {post?.title} </h4>
            <p> {post?.content} </p>
        </>
    )
}