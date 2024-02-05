import React from 'react';

import { AvatarImage, AvatarFallback, Avatar } from "../ui/avatar";
import { Button } from "../ui/button";

import { LiaPhoneAltSolid } from "react-icons/lia";
import { IoMdContact } from "react-icons/io";

const ContactDetails = () => {
    return (
        <aside className="w-1/4 bg-gray-200">
            <div className="flex flex-col items-center px-4 py-8 border-b bg-white">
                <Avatar className="h-16 w-16">
                    <AvatarImage
                        alt="Amit RG"
                        src="/placeholder.svg?height=80&width=80"
                    />
                    <AvatarFallback>AR</AvatarFallback>
                </Avatar>
                <div className="flex flex-col justify-center items-center">
                    <div className="text-lg font-semibold mt-4">Amit RG</div>
                    <div className="flex justify-center items-center gap-1.5">
                        <div className="p-1 bg-gray-500 rounded-full"></div>
                        <div className="text-sm text-gray-500">Offline</div>
                    </div>
                </div>
                <div className="flex space-x-2 mt-4">
                    <Button variant="outline" className="gap-2 text-gray-700">
                        <LiaPhoneAltSolid className="h-5 w-5" />
                        <span>Call</span>
                    </Button>
                    <Button variant="outline" className="gap-2 text-gray-700">
                        <IoMdContact className="h-5 w-5" />
                        <span>Profile</span>
                    </Button>
                </div>
            </div>
            <div className="m-4 p-6 bg-gray-100 rounded-lg bg-white shadow-md font-bold tracking-wide overflow-x-auto">
                <h2 className="flex flex-col font-semibold text-lg">
                    Customer details
                </h2>
                <div className="flex justify-between items-center gap-1 flex-wrap mt-2">
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="text-sm text-gray-700">amit@richpanel.com</div>
                </div>
                <div className="flex justify-between items-center gap-1 flex-wrap mt-2">
                    <div className="text-sm text-gray-500">First Name</div>
                    <div className="text-sm text-gray-700">Amit</div>
                </div>
                <div className="flex justify-between items-center gap-1 flex-wrap mt-2">
                    <div className="text-sm text-gray-500">Last Name</div>
                    <div className="text-sm text-gray-700">RG</div>
                </div>
                <div className="mt-4 text-[#1E4D91] cursor-pointer hover:underline">
                    View more details
                </div>
            </div>
        </aside>
    )
}

export default ContactDetails