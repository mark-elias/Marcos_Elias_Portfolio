function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul className="list-disc">
        <li className="ml-5">
          <span className="text-blue-600">Front End:</span> React.js,
          TypeScript, Tailwind CSS
        </li>
        <li className="ml-5">
          <span className="text-blue-600">Full Stack & Back End:</span> Next.js, Node.js,
          Express.js
        </li>
        <li className="ml-5">
          <span className="text-blue-600">Forms & Data Validaiton:</span> React-Hook-Form, Zod, Joi
        </li>
        {/* <li className="ml-5">
          <span className="text-blue-600">React.js & Next.js Ecosystem:</span>{" "}
          React-Hook-Form, Zod, Axios, TanStack Query, React Router, NextAuth
        </li> */}
        {/* <li className="ml-5">
          <span className="text-blue-600">CSS & Styling:</span> Tailwind,
          ChakraUI, Bootstrap, Miligram, DaisyUI
        </li> */}
        <li className="ml-5">
          <span className="text-blue-600">APIs & Data Fetching:</span> REST
          API's, API Development, TanStack Query, Postman, Axios
        </li>
        <li className="ml-5">
          <span className="text-blue-600">Version Control:</span> Git, GitHub
        </li>
        <li className="ml-5">
          <span className="text-blue-600">Databases:</span> MongoDB, mySQL,
          PostgreSQL
        </li>
        <li className="ml-5">
          <span className="text-blue-600">ORMs:</span> Mongoose, Prisma
        </li>
        <li className="ml-5">
          <span className="text-blue-600">Authentication:</span> Clerk, NextAuth
        </li>
        <li className="ml-5">
          <span className="text-blue-600">Deployment & Hosting:</span> Vercel, Render, Hostinger, GitHub Pages
        </li>
        <li className="ml-5 mt-7">
          <span className="text-blue-600">👍 Still want to learn these:</span> Stripe payments, Supabase, Shadcn UI, React Native, Deno, Bun
        </li>
      </ul>
    </section>
  );
}

export default Skills;
