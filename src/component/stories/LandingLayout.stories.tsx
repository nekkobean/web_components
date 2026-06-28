import React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Section } from "../section/Section";
import { Card, CardContent } from "../card";
import { Cfooter } from "../footer/Cfooter";
import { FooterIcon } from "../footer/FooterIcon";
import { FooterContact } from "../footer/FooterContact";
import { FooterBottom } from "../footer/FooterBottom";
import { QuickLink } from "../footer/QuickLink";
import { Icon } from "../header/Icon";
import { LandingLayout } from "./LandingLayout";
import { Cform } from "../form";
import { CheckBox, Select, TextField } from "../input";
import { Button } from "../button";

const meta = {
  component: LandingLayout,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof LandingLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FullPage: Story = {
  args: { 
    logo: "icon.svg",
    companyTitle: "Hello my Sunshin Inchjhjhjhjhj",
    description: "A brief description of the company.",
    email: "hello@qtek.com",
    phone: "+63 900 000 0000",
    navItems: [
      { id: 1, href: "#home", label: "Home" },
      { id: 2, href: "#about", label: "About" },
      { id: 3, href: "#services", label: "Services" },
      { id: 4, href: "#contact", label: "Contact" },
      { id: 5, href: "#hello-world", label: "Hello World" },
    ],

    children: (
      <>
     

        <Section id="home" title="Dashboard" style="bg-gray-100">
          <div className="flex min-h-[70vh] items-center justify-center rounded-2xl bg-white p-10 shadow-md">
            <div className="max-w-2xl text-center">
              <h1 className="mb-4 text-4xl font-bold md:text-6xl">
                Welcome To My Website
              </h1>
              <p className="text-base text-gray-600 md:text-lg">
                A common form of Lorem ipsum...
              </p>
            </div>
          </div>
        </Section>

 
        <Section id="about" title="About Us" style="bg-white">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card><CardContent title="Vision" description="..." /></Card>
            <Card><CardContent title="Mission" description="..." /></Card>
            <Card><CardContent title="Pillars" description="..." /></Card>
          </div>
        </Section>


        <Section id="services" title="Services" style="bg-gray-100">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card><CardContent title="Web Design" description="maganda
            cute
            cuttie" /></Card>
            <Card><CardContent
  title="Education"
  description={
    <div className="whitespace-pre-line">
 {`Polytechnic University of the Philippines – San Pedro Campus
Bachelor of Science in Information Technology
2022 – Present

General Mariano Alvarez Technical High School
Science, Technology, Engineering, and Mathematics (STEM)
2020 – 2022
Graduated with High Honors`}
    </div>
 }
/></Card>
          </div>
        </Section>

        <Section id="contact" title="Contact" style="bg-white">
          <Cform >
               <div className="flex flex-col gap-4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                 <TextField
                   labelText="Name"
                   id="name"
                   type="text"
                   placeholder="Enter your name"
                 />
                 <TextField
                   labelText="Email"
                   id="email"
                   placeholder="Enter your email"
                   type="email"
                 />
                 <Select
                   label="Country"
                   options={[
                     { key: 0, name: "", value: "Select a Country" },
                     { key: 1, name: "option1", value: "Germany" },
                     { key: 2, name: "option2", value: "China" },
                     { key: 3, name: "option3", value: "Iran" },
                   ]}
                 />
                 <CheckBox
                   id="terms"
                   label="Accept Terms & Conditions"
                   helperText="You must accept the terms and conditions to proceed."
                 />
                 <div className="flex justify-end gap-2 mt-2">
                   <Button variant="primary" label="Submit" />
                   <Button variant="secondary" label="Cancel" />
                 </div>
               </div>
             </Cform>
        </Section>

  </>
    ),
  },
};