import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Portfolio() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <header className="p-6 text-center bg-gray-800 shadow">
        <h1 className="text-4xl font-bold">Harshit Kaushal</h1>
        <p className="text-xl text-gray-400">Cloud DevOps Engineer</p>
      </header>

      <main className="p-6 max-w-5xl mx-auto">
        <section className="my-12">
          <h2 className="text-3xl font-semibold mb-4 border-b border-gray-600 pb-2">About Me</h2>
          <p className="text-lg text-gray-300">
            Passionate Cloud DevOps Engineer with experience in Java, Spring Boot, and AWS services.
            Skilled in creating RESTful APIs, deploying infrastructure using Terraform, and automating CI/CD pipelines. 
            Enthusiastic about building scalable and secure cloud solutions.
          </p>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-semibold mb-4 border-b border-gray-600 pb-2">Technical Skills</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
            <li>AWS (EC2, S3, RDS, IAM, VPC)</li>
            <li>Terraform</li>
            <li>CI/CD (CodePipeline, CodeBuild)</li>
            <li>Docker, Kubernetes, Ansible</li>
            <li>Java (Spring Boot)</li>
            <li>Python, Shell Scripting</li>
            <li>Git, GitHub, GitLab</li>
            <li>CloudWatch, ELK Stack</li>
          </ul>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-semibold mb-4 border-b border-gray-600 pb-2">Projects</h2>
          <ul className="text-gray-300">
            <li>
              <a href="https://github.com/Haarshit2" target="_blank" rel="noopener noreferrer" className="underline text-blue-400">
                View all projects on GitHub ↗
              </a>
            </li>
          </ul>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-semibold mb-4 border-b border-gray-600 pb-2">Resume</h2>
          <a href="/HARSHIT_UPDATED_RESUME.pdf" download className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 font-semibold">
            Download Resume
          </a>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-semibold mb-4 border-b border-gray-600 pb-2">Contact</h2>
          <div className="flex gap-6 text-2xl">
            <a href="https://github.com/Haarshit2" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="mailto:harshitkaushal833@gmail.com"><FaEnvelope /></a>
            <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </section>
      </main>

      <footer className="p-4 text-center text-gray-500 text-sm bg-gray-800">
        © {new Date().getFullYear()} Harshit Kaushal. All rights reserved.
      </footer>
    </div>
  );
}
